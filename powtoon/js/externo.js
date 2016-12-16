function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
        case "mod01": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
			"js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"


        ]);
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
        "css/jquery/jquery-ui.theme.css"
    ];
    var arrayFinal = null;

    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([
		
        ]);
            break;*/
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}
function getArrayImagenes(modulo) {
    var arrayComun = [
		"img/comunes/carga.svg",
        "img/comunes/contraportada.svg",
		"img/comunes/definicion.svg",
		"img/comunes/exclamacion.svg",
		"img/comunes/exclamacionBlanca.svg",
        "img/comunes/logo.svg",
        "img/comunes/portada.svg",
		"img/comunes/sabiasQue.svg",        
        "img/comunes/tick_menu.svg"
    ];
    var arrayFinal = null;
    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([

        ]);
            break;*/
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



       