import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaUserRepository } from "../../../repository/prisma/prisma-user-repository";
import { User } from "../../../use-cases/user";

export async function userController(request: FastifyRequest, response: FastifyReply) {
    
    const userSchema = z.object({
        name: z.string(),
        password: z.string(),
    })

    const data = userSchema.parse(request.body)

    const prismaRepo = new PrismaUserRepository()

    const user = new User(prismaRepo)

    user.save(data)
}