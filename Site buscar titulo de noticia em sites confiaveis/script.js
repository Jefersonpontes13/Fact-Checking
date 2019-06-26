
async function not1(noticia1){
	window.open(noticia1);
}

function buscar(){
	var noticia = $('#input').val();
	var noticia1 = 'https://g1.globo.com/busca/?q=' + noticia;
	var noticia2 = 'https://cse.google.com/cse?cx=005913688313154739324%3A0mtovcziiwg&ie=UTF-8&q='+ noticia;
	var noticia3 = 'https://busca.estadao.com.br/?q=' + noticia;
	var noticia4 = 'https://diariodonordeste.verdesmares.com.br/servicos/busca/buscar-7.3599863?q=' + noticia;
	window.open(noticia2);
	not1(noticia1);
	
	window.open(noticia3);
	window.open(noticia4);
	//document.location.href = noticia2;
     
}

