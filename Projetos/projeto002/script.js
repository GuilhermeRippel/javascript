function adicionar(){
    let tarefa = document.getElementById('tarefa')
    let texto = tarefa.value

    if(texto.trim() !== ''){
        let listaTarefas = document.getElementById('listaTarefas')
        let novoItem = document.createElement('li')
        novoItem.textContent = texto
        novoItem.style.background = 'grey'
        novoItem.style.borderRadius = '5px'
        listaTarefas.appendChild(novoItem)
        tarefa.value = ''
    }
}

function limpar(){
    let listaTarefas = document.getElementById('listaTarefas')
    listaTarefas.innerHTML = ''
}