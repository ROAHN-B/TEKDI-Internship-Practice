import {z} from 'zod'

export const usernamevalidation = z
    .string()
    .min(2,"Username must be atlast 2 characters")
    .max(20,"usernaem must no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "USername must not contain special character")

export const signUpSchema = z.object({
    username:usernamevalidation,
    email:z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"password must be at least 8 characters"})
})