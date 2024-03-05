import { Prisma, RefeicaoFeita } from "@prisma/client";

export interface RefeicaoRepository {
    save(data: Prisma.RefeicaoFeitaUncheckedCreateInput): Promise<RefeicaoFeita>
    edit(data: Prisma.RefeicaoFeitaUncheckedUpdateInput): Promise<RefeicaoFeita>
    delete(id: Prisma.RefeicaoFeitaUncheckedUpdateInput): void
}