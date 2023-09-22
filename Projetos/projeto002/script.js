let textoDigitado = document.getElementById('textoDigitado');
let res = document.getElementById('res');

function adicionar() {
    let texto = textoDigitado.value;
    let edit = 'Editar';
    let check = '';
    if (texto.trim() === '') {
        window.alert('Por favor, digite um valor de entrada');
        return;
    }

    let listaNova = document.createElement('li');
    let editar = document.createElement('button');
    let checar = document.createElement('button')
    checar.className = 'fa-solid fa-check';
    editar.className = 'editar';
    checar.textContent = check;
    editar.textContent = edit;
    listaNova.textContent = texto;

    checar.addEventListener('click', function(){
        listaNova.innerHTML = `<s>${texto}</s>`;
        listaNova.appendChild(editar);
    })

    editar.addEventListener('click', function () {
        let novoTexto = prompt('Digite o novo texto:');
        if (novoTexto !== null) {
            listaNova.textContent = novoTexto;
            listaNova.appendChild(checar);
            listaNova.appendChild(editar);
        }
    });
    listaNova.appendChild(checar);
    listaNova.appendChild(editar);
    res.appendChild(listaNova);

    textoDigitado.value = '';
}


function limpar(){
    res.innerHTML = ''
}