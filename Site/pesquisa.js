var inputElement = document.querySelector("#pesquisa");
var btnElement = document.querySelector("#botao");

var sitesConfiaveis = [
	"www.estadao.com.br",
	"diariodonordeste.verdesmares.com.br",
	"g1.globo.com",
	"veja.abril.com.br"
];

btnElement.onclick = function() {
	var site = inputElement.value.split("/")[2];

	for(siteConf of sitesConfiaveis){
		if(siteConf === site){
			alert("Site é confiável.\nA notícia deve ser também.");
			return;
		}
	}

	alert("Site não é confiável.\nA notícia é duvidosa.");
}
