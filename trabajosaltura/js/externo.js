function getArrayCSS(modulo) {
    var arrayComun = [
         "css/especifico.css",
         "css/colores.css",
         "css/animate/animate.css",
         "css/jquery/jquery-ui.structure.css",
         "css/jquery/jquery-ui.theme.css"];
    var arrayFinal = null;

    switch (modulo) {
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}
function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
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
         "img/comunes/tick_menu.svg",    
    ];
    var arrayFinal = null;
    switch (modulo) {        
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



       