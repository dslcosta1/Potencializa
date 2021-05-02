
var exercicio = prompt("Quantos minutos de exercício você faz em média por dia?")

var cigarro = prompt("Quantos cigarros você fuma em média por dia?")

exercicio = parseInt(exercicio)
cigarro = parseInt(cigarro)
var anosDeVida = (30 + exercicio - cigarro) 

alert("Você vivera até: "+ anosDeVida)