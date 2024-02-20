class Funcionario {
    nome: string;
    telefone: string;
    email: string;
    cargo: string;
    dataNascimento: Date;
    //método construtor
    constructor(nome: string, telefone: string, dataNascimento: Date, email: string, cargo: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cargo = cargo;
        this.dataNascimento = dataNascimento;
    }
    //método para exibir os dados ao usuario
    mostrarDados() {
        console.log(`Dados do funcionário \n Nome: ${this.nome}\n Telefone: ${this.telefone} \n E-mail: ${this.email} \n Cargo: ${this.cargo} \n
        Data de Nascimento: ${this.dataNascimento.toLocaleString('pt-br')}`)
    }
}
//instanciando
const funcionario1 = new Funcionario('Matheus', '84789541221', new Date('1900-2-12'), 'matheus@gmail.com', 'desenvolvedor')
console.log(funcionario1.mostrarDados())


class Consulta {
    paciente: Paciente;
    medico: Funcionario;
    dataHorario: Date;
    sala: string;
    convenio: boolean;

    constructor(paciente: Paciente, medico: Funcionario, dataHorario: Date, sala: string, convenio: boolean) {
        this.paciente = paciente;''
            this.medico = medico;
            this.dataHorario = dataHorario;
            this.sala = sala;
            this.convenio = convenio;
    }
   mostrarConsulta(){
        console.log(`Paciente ${this.paciente} \n Médico: ${this.medico} \n Data: ${this.dataHorario} \n Sala: ${this.sala} \n Convênio: ${this.convenio} `)
    }
}

class Paciente {
    nome: string;
    idade: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string

    constructor(nome: string, idade: string, cpf: string, telefone: string, email: string, endereco: string) {
        this.nome = nome,
            this.idade = idade,
            this.cpf = cpf,
            this.telefone = telefone,
            this.email = email,
            this.endereco = endereco
    }
    mostrardadosPaciente(){
        console.log(`Nome: ${this.nome} \n Idade: ${this.idade} \n CPF: ${this.cpf} \n Teleofne: ${this.telefone} \n E-mail: ${this.email} \n Endereço: ${this.endereco}`)
    }
}


const paciente1 = new Paciente('Valtemir', '30', '012345678910', '8498774566', 'vlimap@g.com', 'Zona Norte')
console.log(funcionario1.mostrarDados)

//instanciando
const coconsulta1 = new Consulta(paciente1, funcionario1, new Date('2024-2-19-16:00:00'), '08', true)
console.log(coconsulta1.mostrarConsulta() )
