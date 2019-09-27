// suponha que tenhamos entidades de bancos de dados e para cada uma delas
// conjuntos de operações de entrada e saída, com seus respectivos

export namespace Usuario {
    
    export class EntradaOperacaoFiltrar {
        nome: string
        dataCadastro:Date
    }

    export class SaidaOperacaoFiltrar {
        lista:{
            nome:string
            email: string
        }[]
    }
}

export namespace Pedido {
    export class EntradaOperacaoFiltrar {

    }

    export class SaidaOperacaoFiltrar {

    }
}