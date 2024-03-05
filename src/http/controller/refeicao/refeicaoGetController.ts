import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaRefeicaoRepository } from "../../../repository/prisma/prisma-refeicao-repository";
import { RefeicaoFeita } from "../../../use-cases/refeicao";


export async function refeicaoGetController(request: FastifyRequest, response: FastifyReply) {
    
    const prismarepo = new PrismaRefeicaoRepository()
    const refeicaoRepo = new RefeicaoFeita(prismarepo)

    const all = await refeicaoRepo.getAll()

    return response.send(all)
}