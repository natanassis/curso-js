function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um numero')
    }else{
        let n = Number(num.value)
        let c  = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }


    }

    
}





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
