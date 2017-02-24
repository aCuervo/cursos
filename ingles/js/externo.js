function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([

        ]);
            break;   */
        case "mod01": arrayFinal = arrayComun.concat([
        "js/bootstrap/bootstrap.min.js",
        "js/jointJS/lodash.min.js",
        "js/jointJS/backbone-min.js",
        "js/jointJS/joint.min.js"
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
        "css/bootstrap/bootstrap.min.css",
        "css/jointJS/joint.min.css"
            ]);
            break;
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



