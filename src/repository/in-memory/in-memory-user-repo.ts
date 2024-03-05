import { Prisma, User } from "@prisma/client"
import { UserRepository } from "../user-repository"

export class InMemoryUserRepo implements UserRepository {

    public user: User[] = []

    async save (data: Prisma.UserCreateInput) {
        const user = {
            id: 1,
            name: data.name,
            password_hash: data.password_hash,
            sessionId: data.sessionId as string //acredito que aqui não seja o ideal, pois sessionId no banco não pode ser opcional
          }
      
          this.user.push(user)
      
          return user
    }

}