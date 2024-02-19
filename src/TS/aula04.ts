class Pessoa {
    nome: string;
    cpf: string;
    telefone: string;
    dataNascimento: Date;
    constructor(nome: string, cpf: string, telefone: string, dataNascimento: Date) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
    }
}
var pessoa1 = new Pessoa('Matheus', '012345678910', '3526448541', new Date('2024-2-19'));
console.log(pessoa1)