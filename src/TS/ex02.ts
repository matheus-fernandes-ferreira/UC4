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

class RegistroEmprestimo {
    constructor(
        public livro: Livro,
        public dataEmprestimo: Date,
        public dataDevolucao: Date,
        public usuario: Usuario) {
    }
    mostrarDados() {
        console.log(`Livro: ${this.livro} \n Data de empréstimo: ${this.dataEmprestimo} \n Data de devolução: ${this.dataDevolucao} \n Usuário: ${this.usuario}`)
    }
}

//inicializando
const livro1 = new Livro('Harry Potter 12', 'J.K. Rowlling', 'Roco', 'Fantasia', 50)
const usuario1 = new Usuario('Matheus', ['Rua SENAC', 'Natal'], '558499665874', [new Date('2024-1-10'), new Date('2024-2-10')])
const registro1 = new RegistroEmprestimo(livro1, new Date('2024-1-10'), new Date('2024-2-10'), usuario1)

console.log(livro1.mostrarDados())
console.log(usuario1.mostrarDados())
console.log(registro1.mostrarDados())