"use strict";
class Pessoa {
    nome;
    cpf;
    telefone;
    dataNascimento;
    constructor(nome, cpf, telefone, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
    }
}
var pessoa1 = new Pessoa('Matheus', '012345678910', '3526448541', new Date('2024-2-19'));
console.log(pessoa1);
