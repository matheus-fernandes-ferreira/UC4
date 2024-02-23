class Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public editora: string,
        public categoria: string,
        public numeroCopias: number) {
    }
    mostrarDados() {
        console.log(`Título: ${this.titulo} \n Autor: ${this.autor} \n Editora: ${this.editora} \n Categoria: ${this.categoria} \n Número de cópias: ${this.numeroCopias} `)
    }
}

class Usuario {
    constructor(
        public nome: string,
        public endereco: any[],
        public telefone: string,
        public historicoEmprestimo: any[]) {
    }
    mostrarDados() {
        console.log(`Nom: ${this.nome} \n Endereço: ${this.endereco} \n Telefone: ${this.telefone} \n Histórico de empréstimos: ${this.historicoEmprestimo}`)
    }
}

class Emprestimo extends Livro {
    constructor(
        titulo: string,
        autor: string,
        editora: string,
        categoria: string,
        numeroCopias: number,
        public dataEmprestimo: Date,
        public dataDevolucao: Date,
        public usuario: Usuario) {
        super(titulo, autor, editora, categoria, numeroCopias)
    }
    mostrarDados() {
        console.log(`Livro: ${this.livro} \n Data de empréstimo: ${this.dataEmprestimo} \n Data de devolução: ${this.dataDevolucao} \n Usuário: ${this.usuario}`)
    }
}

const livro1 = new Livro(
    "O Senhor dos Anéis: A Sociedade do Anel",
    "J.R.R. Tolkien",
    "HarperCollins",
    "Fantasia",
    10
);

livro1.mostrarDados();

const usuario1 = new Usuario(
    "João Silva",
    ["Rua das Flores, 123", "São Paulo", "SP"],
    "(11) 9999-8888",
    []
);

usuario1.mostrarDados();

const dataEmprestimo = new Date();
const dataDevolucao = new Date(dataEmprestimo.getFullYear(), dataEmprestimo.getMonth() + 1, dataEmprestimo.getDate() + 7);

const emprestimo1 = new Emprestimo(
    "O Hobbit",
    "J.R.R. Tolkien",
    "HarperCollins",
    "Fantasia",
    5,
    dataEmprestimo,
    dataDevolucao,
    usuario1
);

emprestimo1.mostrarDados();
