//criando a classe conta
class Conta {
    titular: string;
    saldo: number;
    agencia: string;
    contaCorrente: string;
    historicoTransacao: any[];
    constructor(titular: string, saldo: number, agencia: string, contaCorrente: string, historicoTransacao: any[]) {
        this.titular = titular;
        this.saldo = saldo;
        this.agencia = agencia;
        this.contaCorrente = contaCorrente;
        this.historicoTransacao = historicoTransacao;
    }
    mostrarDados() {
        console.log(`saldo atual: ${this.saldo}\n
        Titular: ${this.titular} \n Agência: ${this.agencia}\n Conta Corrente: ${this.contaCorrente}\n
        Histórico de transações: ${this.historicoTransacao}`)
    }
}

class Transacao {
    valor: number;
    data: Date;
    categoria: string;
    tipoTransacao: string;
    constructor(valor: number, data: Date, tipoTransacao: string, categoria: string) {
        this.valor = valor;
        this.data = data;
        this.tipoTransacao = tipoTransacao; // receita ou despesa
        this.categoria = categoria;
    }
    mostrarDados() {
        console.log(`Despesas: ${this.valor}\n Data: ${this.data}\n Tipo de transação: 
        ${this.tipoTransacao}\n Categoria: ${ this.categoria }`)
    }
}

class Planejamento {
    objetivo: string;
    valor: number;
    periodo: Date;
    constructor(objetivo: string, valor: number, periodo: Date) {
        this.objetivo = objetivo;
        this.valor = valor
        this.periodo = periodo;
    }
    mostrarDados() {
        console.log(`O dinheiro será poupado para ${ this.objetivo } \n
        Você deverá guardar ${ this.valor } reais por mês até ${ this.periodo } para atingir sua meta`)
    }
}

//inicializando
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