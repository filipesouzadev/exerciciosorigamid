//Verifique se a sua idade é maior do que a de algum parente 
//Dependendo do resultado coloque no console 'É Maior', 'É igual', 'É menor'
let idadeFilipe = 59;
let idadeMamai = 59;

if (idadeFilipe > idadeMamai){
    console.log('É Maior')
} else if(idadeFilipe < idadeMamai){
    console.log('É menor')
} else {
    console.log('É igual')
}

//Qual valor é retornado na seguinte expressão?
let expressao = (5 - 2) && (5 - '') && (5 - 2);
console.log(expressao);
//res: 3. verificou as condições verdadeiras

//Verifique se as seguintes variáveis são Truthy ou Falsy
let nome = 'Filipe';
if(nome){
    console.log('É truthy');
} else {
    console.log('É falsy');
}

let idade = 29;
if(idade){
    console.log('É truthy');
} else {
    console.log('É falsy');
}

let possuiDoutorado = false;
if(possuiDoutorado){
    console.log('É truthy');
} else {
    console.log('É falsy');
}

let empregoFuturo;
if(empregoFuturo){
    console.log('É truthy');
} else {
    console.log('É falsy');
}

let dinheiroNaConta = 0;
if(dinheiroNaConta){
    console.log('É truthy');
} else {
    console.log('É falsy');
}

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

//Compare o total de habitantes do Brasil com China (valor em milhões) 
let brasil = 207;
let china = 1340;
//comparações feitas no console;

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}
//res: falso
if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão')
} else {
    console.log('Falso')
}
//res: verdadeiro



