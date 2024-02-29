import { FastifyInstance } from "fastify";
import { refeicaoController } from "./refeicaoController";
import { refeicaoEditController } from "./refeicaoEditController";

export async function refeicaoRoutes(app: FastifyInstance) {
    
    app.post('/refeicao', refeicaoController)
    app.post('/refeicaoedit', refeicaoEditController)
}