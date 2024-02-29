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
}