import { Prisma, User } from "@prisma/client";

export interface UserRepository {
    save(data: Prisma.UserCreateInput): Promise<User>
}