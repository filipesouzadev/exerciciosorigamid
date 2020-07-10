function areaQuadrado(lado){
    return lado**2;
}

console.log(areaQuadrado(5)+ ' m²');

function pi(){
    return 3.14;
}

let total = 5 * pi(); //15.7
console.log(pi());

//Função para cálculo de IMC

//peso e altura são os parâmetros
function imc(peso, altura){
    const imc = peso / (altura**2);
    return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)); //60 e 1.70 são os argumentos

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Você gosta do céu.';
    } else if (cor === 'verde') {
        return 'Você gosta de florestas.';
    } else {
        return 'Você não gosta de nada.';
    }
}
console.log(corFavorita('')); //retorna 'você não gosta de nada'

//adicionando um evento com função anônima
addEventListener('click', function(){
    console.log('Oi');
}); 

function terceiraIdade(idade) {
    if(typeof idade !== 'number'){
        return 'Informe a sua idade!';
    } else if (idade >= 60){
        return true;
    } else {
        return false;
    }
} 

console.log(terceiraIdade(65));
//Retornar diferentes tipos de dados em uma função é não uma boa idéia.

function faltamVisitar(paisesVisitados){
    let totalPaises = 193;
    return `Faltam visitar ${totalPaises-paisesVisitados} países`;

};

let profissao = 'Desenvolvedor';

function dados(){
    let nome = 'Filipe';
    let idade = 25;
    function outrosDados(){
        let endereco = 'São Paulo';
        let idade = 28;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados();
}

dados(); //retorna 'Filipe, 29, São Paulo, Desenvolvedor'
outrosDados(); //retorna um erro