var btnElement = document.querySelector("#botao");
var sitesConfiaveis = [
	"www.estadao.com.br",
	"diariodonordeste.verdesmares.com.br",
	"g1.globo.com",
	"veja.abril.com.br"
];

btnElement.onclick = function() {
    var inputElement = document.querySelector("#pesquisa");
    var pesq = inputElement.value;

    alert(pesq);
    window.open("https://g1.globo.com/busca/?q=" + pesq);
}
