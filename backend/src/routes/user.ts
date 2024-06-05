import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { hashPassword, verifyPassword } from '../../utils/hashing'
import { sign } from 'hono/jwt'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    try {
        const exists = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })
        if (exists) {
            return c.status(403)
        }
        const hashedPassword = await hashPassword(body.password)
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: hashedPassword
            }
        })
        console.log(user)
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        console.log(token)
        return c.json({ token })
    } catch (error) {
        console.error(error)
        return c.status(403)
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })
        if (!user) {
            return c.status(403)
        }
        if (!verifyPassword(body.password, user.password)) {
            return c.status(403)
        }
        const token = await sign({ id: user?.id }, c.env.JWT_SECRET)
        return c.json({ token })
    } catch (error) {
        console.error(error)
        return c.status(403)
    }
})
