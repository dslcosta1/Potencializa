var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3

while(tentativas > 0){
    var chute = parseInt(prompt("Entre com um número de 0 à 10"))
    if(numeroSecreto == chute){
        document.write("<h2>Acertou!</h2>")
        break
    }else if(chute > numeroSecreto){
        document.write("<h2>O número secreto é menor</h2>")
        tentativas = tentativas -1
    }else if(chute < numeroSecreto){
        document.write("<h2>O número secreto é maior</h2>")
        tentativas = tentativas -1
    }
}


if(chute != numeroSecreto){
    document.write("<h2>Suas Tentativas acabaram. O número secreto era: " + numeroSecreto + "</h2>")
}