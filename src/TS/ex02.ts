class Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public editora: string,
        public categoria: string,
        private numeroCopias: number) {
    }
    mostrarDados() {
        console.log(`Informações do livro\n Título: ${this.titulo} \n Autor: ${this.autor} 
        Editora: ${this.editora} \n Categoria: ${this.categoria}
        Número de cópias: ${this.numeroCopias} `)
    }
    getNumCopias(): number {
        return this.numeroCopias
    }
    setNumCopias(numeroCopias: number): void {
        this.numeroCopias = numeroCopias
    }
}

class Usuario {
    constructor(
        public nome: string,
        public endereco: any[],
        public telefone: string,
        private historicoEmprestimo: any[]) {
    }
    mostrarDados() {
        console.log(`Nom: ${this.nome} \n Endereço: ${this.endereco}
        Telefone: ${this.telefone}
        Histórico de empréstimos: ${this.historicoEmprestimo}`)
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
        console.log('Informações do empréstimo')
        super.mostrarDados()
        console.log(`Data de empréstimo: ${this.dataEmprestimo}
        Data de devolução: ${this.dataDevolucao}
        Usuário: ${usuario1.nome})`)
    }
}

const usuario1 = new Usuario(
    "João Silva",
    ["Rua das Flores, 123", "São Paulo", "SP"],
    "(11) 9999-8888",
    []
)
usuario1.mostrarDados();


const livro1 = new Livro(
    "O Senhor dos Anéis: A Sociedade do Anel",
    "J.R.R. Tolkien",
    "HarperCollins",
    "Fantasia",
    10
)

livro1.mostrarDados();

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
)
emprestimo1.mostrarDados();
