import { Prisma } from "@prisma/client";
import { UserRepository } from "../user-repository";
import { prisma } from "../../../prisma/prisma";

export class PrismaUserRepository implements UserRepository {

    async save(data: Prisma.UserCreateInput) {
        
        const user = await prisma.user.create({data})

        return user
    }
}