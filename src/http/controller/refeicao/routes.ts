import { FastifyInstance } from "fastify";
import { refeicaoController } from "./refeicaoController";
import { refeicaoEditController } from "./refeicaoEditController";
import { refeicaoDelController } from "./refeicaoDelController";
import { refeicaoGetController } from "./refeicaoGetController";

export async function refeicaoRoutes(app: FastifyInstance) {
    
    app.post('/refeicao', refeicaoController)
    app.put('/refeicaoedit', refeicaoEditController)
    app.delete('/refeicaodelete', refeicaoDelController)
    app.get("/refeicaoGetall", refeicaoGetController)
}