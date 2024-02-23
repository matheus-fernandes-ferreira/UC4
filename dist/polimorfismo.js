"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex1_1 = require("./ex1");
class Desenvolvedor extends ex1_1.Funcionario {
    constructor(cargo, matricula, nome, endereco, telefone, email, rg, dataNascimento) {
        super(cargo, matricula, nome, endereco, telefone, email, rg, dataNascimento);
    }
    mostrarDados() {
        super.mostrarDadosFuncionario();
    }
}
class Backend extends Desenvolvedor {
    linguagens;
    framework;
    constructor(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento, linguagens, framework) {
        super(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento);
        this.linguagens = linguagens;
        this.framework = framework;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Linguagens: ${this.linguagens}\n Frameworks: ${this.framework}`);
    }
}
class Frontend extends Backend {
    modelidade;
    constructor(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento, linguagens, framework, modelidade) {
        super(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento, linguagens, framework);
        this.modelidade = modelidade;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Modalidades: ${this.modelidade}`);
    }
}
class Fullstack extends Frontend {
    habilidades;
    constructor(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento, linguagens, framework, modelidade, //mobile, web, desktop
    habilidades) {
        super(nome, cargo, matricula, endereco, telefone, email, rg, dataNascimento, linguagens, framework, modelidade);
        this.habilidades = habilidades;
    }
    mostrarDados() {
        super.mostrarDados;
        console.log(`Habilidades: ${this.habilidades}`);
    }
}
const backendDev = new Backend("João Silva", "Desenvolvedor Backend", "123456", ["Rua das Flores, 123"], "(11) 9999-8888", "joao.silva@email.com", "123456789", new Date(1990, 10, 1), // Assuming correct Date format
["Java", "Python"], ["Spring Boot", "Django"]);
backendDev.mostrarDados();
const frontendDev = new Frontend("Maria Souza", "Desenvolvedora Frontend", "654321", ["Avenida Paulista, 500"], "(11) 8888-9999", "maria.souza@email.com", "987654321", new Date(1995, 5, 15), // Assuming correct Date format
["JavaScript", "TypeScript"], ["React", "Vue.js"], ["Web"] // Specifying "Web" as the development modality
);
frontendDev.mostrarDados();
const fullstackDev = new Fullstack("Pedro Santos", "Desenvolvedor Fullstack", "987654", ["Rua das Acácias, 20"], "(12) 3333-2222", "pedro.santos@email.com", "123789456", new Date(2000, 1, 2), // Assuming correct Date format
["JavaScript", "Python", "Java"], ["React", "Spring Boot", "Django"], ["Web", "Mobile"], // Specifying development modalities
["Agile methodologies", "Testing", "Version control"] // Adding specific fullstack developer skills
);
fullstackDev.mostrarDados();
