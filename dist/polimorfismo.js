"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex1_1 = require("./ex1");
class Desenvolvedor extends ex1_1.Funcionario {
    linguagens;
    frameworks;
    constructor(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula, linguagens, frameworks) {
        super(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula);
        this.linguagens = linguagens;
        this.frameworks = frameworks;
    }
    mostrarDados() {
        super.mostrarDadosFuncionario();
        console.log(`Linguagens: ${this.linguagens}\n Frameworks: ${this.frameworks} `);
    }
}
class Backend extends Desenvolvedor {
    bancoDeDados;
    constructor(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula, linguagens, frameworks, bancoDeDados) {
        super(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula, linguagens, frameworks);
        this.bancoDeDados = bancoDeDados;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Banco de dados: ${this.bancoDeDados}`);
    }
}
class Frontend extends Desenvolvedor {
    modelidade;
    constructor(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula, linguagens, framework, modelidade //mobile, web, desktop
    ) {
        super(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula, linguagens, framework);
        this.modelidade = modelidade;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Modalidades: ${this.modelidade}`);
    }
}
class Fullstack extends Desenvolvedor {
    habilidades;
    constructor(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula, linguagens, framework, habilidades) {
        super(nome, endereco, telefone, email, rg, dataNascimento, cargo, matricula, linguagens, framework);
        this.habilidades = habilidades;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Habilidades: ${this.habilidades}}`);
    }
}
const devBackend1 = new Backend("Ana Silva", // Nome
["Rua das Flores, 123", "Bairro Primavera"], // Endereço
"(11) 98765-4321", // Telefone
"ana.silva@email.com", // Email
"12.345.678-9", // RG
new Date("1995-05-20"), // Data de Nascimento
"Desenvolvedora Backend", // Cargo
"54321", // Matrícula
["Java", "JavaScript"], // Linguagens
["Spring Boot", "React"], // Frameworks
["MySQL", "MongoDB"] // Bancos de dados
);
devBackend1.mostrarDados();
const devFrontend1 = new Frontend("João Souza", // Nome
["Rua dos Girassóis, 456", "Bairro Sol Nascente"], // Endereço
"(11) 91234-5678", // Telefone
"joao.souza@email.com", // Email
"98.765.432-1", // RG
new Date("2000-10-10"), // Data de Nascimento
"Desenvolvedor Frontend", // Cargo
"98765", // Matrícula
["HTML", "CSS", "JavaScript"], // Linguagens
["React", "Vue.js"], // Frameworks
["web", "mobile"] // Modalidades
);
devFrontend1.mostrarDados();
const devFullstack1 = new Fullstack("Mariana Oliveira", // Nome
["Avenida Brasil, 789", "Bairro Centro"], // Endereço
"(11) 95678-1234", // Telefone
"mariana.oliveira@email.com", // Email
"01.234.567-8", // RG
new Date("1992-07-15"), // Data de Nascimento
"Desenvolvedora Fullstack", // Cargo
"123456", // Matrícula
["Java", "JavaScript", "Python"], // Linguagens
["Spring Boot", "React", "Django"], // Frameworks
["Back-end", "Front-end", "Testes"] // Habilidades
);
devFullstack1.mostrarDados();
