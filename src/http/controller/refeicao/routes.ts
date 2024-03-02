import { FastifyInstance } from "fastify";
import { refeicaoController } from "./refeicaoController";
import { refeicaoEditController } from "./refeicaoEditController";
import { refeicaoDelController } from "./refeicaoDelController";

export async function refeicaoRoutes(app: FastifyInstance) {
    
    app.post('/refeicao', refeicaoController)
    app.post('/refeicaoedit', refeicaoEditController)
    app.delete('/refeicaodelete', refeicaoDelController)
}