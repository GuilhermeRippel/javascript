//Fundamentos

var olaMundo = "Olá, Mundo";

console.log(olaMundo);

//variáveis e tipos de dados

var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);

console.log(typeof meuNumero);

var booleano = true; //false 
var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuNumero);
console.log(typeof meuObjeto);
console.log(typeof meuUndefined);


//let e const
//novas formas de declarar variáveis

let x = 10; //variável que muda 
const y = 5; //variável que não muda

console.log(x, y);


//Operadores aritméticos

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//operadores de comparação

console.log( x == y);
console.log(x != y);

console.log("5" === 5); 
console.log(5 === 5);
console.log(5 !== 5);  //verifica levando tipo de variável em consideração

//Operadores lógicos
//AND = &&
//OR = ||

console.log(10 > 5 && 20 < 5)


//conversão de tipos

const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero2)

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)

//Estrutura de condição - if, else, else if

const idade = 20;

if(idade < 13){
    console.log("Você tem menos de 13 anos")
} else {
    console.log("Você tem 13 anos ou mais")
}


//Switch

const fruta = "Maça";

switch(fruta){
    case "Banana":
        console.log("A fruta é banana");
        case "Maça":
        console.log("A fruta é maça");
        break;
        default:
            console.log("Não selecionou nenhuma fruta")
}


//Estruturas de repetição


//contador, condição de limite, incremento
for(let i = 0; i < 5; i = i + 1){
    console.log("o valor de i é: " + i)
}

//while
let i = 0;

while(i < 5){
    console.log("o valor de k:" + i)
    i++;
}

let j = 5;


do{
    console.log("O valor de j é: " + j)
    j++

} while(j < 5){

}


//Data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

//Math
console.log(Math.PI);

console.log(Math.round(3,6));

conole.log(Math.sqrt(16));