import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaRefeicaoRepository } from "../../../repository/prisma/prisma-refeicao-repository";
import { RefeicaoFeita } from "../../../use-cases/refeicao";

export async function refeicaoDelController(request: FastifyRequest, response: FastifyReply) {
    
    const delSchema = z.object({
        id: z.number()
    })

    const { id } = delSchema.parse(request.body)

    const prismaRefeicaoRepository = new PrismaRefeicaoRepository()
    const refeicaoRepository = new RefeicaoFeita(prismaRefeicaoRepository)

    refeicaoRepository.delete({
        id: id
    })
}