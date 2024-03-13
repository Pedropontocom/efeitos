//Efeito Esconder
$("#btnHide").click(function () {
    $("#p1").hide();
    $("#btnToggle").html("Mostrar");
});
$("#btnShow").click(function (){
    $("#p1").show();
    $("#btnToggle").html("Esonder");
});
$("#btnToggle").click(function () {
    $("#p1").toggle();

    if($("#p1").css("display") == "none"){
        $(this).html("Mostrar");
    }
    else{
        $(this).html("Esconder");
    }
    /* 
        Passando um parametro (nome da propriedade css)
        O método retorna o valor dessa propriedade
        $("#p1").css("display")

        Passando dois parâmetros (nomeDaPropriedade, novoValor)
        O método vai atualizar o valor da propriedade css
        $("#p1").css("display", "block")
    */
});

//Efeito Fade
$("#btnFadeOut").click(function () {
    $("#p2").fadeOut();
    $("#btnFadeToggle").html("Mostrar");
});
$("#btnFadeIn").click(function (){
    $("#p2").fadeIn();
    $("#btnFadeToggle").html("Esonder");
});
$("#btnFadeToggle").click(function () {
    $("#p2").fadeToggle(function(){
        if($(this).css("display") == "none"){
            $("#btnFadeToggle").html("Mostrar");
        }
        else{
            $("#btnFadeToggle").html("Esconder");
        }
    });
});

//Efeito Slide
$("#btnSlideUp").click(function () {
    $("#p3").slideUp();
    $(this).prev().html("Mostrar");
});
$("#btnSlideDown").click(function (){
    $("#p3").slideDown();
    $(this).pre.html("Esonder");
});
$("#btnSlideToggle").click(function () {
    $("#p3").slideToggle(function(){
        if($(this).css("display") == "none"){
            $("#btnSlideToggle").html("Mostrar");
        }
        else{
            $("#btnSlideToggle").html("Esconder");
        }
    });
});