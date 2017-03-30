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
        case "mod4.2":
            arrayFinal = arrayComun.concat([
                    "img/m4.2/desayuno_cama.jpg",
                    "img/m4.2/campo.jpg",
                    "img/m4.2/ventaPan.png",
                    "img/m4.2/portadaImg.svg",
                    "img/m4.2/rellenosDulce/cabelloAngel.jpg",
                    "img/m4.2/rellenosDulce/chocolate.jpg",
                    "img/m4.2/rellenosDulce/cremaPastelera.jpg",
                    "img/m4.2/rellenosDulce/manzana.jpg",
                    "img/m4.2/rellenosDulce/mousseChocolate.jpg",
                    "img/m4.2/rellenosDulce/nata.jpg",
                    "img/m4.2/rellenosDulce/nuez.jpg",
                    "img/m4.2/decoracionDulce/abrillantado.jpg",
                    "img/m4.2/decoracionDulce/azucar.jpg",
                    "img/m4.2/decoracionDulce/azucarGlass.jpg",
                    "img/m4.2/decoracionDulce/chocolate.jpg",
                    "img/m4.2/decoracionDulce/crema.jpg",
                    "img/m4.2/decoracionDulce/dorado.jpg",
                    "img/m4.2/decoracionDulce/frutaConfitada.jpg",
                    "img/m4.2/decoracionDulce/glaseado.jpg",
                    "img/m4.2/decoracionDulce/granilloAlmendra.jpg",
                    "img/m4.2/decoracionDulce/granilloChocolate.jpg",
                    "img/m4.2/autoeval/dulces01.png",
                    "img/m4.2/autoeval/dulces02.png",
                    "img/m4.2/autoeval/dulces03.png",
                    "img/m4.2/autoeval/dulces04.png",
                    "img/m4.2/autoeval/dulces05.png",
                    "img/m4.2/autoeval/dulces06.png",
                    "img/m4.2/autoeval/dulces07.png",
                    "img/m4.2/autoeval/dulces08.png",
                    "img/m4.2/autoeval/dulces09.png",
                    "img/m4.2/autoeval/dulces10.png",
                    "img/m4.2/autoeval/dulces11.png",
                    "img/m4.2/autoeval2/dulces01.png",
                    "img/m4.2/autoeval2/dulces02.png",
                    "img/m4.2/autoeval2/dulces03.png",
                    "img/m4.2/autoeval2/dulces04.png",
                    "img/m4.2/autoeval2/dulces05.png"]);
            break;
        case "mod4.3":
            arrayFinal = arrayComun.concat([
                "img/m4.3/autoeval/salado01.png",
                "img/m4.3/autoeval/salado02.png",
                "img/m4.3/autoeval/salado03.png",
                "img/m4.3/autoeval/salado04.png",
                "img/m4.3/autoeval/salado05.png",
                "img/m4.3/autoeval/salado06.png",
                "img/m4.3/autoeval/salado07.png",
                "img/m4.3/autoeval/salado08.png",
                "img/m4.3/autoeval/salado09.png",
                "img/m4.3/autoeval/salado10.png",
                "img/m4.3/autoeval2/salado01.png",
                "img/m4.3/autoeval2/salado02.png",
                "img/m4.3/autoeval2/salado03.png",
                "img/m4.3/autoeval2/salado04.png",
                "img/m4.3/autoeval2/salado05.png",
                "img/m4.3/desayuno_cama.jpg",
                "img/m4.3/campo.jpg",
                "img/m4.3/ventaPan.png",
                "img/m4.3/patternFondo.svg",
                "img/m4.3/portadaImg.svg"]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;

}





