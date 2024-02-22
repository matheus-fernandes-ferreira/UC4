class DadosPessoais {
    
    constructor(
        public nome: string,
        public endereco: string[], 
        public telefone: string, 
        public  email: string, 
        public  rg: string, 
        public dataNascimento: Date) {
    }
    mostrarDadosPessoais() {
        console.log(`
Dados pessoais: \n Nome: ${this.nome}\n Endereço: ${this.endereco}
Telefone: ${this.telefone}\n E-mail: ${this.email}\n RG: ${this.rg}\n Data de Nascimento: ${this.dataNascimento.toLocaleDateString('pt-br')}`)
    }
}

//a classe Funcionario herda atributos da classe DadosPessoais
class Funcionario extends DadosPessoais {

    //método construtor
    constructor(
        public cargo: string, 
        public matricula: string, 
        nome: string,
        endereco: string[], 
        telefone: string,
        email: string, 
        rg: string, 
        dataNascimento: Date) {
        super(nome, endereco, telefone, email, rg, dataNascimento)
    }
    //método para exibir os dados 
    mostrarDadosFuncionario() {
        super.mostrarDadosPessoais()
        console.log(`Dados do funcionário: \n Matrícula: ${this.matricula}\n Cargo: ${this.cargo} `)
    }
}


//a classe Paciente Herda atributos da classe DadosPessoais
class Paciente extends DadosPessoais {
    constructor(
        nome: string, 
        endereco: string[], 
        telefone: string,
        email: string, 
        rg: string, 
        dataNascimento: Date, 
        public idade: string, 
        public cpf: string) {
        super(nome, endereco, telefone, email, rg, dataNascimento)

    }
    mostrardadosPaciente() {
        super.mostrarDadosPessoais()
        console.log(`Informações do paciente: \n CPF: ${this.cpf}\n Idade: ${this.idade}`)
    }
}

class Consulta {
    paciente: Paciente;
    medico: Funcionario;
    dataHorario: Date;
    sala: string;
    convenio: boolean;

    constructor(paciente: Paciente, medico: Funcionario, dataHorario: Date, sala: string, convenio: boolean) {
        this.paciente = paciente; ''
        this.medico = medico;
        this.dataHorario = dataHorario;
        this.sala = sala;
        this.convenio = convenio;
    }
    mostrarConsulta() {
        console.log(`Paciente ${this.paciente} \n Médico: ${this.medico} \n Data: ${this.dataHorario} \n Sala: ${this.sala} \n Convênio: ${this.convenio} `)
    }
}


//instanciando
const funcionario1 = new Funcionario('Médico', '4045933', 'Valtemir', ['Rua senac', 'Cidade: Natal'],'849958745122', 'valtemir@gmail.ocm', '54123569', new Date('2024-2-21'))
funcionario1.mostrarDadosFuncionario()

const paciente1 = new Paciente('Matheus', ['Neópolis', 'Zona sul'], '84996663352', 'matheus@gmal.com', '5541236', new Date('1992-1-10'), '31', '58796552100')
paciente1.mostrardadosPaciente()