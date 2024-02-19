"use strict";
//adicionando a variavel e o id dele
const formulario = document.getElementById('formulario');
//recebendo os dados do formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const dados = `
Nome: ${nome} <br>
Telefone: ${telefone} <br>
CPF: ${cpf} <br>
Data de Nascimento: ${dataNascimento} <br>
E-mail: ${email}`;
    const exibir = document.getElementById('resposta');
    if (exibir) {
        exibir.innerHTML = dados;
    }
});
