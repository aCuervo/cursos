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
        case "mod02":
            arrayFinal = arrayComun.concat([
                "img/mod02/20.jpg",
                "img/mod02/22.jpg",
                "img/mod02/23.jpg",
                "img/mod02/24.jpg",
                "img/mod02/26.jpg",
                "img/mod02/27.jpg",
                "img/mod02/27b.jpg",
                "img/mod02/28.jpg",
                "img/mod02/29.png",
                "img/mod02/30.jpg",
                "img/mod02/31.jpg",
                "img/mod02/32.jpg",
                "img/mod02/33.jpg",
                "img/mod02/33a.jpg",
                "img/mod02/33b.jpg",
                "img/mod02/34.jpg",
                "img/mod02/34b.jpg",
                "img/mod02/35.jpg",
                "img/mod02/36.jpg",
                "img/mod02/37.jpg",
                "img/mod02/38.jpg",
                "img/mod02/39.jpg",
                "img/mod02/40.jpg",
                "img/mod02/41.jpg",
                "img/mod02/42.jpg",
                "img/mod02/43.jpg",
                "img/mod02/44.jpg",
                "img/mod02/45.jpg",
                "img/mod02/46.jpg",
                "img/mod02/47.jpg",
                "img/mod02/48.jpg",
                "img/mod02/49.jpg",
                "img/mod02/50.jpg",
                "img/mod02/51.jpg",
                "img/mod02/51b.jpg",
                "img/mod02/51c.jpg",
                "img/mod02/52.jpg",
                "img/mod02/53.jpg",
                "img/mod02/54.jpg",
                "img/mod02/55.jpg",
                "img/mod02/56.jpg",
                "img/mod02/57.jpg",
                "img/mod02/58.png",
                "img/mod02/59.jpg",
                "img/mod02/60.jpg",
                "img/mod02/62.jpg",
                "img/mod02/63.jpg",
                "img/mod02/65.png",
                "img/mod02/66.jpg",
                "img/mod02/67.jpg",
                "img/mod02/68.jpg",
                "img/mod02/69.jpg",
                "img/mod02/70.jpg",
                "img/mod02/70.jpg",
                "img/mod02/72.jpg",
                "img/mod02/73.jpg",
                "img/mod02/74.jpg",
                "img/mod02/75.jpg",
                "img/mod02/76.jpg",
                "img/mod02/77.jpg",
                "img/mod02/78.jpg",
                "img/mod02/79.jpg",
                "img/mod02/80.jpg",
                "img/mod02/81.jpg",
                "img/mod02/82.jpg",
                "img/mod02/83.jpg",
                "img/mod02/84.jpg",
                "img/mod02/85.jpg",
                "img/mod02/86.jpg",
                "img/mod02/87.jpg",
                "img/mod02/88.jpg",
                "img/mod02/89.jpg",
                "img/mod02/90.jpg",
                "img/mod02/91.jpg",
                "img/mod02/92.jpg",
                "img/mod02/93.jpg",
                "img/mod02/94.jpg",
                "img/mod02/95.jpg",
                "img/mod02/96.jpg",
                "img/mod02/97.jpg",
                "img/mod02/98.jpg",
                "img/mod02/99.jpg",
                "img/mod02/comburente.png",
                "img/mod02/corrosivo.png",
                "img/mod02/diagrama.png",
                "img/mod02/explosivo.png",
                "img/mod02/globe.jpg",
                "img/mod02/grave.png",
                "img/mod02/inflamable.png",
                "img/mod02/invernadero.jpg",
                "img/mod02/medioambiente.png",
                "img/mod02/peligroso.png",
                "img/mod02/toxico.png"]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



