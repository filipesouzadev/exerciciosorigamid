/*let idade = 29;
let podeBeber = (idade > 18) ? 'Pode beber': 'Não pode beber'; 
console.log(podeBeber);

let naoPossuiDiabetes = false;

podeBeber  = (idade > 18 && naoPossuiDiabetes) ? 'Oi': 'Oi 2';

console.log(podeBeber);*/

//EXERCICÍOS

//Some 500 ao valor de scroll abaixo,
//atribuindo o novo valor a scroll

let scroll = 1000;
scroll += 500;


//atribua true para a variável darCredito,
//caso o cliente possua carro e casa.
//e false caso o contrário.

let possuiCarro = true;
let possuiCasa = true;
let darCredito;

//darCredito = (possuiCasa == true && possuiCarro == true) ? true : false; esse código funciona, mas não faz sentido

darCredito = (possuiCarro && possuiCasa)
console.log(darCredito);
