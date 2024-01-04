function adicionar(event) { 
    event.preventDefault();
    var nome = document.getElementById("nome")
    var apelido = document.getElementById("apelido")
    var idade = document.getElementById("idade")
    var musica = document.getElementById("musica")
    var cor = document.getElementById("cor")
    var comida = document.getElementById("comida")
    var cinema = document.getElementById("cinema")
    var amizade = document.getElementById("amizade")
    var lugar = document.getElementById("lugar")
    var inspiraçao = document.getElementById("inspiraçao")
    var louco = document.getElementById("louco")
    var sonho = document.getElementById("sonho")
    var profissao = document.getElementById("profissao")
    var trabalho = document.getElementById("trabalho")
    var desfazer = document.getElementById("desfazer")
    var suportar = document.getElementById("suportar")

    var bd = JSON.parse(localStorage.getItem("BancoDeDados"))

    if (bd == null) {
        localStorage.setItem("BancoDeDados", "[]")
        bd = [];
    }

    var info = {
        nome: nome.value,
        apelido: apelido.value,
        idade: idade.value,
        musica: musica.value,
        cor: cor.value,
        comida: comida.value, 
        cinema: cinema.value,
        amizade: amizade.value,
        lugar: lugar.value,
        inspiraçao: inspiraçao.value,
        louco: louco.value,
        sonho: sonho.value,
        profissao: profissao.value,
        trabalho: trabalho.value,
        desfazer: desfazer.value,
        suportar: suportar.value
    }

    bd.push(info)

    localStorage.setItem("BancoDeDados", JSON.stringify(bd))
    alert("Registro concluido!!")

    window.location.href = "../historia/index.html"

}

const nome = JSON.parse(localStorage.getItem("BancoDeDados"))[0].nome;
const apelido = JSON.parse(localStorage.getItem("BancoDeDados"))[0].apelido;
const idade = JSON.parse(localStorage.getItem("BancoDeDados"))[0].idade;
const musica = JSON.parse(localStorage.getItem("BancoDeDados"))[0].musica;
const cor = JSON.parse(localStorage.getItem("BancoDeDados"))[0].cor;
const comida = JSON.parse(localStorage.getItem("BancoDeDados"))[0].comida;
const cinema = JSON.parse(localStorage.getItem("BancoDeDados"))[0].cinema;
const amizade = JSON.parse(localStorage.getItem("BancoDeDados"))[0].amizade;
const lugar = JSON.parse(localStorage.getItem("BancoDeDados"))[0].lugar;
const inspiraçao = JSON.parse(localStorage.getItem("BancoDeDados"))[0].inspiraçao;
const louco = JSON.parse(localStorage.getItem("BancoDeDados"))[0].louco;
const sonho = JSON.parse(localStorage.getItem("BancoDeDados"))[0].sonho;
const profissao = JSON.parse(localStorage.getItem("BancoDeDados"))[0].profissao;
const trabalho = JSON.parse(localStorage.getItem("BancoDeDados"))[0].trabalho;
const desfazer = JSON.parse(localStorage.getItem("BancoDeDados"))[0].desfazer;
const suportar = JSON.parse(localStorage.getItem("BancoDeDados"))[0].suportar;


var historia = `Um garoto perdido em suas emoções, o que você tá fazendo aqui, ${nome}? \n
                ${nome} - Nada demais, só andando... \n
                Me diga mais sobre você... No que tava pensando? \n 
                ${nome} - Em uma música. \n
                Qual? \n
                ${nome} - ${musica} \n 
                O que ela te lembra?! parece ser muito importante... \n
                ${nome} - Ela me lembra um lugar que eu sempre quis ir.... \n
                Qual?? \n
                ${nome} - ${lugar} Melhor local existente no planeta terra. \n
                Sério? realmente, me parece um bom lugar. \n 
                ${nome} - Esse lugar me lembra uma amizade antiga, ele amava esse lugar. \n 
                Que amigo? \n
                ${nome} - ${amizade}. Um bom amigo. Ele tem minha idade... \n
                Você tem quantos anos? \n
                ${nome} - ${idade}. \n
                Ummm, você ainda é muito novo... Tem algum sonho? \n
                ${nome} - Tenho. ${sonho}. \n
                Não me parece algo muito extravagante. \n 
                ${nome} - Não é. Você gosta de filmes? \n
                Gosto! E você? tem algum favorito? \n 
                ${nome} - Gosto sim, tenho! ${cinema}. Amo muito! \n
                Nunca assisti. \n 
                ${nome} - O que?? Assista. É maravilhoso. \n
                Ok! Vou assistir. \n 
                ${nome} - Você tem algum apelido? \n 
                Tenho sim, PC. E você? \n 
                ${nome} - Também... ${apelido} \n 
                Posso te chamar por ele? \n
                ${nome} - Sim!! \n 
                Certo. Me fala algo louco que você sempre quis fazer ${apelido}. \n 
                ${apelido} - ${louco}. Acredita?! \n 
                Acredito. Qual profissão você gostaria de seguir? \n
                ${apelido} - ${profissao} \n
                Uau. Onde você gostaria de trabalhar? \n
                ${apelido} - ${trabalho} \n
                Conversar com você é muito bom. \n
                Tá afim de jogar um jogo? \n 

`
    var element = document.querySelector(".historia")
    var text = document.createTextNode(historia)
    console.log(text)
    element.appendChild(text)


