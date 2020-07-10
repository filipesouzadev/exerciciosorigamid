let pessoa = {
    nome: 'Filipe',
    idade: 29,
}

console.log(pessoa)

let quadrado = {
    lados:4,
    area: function(lado){
        return lado*lado;
    },
    perimetro: function(lado){
        console.log(this.lados);
        return this.lados * lado
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(6));


