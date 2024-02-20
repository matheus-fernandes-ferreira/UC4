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
    titulo: string;
    author: string;
    editora: string;
    categoria: string;
    numeroCopias: number;

    constructor(titulo: string, autor: string, editora: string, categoria: string, numeroCopias: number) {
        this.titulo = titulo,
            this.author = autor,
            this.editora = editora,
            this.categoria = categoria,
            this.numeroCopias = numeroCopias
    }
    mostrarDados(){
        console.log(`Título: ${this.titulo} \n Autor: ${this.author} \n Editora: ${this.editora} \n Categoria: ${this.categoria} \n Número de cópias: ${this.numeroCopias} `)
    }
}


class Usuario {
    nome: string;
    endereco: any[];
    telefone: string;
    historioEmprestimo: any[];

    constructor(nome: string, endereco: any[], telefone: string, historicoEmprestimo: any[]) {
        this.nome = nome,
            this.endereco = endereco,
            this.telefone = telefone,
            this.historioEmprestimo = historicoEmprestimo
    }
    mostrarDados(){
        console.log(`Nom: ${this.nome} \n Endereço: ${this.endereco} \n Telefone: ${this.telefone} \n Histórico de empréstimos: ${this.historioEmprestimo}`)
    }
}

class RegistroEmprestimo {
    livro: Livro;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    usuario: Usuario;

    constructor(livro: Livro, dataEmprestimo: Date, dataDevolucao: Date, usuario: Usuario) {
        this.livro = livro,
            this.dataEmprestimo = dataEmprestimo,
            this.dataDevolucao = dataDevolucao,
            this.usuario = usuario
    }
    mostrarDados(){
        console.log(`Livro: ${this.livro} \n Data de empréstimo: ${this.dataEmprestimo} \n Data de devolução: ${this.dataDevolucao} \n Usuário: ${this.usuario}`)
    }
}

//inicializando
const livro1 = new Livro('Harry Potter 12', 'J.K. Rowlling', 'Roco', 'Fantasia', 50)
const usuario1 = new Usuario('Matheus', ['Rua SENAC', 'Natal'],'558499665874', [new Date('2024-1-10'), new Date('2024-2-10')])
const registro1 = new RegistroEmprestimo(livro1, new Date('2024-1-10'), new Date('2024-2-10'), usuario1)

console.log(livro1.mostrarDados())
console.log(usuario1.mostrarDados())
console.log(registro1.mostrarDados())