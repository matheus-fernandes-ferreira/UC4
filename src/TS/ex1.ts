export class DadosPessoais {
    constructor(
        public nome: string,
        public endereco: string[],
        public telefone: string,
        public email: string,
        public rg: string,
        public dataNascimento: Date) {
    }
    mostrarDadosPessoais() {
        console.log(`Dados pessoais: \n Nome: ${this.nome}\n Endereço: ${this.endereco}
Telefone: ${this.telefone}\n E-mail: ${this.email}\n RG: ${this.rg}\n Data de Nascimento: ${this.dataNascimento.toLocaleDateString('pt-br \n')}`)
    }
}

//a classe Funcionario herda atributos da classe DadosPessoais
export class Funcionario extends DadosPessoais {
    //método construtor
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        email: string,
        rg: string,
        dataNascimento: Date,
        public cargo: string,
        public matricula: string) {
        super(nome, endereco, telefone, email, rg, dataNascimento)
    }
    //método para exibir os dados 
    mostrarDadosFuncionario() {
        console.log(`Dados do funcionário\n`)
        super.mostrarDadosPessoais()
        console.log(`\nMatrícula: ${this.matricula}\n Cargo: ${this.cargo}\n `)
    }
}


//a classe Paciente Herda atributos da classe DadosPessoais
class Paciente extends DadosPessoais {
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        email: string,
        rg: string,
        dataNascimento: Date,
        public idade: string,
        public cpf: string) {
        super(nome, endereco, telefone, email, rg, dataNascimento)
    }
    mostrardadosPaciente() {
        super.mostrarDadosPessoais()
        console.log(`Informações do paciente:\nCPF: ${this.cpf}\nIdade: ${this.idade}\n`)
    }
}


class Consulta {

    constructor(
        public paciente: Paciente,
        public medico: Funcionario,
        public dataHorario: Date,
        public sala: string,
        public convenio: boolean) {
    }
    mostrarConsulta() {
        console.log(`Informações da consulta \nPaciente ${this.paciente} \n Médico: ${this.medico} \n Data: ${this.dataHorario} \n Sala: ${this.sala} \n Convênio: ${this.convenio} `)
    }
}

//instanciando
const funcionario01 = new Funcionario(
    "Mariana Oliveira", // Nome
    ["Avenida Brasil, 789", "Bairro Centro"], // Endereço
    "(11) 95678-1234", // Telefone
    "mariana.oliveira@email.com", // Email
    "01.234.567-8", // RG
    new Date("1992-07-15"), // Data de Nascimento
    "Clínico Geral", // Cargo
    "123456" // Matrícula
)

funcionario01.mostrarDadosFuncionario()

const paciente01 = new Paciente(
    "Pedro Silva", // Nome
    ["Rua das Acácias, 101", "Bairro Jardim Europa"], // Endereço
    "(11) 98765-4321", // Telefone
    "pedro.silva@email.com", // Email
    "23.456.789-0", // RG
    new Date("1985-03-08"), // Data de Nascimento
    "38 anos", // Idade
    "456.789.012-34" // CPF
)

paciente01.mostrardadosPaciente()

const consulta01 = new Consulta(
    paciente01,
    funcionario01,
    new Date("2024-03-14T10:00:00"), // Data e hora da consulta
    "Sala 3", // Sala da consulta
    true // Convênio
  )
  
  consulta01.mostrarConsulta()