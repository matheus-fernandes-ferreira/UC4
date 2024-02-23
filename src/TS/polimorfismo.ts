import { Funcionario } from "./ex1";

class Desenvolvedor extends Funcionario {
    constructor(
        nome: string,
        cargo: string,
        matricula: string,
        endereco: string[],
        telefone: string,
        email: string,
        rg: string,
        dataNascimento: Date
    ) {
        super(cargo, matricula, nome, endereco, telefone, email, rg, dataNascimento)
    }
    mostrarDados() {
        super.mostrarDadosFuncionario()
    }
}

class Backend extends Desenvolvedor {
    constructor(
        nome: string,
        cargo: string,
        matricula: string,
        endereco: string[],
        telefone: string,
        email: string,
        rg: string,
        dataNascimento: Date,
        public linguagens: string[],
        public framework: string[]
    ) {
        super(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento)
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Linguagens: ${this.linguagens}\n Frameworks: ${this.framework}`)
    }
}

class Frontend extends Desenvolvedor {
    constructor(
        nome: string,
        cargo: string,
        matricula: string,
        endereco: string[],
        telefone: string,
        email: string,
        rg: string,
        dataNascimento: Date,
        public linguagens: string[],
        public framework: string[],
        public modelidade: string[]    //mobile, web, desktop
    ) {
        super(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento)
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Modalidades: ${this.modelidade}\n Linguagens: ${this.linguagens}\n Frameworks: ${this.framework}`)
    }
}

class Fullstack extends Desenvolvedor {
    constructor(
        nome: string,
        cargo: string,
        matricula: string,
        endereco: string[],
        telefone: string,
        email: string,
        rg: string,
        dataNascimento: Date,
        public linguagens: string[],
        public framework: string[],
        public modelidade: string[],   //mobile, web, desktop
        public habilidades: string[]
    ) {
        super(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento)
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Habilidades: ${this.habilidades}\n Modalidades: ${this.modelidade}\n Linguagens: ${this.linguagens}\n Frameworks: ${this.framework}`)
    }
}

const backendDev = new Backend(
    "João Silva",
    "Desenvolvedor Backend",
    "123456",
    ["Rua das Flores, 123"],
    "(11) 9999-8888",
    "joao.silva@email.com",
    "123456789",
    new Date(1990, 10, 1), // Assuming correct Date format
    ["Java", "Python"],
    ["Spring Boot", "Django"]
  );
  
  backendDev.mostrarDados();

  const frontendDev = new Frontend(
    "Maria Souza",
    "Desenvolvedora Frontend",
    "654321",
    ["Avenida Paulista, 500"],
    "(11) 8888-9999",
    "maria.souza@email.com",
    "987654321",
    new Date(1995, 5, 15), // Assuming correct Date format
    ["JavaScript", "TypeScript"],
    ["React", "Vue.js"],
    ["Web"] // Specifying "Web" as the development modality
  );
  frontendDev.mostrarDados();

  const fullstackDev = new Fullstack(
    "Pedro Santos",
    "Desenvolvedor Fullstack",
    "987654",
    ["Rua das Acácias, 20"],
    "(12) 3333-2222",
    "pedro.santos@email.com",
    "123789456",
    new Date(2000, 1, 2), // Assuming correct Date format
    ["JavaScript", "Python", "Java"],
    ["React", "Spring Boot", "Django"],
    ["Web", "Mobile"], // Specifying development modalities
    ["Agile methodologies", "Testing", "Version control"] // Adding specific fullstack developer skills
  );
  
  fullstackDev.mostrarDados();