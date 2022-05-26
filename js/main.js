
function clicou(){
    document.getElementById("agradecer").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecer"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
   /* open é para abrir em outra guia*/ window.open("https://github.com/Luuisfeeh");
     /* location.href é para abrir na mesma guia*///window.location.href = "https://github.com/Luuisfeeh";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Pode tirar esse mouse dai!!"; 
    elemento.innerHTML = "Pode tirar esse mouse dai!!";
    //alert("trocar texto")
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma (n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
          validar = true;
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade? ");
console.log(validaIdade(idade))
*/
//alert(soma(5,10));


/*
var d = new Date();
    alert(d.getDay());
    alert(d.getHours());
    alert(d.getMinutes())
*/

/*
var count
for(count=0; count <= 7; count++){
    alert(count)
}
*/

/*
var count = 0;
while (count <= 10){
    console.log(count);
    count ++ ;
}
*/
/*
var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};
*/


/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxo"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); /*push é para adicionar item na lista*/
//lista.pop(); /* pop é para remover um item da lista*/
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//alert(lista[1])

//var nome = "Luis Felipe"
//var idade = 18;
//var idade2 = 19;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"))