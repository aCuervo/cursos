function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"
    ];
    var arrayFinal = null;

    switch (modulo) {
        case "mod01":
            arrayFinal = arrayComun.concat([
                "js/jointJS/lodash.min.js",
                "js/jointJS/backbone-min.js",
                "js/jointJS/joint.min.js",
                "js/wordsearch/wordfind.js",
                "js/wordsearch/wordfindgame.js",
                "js/bootstrap/bootstrap.min.js"]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}

function getArrayCSS(modulo) {
    var arrayComun = [
        "css/especifico.css",
        "css/colores.css",
        "css/animate/animate.css",
        "css/jquery/jquery-ui.structure.css",
        "css/jquery/jquery-ui.theme.css"];
    var arrayFinal = null;

    switch (modulo) {
        case "mod01":
            arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
			"css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
            ])
            break;
        default: arrayFinal = arrayComun;;
    }
    return arrayFinal;
}
function getArrayImagenes(modulo) {
    var arrayComun = [
        "img/comunes/carga.svg",
        "img/comunes/contraportada.svg",
        "img/comunes/definicion.svg",
        "img/comunes/espiga.svg",
        "img/comunes/exclamacion.svg",
        "img/comunes/exclamacionBlanca.svg",
        "img/comunes/logo.svg",
        "img/comunes/madalena.svg",
        "img/comunes/portada.svg",
        "img/comunes/rodillo.png",
        "img/comunes/sabiasQue.svg",
        "img/comunes/thumbUp.svg",
        "img/comunes/tick_menu.svg"
    ];
    var arrayFinal = null;
    switch (modulo) {
        case "mod01":
            arrayFinal = arrayComun.concat([
                "img/mod01/19.B.jpg",
                "img/mod01/296-1.png",
                "img /mod01/296-2.png",
                "img/mod01/296-3.png",
                "img/mod01/296-4.png",
                "img/mod01/296-5.png",
                "img/mod01/aph.png",
                "img/mod01/apha1.png",
                "img/mod01/apha2.png",
                "img/mod01/apha3.png",
                "img/mod01/apha4.png",
                "img/mod01/aphm1.png",
                "img/mod01/aphm2.png",
                "img/mod01/aphm3.png",
                "img/mod01/aphm4.png",
                "img/mod01/aphm5.png",
                "img/mod01/aphm6.png",
                "img/mod01/aphm7.png",
                "img/mod01/bake.png",
                "img/mod01/bake1.png",
                "img/mod01/bake2.png",
                "img/mod01/bake3.png",
                "img/mod01/bake4.png",
                "img/mod01/bake5.png",
                "img/mod01/bake6.png",
                "img/mod01/bake7.png",
                "img/mod01/bake8.png",
                "img/mod01/bake9.png",
                "img/mod01/bolleria1.png",
                "img/mod01/bolleria2.png",
                "img/mod01/bolleria3.png",
                "img/mod01/bolleria4.png",
                "img/mod01/bolleria5.png",
                "img/mod01/bolleria6.png",
                "img/mod01/corte1.png",
                "img/mod01/corte2.png",
                "img/mod01/corte3.png",
                "img/mod01/corte4.png",
                "img/mod01/corte5.png",
                "img/mod01/ecologico1.png",
                "img/mod01/ecologico2.png",
                "img/mod01/ecologico3.png",
                "img/mod01/ecologico4.png",
                "img/mod01/ecologico5.png",
                "img/mod01/ecologico6.png",
                "img/mod01/fermentadora.png",
                "img/mod01/horneado1.png",
                "img/mod01/horneado2.png",
                "img/mod01/horneado3.png",
                "img/mod01/horneado4.png",
                "img/mod01/horneado5.png",
                "img/mod01/horneado6.png",
                "img/mod01/incompatibilidades.png",
                "img/mod01/mandosBake.png",
                "img/mod01/objetivos.png",
                "img/mod01/p290.png",
                "img/mod01/p307.png",
                "img/mod01/pcanal.png",
                "img/mod01/pcarroshorno.png",
                "img/mod01/pcongelacion.png",
                "img/mod01/pcuchillas.png",
                "img/mod01/pguantesseguridad.png",
                "img/mod01/phorno.png",
                "img/mod01/pmoldes.png",
                "img/mod01/pplana.png",
                "img/mod01/pprofesional.png",
                "img/mod01/ppsulfurizado.png",
                "img/mod01/precocido1.png",
                "img/mod01/precocido2.png",
                "img/mod01/precocido3.png",
                "img/mod01/precocido4.png",
                "img/mod01/precocido5.png",
                "img/mod01/precocido6.png",
                "img/mod01/preparacion.svg",
                "img/mod01/procesos1.png",
                "img/mod01/procesos2.png",
                "img/mod01/procesos3.png",
                "img/mod01/procesos4.png",
                "img/mod01/procesos5.png",
                "img/mod01/procesos6.png",
                "img/mod01/psoporte.png",
                "img/mod01/pto.png",
                "img/mod01/ruedasdentadas.png",
                "img/mod01/salva.png",
                "img/mod01/salvaa1.png",
                "img/mod01/salvaa2.png",
                "img/mod01/salvaa3.png",
                "img/mod01/salvaa4.png",
                "img/mod01/salvaa5.png",
                "img/mod01/salvaa6.png",
                "img/mod01/salvam1.png",
                "img/mod01/salvam2.png",
                "img/mod01/salvam3.png",
                "img/mod01/salvam4.png",
                "img/mod01/ventaPan.png"]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;

}





