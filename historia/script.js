const apelido = JSON.parse(localStorage.getItem("BancoDeDados"))[0].apelido;
const desfazer = JSON.parse(localStorage.getItem("BancoDeDados"))[0].desfazer;
const cor = JSON.parse(localStorage.getItem("BancoDeDados"))[0].cor;
const comida = JSON.parse(localStorage.getItem("BancoDeDados"))[0].comida;
const suportar = JSON.parse(localStorage.getItem("BancoDeDados"))[0].suportar;
const inspiraçao = JSON.parse(localStorage.getItem("BancoDeDados"))[0].inspiraçao;

var finalHistoria = `Uau, você conseguiu escolher o copo certo, parabéns! Me conta mais sobre você... Tem algo que você queria desfazer? \n
            ${apelido} - ${desfazer} \n
            Sério? Hum. Me diz, qual sua cor favorita? \n
            ${apelido} - ${cor}  \n 
            Uau, e sua comida favorita? \n
            ${apelido} - ${comida} \n
            Nossa, gosto muito. Me fala alguém que  você não suporta \n
            ${apelido} - ${suportar} \n
            Alguém que você se inspire muito... \n
            ${apelido} - ${inspiraçao} \n
            Você parece alguém muito interessante... \n
            ${apelido} - Percebi que você não falou quase nada sobre você... \n
            Quer saber o que? \n
            ${apelido} - tudo! \n
            Certo. CLica no botão e você vai descobrir algumas coisas... \n
`

    var finalClasse = document.querySelector(".historiaFinal")
    var finalText = document.createTextNode(finalHistoria)
    finalClasse.appendChild(finalText)