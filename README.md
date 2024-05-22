# Curso de JavaScript 

#### Seções Rapidas:

* [Comandos Basicos em JS](#comandos-basicos)

* [Tratamento de dados em JS](#tratamento-dados)

* [Operadores em JS](#operadoes-js)

* [Manipulando a DOM em JS](#manipulando-dom)

* [Condições em JS](#condicoes-js)

* [Estrutura de Repetição em JS](#estrutura-repeticao)

* [Avaçando os estudos em JS](#avancado-estudos)

* [Uso de Funções e Evenots em JS](#funcoes-eventos)

* [Proximos passos em JS](#proximos-passos)



Vamos iniciar com um exemplo simples de troca o texto de um site pelo console do google  

* Como troca o texto de h1 com javascript

        document.querySelector('span.bstn-hl-title).innerText = 'Hello World'


## COMANDOS BASICOS
<a id="comandos-basicos"></a>

Para usar o alert do navegador com o javascript

        window.alert("Hello World")

Para usar a confirmação do navegador com o javascript

        window.confirm("Está gostando ?")

para usar o prompt com o javascript

        window.prompt('Qual é o seu nome?')

#### Tipos de comentarios em javascript

        // Para comnetario de uma linhas

        /* 
            Para comentarios de varias linhas 
        */ 

<a id="tratamento-dados"></a>
## Tratamento de dados em javascript


Para pegar dados que veio do lado do cliente atribua a uma variavel 

        window.confirm("Qual é o seu nome")

        window.alert(´Ola ${nome}´)

Para converte uma string para number

        var n1 = Number(window.prompt("Digite um numero: ")) // vem como String

Para converte uma string para Float

               var n1 = parseFloat(window.prompt("Digite um numero: ")) // String para float 

Para converte para uma string vamos usar o String ou toString ex: 

                toString(s)
                String(s) 


Um pouco de formatação Strings :

        var s = 'Ola gente';
        // escreve no html
        document.write(s.length);

        s.length  // o tamnho da string

        s.toUpperCase() //deixa tudo em 'MAISCULAS' 

        s.toLowerCase() // deixa tudo em 'minusculo'

* Para escrever no documento html com javascript

        document.write(`<p>olá mundo</p>`)

 * Exemplo de formata um string de valor de dinheiro 

                var  n1 = parseFloat(salario)
                        n1.toFixed(2).replace('.',',')
                        var n2 = n1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                        
                        document.write(`<p> Salario: ${n2}</p>`)


<a id="operadoes-js"></a>
## Operadores em javascript



* Esses são os operadores em javascript

                5 + 2 -> 7 // soma
                5 - 2 -> 3 // subtração
                5 * 2 -> 10 // multiplicação
                5 / 2 -> 2.5 // divisão
                5 % 2 -> 1  // resto da divisão inteira  
                5 ** 2 -> 25 // potencia   

* Ordem de precendencia no javascript

                1° -> ()
                2° -> **
                3° -> * / %
                4° -> + - 

* Atribuição simples: 

                var a = 5 + 3;// resultado -> 8
                var b = a % 5;// resultado -> 3
                var c = 5 * b ** 2;// resultado -> 45
                var d = 10 - a / 2;// resultado -> 6
                var e = 6 * 2 / d; // resultado -> 2 
                var f = 5 % e + 4 / e;// resultado -> 3

* Auto Autribuição: -> Atribuições da propria variavel

                var n = 3;
                n = n + 4; // n agora vale -> 7 
                n = n - 5; // n agora vale -> 2
                n = n * 4; // n agora vale -> 8
                n = n / 2; // n agora vale -> 4
                n = n ** 2; // n agora vale -> 16
                n = n % 5; // n agora vale -> 1

* Atribuição forma simplificada:: 

                var n = 3;
                n += 4
                n -= 5
                n *= 4
                n /= 2
                n **= 2
                n %= 5         

Operadores relacionas em javascript:

        // Para saber qual é o maior ou menor coloque um trasinho em cada e vire a cabeça de lado  

       5 > 2  -> TRUE // maior que
       7 < 4  -> FALSE // menor que
       8 >= 8 -> TRUE // menor ou igual
       9 <= 7 -> FALSE // maior ou igual
       5 == 5 -> TRUE // igualdade
       4 != 4 -> FALSE // diferença

Operadores relacionas de identidade:

 * Para saber os tipos  e valores são identicos usamos o  **===**

        5 == 5 -> TRUE //
        5 == '5' -> TRUE //
        5 === '5' -> FALSE //


Operadores logicos em javascript:

        ! -> negação
        && -> conjução 
        || -> disjunção

 * Operador de negação:

        ! True -> False
        ! False -> True

* Operador de conjução:

        True && True - > True
        True && False -> False
        False && True -> False
        False && False -> False

* Operador de disjunção:

        True || True - > True
        True || False -> True
        False || True -> True
        False || False -> False

        
  *  Exemplos de operadores logicos:

        
        
                idade >== 15 && idade <= 17 // a idade está entre 15 e 17

                estado == "RJ" || estado == "SP" // O estado é Rj ou SP

                salario > 1500 && sexo <= "M" // o salrio é acima de 1500 e não é homem ?

* Ordem de precendencia :

        () ** /  // POSSUI A ORDEM 
        > < >= // QUEM APARECER PRIMEIRO
        ! // PRIMEIRO A NEGAÇÃO
        && // SEGUNDO A CONJUNÇÃO
        || // TERCEIRO A DISJUNÇÃO


Operadores ternarios:

* São chamados de operadores porque possuim três partes;

ex:
                
        teste ? teste : teste


Exemplo pratico:

        > var media = 5.5
        > media >= 7.0 ? "aprovado" : "Reprovado"
        'REPROVADO'

        // Exemplo de par ou impar

        > var x = 8
        > res = x% 2 == 0 ? "par": "impar"

        // Exmplo de idade

        > var idade = 19 
        > var r = idade >= 18 ? "Maior" : "Menor"


<a id="manipulando-dom"></a>
#  Entendendo e Manipulando a DOM 



O que é o Document Object Model ou DOM ?
  É um que conjunto de objetos dentro do navagador
 
Vamos aprender a criar uma arvore DOM

        **window**  - janela do navegador
                * location -> localização do seu site
                * document -> Documento autUAL -> html a parte de html do site  
                * history -> que vai guardando o de onde veio para aonde vai


Alguns exemplo de usar a DOM 


        window.document.write('ola Mundo')

        window.document.write(window.document.charset) // o tipo 

        window.document.write(window.navigator.appName) // Qual o navegador atual

        window.document.write(window.document.URL)// qual a minha url

Vamos manipular os elementos da DOM :

* Por marca:
  * para usar por marca: **getElementsByTagName()** 

        var corpo = window.document.body

        // pega o primeiro paragrafo como se fosse em uma lista
        var p1 = document.getElementsByTagName('p')[1]
        
        // printando na tela
        window.document.write('Está escrito assim: ' + p1.innerText)  

        // trocar a cor de uma paragrafro pelo getElementsByTagName
        p1.style.color = 'black'

        // Troca a cor de do body pelo js 
        corpo.style.background = 'black'

        // Escreve em outra parte do documento o que está a tag completa
        document.write(p1.innerHTML) 
        // pega o texto da tag e escreve em outra parte do documento 
        document.write(p1.innerHTML)

* Por ID:
 * para usar o id: **getElementsById()**

        //para pegar o tag pelo id 
        var d  = document.getElementById('msg')

        
        d.style.background = 'black'
        d.innerText ='Estou aguardando...'

        // //window.document.write('Está escrito assim: ' + p1.innerText)  
        // //p1.style.color = 'black'
        // //corpo.style.background = 'black'
        
        // document.write(p1.innerHTML)

       

* Por nome:
 * para usar o nome: **getElementsByName()**

        // para pegar a tag pelo name
        var d = document.getElementsByName('msg')[0]
        d.style.background = 'black'

* por Classe:
 * para usar o classe: **getElementsByClassName()**

        // para pegar a tag pela classe
        var d = document.getElementsByClassName('msg')[0]
        d.style.background = 'black'
        document.write(d.innerHTML)

* por Seletor: **querySelector()**:

        // para usar como ID
        var d = document.querySelector('div#msg')
        //d.style.background = 'white'

        // por class 
        var d  =document.querySelector('div.msg')
        d.style.background = 'black'

Eventos DOM   

Exercicio 1 de eventos DOM 

 * Estilo do exercico em css

        
        <style>
                div#area {
                font: normal 20pt Arial;
                background: yellowgreen;
                color: antiquewhite;
                width: 200px;
                height: 200px;
                line-height: 200px;
                text-align: center;
                }
        </style>

 * codigo html do exercicio  
        
        <div id="area" >
                Interaja...
        </div>

 * codigo javascript do exercicio

        Forma dois 
        // pega o elemento pelo ID
        var a  = document.getElementById("area");
        // Pega o evento do elemnte de clicar
        a.addEventListener("click", clicar);

        // Pega o evento do elemento de entra na area com o mouse
        a.addEventListener("mouseenter",entra);

        // Pega o evento do elemento de sair da area com o mouse
        a.addEventListener("mouseout",sair);

        //faz a função de se clicou na area com o mouse muda a mensagem e a cor
        function clicar() {        
            a.innerText = "Clicou!"
            a.style.background = 'red';
        }

        // faz a função de se entrou na area com o mouse muda a mensagem
        function entra() {
            var a = document.getElementById("area");
            a.innerText = "Entrou"
        }

        // faz a função de se sair da area com o mouse muda a mensagem e a cor
        function sair() {
            a.innerText = "Sair!"
            a.style.background = 'green';
        }



 Exercicio 2 de eventos DOM 

*  estilo do site simples 

        <style>
                body{
                font: normal 18pt Arial;
                }

                input{
                font: normal 18pt Arial;
                width: 100px;
                }

                div#res{
                margin-top: 20px;
                }

        </style>

* Algoritmo do site e o codigo js 

        <h1>Somando Valores</h1>
        <input type="number" name="txtn1" id="txtn1"> +
        <input type="number" name="txtn2" id="txtn2">

        <input type="button" value="Somar" onclick="somar()">
        <br>
        <div id="res"></div>
        
        // Codigo javascript 
        function somar(){
                //pega os elemento pelo ID
                var tn1 = document.getElementById("txtn1");

                // pega o elemento pelo css selector
                var tn2 = document.querySelector("input#txtn2");

                // faz o calculo
                var n1= Number(tn1.value);
                var n2 = Number(tn2.value);
                var s = n1 + n2

                //retorna o valor da soma na div com id='res'
                var res = document.getElementById("res");
                res.innerHTML = `A soma entre ${n1} e ${n2} é igual a  <strong>${s}</strong>`
        }   

<a id="condicoes-js"></a>
# Condições em JavaScript
 
 * Condição Simples em JavaScript

        // Condição simples em JavaScript
        var vel = 78.2
        console.log(`A velocidade do seu carro é ${vel}km/h`)
        if (vel > 60){
                console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
        }
        console.log(`Diriga sempre usando o cinto de segurança!`)

 * Condição composta

        //Exemplo de condição composta
        var pais = "EUA"
        console.log(`Vivivendo em ${pais}`)
        if (pais == "BRA" || pais == "Brasil"){
                console.log(`você é brasileiro!)
        }else {
                console.log(`Estrangeiro`)
        }

 * Condicão Aninhada

        // Exemplo de condição aninhada 
        var idade = 12
        if(idade < 16){
                console.log(`Nõa vota`)
        }else if(idade < 18  || idade >= 65){
                console.log(`voto opcioanl`)
        }else {
                console.log(`voto obrigatorio`)
        }

   1. Exemplo 2 de condição aninhada,e como pegar a hora atual

                var agora = new Date()
                var hora = agora.getHours()
                console.log(`Agora são exatamente ${hora} horras.`)
                if (hora < 12){
                        console.log(`Bom dia`)
                }else if (hora <= 18){
                        console.log(`Boa Tarde`) 
                } else{
                        console.log(`Boa noite`)
                }

 * Condição múltipla

   - Exemplo de uso da condição multipla

                switch(expressao){
                        case valor 1:
                }

<a id="estrutura-repeticao"></a>
## ESTRUTURAS DE REPETIÇÃO EM JS 


* Estrutura While - é a estrutura com teste logico no inicio 

        while(condição){

        }

   1. Para escrever o codigo 500 vezes 


                var c =1
                while(c <= 6){
                        console.log(`Passo ${c}?`)
                        c++
                }


* Estrutura *do while* com teste logico no final

        do{
 
        }while(condicão)

  1. para executar o teste com o *do while*:
        
                var x = 1
                do {
                        console.log(`Passo ${x}`)
                        c++
                }
        
* Estrutura de repetição *for*:

        for (inicio: teste logico:incremento){

        }

        // Exemplo

        for (var c=1;c<=10;c++){

        }

### Exercicio de estrutura de repetição:
        
* While:
        
        var c = 1
        while (c <=10){
                console.log(c)
                c++
        }

* for:

        for(var c =1;c <=5;c++){
                console.log(c)
        }


<a id="avancado-estudos"></a>
## Modulo F - Avançando os estudos em JavaScript

 * Variaveis Compostas
 * Uso de funções e eventos
 * Passagem de Paramentos 
 * Exercicio propostos
 * Procimos Passos


#### Variaveis Compostas

  - **variaveis simples**: só conseguem armazenar um valor por vez. 
  - **variaveis compostas**: devem ser capazes de armazenar vários valores em uam mesma estrutura. 

#### Exemplo de vertor em JS:

        let num = [5,2,1]

Para adicionar mais um valor ao vetor 

        //  Estou dizendo para colocar um valor na posição 3, 
        // mas como não existe vai ser criada 
        num[3] = 6

        #resposta [5,2,1,6]

* Também pode usar o elemento **push** que tem adiciona:

        num.push(7)

        # saida [5,2,1,6]

Para saber o comprimento de uma array **length**

        num.length

Para colocar os indecis de um vetor em ordem crescentr **sort()**

        num.sort()
        
        # saida 1,2,5,6

Exemplos para usar vetor em JS

        let num = [5,8,2,9,3]

        console.log(`O vetor tem ${num.length} posicoes`)

 * Exemplo de mostra o vetor na tela sem os **[]**:

        let num = [5,8,2,9,3]

        // Forma padrão antiga
        for (let pos=0;pos<num.length;pos++){
                console.log(num[pos])
        } 

* Outra maneira de simplificar o codigo 

        let num = [5,8,2,9,3]

        //Só funciona para Array e Objetos 

        for (let pos in num){
                console.log(num[pos])
        }

* Buscando valores dentro do vetor **indexOf**:


1. Quando busca um valor dentro de um vetor que existe:

        let num = [5,8,2,7,9,3]
        num.indexOf(7) 3 -> retorna posição


2. Quando busca um valor que não existe no vetor:


        num.indexOf(4) -1 -> retorna -1 para dizer que não existe 

 Exemplo de busca:
        
        let num = [5,8,2,7,9,3]

        pos = num.indexOf(7)

        if (pos == -1){
                console.log(`não foi encontrado`)
        }else{
                console.log(`elemento encontrado no indice ${pos}`)
        }

<a id="funcoes-eventos"></a>
## Uso de funções e eventos

**Função**: são ações executadas assim que são chamadas ou em decorrência de algum evento.

* Como seria uma função em js com parametro veja o exemplo abaixo:

        function acao(param){
                return res 
        }

        //Chamando a função 
        acao(5)// passando 5 como paramentro 

Exemplo simples se o numero é par ou impar 


        function parimpar(n){
                if (n % 2 == 0){
                        return 'par'
                }else{
                        return 'impar'
                }
        }

        // chamando a função
        let res = parimpar(11)

Exemplo de soma:

        function soma(n1=0,n2=0){
                
                //let res = 
                return n1 + n2
        }

        console.log(soma(2,5))

Exemplo de fATorial

        function fATorial(n){
                let fat = 1
                for (let c = n; c> 1; c--){
                        fat *= c
                }
                return fat
        }

        console.log(fATorial(5))

Exemplo de Recusividade -> quando uam função chama ela mesmo dentro dela

        function fatorial(n){
                if(n == 1){
                        return 1
                }else{
                        return n * fatorial(n-1)
                }
        }

        console.log(fatorial(5))

<a id="proximos-passos"></a>
#### Quais são os proximos passos ?


* functions
* **objetos** a proxima Aula
* modularização
* RegEx
* JSON
* AJAX
* NodeJS

Para declara um objeto em JS usamos as **{}**

ex: 
        
        let amigo = {
                nome:'Jose',
                sexo:M',
                peso:45.4,
                engorda(p=0){
                        console.log("Engordou")
                        this.peso += p
                }

        }

        amigo.engorda(2)
        console.log(`${amigo.nome} pesa ${amigo.peso}`)

        

