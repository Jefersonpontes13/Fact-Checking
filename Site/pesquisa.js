var entrada = document.getElementById("texto-busca");
var botao = document.getElementById("botao-busca");

function buscar(){
	window.open("https://g1.globo.com/busca/?q="+entrada.value);
}
