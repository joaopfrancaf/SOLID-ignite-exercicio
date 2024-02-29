import { Prisma, PrismaClient } from "@prisma/client";
import {RefeicaoRepository} from "../refeicao-repository"
import {prisma} from "../../../prisma/prisma"

export class PrismaRefeicaoRepository implements RefeicaoRepository {

    async save (data: Prisma.RefeicaoFeitaCreateInput) {

        const refeicao = await prisma.refeicaoFeita.create({
            data
        })

        return refeicao
    }

    async edit (data: Prisma.RefeicaoFeitaUncheckedCreateInput) {

        const editedRefeicao =  await prisma.refeicaoFeita.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                description: data.description,
                diet: data.diet
            }
        })

        return editedRefeicao
    }
}