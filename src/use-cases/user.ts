import { UserRepository } from "../repository/user-repository"
import { hash } from "bcrypt"


interface UserRequest {
    name: string
    password: string
  }
  
  interface UserResponse {
    user: User
  }

export class User {
    private userRepository : UserRepository

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository
    }

     async save (data: UserRequest) {

      const password_hash = await hash(data.password, 6)

      const user = await this.userRepository.save({
        name: data.name,
        password_hash: password_hash,
      })

      return user

     }

}