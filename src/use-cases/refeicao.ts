import { RefeicaoRepository } from "../repository/refeicao-repository";

interface refeicaoRequest {
    name: string
    description: string
    diet: string
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
            name: data.name
        })
 
        return refeicao
    }
}