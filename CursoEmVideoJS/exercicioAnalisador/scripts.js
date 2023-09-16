
function adicionar(){
    let num1 = document.getElementById('num1')
    let lista = document.getElementById('lista')
    let res = document.getElementById('res')
    let n = Number(num1.value)
    let option = document.createElement('option')
    option.value = n
    option.text = n

    if(n >= 1 && n <= 100){
        lista.appendChild(option)
    } else {
        window.alert('Valor incorreto ou não digitado')
    }
}
let valores = [option.value]
function analisar(valores){
    
}