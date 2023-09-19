var primeiroNumero = ''
var segundoNumero = ''
var operacao = ''
var primeiroNumeroInserido = false


function adicionarNumero(numero){
    let res = document.getElementById('res')
    if(!primeiroNumeroInserido){
    primeiroNumero += numero
    res.innerHTML = `${primeiroNumero}`
    } else {
        segundoNumero += numero
        res.innerHTML = `${segundoNumero}`
    }
}

function adicionarOperacao(op){
    operacao = op
    primeiroNumeroInserido = true
    res.innerHTML = `${operacao}`
}

function calcular() {
    if (primeiroNumero !== '' && segundoNumero !== '' && operacao !== '') {
        let num1 = parseFloat(primeiroNumero)
        let num2 = parseFloat(segundoNumero)
        
        switch (operacao) {
            case '+':
                res.innerHTML = `${num1 + num2}`
                break;
            case '-':
                res.innerHTML = `${num1 - num2}`
                break;
            case '*':
                res.innerHTML = `${num1 * num2}`
                break;
            case '/':
                if (num2 !== 0) {
                    res.innerHTML = `${num1 / num2}`
                } else {
                    res.innerHTML = "Erro: divisão por zero."
                }
                break;
            default:
                res.innerHTML = "Operação inválida."
        }
        primeiroNumero = ''
        segundoNumero = ''
        operacao = ''
        primeiroNumeroInserido = false
    }
}

function limpar(){
    primeiroNumero = ''
    segundoNumero = ''
    operacao = ''
    primeiroNumeroInserido = false
    res.innerHTML = ''
}