let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res =  document.querySelector('div#res')
let = valores = []




function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }

}

function inLista(n,l){

    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``
    }else {
        window.alert('valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0


        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma / tot 

        res.innerHTML = '' 
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrado</p>`
        res.innerHTML += `<p>O maior valor informado: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado: ${menr}</p>`
        res.innerHTML += `<p>A soma de todos os valores: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados: ${media}</p>`
    }
}

// function carregar(){
//     var msg = document.getElementById('msg')
//     var img  = document.getElementById('imagem')
//     var data = new Date()
//     //var hora =19
//     var hora = data.getHours()
//    msg.innerHTML = `<h2>Agora são ${hora} horas.</h2>`

    

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
