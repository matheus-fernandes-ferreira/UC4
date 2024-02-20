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
}
class Despeza {
    despeza;
    categoria;
    constructor(despeza, categoria) {
        this.despeza = despeza;
        this.categoria = categoria;
    }
}
class Receita {
    receita;
    categoria;
    constructor(receita, categoria) {
        this.receita = receita;
        this.categoria = categoria;
    }
}
class RelatorioMensal {
    gastos;
    ganhos;
}
class Planejamento {
    objetivo;
    valor;
    periodo;
}
