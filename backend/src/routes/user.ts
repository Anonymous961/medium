import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { hashPassword, verifyPassword } from '../../utils/hashing'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from '@anonymous961/medium-common'

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
    console.log("signup working")
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411)
        return c.json({ message: "inputs are incorrect" })
    }
    try {
        const exists = await prisma.user.findFirst({
            where: {
                email: body.username
            }
        })
        if (exists) {
            c.status(403)
            return c.json({ message: "user already exists" })
        }
        const hashedPassword = await hashPassword(body.password)
        const user = await prisma.user.create({
            data: {
                email: body.username,
                password: hashedPassword,
                name: body.name
            }
        })
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
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
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411)
        return c.json({ message: "inputs are incorrect" })
    }
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: body.username
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
