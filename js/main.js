function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://iagob7ima.github.io/Corona/");
    //window.location.href = "https://iagob7ima.github.io/M.A.S.T./";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("página carregad");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*function soma(n1, n2) {
    return n1 + n2;
}
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));

alert(soma(5, 10));*/

/*var d = new Date();
alert(d.getHours());*/

/*var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}*/

/*var count = 5;
while (count < 10) {
    console.log(count);
    count = count + 1;
    // ou count ++;
}*

/*var idade = prompt("Qual sua idade?")
if (idade > 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};*/


/*consolevar frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxas" }]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta.nome);
alert(fruta.cor); * /
/*var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop("");*/


/*console.log(lista);
console.log(lista.toString()[6]);
console.log(lista.join("_"));*/

/*var nome = "Iago Batista";
var idade = 25;
var idade2 = 10;
var frase = "Barcelona é o maior time do mudo"
alert(nome + " tem " + idade + " anos de idade.");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Barcelona", "Flamengo"));
alert(frase.replace("Barcelona", "Flamengo"));*/