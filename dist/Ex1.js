"use strict";
class Funcionario {
    nome;
    telefone;
    email;
    cargo;
    constructor(nome, telefone, email, cargo) {
        this.nome = nome,
            this.telefone = telefone,
            this.email = email,
            this.cargo = cargo;
    }
}
class Consulta {
    paciente;
    medico;
    dataHorario;
    sala;
    convenio;
    constructor(paciente, medico, dataHorario, sala, convenio) {
        this.paciente = paciente,
            this.medico = medico,
            this.dataHorario = dataHorario,
            this.sala = sala,
            this.convenio = convenio;
    }
}
//instanciando
class Paciente {
    nome;
    idade;
    cpf;
    telefone;
    email;
    endereco;
    constructor(nome, idade, cpf, telefone, email, endereco) {
        this.nome = nome,
            this.idade = idade,
            this.cpf = cpf,
            this.telefone = telefone,
            this.email = email,
            this.endereco = endereco;
    }
}
//instanciando
const funcionario1 = new Funcionario("Matheus", "84996335499", 'matheusfer200@gmail.com', 'Estudante');
const paciente1 = new Paciente('Valtemir', '30', '012345678910', '8498774566', 'vlimap@g.com', 'Zona Norte');
const coconsulta1 = new Consulta(paciente1, funcionario1, new Date('2024-2-19-16:00:00'), '08', true);
console.log(funcionario1);
console.log(paciente1);
console.log(coconsulta1);
