function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"
    ];
    var arrayFinal = null;

    switch (modulo) {
        case "mod1":         
        case "mod2":
            arrayFinal = arrayComun;
            break;
        case "mod3":
            arrayFinal = arrayComun.concat([
                "js/slideshow/pgwslideshow.min.js",
                "js/oy-cword-1.0/oy.js",
                "js/asAccordion/jquery-asAccordion.min.js"
            ]);
            break;
        case "mod4.1":
        case "mod4.2":
            arrayFinal = arrayComun.concat([
                "js/bootstrap/bootstrap.min.js"
            ]);
            break;
        case "mod4.3":
            arrayFinal = arrayComun.concat([
                "js/wordsearch/wordfind.js",
                "js/wordsearch/wordfindgame.js",
                "js/bootstrap/bootstrap.min.js"]);
            break;
        case "modhor":
            arrayFinal = arrayComun.concat([
                "js/bootstrap/bootstrap.min.js",
                "js/slideshow/pgwslideshow.min.js",
                "js/wordsearch/wordfind.js",
                "js/wordsearch/wordfindgame.js",
                "js/bootstrap/bootstrap.min.js"]);
            break;
        default:arrayFinal = arrayComun;
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
        case "mod1":
        case "mod2":
            arrayFinal = arrayComun;
            break;
        case "mod3":
            arrayFinal = arrayComun.concat([
			"css/slideshow/pgwslideshow.min.css",
			"css/oy-cword-1.0/base.css",
            "css/asAccordion/asAccordion.min.css"
            ])
            break;
        case "mod4.1":
        case "mod4.2":
            arrayFinal = arrayComun.concat([
			"css/bootstrap/bootstrap.min.css"
            ])
            break;
        case "mod4.3":
            arrayFinal = arrayComun.concat([
			"css/bootstrap/bootstrap.min.css",
			"css/wordsearch/style.css"
            ])
            break;
        case "modhor":
            arrayFinal = arrayComun.concat([
            "css/bootstrap/bootstrap.min.css",
            "css/slideshow/pgwslideshow.min.css",
			"css/oy-cword-1.0/base.css",
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
            "img/comunes/contraportada.jpg",
            "img/comunes/contraportadaImg.svg",
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
            case "mod1":
                arrayFinal = arrayComun.concat([
                    "img/m1/bizcochoAbeto.jpg",
                    "img/m1/bolloLenia.jpg",
                    "img/m1/cafeManos.jpg",
                    "img/m1/DetectarConocerRecomendar.svg",
                    "img/m1/fondo2.jpg",
                    "img/m1/fondoEstrella.svg",
                    "img/m1/fondoT5.jpg",
                    "img/m1/madalenaAdorno.svg",
                    "img/m1/portadaImg.svg"
                ]);
                break;
            case "mod2":
                arrayFinal = arrayComun.concat([
                    "img/m2/amasar.jpg",
                    "img/m2/croissants.jpg",
                    "img/m2/trigo.jpg",
                    "img/m2/dulcesPaleta.png",
                    "img/m2/ventaPan.png",
                    "img/m2/portadaImg.svg",
                    "img/m2/salero1.svg",
                    "img/m2/salero2.svg"]);

                break;
            case "mod3":
                arrayFinal = arrayComun.concat([
                    "img/m3/bolleria.jpg",
                    "img/m3/hojaldre.jpg",
                    "img/m3/ilovemuffins.jpg",
                    "img/m3/coffeeandcro.jpg",
                    "img/m3/pan2.jpg",
                    "img/m3/panes.jpg",
                    "img/m3/saladitos.jpg",
                    "img/m3/masa_batido.jpg",
                    "img/m3/pan.jpg",
                    "img/m3/ko.png",
                    "img/m3/ko_orig.png",
                    "img/m3/ok.png",
                    "img/m3/ok_orig.png",
                    "img/m3/portadaImg.svg",
                    "img/m3/sliderDulce/bizcochoChoco.jpg",
                    "img/m3/sliderDulce/croissantChoco.jpg",
                    "img/m3/sliderDulce/magdalenas.jpg",
                    "img/m3/sliderDulce/pastelNata.jpg",
                    "img/m3/sliderDulce/xuxoChoco.jpg",
                    "img/m3/sliderDulce/thumbnails/bizcochoChoco.jpg",
                    "img/m3/sliderDulce/thumbnails/croissantChoco.jpg",
                    "img/m3/sliderDulce/thumbnails/magdalenas.jpg",
                    "img/m3/sliderDulce/thumbnails/pastelNata.jpg",
                    "img/m3/sliderDulce/thumbnails/xuxoChoco.jpg",
                    "img/m3/sliderPan/barraMedio.jpg",
                    "img/m3/sliderPan/miniChapata.jpg",
                    "img/m3/sliderPan/panMoreno.jpg",
                    "img/m3/sliderPan/roscaBregada.jpg",
                    "img/m3/sliderPan/roscaPan.jpg",
                    "img/m3/sliderPan/thumbnails/barraMedio.jpg",
                    "img/m3/sliderPan/thumbnails/miniChapata.jpg",
                    "img/m3/sliderPan/thumbnails/panMoreno.jpg",
                    "img/m3/sliderPan/thumbnails/roscaBregada.jpg",
                    "img/m3/sliderPan/thumbnails/roscaPan.jpg",
                    "img/m3/sliderSalado/bocataFrankfurt.jpg",
                    "img/m3/sliderSalado/chapapizza.jpg",
                    "img/m3/sliderSalado/empanadaAtun.jpg",
                    "img/m3/sliderSalado/empanadillaBQ.jpg",
                    "img/m3/sliderSalado/saladitoAtun.jpg",
                    "img/m3/sliderSalado/thumbnails/bocataFrankfurt.jpg",
                    "img/m3/sliderSalado/thumbnails/chapapizza.jpg",
                    "img/m3/sliderSalado/thumbnails/empanadaAtun.jpg",
                    "img/m3/sliderSalado/thumbnails/empanadillaBQ.jpg",
                    "img/m3/sliderSalado/thumbnails/saladitoAtun.jpg"]);
                break;
            case "mod4.1":
                arrayFinal = arrayComun.concat([
                    "img/m4.1/fondoDulce.svg",
                    "img/m4.1/desayuno_cama.jpg",
                    "img/m4.1/campo.jpg",
                    "img/m4.1/tostada.jpg",
                    "img/m4.1/ventaPan.png",
                    "img/m4.1/cardiovascular.svg",
                    "img/m4.1/dieta.svg",
                    "img/m4.1/digestivo.svg",
                    "img/m4.1/eco.svg",
                    "img/m4.1/panAmarillo.svg",
                    "img/m4.1/panMarron.svg",
                    "img/m4.1/nutritivo.svg",
                    "img/m4.1/portadaImg.svg",
                    "img/m4.1/autoeval/pan01.png",
                    "img/m4.1/autoeval/pan02.png",
                    "img/m4.1/autoeval/pan03.png",
                    "img/m4.1/autoeval/pan04.png",
                    "img/m4.1/autoeval/pan05.png",
                    "img/m4.1/autoeval/pan06.png",
                    "img/m4.1/autoeval/pan07.png",
                    "img/m4.1/autoeval/pan08.png",
                    "img/m4.1/autoeval/pan09.png",
                    "img/m4.1/autoeval/pan10.png",
                    "img/m4.1/autoeval2/pan01.png",
                    "img/m4.1/autoeval2/pan02.png",
                    "img/m4.1/autoeval2/pan03.png",
                    "img/m4.1/autoeval2/pan04.png",
                    "img/m4.1/autoeval2/pan05.png"
                ]);
                break;
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





       