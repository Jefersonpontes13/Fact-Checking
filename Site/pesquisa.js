<<<<<<< HEAD
var btnElement = document.querySelector("#botao");

btnElement.onclick = function() {
    var inputElement = document.querySelector("#pesquisa");
    var pesq = inputElement.value;

    alert(pesq);
    window.open("https://g1.globo.com/busca/?q=" + pesq);
}
=======
var entrada = document.getElementById("texto-busca");
var botao = document.getElementById("botao-busca");

function buscar(){
	window.open("https://g1.globo.com/busca/?q="+entrada.value);
}
>>>>>>> 139d96a4b3067135052964110f8793a5571cb9ba
