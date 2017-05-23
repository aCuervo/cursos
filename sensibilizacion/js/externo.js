function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([

        ]);
            break;   */
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
        case "mod01": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
			"css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod02": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod04": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod06": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod08": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod09": arrayFinal = arrayComun.concat([
        "css/jointJS/joint.min.css",
        "css/bootstrap/bootstrap.min.css",
        "css/flexSlider/flexslider.css",
        "css/slideshow/pgwslideshow.min.css",
        "css/crossword/base.css",
        "css/wordsearch/style.css",
        "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}
function getArrayImagenes(modulo) {
    var arrayComun = [
        "img/comunes/anilla.svg",
        "img/comunes/aviso.svg",
        "img/comunes/avisoBlanco.svg",
		"img/comunes/carga.svg",
        "img/comunes/check.svg",
        "img/comunes/contraportada.svg",
		"img/comunes/definicion.svg",
		"img/comunes/exclamacion.svg",
		"img/comunes/exclamacionBlanca.svg",
        "img/comunes/logo.svg",
        "img/comunes/portada.svg",
		"img/comunes/sabiasQue.svg",
        "img/comunes/thumbUp.svg",
        "img/comunes/tick_menu.svg",
    ];
    var arrayFinal = null;
    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([

        ]);
            break;*/
        case "mod01":
            arrayFinal = arrayComun.concat([
                "img/mod01/00.jpg",
                "img/mod01/01.jpg",
                "img/mod01/02.jpg",
                "img/mod01/03.jpg",
                "img/mod01/04.jpg",
                "img/mod01/05.jpg",
                "img/mod01/07.jpg",
                "img/mod01/08.jpg",
                "img/mod01/09.jpg",
                "img/mod01/10.jpg",
                "img/mod01/11.jpg",
                "img/mod01/13.jpg",
                "img/mod01/14.jpg",
                "img/mod01/15.jpg",
                "img/mod01/16.jpg",
                "img/mod01/17.jpg",
                "img/mod01/18.jpg",
                "img/mod01/19.jpg",
                "img/mod01/19b.jpg",
                "img/mod01/diagrama.png",
                "img/mod01/ecosistema.png",
                "img/mod01/flujo.png",
                "img/mod01/luzCalor.png"]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



