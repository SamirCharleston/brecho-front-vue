import { AbstractEntity } from "./AbstractEntity";
import { Tipo } from "./Tipo";

export class Produto extends AbstractEntity {

    codigo!: string
    nome!: string
    tipo!: string
    cor!: string
    tamanho!: string
    valorAtual!: number
    fotosDoProduto!: string
    descricao!: string
    marca!: string
    disponibilidade!: boolean
    quantidade!: number
    valorAnterior!: number
    emPromocao!: boolean
    quantidadeVendida!: number
}