import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaRefeicaoRepository } from "../../../repository/prisma/prisma-refeicao-repository";
import { RefeicaoFeita } from "../../../use-cases/refeicao";
import { randomUUID } from "crypto";

export async function refeicaoController(request: FastifyRequest, response: FastifyReply) {

    const refeicaoSchema = z.object({
        name: z.string(),
        description: z.string(),
        diet: z.string(),
        userId: z.number()
    })

    const refeicao = refeicaoSchema.parse(request.body)

    const prismaRefeicaoRepository = new PrismaRefeicaoRepository()
    const refeicaoRepository = new RefeicaoFeita(prismaRefeicaoRepository)

    await refeicaoRepository.save({
        description: refeicao.description,
        diet: refeicao.diet,
        name: refeicao.name,
        userId: refeicao.userId
    })

    return response.status(201).send()
}