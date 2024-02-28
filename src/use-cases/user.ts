import { userRepository } from "../repository/user-repository"

export class user {
    private userRepository : userRepository

    constructor(userRepository: userRepository) {
        this.userRepository = userRepository
    }
}