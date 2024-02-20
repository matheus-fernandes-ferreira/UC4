class Conta {
    saldo: number;
    tipoConta: string;
    titular: string;
    agencia: string;
    contaCorrente: string;
    historicoTransacao: any[];
    constructor(saldo: number, tipoConta: string, titular: string, agencia: string, contaCorrente: string, historicoTransacao: any[]) {
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.titular = titular;
        this.agencia = agencia;
        this.contaCorrente = contaCorrente;
        this.historicoTransacao = historicoTransacao;
    }
}

class Despeza{
    despeza: number;
    categoria: string;

    constructor(despeza: number, categoria: string){
        this.despeza = despeza;
        this.categoria = categoria;
    }
}

class Receita{
    receita: number;
    categoria: string;

    constructor(receita: number, categoria: string){
        this.receita = receita;
        this.categoria = categoria;
    }
}

class RelatorioMensal{
    gastos: Despeza;
    ganhos: Receita;
}

class Planejamento{
    objetivo: string;
    valor: number;
    periodo: Date
}

