import { AbstractEntity } from "./AbstractEntity";
import { Genero } from "./Genero";
import { Estacao } from "./Estacao";

export class Tipo extends AbstractEntity {
    genero!: Genero
    tipoVestuario!: string
    estacao!: Estacao
}