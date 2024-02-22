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
        Nome: ${this.Nome}\n Endereço: ${this.endereco}\n Telefone: ${this.telefone}\n E-mail: ${this.email}`);
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
        console.log(`saldo atual: ${this.saldo}\n
        Titular: ${this.titular} \n Agência: ${this.agencia}\n Conta Corrente: ${this.contaCorrente}\n
        Histórico de transações: ${this.historicoTransacao}`);
    }
}
class contaCorrente extends Conta {
    contaCorrente;
    constructor(agencia, contaCorrente, titular, saldo, historicoTransacao) {
        super(agencia, titular, saldo, historicoTransacao);
        this.contaCorrente = contaCorrente;
    }
    mostrarDadosContaCorrente() {
        super.mostrarDadosConta();
        console.log(`Conta Corrente: ${this.contaCorrente}`);
    }
}
class contaPoupanca extends Conta {
    operacao;
    constructor(agencia, operacao, titular, saldo, historicoTransacao) {
        super(agencia, titular, saldo, historicoTransacao);
        this.operacao = operacao;
    }
    mostrarDadosPoupanca() {
        super.mostrarDadosConta();
        console.log(`Operação: ${this.operacao}`);
    }
}
class ContaSalario extends contaCorrente {
    empresador;
    constructor(agencia, contaCorrente, titular, saldo, historicoTransacao, empresador) {
        super(agencia, contaCorrente, titular, saldo, historicoTransacao);
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
}
class Receita extends Transacao {
    constructor(valor, data, categoria) {
        super(valor, data, categoria);
    }
    mostrarDadosReceita() {
        console.log(`Receita \n`);
        super.mostrarDadosTransacao();
    }
}
const receita1 = new Receita(100, new Date('2024-5-1'), 'Boleto');
receita1.mostrarDadosReceita();
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
/*inicializando
//criando a primeira conta
const conta1 = new Conta('Matheus Fernandes', 910, '321', '10203040', [])
//criando a primeira transacao
const transacao1 = new Transacao(1000, new Date('2024-2-10'), 'Receita', 'Pix recebido')
//inserindo a transacao no historico
conta1.historicoTransacao.push(transacao1)
const transacao2 = new Transacao(90, new Date('2024-2-12'), 'Despesa', 'Pagamento Boleto')
//inserindo a transacao no historico
conta1.historicoTransacao.push(transacao2)

//criando a primeira meta


//exibir os dados
console.log(conta1.mostrarDados())
console.log(transacao1.mostrarDados())
console.log(transacao2.mostrarDados())
*/ 
