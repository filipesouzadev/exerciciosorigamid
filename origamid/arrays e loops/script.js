//Crie um aray com os anos em que o Brasil ganhou a copa

let copasBrasil = [1959, 1962, 1970, 1994, 2002]

//Interaja com o array utilizando um loop para mostrar
//no console a seguinte mensagem, 'O Brasil ganhou a copa de ${ano}

copasBrasil.forEach(function(item){
    console.log(`O Brasil ganhou a copa de ${item}`);
})

for (let i = 0; i < copasBrasil.length; i++){
    console.log(`O Brasil ganhou a copa de ${copasBrasil[i]}`)
};

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(item = 0; item < frutas.length; item++){
    console.log(frutas[item]);
    if(frutas[item] === 'Pera'){
        break;
    };
};


//Coloque a última fruta do array acima em uma variável
//sem remover a mesma do array

let fruta = frutas[4];

let fruta1 = frutas[frutas.length-1];