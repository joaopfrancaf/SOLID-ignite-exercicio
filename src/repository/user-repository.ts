import { Prisma, User } from "@prisma/client";

export interface userRepository {
    create(data: Prisma.UserCreateInput): Promise<User>
}