import { RefeicaoRepository } from "../repository/refeicao-repository";

interface refeicaoRequest {
    id?: number
    name: string
    description: string
    diet: string
    userId: number
}

interface refeicaoDelRequest {
    id: number
}

interface refeicaoResponse {
    refeicao: RefeicaoFeita
}

export class RefeicaoFeita {

    private refeicaoRepository: RefeicaoRepository

    constructor(refeicaoRepository: RefeicaoRepository) {
        this.refeicaoRepository = refeicaoRepository
    }

    async save(data: refeicaoRequest) {
        
        const refeicao = await this.refeicaoRepository.save({
            data: new Date(),
            description: data.description,
            diet: data.diet,
            name: data.name,
            userId: data.userId
        })
 
        return refeicao
    }

    async edit(data: refeicaoRequest) {

        const editRef = await this.refeicaoRepository.edit({
            id: data.id,
            description: data.description,
            diet: data.diet,
            name: data.name
        })

        return editRef
    }

    async delete(data: refeicaoDelRequest ) {

        await this.refeicaoRepository.delete({
            id: data.id
        })
    }

    
}