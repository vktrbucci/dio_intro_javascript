// alert("Olá Mundo do arquivo JavaScript separado!!");

var nome = "Magrão";
// alert("Dá o papo " + nome);

var pinga = 51;
var furunfa = 69;
// alert(pinga + furunfa);

var frase = "Afeganistão é um excelente lugar para passar férias."
console.log(frase.replace("Afeganistão", "Polônia"))
console.log(frase.toUpperCase())

var listaFrutas = ["pêra", "uva", "maçã"]
console.log(listaFrutas[0])
listaFrutas.push("salada mista")
// listaFrutas.pop()
console.log(listaFrutas)
console.log(listaFrutas.length)
// var listaFrutasReversa = listaFrutas.reverse()
// console.log(listaFrutasReversa)

console.log(listaFrutas.toString())
console.log(listaFrutas.join(", "))

var fruta = {
    "nome": "maçã",
    "cor": "vermelha"
}

console.log(fruta)
console.log(fruta["nome"])
// alert(fruta.cor)

// Condicionais

// var idade = prompt("Qual sua idade?")
// if (idade >= 18) {
//     alert("Maior de idade")
// } else if (idade > 0) {
//     alert("Menor de idade")
// } else {
//     alert("Nem nasceu ainda, catioro")
//     console.log(idade)
// }

console.log(listaFrutas)

var count = 0
while (count < listaFrutas.length) {
    console.log(listaFrutas[count])
    count++
}

for (let index = 0; index < listaFrutas.length; index++) {
    const element = listaFrutas[index];
    console.log(element)
}

var d = new Date()
var dia = d.getDate()
var mes = d.getMonth() + 1
var ano = d.getFullYear()
alert(dia + "/" + mes + "/" + ano)