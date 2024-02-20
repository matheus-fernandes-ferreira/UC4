"use strict";
class Conta {
    saldo;
    tipoConta;
    titular;
    agencia;
    contaCorrente;
    historicoTransacao;
    constructor(saldo, tipoConta, titular, agencia, contaCorrente, historicoTransacao) {
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
        Histórico de transações: ${this.historicoTransacao}`);
    }
}
class Despeza {
    despeza;
    categoria;
    constructor(despeza, categoria) {
        this.despeza = despeza;
        this.categoria = categoria;
    }
    mostrarDados() {
        console.log(`Despezas: ${this.despeza}\n Categoria: ${this.categoria}`);
    }
}
class Receita {
    receita;
    categoria;
    constructor(receita, categoria) {
        this.receita = receita;
        this.categoria = categoria;
    }
    mostrarDados() {
        console.log(`Receitas: ${this.receita}\n Categoria: ${this.categoria}`);
    }
}
class RelatorioMensal {
    gastos;
    ganhos;
    constructor(gastos, ganhos) {
        this.ganhos = ganhos;
        this.gastos = gastos;
    }
    mostrarDados() {
        console.log(`Ganhos do mês: ${this.ganhos}\n Gastos do mês: ${this.gastos} }`);
    }
}
class Planejamento {
    objetivo;
    valor;
    periodo;
    constructor(objetivo, valor, periodo) {
    }
}
