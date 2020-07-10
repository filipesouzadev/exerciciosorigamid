//Crie um objeto com seus dados Pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome

let eu = {
    nome:'Filipe',
    sobrenome: 'de Souza',
    idade: 29,
    formação: 'Bacharel em Direito',
    nomeCompleto:function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

//Crie um método no objeto anterior que exiba seu nome completo
console.log(eu.nomeCompleto())


//Modifique o valor da propriedade preço para 3000
let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador
//preto com 10 ans, que late ao ver um homem

let cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    acao(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir'
        }
        else{
            return 'Nothing'
        }
    }   
}