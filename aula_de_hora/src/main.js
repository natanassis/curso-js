function carregar(){
    var msg = document.getElementById('msg')
    var img  = document.getElementById('imagem')
    var data = new Date()
    //var hora =19
    var hora = data.getHours()
    msg.innerHTML = `<h2>Agora são ${hora} horas.</h2>`

    

    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        document.body.style.background = '#212529'
        img.src = 'noite.jpg'
    }

}
