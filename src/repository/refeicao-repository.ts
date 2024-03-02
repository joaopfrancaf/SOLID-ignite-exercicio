import { Prisma, RefeicaoFeita } from "@prisma/client";

export interface RefeicaoRepository {
    save(data: Prisma.RefeicaoFeitaCreateInput): Promise<RefeicaoFeita>
    edit(data: Prisma.RefeicaoFeitaUncheckedUpdateInput): Promise<RefeicaoFeita>
    delete(id: Prisma.RefeicaoFeitaUncheckedUpdateInput): void
}