import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaRefeicaoRepository } from "../../../repository/prisma/prisma-refeicao-repository";
import { RefeicaoFeita } from "../../../use-cases/refeicao";

export async function refeicaoEditController(request: FastifyRequest, response: FastifyReply) {
    
    const editSchema = z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        diet: z.string(),
        userId: z.number()
    })

    const editRefeicao = editSchema.parse(request.body)

    const prismaRefeicaoRepository = new PrismaRefeicaoRepository()
    const refeicaoRepository = new RefeicaoFeita(prismaRefeicaoRepository)

    const refeicaoedit = await refeicaoRepository.edit({
        id: editRefeicao.id,
        description: editRefeicao.description,
        diet: editRefeicao.diet,
        name: editRefeicao.name,
        userId: editRefeicao.userId
    })

    return response.status(201).send({refeicaoedit})
}