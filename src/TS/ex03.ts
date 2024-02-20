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
    mostrarDados() {
        console.log(`saldo atual: ${this.saldo}\n Tipo de conta: ${this.tipoConta}\n
        Titular: ${this.titular} \n Agência: ${this.agencia}\n Conta Corrente: ${this.contaCorrente}\n
        Histórico de transações: ${this.historicoTransacao}`)
    }
}

class Despeza {
    despeza: any[];
    categoria: string

    constructor(despeza: any[], categoria: string) {
        this.despeza = despeza;
        this.categoria = categoria;
    }
    mostrarDados() {
        console.log(`Despezas: ${this.despeza}\n Categoria: ${this.categoria}`)
    }
}

class Receita {
    receita: number;
    categoria: string;

    constructor(receita: number, categoria: string) {
        this.receita = receita;
        this.categoria = categoria;
    }
    mostrarDados() {
        console.log(`Receitas: ${this.receita}\n Categoria: ${this.categoria}`)
    }
}

class RelatorioMensal {
    gastos: Despeza;
    ganhos: Receita;

    constructor(gastos: Despeza, ganhos: Receita) {
        this.ganhos = ganhos;
        this.gastos = gastos
    }
    mostrarDados() {
        console.log(`Ganhos do mês: ${this.ganhos}\n Gastos do mês: ${this.gastos} }`)
    }
}

class Planejamento {
    objetivo: string;
    valor: number;
    periodo: Date;
    constructor(objetivo: string, valor: number,periodo: Date){

    }
}

