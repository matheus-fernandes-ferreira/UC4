//************** */
//classe abstrata não pode ser instanciada, porém serve como modelo para outras classes
abstract class DadosPessoais {
    constructor(
        public nome: string,
        public endereco: string[],
        public telefone: string,
        private email: string,  //atributo privado impede que o atributo seja chamado e alterado pelas classes filhas
        public cpf: string,
        public dataNascimento: Date,
        public genero: string
    ) { }
    mostrarDadosPessoais() {
        console.log(`
            Nome: ${this.nome}
            Endereco: ${this.endereco}
            Telefone: ${this.telefone}
            E-mail: ${this.email}
            CPF: ${this.cpf}
            Data de nascimento: ${this.dataNascimento}
            Gênero: ${this.genero}
            `)
    }
    //metodos get e set: utilizado para para pegar e alterar atributos privados
    getEmail(): string {
        return this.email
    }
    setEmail(email: string): void {
        this.email = email
    }
}


//a classe Funcionario herda atributos da classe DadosPessoais
class Funcionario extends DadosPessoais {
    //método construtor
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        email: string,
        cpf: string,
        dataNascimento: Date,
        genero: string,
        public cargo: string,
        public matricula: string) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero)
    }
    //método para exibir os dados 
    mostrarDados() {
        super.mostrarDadosPessoais
        console.log(`Matrícula: ${this.matricula}\n Cargo: ${this.cargo}\n `)
    }
}

//a classe Paciente Herda atributos da classe DadosPessoais
class Paciente extends DadosPessoais {
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        email: string,
        cpf: string,
        dataNascimento: Date,
        genero: string,
        public idade: string) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero)
    }
    mostrardadosPaciente() {
        super.mostrarDadosPessoais()
        console.log(`Informações do paciente:
        CPF: ${this.cpf}
        Idade: ${this.idade}`)
    }
}

class Consulta {
    constructor(
        public paciente: Paciente,
        public medico: Funcionario,
        public dataHorario: Date,
        public sala: string,
        public convenio: boolean) {
    }
    mostrarConsulta() {
        console.log(`Informações da consulta \nPaciente ${this.paciente} \n Médico: ${this.medico} \n Data: ${this.dataHorario} \n Sala: ${this.sala} \n Convênio: ${this.convenio} `)
    }
}

document.addEventListener('DOMContentLoaded',
    function () {
        const form = document.querySelector('#formFuncionario');
        if (form) {
            form.addEventListener('submit',
                function (event) {
                    event.preventDefault();

                    const nome = (document.getElementById('nome') as HTMLInputElement).value
                    const email = (document.getElementById('email') as HTMLInputElement).value
                    const telefone = (document.getElementById('telefone') as HTMLInputElement).value
                    const dataerrada = (document.getElementById('dataNascimento') as HTMLInputElement).value    //data com formato americano
                    const endereco = (document.getElementById('endereco') as HTMLInputElement).value
                    const cpf = (document.getElementById('cpf') as HTMLInputElement).value
                    const genero = (document.getElementById('genero') as HTMLSelectElement).value
                    const cargo = (document.getElementById('cargo') as HTMLSelectElement).value
                    const matricula = (document.getElementById('matricula') as HTMLSelectElement).value

                    const dataNascimento = new Date(dataerrada).toLocaleDateString('pt-br')
                    localStorage.setItem('nome', nome)
                    localStorage.setItem('email', email)
                    localStorage.setItem('telefone', telefone)
                    localStorage.setItem('dataNascimento', dataNascimento)
                    localStorage.setItem('endereco', endereco)
                    localStorage.setItem('cpf', cpf)
                    localStorage.setItem('genero', genero)
                    localStorage.setItem('cargo', cargo)
                    localStorage.setItem('matricula', matricula)

                    window.location.href = './funcionario.html'
                });
        } else {
            console.error('Formulário não encontrado')
        }
    }
);
