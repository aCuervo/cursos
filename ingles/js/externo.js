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
        case "mod02": arrayFinal = arrayComun.concat([
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
        case "mod03": arrayFinal = arrayComun.concat([
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
        case "mod04": arrayFinal = arrayComun.concat([
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
        case "mod05": arrayFinal = arrayComun.concat([
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
        case "mod06": arrayFinal = arrayComun.concat([
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
        case "mod07": arrayFinal = arrayComun.concat([
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
        case "mod08": arrayFinal = arrayComun.concat([
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
        case "mod09": arrayFinal = arrayComun.concat([
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
        "img/comunes/bigBen.jpg",
		"img/comunes/carga.svg",
        "img/comunes/check.svg",
        "img/comunes/contraportada.svg",
		"img/comunes/definicion.svg",
		"img/comunes/exclamacion.svg",
		"img/comunes/exclamacionBlanca.svg",
        "img/comunes/keep.png",
        "img/comunes/logo.svg",
        "img/comunes/londonLast2.png",
        "img/comunes/portada.svg",
		"img/comunes/sabiasQue.svg",
        "img/comunes/thumbUp.svg",
        "img/comunes/tick_menu.svg",
        "img/comunes/towerB.jpg",
    ];
    var arrayFinal = null;
    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([

        ]);
            break;*/
        case "mod01":
            arrayFinal = arrayComun.concat([
                "img/mod01/afternoon.svg",
                "img/mod01/bye.png",
                "img/mod01/cabin.png",
                "img/mod01/evening.svg",
                "img/mod01/hello.svg",
                "img/mod01/john.svg",
                "img/mod01/mary.svg",
                "img/mod01/meetYou.jpg",
                "img/mod01/morning.svg",
                "img/mod01/night.svg",
                "img/mod01/no.jpg",
                "img/mod01/photo.jpg",
                "img/mod01/skull.png"]);
            break;
        case "mod02":
            arrayFinal = arrayComun.concat([
                "img/mod02/girlFlower.png",
                "img/mod02/owlClock.svg",
                "img/mod02/reloj.jpg",
                "img/mod02/uncountable.jpg"]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



