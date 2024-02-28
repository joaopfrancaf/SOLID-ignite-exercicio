import { FastifyInstance } from "fastify";
import { userController } from "../user/userController";

export async function userRoutes(app:FastifyInstance) {
    
    app.post("/user", userController)
}