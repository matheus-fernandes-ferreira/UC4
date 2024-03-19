"use strict";
//************** */
//classe abstrata não pode ser instanciada, porém serve como modelo para outras classes
class DadosPessoais {
    nome;
    endereco;
    telefone;
    email;
    cpf;
    dataNascimento;
    genero;
    constructor(nome, endereco, telefone, email, //atributo privado impede que o atributo seja chamado e alterado pelas classes filhas
    cpf, dataNascimento, genero) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
    }
    mostrarDadosPessoais() {
        console.log(`
            Nome: ${this.nome}
            Endereco: ${this.endereco}
            Telefone: ${this.telefone}
            E-mail: ${this.email}
            CPF: ${this.cpf}
            Data de nascimento: ${this.dataNascimento}
            Gênero: ${this.genero}
            `);
    }
    //metodos get e set: utilizado para para pegar e alterar atributos privados
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}
//a classe Funcionario herda atributos da classe DadosPessoais
class Funcionario extends DadosPessoais {
    cargo;
    matricula;
    //método construtor
    constructor(nome, endereco, telefone, email, cpf, dataNascimento, genero, cargo, matricula) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    //método para exibir os dados 
    mostrarDados() {
        super.mostrarDadosPessoais;
        console.log(`Matrícula: ${this.matricula}\n Cargo: ${this.cargo}\n `);
    }
}
//a classe Paciente Herda atributos da classe DadosPessoais
class Paciente extends DadosPessoais {
    idade;
    constructor(nome, endereco, telefone, email, cpf, dataNascimento, genero, idade) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero);
        this.idade = idade;
    }
    mostrardadosPaciente() {
        super.mostrarDadosPessoais();
        console.log(`Informações do paciente:
        CPF: ${this.cpf}
        Idade: ${this.idade}`);
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
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#formFuncionario');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataerrada = document.getElementById('dataNascimento').value; //data com formato americano
            const endereco = document.getElementById('endereco').value;
            const cpf = document.getElementById('cpf').value;
            const genero = document.getElementById('genero').value;
            const cargo = document.getElementById('cargo').value;
            const matricula = document.getElementById('matricula').value;
            const dataNascimento = new Date(dataerrada).toLocaleDateString('pt-br');
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('dataNascimento', dataNascimento);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('genero', genero);
            localStorage.setItem('cargo', cargo);
            localStorage.setItem('matricula', matricula);
            window.location.href = './funcionario.html';
        });
    }
    else {
        console.error('Formulário não encontrado');
    }
});
