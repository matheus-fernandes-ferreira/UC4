"use strict";
//criando a classe conta
class Cliente {
    Nome;
    endereco;
    telefone;
    email;
    constructor(Nome, endereco, telefone, email) {
        this.Nome = Nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
    }
    mostrarDadosCliente() {
        console.log(`Dados do cliente:
        Nome: ${this.Nome}\n Endereço: ${this.endereco}
        Telefone: ${this.telefone}\n E-mail: ${this.email}`);
    }
}
class ClientePessoaFisica extends Cliente {
    cpf;
    constructor(Nome, cpf, //atributo especifico da classe
    endereco, telefone, email) {
        super(Nome, endereco, telefone, email);
        this.cpf = cpf;
    }
    mostrarDados() {
        super.mostrarDadosCliente();
        console.log(`CPF: ${this.cpf}`);
    }
}
class clientePessoaJuridica extends Cliente {
    cnpj;
    constructor(nome, cnpj, endereco, telefone, email) {
        super(nome, endereco, telefone, email);
        this.cnpj = cnpj;
    }
    mostrarDadosPessoaJuridica() {
        super.mostrarDadosCliente();
        console.log(`CNPJ: ${this.cnpj}`);
    }
}
class Conta {
    agencia;
    titular;
    saldo;
    historicoTransacao;
    constructor(agencia, titular, saldo, historicoTransacao) {
        this.agencia = agencia;
        this.titular = titular;
        this.saldo = saldo;
        this.historicoTransacao = historicoTransacao;
    }
    mostrarDadosConta() {
        console.log(`saldo atual: ${this.saldo}
        Titular: ${this.titular}
        Agência: ${this.agencia}
        Histórico de transações: ${this.historicoTransacao}`);
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getHistorico() {
        return this.historicoTransacao;
    }
    setHistorico(historicoTransacao) {
        this.historicoTransacao = historicoTransacao;
    }
}
class contaCorrente extends Conta {
    contaCorrente;
    constructor(agencia, titular, saldo, historicoTransacao, contaCorrente) {
        super(agencia, titular, saldo, historicoTransacao);
        this.contaCorrente = contaCorrente;
    }
    mostrarDadosContaCorrente() {
        super.mostrarDadosConta();
        console.log(`Conta Corrente: ${this.contaCorrente}`);
        console.log(`Histórico de transações: ${super.getHistorico}`);
    }
}
class contaPoupanca extends Conta {
    operacao;
    constructor(agencia, titular, saldo, historicoTransacao, operacao) {
        super(agencia, titular, saldo, historicoTransacao);
        this.operacao = operacao;
    }
    mostrarDadosPoupanca() {
        super.mostrarDadosConta();
        console.log(`Saldo: ${super.getSaldo()}\n `);
        console.log(`Operação: ${this.operacao}`);
    }
}
class ContaSalario extends contaCorrente {
    empresador;
    constructor(agencia, titular, saldo, historicoTransacao, contaCorrente, empresador) {
        super(agencia, titular, saldo, historicoTransacao, contaCorrente);
        this.empresador = empresador;
    }
    mostrarDadosContaSalario() {
        super.mostrarDadosContaCorrente();
        console.log(`Empregador: ${this.empresador}`);
    }
}
class Transacao {
    valor;
    data;
    categoria;
    constructor(valor, data, categoria) {
        this.valor = valor;
        this.data = data;
        this.categoria = categoria;
    }
    mostrarDadosTransacao() {
        console.log(`Dados da transação:
        Valor: ${this.valor.toLocaleString("pr-BR", { style: "currency", currency: "BRL" })}\n Data: ${this.data}\n Categoria: ${this.categoria}`);
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
}
class Receita extends Transacao {
    constructor(valor, data, categoria) {
        super(valor, data, categoria);
    }
    mostrarDadosReceita() {
        console.log(`Receita \n 
        Valor: ${super.getValor()}\n 
        Data: ${super.getData()}\n 
        Categoria: ${super.getCategoria()}`);
    }
}
class Despesa extends Transacao {
    constructor(valor, data, categoria) {
        super(valor, data, categoria);
    }
    mostrarDadosDespesa() {
        console.log(`Despesa \n`);
        super.mostrarDadosTransacao();
    }
}
class Planejamento {
    objetivo;
    valor;
    periodo;
    constructor(objetivo, valor, periodo) {
        this.objetivo = objetivo;
        this.valor = valor;
        this.periodo = periodo;
    }
    mostrarDados() {
        console.log(`O dinheiro será poupado para ${this.objetivo}
        Você deverá guardar ${this.valor.toLocaleString("pr-BR", { style: "currency", currency: "BRL" })} reais por mês até ${this.periodo} para atingir sua meta`);
    }
}
//inicializando
const clientePF = new ClientePessoaFisica("João Silva", "12345678900", ["Rua A, 123", "Cidade, Estado"], "(11) 9999-8888", "joaosilva@email.com");
const clientePJ = new clientePessoaJuridica("Empresa X", "12345678901234", ["Rua B, 456", "Cidade, Estado"], "(11) 9876-5432", "empresax@email.com");
clientePJ.mostrarDadosCliente();
const contaCorrente1 = new contaCorrente("0001", "João Silva", 1000.00, [], "123456-7");
contaCorrente1.mostrarDadosContaCorrente();
const contaPoupanca1 = new contaPoupanca("0002", "Maria Oliveira", 500.00, [], "Poupança");
contaPoupanca1.mostrarDadosPoupanca();
const contaSalario1 = new ContaSalario("0003", "Pedro Souza", 2000.00, [], "123456-8", ["Empresa Y"]);
contaSalario1.mostrarDadosContaSalario();
const receita1 = new Receita(500.00, new Date("2024-02-26"), "Salário");
receita1.mostrarDadosReceita();
const despesa1 = new Despesa(200.00, new Date("2024-02-26"), "Supermercado");
despesa1.mostrarDadosDespesa();
const planejamento1 = new Planejamento("Viagem internacional", 10000.00, new Date("2025-12-31"));
planejamento1.mostrarDados();
