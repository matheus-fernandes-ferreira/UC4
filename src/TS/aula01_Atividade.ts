//Exercício 01
let pao: number = 0.12 //valor da unidade
let broa: number = 1.5  //valor da unidade
let quantidadePao = 50//usuario insere a quantidade vendida no dia
let quantidadeBroa: number = 20 //usuario insere a quantidade vendida no dia
let totalArrecadado: number = (pao * quantidadePao) + (broa * quantidadeBroa)
let poupanca: number = totalArrecadado*0.1  //10% destinado a poupanca

console.log(`O total arrecado no dia foi ${totalArrecadado} reais.\nvoce deve guardar ${poupanca} `)

//Exercício 02
let pedido: number = 30 //usuario insere quntos reais eles deseja colocar de gasolina
let precoGasolina = 5   //usuario insere o preço do litro da gasolina
let gasolinaObtida = (pedido / precoGasolina)
console.log(`Gasolina obtida foi ${gasolinaObtida} litros`)

//Exercício 03
let precoQuilo: number = 12 //preco do quilo de comida
let pratoCliente: number = 0.6    //peso do prato montado pelo cliente em quilos 
let valorTotalPrato: number = (precoQuilo * pratoCliente)
console.log(`Total: ${valorTotalPrato}`)

//Exercício 04
let dia: number = 5 //usuario insere o dialet mes: number = 2
let mes: number = 1 //usuario insere o mes
let diasNoMes: number = 30  //quantidade de dias em um mes
let diasPassados: number = (diasNoMes * mes) + dia
console.log(`Passaram-se ${diasPassados} dias`)

//Exercício 05
let nota1: number = 8   //usuario insere a nota1
let nota2: number = 8   //usuario insere a nota 2 
let nota3: number = 8 //usuario insere a nota 3 
let peso1: number = 1, peso2: number = 2, peso3: number = 3
let mediPonderada: number = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / (peso1 + peso2 + peso3)
console.log(`A média ponderada do aluno foi ${mediPonderada}`)

//Exercício 06
let valorCamisaP: number = 10 //unidade
let valorCamisaM: number = 12 //unidade 
let valorCamisaG: number = 15 //unidade 
let qtCamisaP:number = 10   //uduario insere a qt. de camisas P 
let qtCamisaM: number = 10  //usuario insere a qt de camisas M 
let qtCamisaG: number = 10  //usuario insere a qt de camisas G 
let totalDaVenda: number = (valorCamisaP * qtCamisaP) + (valorCamisaM * qtCamisaM) + (valorCamisaG * qtCamisaG)

console.log(`O valor total da vendo foi ${totalDaVenda} reais`)

//Exercício 07
const queijo: number = 50*2   //gramas 
const presunto: number = 50   //gramas 
const hamburguer: number = 100    //gramas 
let sanduiches: number = 10 //usuario insere a qt de sanduiches

//calcula a qt de ingredientes a comprar
let qtQueijo: number = (queijo * sanduiches)/1000  //qt de queijo a comprar em kg
let qtPresunto: number = (presunto * sanduiches)/1000  //qt de presunto a comprar em kg 
let qtHamburguer: number = ((hamburguer * sanduiches)/1000)  //qt de hamburguers a comprar  em kg

console.log(`Você deve comprar ${qtQueijo} kg de queijo \n
${qtPresunto} kg de presunto \n 
${qtHamburguer} kg de hamburguer
`)

//Exercício 08
const valorHoraNormal: number = 10 
const valorHoraExtra: number = 15
let hrNormalTrabalhada: number = 10 //usuario insere a quantidade de horas trabalhadas
let hrExtraTrabalhada: number = 1

//calculando salario bruto e liquido
let salarioBruto: number = (hrNormalTrabalhada * valorHoraNormal)+ (hrExtraTrabalhada * valorHoraExtra)
let salarioLiquido: number = salarioBruto - (salarioBruto*0.1) //desconto de impostos

console.log('Salário bruto: ' + salarioBruto + ' \nSalário líquido: ' + salarioLiquido)


//Exercício 09
let litrosSuco: number = 10 //usuario informa quantos litros de suco deseja fazer
let agua: number = (litrosSuco/10)*8
let suco: number = (litrosSuco/10)*2

console.log('Você irá precisar de ' + agua + ' litros de água e ' + suco + ' litros de suco.')


//Exercício 10
//usuario insere a quantidade de cada moeda
let moeda01: number = 10, moeda5: number = 10, moeda10: number = 10, moeda25: number = 10, moeda50: number = 10, moeda1: number = 10

//calcula o total economizado
let totalEconomizado: number = ((moeda01 * 1)+(moeda5 * 5) +(moeda10*10)+(moeda25*25)+(moeda50*50)+(moeda1*100))/100
console.log('Pedrinho economizou R$' + totalEconomizado)


//Exercico 11
const ano: number = 365, diasMes: number = 30, dias: number = 1, tempoTrabalhado: number = 31
let totalAnos = Math.floor(tempoTrabalhado/ano)
let totalMeses = Math.floor((tempoTrabalhado%ano)/diasMes)
let totalDias = (tempoTrabalhado%ano)%diasMes
console.log('anos = ' + totalAnos + '\nMeses = ' + totalMeses + '\nDias = ' + totalDias)


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
