import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaRefeicaoRepository } from "../../../repository/prisma/prisma-refeicao-repository";
import { RefeicaoFeita } from "../../../use-cases/refeicao";

export async function refeicaoController(request: FastifyRequest, response: FastifyReply) {

    const refeicaoSchema = z.object({
        name: z.string(),
        description: z.string(),
        diet: z.string()
    })

    const refeicao = refeicaoSchema.parse(request.body)

    const prismaRefeicaoRepository = new PrismaRefeicaoRepository()
    const refeicaoRepository = new RefeicaoFeita(prismaRefeicaoRepository)

    refeicaoRepository.save({
        description: refeicao.description,
        diet: refeicao.diet,
        name: refeicao.name
    })
}