class Etapas {
    nome: string;
    prazo: Date;
    status: string;
    constructor(nome: string, prazo: Date, status: string) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
    }
    mostrarDadosEtapa() {
        console.log(`Etapa: ${this.nome}\n Prazo final: ${this.prazo}\n Status da etapa: ${this.status}`)
    }
}

class Tarefa {
    nome: string;
    responsavel: string;
    prazo: Date;
    status: string;
    descricao: string;

    constructor(nome: string, responsavel: string, prazo: Date, status: string, descricao: string) {
        this.nome = nome;
        this.responsavel = responsavel;
        this.prazo = prazo;
        this.status = status;
        this.descricao = descricao;
    }
    mostrarDadosTarefa() {
        console.log(`Nome da tarefa: ${this.nome}\n Responsável: ${this.responsavel}\n Prazo: ${this.prazo}\n
    Status: ${this.status}\n Descrição: ${this.descricao}`)
    }
}

class MembroEquipe {
    nome: string;
    email: string;
    cargo: string;

    constructor(nome: string, email: string, cargo: string) {
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
    }
    mostrarDadosMembro(){
        console.log(`Membro: ${this.nome}\n E-mail: ${this.email}\n Cargo: ${this.cargo}`)
    }
}

class Projeto {
    nome: string;
    descricao: string;
    equipe: string[];
    etapas: Etapas[];
    tarefas: Tarefa[];
    constructor(nome: string, descricao: string, equipe: string[], etapas: Etapas[], tarefas: Tarefa[]) {
        this.nome = nome;
        this.descricao = descricao;
        this.equipe = equipe;
        this.etapas = etapas;
        this.tarefas = tarefas
    }
    mostrarDadosProjeto() {
        console.log(`Nome do projeto: ${this.nome}\n Descricao: ${this.descricao}\n
        Equipe Responsável: ${this.equipe}\n Etapas: ${this.etapas}\n Tarefas: ${this.tarefas}`)
    }
}

//inicializando
const projeto1 = new Projeto('Sistema gerenciamento de projetos', 
'Sistema criado para acompanhar o andamentos das atividades',[],[],[])

const etapa1 = new Etapas('Algoritmo', new Date(2024-3-1), 'Em andamento')
const tarefa1 = new Tarefa('Escrever pseudocodigo', 'Valtemir', new Date('2024-02-28'),
'Em andamento', 'Descrever a sequencia de passos lógicos para implementar o projeto')

const membro1 = new MembroEquipe('Valtemir', 'vlimap@gmail.com', 'Chefe')

projeto1.equipe.push(membro1.nome)
projeto1.etapas.push(etapa1)
projeto1.tarefas.push(tarefa1)

console.log(projeto1.mostrarDadosProjeto())