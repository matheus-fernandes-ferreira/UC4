//criando a classe conta
class Cliente {
    constructor(
        public Nome: string,
        public endereco: string[],
        public telefone: string,
        public email: string) {
    }
    mostrarDadosCliente() {
        console.log(`Dados do cliente:
        Nome: ${this.Nome}\n Endereço: ${this.endereco}\n Telefone: ${this.telefone}\n E-mail: ${this.email}`)
    }
}


class ClientePessoaFisica extends Cliente {
    constructor(
        Nome: string,
        public cpf: string, //atributo especifico da classe
        endereco: string[],
        telefone: string,
        email: string) {
        super(Nome, endereco, telefone, email)
    }
    mostrarDados() {
        super.mostrarDadosCliente()
        console.log(`CPF: ${this.cpf}`)
    }
}

class clientePessoaJuridica extends Cliente {
    constructor(
        nome: string,
        public cnpj: string,
        endereco: string[],
        telefone: string,
        email: string) {
        super(nome, endereco, telefone, email)
    }
    mostrarDadosPessoaJuridica() {
        super.mostrarDadosCliente()
        console.log(`CNPJ: ${this.cnpj}`)
    }
}

class Conta {
    constructor(
        public agencia: string,
        public titular: string,
        public saldo: number,
        public historicoTransacao: any[]) {
    }
    mostrarDadosConta() {
        console.log(`saldo atual: ${this.saldo}\n
        Titular: ${this.titular} \n Agência: ${this.agencia}\n Conta Corrente: ${this.contaCorrente}\n
        Histórico de transações: ${this.historicoTransacao}`)
    }
}
class contaCorrente extends Conta {
    constructor(
        agencia: string,
        public contaCorrente: string,
        titular: string,
        saldo: number,
        historicoTransacao: any[]) {
        super(agencia, titular, saldo, historicoTransacao)
    }
    mostrarDadosContaCorrente() {
        super.mostrarDadosConta()
        console.log(`Conta Corrente: ${this.contaCorrente}`)
    }
}

class contaPoupanca extends Conta {
    constructor(
        agencia: string,
        public operacao: string;
        titular: string,
        saldo: number,
        historicoTransacao: any[]) {
        super(agencia, titular, saldo, historicoTransacao)
    }
    mostrarDadosPoupanca() {
        super.mostrarDadosConta()
        console.log(`Operação: ${this.operacao}`)
    }
}

class ContaSalario extends contaCorrente {
    constructor(
        agencia: string,
        contaCorrente: string,
        titular: string,
        saldo: number,
        historicoTransacao: any[],
        public empresador: string[]) {
        super(agencia, contaCorrente, titular, saldo, historicoTransacao)
    }
    mostrarDadosContaSalario() {
        super.mostrarDadosContaCorrente()
        console.log(`Empregador: ${this.empresador}`)
    }
}

class Transacao {
    constructor(
        public valor: number,
        public data: Date,
        public categoria: string) {
    }
    mostrarDadosTransacao() {
        console.log(`Dados da transação:
        Valor: ${this.valor.toLocaleString("pr-BR",{style:"currency",currency:"BRL"})}\n Data: ${this.data}\n Categoria: ${this.categoria}`)
    }
}

class Receita extends Transacao {
    constructor(
        valor: number,
        data: Date,
        categoria: string,) {
        super(valor, data, categoria)
    }
    mostrarDadosReceita() {
        console.log(`Receita \n`)
        super.mostrarDadosTransacao()
    }
}

const receita1 = new Receita(100, new Date('2024-5-1'), 'Boleto') 
receita1.mostrarDadosReceita()

class Despesa extends Transacao {
    constructor(
        valor: number,
        data: Date,
        categoria: string) {
        super(valor, data, categoria)
    }
    mostrarDadosDespesa() {
        console.log(`Despesa \n`)
        super.mostrarDadosTransacao()
    }
}

class Planejamento {
    constructor(
        public objetivo: string,
        public valor: number,
        public periodo: Date) {
    }
    mostrarDados() {
        console.log(`O dinheiro será poupado para ${this.objetivo}
        Você deverá guardar ${this.valor.toLocaleString("pr-BR",{style:"currency",currency:"BRL"})} reais por mês até ${this.periodo} para atingir sua meta`)
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