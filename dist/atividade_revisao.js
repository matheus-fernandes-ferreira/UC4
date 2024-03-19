"use strict";
//Atividade de revisão typescript 18/03
class InfoPessoais {
    nome;
    endereco;
    telefone;
    email;
    cpf;
    dataNascimento;
    genero;
    constructor(nome, endereco, telefone, email, cpf, dataNascimento, genero) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
    }
    mostrarInfoPessoais() {
        console.log(`
        == Informações Pessoais ==
        Nome: ${this.nome}
        Endereco: ${this.endereco}
        Telefone: ${this.telefone}
        E-mail: ${this.email}
        CPF: ${this.cpf}
        Data de nascimento: ${this.dataNascimento}
        Gênero: ${this.genero}
        `);
    }
}
//a classe Colaborador herda atributos da classe InfoPessoais
class Colaborador extends InfoPessoais {
    cargo;
    matricula;
    //método construtor
    constructor(nome, endereco, telefone, email, cpf, dataNascimento, genero, cargo, matricula) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    //método para exibir os dados 
    mostrarDadosColab() {
        console.log('== Informações do Colaborador ==');
        super.mostrarInfoPessoais;
        console.log(`
    Matrícula: ${this.matricula}
    Cargo: ${this.cargo}\n `);
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
}
class Desenvolvedor extends Colaborador {
    lignuagens;
    frameworks;
    constructor(nome, endereco, telefone, email, cpf, dataNascimento, genero, cargo, matricula, lignuagens, frameworks) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero, cargo, matricula);
        this.lignuagens = lignuagens;
        this.frameworks = frameworks;
    }
    mostrarDados() {
        console.log(`== Informações do desenvolvedor==`);
        super.mostrarDadosColab;
        console.log(`
        Linguagens: ${this.lignuagens}
        Frameworks: ${this.frameworks}
        `);
    }
}
class Equipe {
    lider;
    membros;
    projetos;
    constructor(lider, membros = [], projetos) {
        this.lider = lider;
        this.membros = membros;
        this.projetos = projetos;
    }
    addMembros(novoMembro) {
        this.membros.push(novoMembro);
    }
    mostrarDados() {
        console.log(`== Equipe ==
        Líder: ${this.lider}
        Membros: ${this.membros}
        Projetos da equipe: ${this.projetos}`);
    }
}
class Projeto {
    nomeProjeto;
    descricao;
    tecnologias;
    dataInicio;
    dataFim;
    status;
    tarefas;
    membros;
    constructor(nomeProjeto, descricao, tecnologias, dataInicio, dataFim, status, tarefas = [], membros = []) {
        this.nomeProjeto = nomeProjeto;
        this.descricao = descricao;
        this.tecnologias = tecnologias;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.status = status;
        this.tarefas = tarefas;
        this.membros = membros;
    }
    mostrarDdados() {
        console.log(`
    Nome do projeto: ${this.nomeProjeto}
    Descrição: ${this.descricao}
    Tecnologias Utilizadas: ${this.tecnologias}
    Data de início: ${this.dataInicio}
    Data de término: ${this.dataFim}
    Status: ${this.status}
    
    Tarefas
    ${this.tarefas}
    
    Membros:
    ${this.membros}`);
    }
    addTarefa(novaTarefas) {
        this.tarefas.push(novaTarefas);
    }
}
class Tarefa {
    nomeTarefa;
    descriçãoTarefa;
    devResponsavel;
    prazo;
    status;
    constructor(nomeTarefa, descriçãoTarefa, devResponsavel, prazo, status) {
        this.nomeTarefa = nomeTarefa;
        this.descriçãoTarefa = descriçãoTarefa;
        this.devResponsavel = devResponsavel;
        this.prazo = prazo;
        this.status = status;
    }
    mostrarDados() {
        console.log(`
        Nome da tarefa: ${this.nomeTarefa}
        Descrição: ${this.descriçãoTarefa}
        Responsável: ${this.devResponsavel}
        Prazo: ${this.prazo}
        Status: ${this.status}
        `);
    }
}
//Instancias
//cadastrar um novo desenvolvedor
const dev1 = new Desenvolvedor('Matheus', ['rua Senac, Natal'], '12345678965', 'matheus@gmail.com', '98745632101', new Date('1990-02-28'), 'Masculino', 'Desenvolvedor', '4037933', ['typescript, javascript'], ['react']);
//cadastrar nova equipe
const equipe1 = new Equipe(dev1, [dev1, dev1], ['Projeto 1', 'Projeto 2']);
//cafastrar nova tarefa
const tarefa1 = new Tarefa('Pesquisa Bibliografica', 'Pesquisar material bibliografico', 'Matheus', new Date('2024-03-21'), 'Em andamento');
//cadastrar novo projeto
const projeto1 = new Projeto('Projeto 1', 'Descrição geral do projeto', 'React', new Date('2024-03-17'), new Date('2024-04-20'), 'Em andamento', [tarefa1, tarefa1], [equipe1]);
//Utilizando o método para adicionar nova tarefa ao projeto
projeto1.addTarefa(tarefa1);
//exibindo as informações dos objetos criados
projeto1.mostrarDdados();
tarefa1.mostrarDados();
dev1.mostrarDadosColab();
