//Identifica a frase escrita no paragrafo. 
var frase = $(".frase").text(); 
//Pega a quantidade de palavras da frase.
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

//Evento de clique do campo de escrita e contagem de palavras e caracteres.
var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();

    //O S+ é uma expressão regular que busca espaço vazios.
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function() {
    var cronometroID = setInterval(function() {
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
            console.log(tempoRestante);
        }
    }, 1000);
});