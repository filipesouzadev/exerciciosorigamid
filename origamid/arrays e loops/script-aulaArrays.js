let videoGames = ['Switch', 'PS4', 'Xbox'];


//for (let num = 1; num <= 10; num++){
//    console.log(num);
//}


//let i = 1;
//while(i <= 10){
//    console.log(i);
//    i++;
//};

videoGames.push('3DS');

for (let item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4'){
        break; 
    }
}

let frutas = ['banana', 'pera', 'maçã', 'abacaxi', 'uva']

frutas.forEach(function(item, index, array){
    console.log(item, index, array);
})