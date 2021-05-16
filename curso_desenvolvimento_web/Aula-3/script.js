var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

var operacao = parseInt(prompt("Selecione a operação: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Exponecial"))

var resultado

if (operacao == 1){
    resultado =  primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 2) {
    resultado =  primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}else if(operacao == 3) {
    resultado =  primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
}else if(operacao == 4) {
    resultado =  primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}else if(operacao == 5) {
    resultado = 1
    var segundoValorSalvo = segundoValor
    while( segundoValor > 0 ){
        resultado = resultado * primeiroValor
        segundoValor = segundoValor - 1
    }
    document.write("<h2>" + primeiroValor + " ^ " + segundoValorSalvo + " = " + resultado + "</h2>")
}else{
    document.write("<h2> Erro </h2>")
}

