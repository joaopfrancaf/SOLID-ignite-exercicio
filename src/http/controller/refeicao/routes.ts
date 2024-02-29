import { FastifyInstance } from "fastify";
import { refeicaoController } from "./refeicaoController";

export async function refeicaoRoutes(app: FastifyInstance) {
    
    app.post('/refeicao', refeicaoController)
}