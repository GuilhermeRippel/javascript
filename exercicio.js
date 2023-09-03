//Exercícios de fundamentos
//Exercício 1: Olá, Mundo!
//Crie um script que imprima "Olá, mundo!" no console

console.log("Olá, Mundo!")


//Exercício 2: Conversão de tipos
const numeroTexto = "1234";

const conversao = Number(numeroTexto);

console.log(numeroTexto)
console.log(typeof numeroTexto)
console.log(conversao);
console.log(typeof conversao);

//Exercício 3: Manipulação de Strings
const minhaString = "JavaScript é incrível";

const numeroDeCaracteres = minhaString.length;

const numeroDePalavras = minhaString.split(" ").length

console.log("O número de palavras é: " + numeroDePalavras);
console.log("O número de caracteres é: " +numeroDeCaracteres)

//Exercício 4: Loop e Arrays

const nomes = ["Ana", "João", "Mario", "Maria", "Carlos"];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

//Exercício 5: Funções, Strings, Math

function converterHorario(horario24){
    // 14:20 => 14, minuto = 20 => split
    const hora = horario24.split(":")[0]
    const minuto = horario24.split(":")[1]

    console.log(hora, minuto)
}

converterHorario("15:16")