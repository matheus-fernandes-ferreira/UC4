"use strict";
class Livro {
    titulo;
    autor;
    editora;
    categoria;
    numeroCopias;
    constructor(titulo, autor, editora, categoria, numeroCopias) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.categoria = categoria;
        this.numeroCopias = numeroCopias;
    }
    mostrarDados() {
        console.log(`Título: ${this.titulo} \n Autor: ${this.autor} \n Editora: ${this.editora} \n Categoria: ${this.categoria} \n Número de cópias: ${this.numeroCopias} `);
    }
}
class Usuario {
    nome;
    endereco;
    telefone;
    historicoEmprestimo;
    constructor(nome, endereco, telefone, historicoEmprestimo) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.historicoEmprestimo = historicoEmprestimo;
    }
    mostrarDados() {
        console.log(`Nom: ${this.nome} \n Endereço: ${this.endereco} \n Telefone: ${this.telefone} \n Histórico de empréstimos: ${this.historicoEmprestimo}`);
    }
}
class Emprestimo extends Livro {
    dataEmprestimo;
    dataDevolucao;
    usuario;
    constructor(titulo, autor, editora, categoria, numeroCopias, dataEmprestimo, dataDevolucao, usuario) {
        super(titulo, autor, editora, categoria, numeroCopias);
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.usuario = usuario;
    }
    mostrarDados() {
        console.log(`Livro: ${this.livro} \n Data de empréstimo: ${this.dataEmprestimo} \n Data de devolução: ${this.dataDevolucao} \n Usuário: ${this.usuario}`);
    }
}
const livro1 = new Livro("O Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", "HarperCollins", "Fantasia", 10);
livro1.mostrarDados();
const usuario1 = new Usuario("João Silva", ["Rua das Flores, 123", "São Paulo", "SP"], "(11) 9999-8888", []);
usuario1.mostrarDados();
const dataEmprestimo = new Date();
const dataDevolucao = new Date(dataEmprestimo.getFullYear(), dataEmprestimo.getMonth() + 1, dataEmprestimo.getDate() + 7);
const emprestimo1 = new Emprestimo("O Hobbit", "J.R.R. Tolkien", "HarperCollins", "Fantasia", 5, dataEmprestimo, dataDevolucao, usuario1);
emprestimo1.mostrarDados();
