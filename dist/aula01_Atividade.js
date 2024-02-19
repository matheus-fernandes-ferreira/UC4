"use strict";
//Exercício 01
let pao = 0.12; //valor da unidade
let broa = 1.5; //valor da unidade
let quantidadePao = 50; //usuario insere a quantidade vendida no dia
let quantidadeBroa = 20; //usuario insere a quantidade vendida no dia
let totalArrecadado = (pao * quantidadePao) + (broa * quantidadeBroa);
let poupanca = totalArrecadado * 0.1; //10% destinado a poupanca
console.log(`O total arrecado no dia foi ${totalArrecadado} reais.\nvoce deve guardar ${poupanca} `);
//Exercício 02
let pedido = 30; //usuario insere quntos reais eles deseja colocar de gasolina
let precoGasolina = 5; //usuario insere o preço do litro da gasolina
let gasolinaObtida = (pedido / precoGasolina);
console.log(`Gasolina obtida foi ${gasolinaObtida} litros`);
//Exercício 03
let precoQuilo = 12; //preco do quilo de comida
let pratoCliente = 0.6; //peso do prato montado pelo cliente em quilos 
let valorTotalPrato = (precoQuilo * pratoCliente);
console.log(`Total: ${valorTotalPrato}`);
//Exercício 04
let dia = 5; //usuario insere o dialet mes: number = 2
let mes = 1; //usuario insere o mes
let diasNoMes = 30; //quantidade de dias em um mes
let diasPassados = (diasNoMes * mes) + dia;
console.log(`Passaram-se ${diasPassados} dias`);
//Exercício 05
let nota1 = 8; //usuario insere a nota1
let nota2 = 8; //usuario insere a nota 2 
let nota3 = 8; //usuario insere a nota 3 
let peso1 = 1, peso2 = 2, peso3 = 3;
let mediPonderada = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / (peso1 + peso2 + peso3);
console.log(`A média ponderada do aluno foi ${mediPonderada}`);
//Exercício 06
let valorCamisaP = 10; //unidade
let valorCamisaM = 12; //unidade 
let valorCamisaG = 15; //unidade 
let qtCamisaP = 10; //uduario insere a qt. de camisas P 
let qtCamisaM = 10; //usuario insere a qt de camisas M 
let qtCamisaG = 10; //usuario insere a qt de camisas G 
let totalDaVenda = (valorCamisaP * qtCamisaP) + (valorCamisaM * qtCamisaM) + (valorCamisaG * qtCamisaG);
console.log(`O valor total da vendo foi ${totalDaVenda} reais`);
//Exercício 07
const queijo = 50 * 2; //gramas 
const presunto = 50; //gramas 
const hamburguer = 100; //gramas 
let sanduiches = 10; //usuario insere a qt de sanduiches
//calcula a qt de ingredientes a comprar
let qtQueijo = (queijo * sanduiches) / 1000; //qt de queijo a comprar em kg
let qtPresunto = (presunto * sanduiches) / 1000; //qt de presunto a comprar em kg 
let qtHamburguer = ((hamburguer * sanduiches) / 1000); //qt de hamburguers a comprar  em kg
console.log(`Você deve comprar ${qtQueijo} kg de queijo \n
${qtPresunto} kg de presunto \n 
${qtHamburguer} kg de hamburguer
`);
//Exercício 08
const valorHoraNormal = 10;
const valorHoraExtra = 15;
let hrNormalTrabalhada = 10; //usuario insere a quantidade de horas trabalhadas
let hrExtraTrabalhada = 1;
//calculando salario bruto e liquido
let salarioBruto = (hrNormalTrabalhada * valorHoraNormal) + (hrExtraTrabalhada * valorHoraExtra);
let salarioLiquido = salarioBruto - (salarioBruto * 0.1); //desconto de impostos
console.log('Salário bruto: ' + salarioBruto + ' \nSalário líquido: ' + salarioLiquido);
//Exercício 09
let litrosSuco = 10; //usuario informa quantos litros de suco deseja fazer
let agua = (litrosSuco / 10) * 8;
let suco = (litrosSuco / 10) * 2;
console.log('Você irá precisar de ' + agua + ' litros de água e ' + suco + ' litros de suco.');
//Exercício 10
//usuario insere a quantidade de cada moeda
let moeda01 = 10, moeda5 = 10, moeda10 = 10, moeda25 = 10, moeda50 = 10, moeda1 = 10;
//calcula o total economizado
let totalEconomizado = ((moeda01 * 1) + (moeda5 * 5) + (moeda10 * 10) + (moeda25 * 25) + (moeda50 * 50) + (moeda1 * 100)) / 100;
console.log('Pedrinho economizou R$' + totalEconomizado);
//Exercico 11
const ano = 365, diasMes = 30, dias = 1, tempoTrabalhado = 31;
let totalAnos = Math.floor(tempoTrabalhado / ano);
let totalMeses = Math.floor((tempoTrabalhado % ano) / diasMes);
let totalDias = (tempoTrabalhado % ano) % diasMes;
console.log('anos = ' + totalAnos + '\nMeses = ' + totalMeses + '\nDias = ' + totalDias);
/*Exercício 12
a)Será impresso
20
10, 5

b) Será impresso
50
10, 50
30, 10, 50

c) Será impresso
10, 10, 10

d) Será impresso
12
13, 12

e) Será impresso
10, 20, 15

f)Será impresso
1
5, 6, 1

*/
