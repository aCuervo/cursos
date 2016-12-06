function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
        case "muestra": arrayFinal = arrayComun.concat([
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
        case "muestra": arrayFinal = arrayComun.concat([
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
        "img/comunes/contraportada.svg",
		"img/comunes/definicion.svg",        
        "img/comunes/logo.svg",
        "img/comunes/portada.svg",
		"img/comunes/sabiasQue.svg",
        "img/comunes/thumbUp.svg",
        "img/comunes/tick_menu.svg"
    ];
    var arrayFinal = null;
    switch (modulo) {
        case "muestra": arrayFinal = arrayComun.concat([
            "img/muestra/autoevaluacion.png",
            "img/muestra/contraportada.svg",
            "img/muestra/despedida.jpg",
            "img/muestra/examen.png",
            "img/muestra/gato.jpg",
            "img/muestra/gatoTabla.jpg",
            "img/muestra/hand-clock.png",
            "img/muestra/iconoAliPan.png",
            "img/muestra/iconoCarretillas.png",
            "img/muestra/iconoManipulador.svg",
            "img/muestra/logo20.svg",
            "img/muestra/logo20micro.svg",
            "img/muestra/logo20mini.svg",
            "img/muestra/metodoAgua.svg",
            "img/muestra/moodle.jpg",
            "img/muestra/pattern-1477380_640.png",
            "img/muestra/pattern.jpg",
            "img/muestra/pin.svg",
            "img/muestra/portada.svg",
            "img/muestra/separador.svg",
            "img/muestra/autoeval/0.svg",
            "img/muestra/autoeval/1.svg",
            "img/muestra/autoeval/2.svg",
            "img/muestra/autoeval/3.svg",
            "img/muestra/autoeval/4.svg",
            "img/muestra/autoeval/5.svg",
            "img/muestra/autoeval/6.svg",
            "img/muestra/autoeval/7.svg",
            "img/muestra/autoeval/8.svg",
            "img/muestra/autoeval/9.svg",
            "img/muestra/autoeval/solucion.png"
        ]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



       