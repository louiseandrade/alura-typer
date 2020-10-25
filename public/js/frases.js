$("#botao-frase-id").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


function fraseAleatoria(){
    $("#spinner").toggle();
    $.get("http://192.168.0.83/frases", trocaFraseAleatoria) 
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){ //sempre escondendo o spinner
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    autalizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase() {
    var fraseId = $("#frase-id").val();
    var dados = {id : fraseId}; //objeto JS que guarda a id

    //objeto como segundo parâmetro
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto); //cuidado, texto com "o" no final 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}
