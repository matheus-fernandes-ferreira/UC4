//criando a classe conta
abstract class Cliente {
    constructor(
        public Nome: string,
        public endereco: string[],
        public telefone: string,
        public email: string) {
    }
    mostrarDadosCliente() {
        console.log(`Dados do cliente:
        Nome: ${this.Nome}\n Endereço: ${this.endereco}
        Telefone: ${this.telefone}\n E-mail: ${this.email}`)
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

abstract class Conta {
    constructor(
        protected agencia: string,
        protected titular: string,
        private saldo: number,
        private historicoTransacao: any[]) {
    }
    mostrarDadosConta() {
        console.log(`saldo atual: ${this.saldo}
        Titular: ${this.titular}
        Agência: ${this.agencia}
        Histórico de transações: ${this.historicoTransacao}`)
    }
    getSaldo(){
        return this.saldo
    }
    setSaldo(saldo: number): void{
        this.saldo = saldo
    }
    getHistorico(){
        return this.historicoTransacao
    }
    setHistorico(historicoTransacao: any[]): void{
        this.historicoTransacao = historicoTransacao
    }
}

class contaCorrente extends Conta {
    constructor(
        agencia: string,
        titular: string,
        saldo: number,
        historicoTransacao: any[],
        public contaCorrente: string) {
        super(agencia, titular, saldo, historicoTransacao)
    }
    mostrarDadosContaCorrente() {
        super.mostrarDadosConta()
        console.log(`Conta Corrente: ${this.contaCorrente}`)
        console.log(`Histórico de transações: ${super.getHistorico}`)
    }
}

class contaPoupanca extends Conta {
    constructor(
        agencia: string,
        titular: string,
        saldo: number,
        historicoTransacao: any[],
        public operacao: string,) {
        super(agencia, titular, saldo, historicoTransacao)
    }
    mostrarDadosPoupanca() {
        super.mostrarDadosConta()
        console.log(`Saldo: ${super.getSaldo()}\n `)
        console.log(`Operação: ${this.operacao}`)
    }
}

class ContaSalario extends contaCorrente {
    constructor(
        agencia: string,
        titular: string,
        saldo: number,
        historicoTransacao: any[],
        contaCorrente: string,
        public empresador: string[]) {
        super(agencia, titular, saldo, historicoTransacao, contaCorrente, )
    }
    mostrarDadosContaSalario() {
        super.mostrarDadosContaCorrente()
        console.log(`Empregador: ${this.empresador}`)
    }
}

abstract class Transacao {
    constructor(
        private valor: number,
        private data: Date,
        private categoria: string) {
    }
    mostrarDadosTransacao() {
        console.log(`Dados da transação:
        Valor: ${this.valor.toLocaleString("pr-BR", { style: "currency", currency: "BRL" })}\n Data: ${this.data}\n Categoria: ${this.categoria}`)
    }
    getValor(){
        return this.valor
    }
    setValor(valor: number): void{
        this.valor = valor        
    }
    getData(){
        return this.data
    }
    setData(data: Date): void{
        this.data = data      
    }
    getCategoria(){
        return this.categoria
    }
    setCategoria(categoria: string): void{
        this.categoria = categoria        
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
        console.log(`Receita \n 
        Valor: ${super.getValor()}\n 
        Data: ${super.getData()}\n 
        Categoria: ${super.getCategoria()}`)
    }
}



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
        Você deverá guardar ${this.valor.toLocaleString("pr-BR", { style: "currency", currency: "BRL" })} reais por mês até ${this.periodo} para atingir sua meta`)
    }
}

//inicializando
const clientePF = new ClientePessoaFisica(
    "João Silva",
    "12345678900",
    ["Rua A, 123", "Cidade, Estado"],
    "(11) 9999-8888",
    "joaosilva@email.com",
  );

  const clientePJ = new clientePessoaJuridica(
    "Empresa X",
    "12345678901234",
    ["Rua B, 456", "Cidade, Estado"],
    "(11) 9876-5432",
    "empresax@email.com",
  );
  
  clientePJ.mostrarDadosCliente();

  const contaCorrente1 = new contaCorrente(
    "0001",
    "João Silva",
    1000.00,
    [],
    "123456-7",
  );
  contaCorrente1.mostrarDadosContaCorrente();


const contaPoupanca1 = new contaPoupanca(
  "0002",
  "Maria Oliveira",
  500.00,
  [],
  "Poupança",
);

contaPoupanca1.mostrarDadosPoupanca();

const contaSalario1 = new ContaSalario(
    "0003",
    "Pedro Souza",
    2000.00,
    [],
    "123456-8",
    ["Empresa Y"],
  );
  
  contaSalario1.mostrarDadosContaSalario();

  const receita1 = new Receita(
    500.00,
    new Date("2024-02-26"),
    "Salário",
  );
  
  receita1.mostrarDadosReceita();

  const despesa1 = new Despesa(
    200.00,
    new Date("2024-02-26"),
    "Supermercado",
  );
  
  despesa1.mostrarDadosDespesa();

  const planejamento1 = new Planejamento(
    "Viagem internacional",
    10000.00,
    new Date("2025-12-31"),
  );
  
  planejamento1.mostrarDados();

