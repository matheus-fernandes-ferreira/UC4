"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = exports.DadosPessoais = void 0;
class DadosPessoais {
    nome;
    endereco;
    telefone;
    email;
    rg;
    dataNascimento;
    constructor(nome, endereco, telefone, email, rg, dataNascimento) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
    }
    mostrarDadosPessoais() {
        console.log(`Dados pessoais: \n Nome: ${this.nome}\n Endereço: ${this.endereco}
Telefone: ${this.telefone}\n E-mail: ${this.email}\n RG: ${this.rg}\n Data de Nascimento: ${this.dataNascimento.toLocaleDateString('pt-br \n')}`);
    }
}
exports.DadosPessoais = DadosPessoais;
//a classe Funcionario herda atributos da classe DadosPessoais
class Funcionario extends DadosPessoais {
    cargo;
    matricula;
    //método construtor
    constructor(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula) {
        super(nome, endereco, telefone, email, rg, dataNascimento);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    //método para exibir os dados 
    mostrarDadosFuncionario() {
        console.log(`Dados do funcionário\n`);
        super.mostrarDadosPessoais();
        console.log(`\nMatrícula: ${this.matricula}\n Cargo: ${this.cargo}\n `);
    }
}
exports.Funcionario = Funcionario;
//a classe Paciente Herda atributos da classe DadosPessoais
class Paciente extends DadosPessoais {
    idade;
    cpf;
    constructor(nome, endereco, telefone, email, rg, dataNascimento, idade, cpf) {
        super(nome, endereco, telefone, email, rg, dataNascimento);
        this.idade = idade;
        this.cpf = cpf;
    }
    mostrardadosPaciente() {
        super.mostrarDadosPessoais();
        console.log(`Informações do paciente:\nCPF: ${this.cpf}\nIdade: ${this.idade}\n`);
    }
}
class Consulta {
    paciente;
    medico;
    dataHorario;
    sala;
    convenio;
    constructor(paciente, medico, dataHorario, sala, convenio) {
        this.paciente = paciente;
        this.medico = medico;
        this.dataHorario = dataHorario;
        this.sala = sala;
        this.convenio = convenio;
    }
    mostrarConsulta() {
        console.log(`Informações da consulta \nPaciente ${this.paciente} \n Médico: ${this.medico} \n Data: ${this.dataHorario} \n Sala: ${this.sala} \n Convênio: ${this.convenio} `);
    }
}
//instanciando
const funcionario01 = new Funcionario("Mariana Oliveira", // Nome
["Avenida Brasil, 789", "Bairro Centro"], // Endereço
"(11) 95678-1234", // Telefone
"mariana.oliveira@email.com", // Email
"01.234.567-8", // RG
new Date("1992-07-15"), // Data de Nascimento
"Clínico Geral", // Cargo
"123456" // Matrícula
);
funcionario01.mostrarDadosFuncionario();
const paciente01 = new Paciente("Pedro Silva", // Nome
["Rua das Acácias, 101", "Bairro Jardim Europa"], // Endereço
"(11) 98765-4321", // Telefone
"pedro.silva@email.com", // Email
"23.456.789-0", // RG
new Date("1985-03-08"), // Data de Nascimento
"38 anos", // Idade
"456.789.012-34" // CPF
);
paciente01.mostrardadosPaciente();
const consulta01 = new Consulta(paciente01, funcionario01, new Date("2024-03-14T10:00:00"), // Data e hora da consulta
"Sala 3", // Sala da consulta
true // Convênio
);
consulta01.mostrarConsulta();
