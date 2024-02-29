import { Prisma, RefeicaoFeita } from "@prisma/client";

export interface RefeicaoRepository {
    save(data: Prisma.RefeicaoFeitaCreateInput): Promise<RefeicaoFeita> 
}