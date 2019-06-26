var btnElement = document.querySelector("#botao");

btnElement.onclick = function() {
    var inputElement = document.querySelector("#pesquisa");
    var pesq = inputElement.value;

    alert(pesq);
    window.open("https://g1.globo.com/busca/?q=" + pesq);
}