import { AbstractEntity } from "./AbstractEntity";
import { TipoDeLogradouro } from "./TipoDeLogradouro";

export class Cliente extends AbstractEntity {

    nome!: string
    telefone!: string
    email!: string
    cep!: string
    tipoLogradouro!: TipoDeLogradouro
    logradouro!: string
    numResidencia!: string
    bairro!: string
    pontoReferencia!: string

    constructor(){
        super()
    }
}