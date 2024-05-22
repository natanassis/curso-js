function contar(){
    var ini = document.getElementById("txti")
    var fim  = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERROR] Faltam dados!")
    }else{
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f){
            for (var c =i; c<=f; c+= p) {
                
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for (var c = 0; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F603}`
                
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 

    
}

//U+1F62E
//\u{1F603}


// function carregar(){
//     var msg = document.getElementById('msg')
//     var img  = document.getElementById('imagem')
//     var data = new Date()
//     //var hora =19
//     var hora = data.getHours()
//     //msg.innerHTML = `<h2>Agora são ${hora} horas.</h2>`

    

//     if (hora >= 0 && hora < 12){
//         img.src = 'manha.jpg'
//         document.body.style.background = '#e2cd9f'
//     } else if (hora >= 12 && hora < 18){
//         img.src = 'tarde.jpg'
//         document.body.style.background = '#b9846f'
//     }else{
//         document.body.style.background = '#212529'
//         img.src = 'noite.jpg'
//     }

// }

// function verificar(){
//     var inicio = new Date()
//     var ano = inicio.getFullYear()
//     var f_ano = document.getElementById('txtano')
//     var res = document.querySelector('div#res')

//     if (f_ano.value.length == 0 ||Number(f_ano.value) > ano){
//         window.alert('[ERRO] Verifique ps dados e tente novamente')
//     }else{
//         var fsex = document.getElementsByName('radsex')
//         var idade = ano - Number(f_ano.value)
//         var genero = ''
//         var img = document.createElement('img')

//         if (fsex[0].checked){
//             genero = 'Homem'
//             if (idade >=0 && idade < 10){
//                 img.setAttribute('src','bebe-masc.jpg')
//             }else if (idade < 21){
//                 img.setAttribute('src','jovem-masc.jpg')
//             }else if(idade < 50){
//                 img.setAttribute('src','adulto-masc.jpg')
//             }else{
//                 img.setAttribute('src','matusalem.jpg')
//             }
//         }else if (fsex[1].checked) {
//             genero = "Mulher"
//             if (idade >=0 && idade < 10){
//                 img.setAttribute('src','bebe.jpg')
//             }else if (idade < 21){
//                 img.setAttribute('src','soneca.jpg')
//             }else if(idade < 50){
//                 img.setAttribute('src','novinha.jpg')
//             }else{
//                 img.setAttribute('src','idosa-fem.jpg')
//             }
//         }
//         res.style.textAlign = 'center'
//         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
//         res.appendChild(img)
//     }


// }
