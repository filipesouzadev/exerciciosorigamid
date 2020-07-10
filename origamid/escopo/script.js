/*function mostrarCarro(){
    let carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();//Fusca no console
console.log(carro); //Erro, carro is not defined
*/


//Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
//console.log(var,portas, marca);

//Porque as variáveis estão dentro de um escopo e não podem ser acessadas fora dele. Além do fato de estar tentando exibir uma palavra chave no console.

//Como corrigir o erro abaixo
const dois = 2;
function somarDois(x){
    return x + dois;
}
function dividirDois(x){
    return x + dois;
}
somarDois(4)

//O que fazer para o total retornar 500?
const numero = 50;

for(let numero = 0; numero < 50; numero++){
    console.log(numero);
}

const total = 10 * numero;
console.log(total);