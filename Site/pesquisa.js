var inputElement = document.getElementById("pesquisa");
var pesq = inputElement.innerText;

var btnElement = document.getElementById("botao");

btnElement.onclick = function() {
    alert(pesq)
    window.location = "https://g1.globo.com/busca/?q=";
}