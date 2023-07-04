import { AbstractEntity } from "./AbstractEntity";
import { Produto } from "./Produto";
import { FormaPagamento } from "./FormaPagamento";
import { Cliente } from "./Cliente";

export class Venda extends AbstractEntity {

    produtos!: Array<Produto>
    cliente!: Cliente
    total!: number
    pagamento!: FormaPagamento
    validacaoPagamento!: boolean
    dataDaEntrega!: Date
    dataDeVenda!: Date
    confirmacaoDaVenda!: boolean
    confirmacaoDaEntrega!: boolean
    trocoDoCliente!: number
    dinheiroFornecidoPeloCliente!: number

    constructor(){
        super()
    }
}