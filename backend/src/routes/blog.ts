import { createBlogInput, updateBlogInput } from '@anonymous961/medium-common'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono"
import { verify } from "hono/jwt"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string,

    }
}>()

blogRouter.use(async (c, next) => {
    const jwt = c.req.header('Authorization') || "";
    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    c.set('userId', payload.id);
    await next()
});

blogRouter.get('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const posts = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return c.json(posts)
    } catch (error) {
        console.error(error)
        return c.status(403)
    }
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411)
        return c.json({ message: "inputs are incorrect" })
    }
    const userId = c.get("userId")
    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            },
        })
        return c.json(blog)
    } catch (error) {
        console.error(error)
        return c.status(403)
    }
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    console.log(body)
    const { success, error } = updateBlogInput.safeParse(body); //authorId to UUID
    if (!success) {
        console.error(error)
        c.status(411)
        return c.json({ message: "inputs are incorrect" })
    }
    const userId = c.get("userId")
    try {
        const blog = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            },
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })

        return c.json(blog)
    } catch (error) {
        console.error(error)
        return c.status(403)
    }
})
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const id = c.req.param('id');
    try {
        const blog = await prisma.post.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        if (!blog) {
            c.status(403);
            return c.json({ error: 'blog not found' })
        }
        return c.json(blog)
    } catch (error) {
        console.error(error)
        return c.status(403)
    }
})