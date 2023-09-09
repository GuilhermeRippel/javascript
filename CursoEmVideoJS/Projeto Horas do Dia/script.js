
function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        //BOM DIA!
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
        //BOA TARDE!
    } else {
        msg.innerHTML = `Agora são ${hora} horas da noite`
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
        //BOA NOITE!
    }
}
