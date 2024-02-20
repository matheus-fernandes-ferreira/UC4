"use strict";
/*
A Biblioteca Leitura Certa está buscando um desenvolvedor para criar um sistema que gerencie o
acervo de livros, empréstimos e usuários. Abaixo estão os requisitos do sistema:
Cadastro de Livros:
• Detalhes sobre cada livro, incluindo título, autor, editora e categoria.
• Registro da quantidade de cópias disponíveis de cada livro.
Cadastro de Usuários:
• Informações pessoais dos usuários cadastrados na biblioteca, como nome, endereço e telefone.
• Histórico de empréstimos e devoluções de cada usuário.
Empréstimo de Livros:
• Registro de empréstimos realizados, incluindo data de empréstimo, data de devolução e
informações do usuário e do livro emprestado
*/
class Livro {
    titulo;
    author;
    editora;
    categoria;
    numeroCopias;
    constructor(titulo, autor, editora, categoria, numeroCopias) {
        this.titulo = titulo,
            this.author = autor,
            this.editora = editora,
            this.categoria = categoria,
            this.numeroCopias = numeroCopias;
    }
}
class Usuario {
    nome;
    endereco;
    telefone;
    historioEmprestimo;
    constructor(nome, endereco, telefone, historicoEmprestimo) {
        this.nome = nome,
            this.endereco = endereco,
            this.telefone = telefone,
            this.historioEmprestimo = historicoEmprestimo;
    }
}
class RegistroEmprestimo {
    livro;
    dataEmprestimo;
    dataDevolucao;
    usuario;
    constructor(livro, dataEmprestimo, dataDevolucao, usuario) {
        this.livro = livro,
            this.dataEmprestimo = dataEmprestimo,
            this.dataDevolucao = dataDevolucao,
            this.usuario = usuario;
    }
}
//inicializando
const livro1 = new Livro('Harry Potter 12', 'J.K. Rowlling', 'Roco', 'Fantasia', 50);
const usuario1 = new Usuario('Matheus', ['Rua SENAC', 'Natal'], '558499665874', [new Date('2024-1-10'), new Date('2024-2-10')]);
const registro1 = new RegistroEmprestimo(livro1, new Date('2024-1-10'), new Date('2024-2-10'), usuario1);
console.log(livro1);
console.log(usuario1);
console.log(registro1);
