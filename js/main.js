function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado de novo";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/RamonFern");
    //window.location.href = "https://github.com/RamonFern";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = ""Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}






/*
function soma(n1, n2){
    return n1 + n2;
}


var validar;
function validarIdade(idade){
    
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar
}

var idade = prompt("Qual sua idade?");
validarIdade(idade);
console.log(validar);
alert(soma(2,3));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
*/

//alert(setReplace("Vai Argentina", "Argentina", "Brasil"));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

var cont;
for(cont =0; cont <= 5; cont++){
    alert(cont);
}


var count = 0;
while(count <= 5){
    console.log(count);
    //alert(count);
    count++;
}


var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};

var frutas = [{nome:"jaca", cor:"amarela encardida"}, {nome:"manga", cor:"vermelha"}]
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"jaca", cor:"amarela encardida"}
console.log(fruta.name);
alert(fruta.cor);

var lista = ["maçã", "pêra", "laranja"];
lista.push("manga");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/
/*
var nome = "Ramon Fernandes";
var idade = 38;
var idade2 = 23;
var frase = "Vasco é o melhor time do mundo!";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("melhor", "pior"));
console.log(frase.toUpperCase());
alert(frase.replace("melhor", "pior"));
*/



