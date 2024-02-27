"use strict";
class Etapas {
    nome;
    descricao;
    prazo;
    status;
    constructor(nome, descricao, prazo, status) {
        this.nome = nome;
        this.descricao = descricao;
        this.prazo = prazo;
        this.status = status;
    }
    mostrarDadosEtapa() {
        console.log(`Etapa: ${this.nome}\n 
        Descrição: ${this.descricao}
        Prazo final: ${this.prazo}\n 
        Status da etapa: ${this.status}`);
    }
}
class Tarefa {
    nome;
    responsavel;
    prazo;
    status;
    descricao;
    constructor(nome, responsavel, prazo, status, descricao) {
        this.nome = nome;
        this.responsavel = responsavel;
        this.prazo = prazo;
        this.status = status;
        this.descricao = descricao;
    }
    mostrarDadosTarefa() {
        console.log(`
        Nome da tarefa: ${this.nome}
        Responsável: ${this.responsavel}
        Prazo: ${this.prazo}
        Status: ${this.status}
        Descrição: ${this.descricao}`);
    }
}
class MembroEquipe {
    nome;
    email;
    cargo;
    constructor(nome, email, cargo) {
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
    }
    mostrarDadosMembro() {
        console.log(`Membro: ${this.nome}
        E-mail: ${this.email}
        Cargo: ${this.cargo}`);
    }
}
class Projeto {
    nome;
    descricao;
    equipe;
    etapas;
    tarefas;
    constructor(nome, descricao, equipe, etapas, tarefas) {
        this.nome = nome;
        this.descricao = descricao;
        this.equipe = equipe;
        this.etapas = etapas;
        this.tarefas = tarefas;
    }
    mostrarDadosProjeto() {
        console.log(`
        Nome do projeto: ${this.nome}
        Descricao: ${this.descricao}\n
        Equipe Responsável: ${this.equipe}
        Etapas: ${this.etapas}
        Tarefas: ${this.tarefas}`);
    }
}
//inicializando
const projeto1 = new Projeto('Sistema gerenciamento de projetos', 'Sistema criado para acompanhar o andamentos das atividades', [], [], []);
const etapa1 = new Etapas('Algoritmo', 'descrição da etapa', new Date(2024 - 3 - 1), 'Em andamento');
const tarefa1 = new Tarefa('Escrever pseudocodigo', 'Valtemir', new Date('2024-02-28'), 'Em andamento', 'Descrever a sequencia de passos lógicos para implementar o projeto');
const membro1 = new MembroEquipe('Valtemir', 'vlimap@gmail.com', 'Chefe');
projeto1.equipe.push(membro1.nome);
projeto1.etapas.push(etapa1);
projeto1.tarefas.push(tarefa1);
projeto1.mostrarDadosProjeto();
