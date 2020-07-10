/*let possuiGraduacao = false;
let possuiDoutorado = false;

if(possuiGraduacao){
    console.log('É verdadeiro');
} else if(possuiDoutorado)  {
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada');
}


let nome = 'Filipe';

if(nome){
    console.log(nome);
} else if(nome == '') {
    console.log('nome não existe')
}

if((5-5) && (5+5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso')
}

if((5-10) && (5+5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso')
} */

let condicional2 = (5-5) || (5+5) || (10-2);
console.log(condicional2);

let condicional3 = (5-5) || (5+5) && (10-2);
console.log(condicional3);

let corFavorita = 'Verde';

switch(corFavorita){
    case'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'Verde':
        console.log('Olhe para a floresta.')
        break;
    default: 
        console.log('Feche os olhos.');
}