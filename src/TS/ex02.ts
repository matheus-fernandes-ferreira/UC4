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

    constructor( titulo: string, autor: string, editora: string, categoria: string){
        this.titulo = titulo,
        this.author = autor,
        this.editora = editora,
        this.categoria = categoria
    }
}
