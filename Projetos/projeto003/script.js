
let res = document.getElementById('res');

function adicionar(){
    let texto = document.getElementById('texto');
    let novoTexto = texto.value;
    let editarTexto = 'EDITAR'
    let listaNova = document.createElement('li')
    let editar = document.createElement('button')
    listaNova.textContent = novoTexto
    editar.textContent = editarTexto
    editar.className = 'editar'
    listaNova.className = 'listaNova'

    editar.addEventListener('click', function(){
        let novoTexto = prompt('Digite o novo texto')
        if(novoTexto !== null){
            listaNova.textContent = novoTexto
            listaNova.appendChild(editar);
        }
    })

    listaNova.appendChild(editar)
    res.appendChild(listaNova,)
    texto.value = ''
}

function limpar(){
    res.innerHTML = ''
}