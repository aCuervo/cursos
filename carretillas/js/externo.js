function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
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
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}
function getArrayImagenes(modulo) {
    var arrayComun = [
        "img/comunes/contraportada.svg",
        "img/comunes/definicion.svg",      
        "img/comunes/exclamacion.svg",
        "img/comunes/exclamacionBlanca.svg",
        "img/comunes/logo.svg",
        "img/comunes/portada.svg",
        "img/comunes/tick_menu.svg"      
    ];
    var arrayFinal = null;
    switch (modulo) {
        case "mod1": arrayFinal = arrayComun.concat([
        "img/mod1/apilador.jpg",
        "img/mod1/apilador_conplataforma.jpg",
        "img/mod1/avisadoracustico.jpg",
        "img/mod1/carga.jpeg",
        "img/mod1/carretilla_contrapesada-1.jpg",
        "img/mod1/carretilla_retractil.jpg",
        "img/mod1/carretillaDibujo.png",
        "img/mod1/carretillaMixta.jpg",
        "img/mod1/coche.jpg",
        "img/mod1/ejes.svg",
        "img/mod1/frenado.svg",
        "img/mod1/mandos.svg",
        "img/mod1/mastilVertical.jpg",
        "img/mod1/motorElectrico.jpg",
        "img/mod1/motorTermico.jpg",
        "img/mod1/noContrapesada.jpeg",
        "img/mod1/pallets.jpg",
        "img/mod1/partesCarretilla.svg",
        "img/mod1/pictograma1.png",
        "img/mod1/pictograma2.png",
        "img/mod1/pictograma3.png",
        "img/mod1/pictograma4.png",
        "img/mod1/portico.jpg",
        "img/mod1/recogepedidos.jpg",
        "img/mod1/telescopico.jpg",
        "img/mod1/tipoVoladizo.jpg",
        "img/mod1/transpaleta.jpg"
        ]);
            break;
        case "mod2": arrayFinal = arrayComun.concat([
            "img/mod2/accidente.jpg",
            "img/mod2/aplastamientoCarga.jpg",
            "img/mod2/atrapamiento.jpg",
            "img/mod2/atropello.png",
            "img/mod2/bienvenida.jpg",
            "img/mod2/caidaCarga.png",
            "img/mod2/despedida.jpg",
            "img/mod2/prevencion.jpg",
            "img/mod2/salud.jpg",
            "img/mod2/vuelcoFrontal.png",
            "img/mod2/vuelcoLateral.jpg"
        ]);
            break;
        case "mod3": arrayFinal = arrayComun.concat([
            "img/mod3/autoportante.jpg",
            "img/mod3/bienvenida.jpg",
            "img/mod3/cantilever.jpg",
            "img/mod3/compatibilidad.jpg",
            "img/mod3/despedida.jpg",
            "img/mod3/distancias.svg",
            "img/mod3/escaleras.jpg",
            "img/mod3/fuego.jpg",
            "img/mod3/iluminacion.jpg",
            "img/mod3/limpieza.jpg",
            "img/mod3/madera.jpg",
            "img/mod3/manual.jpg",
            "img/mod3/montacargas.jpg",
            "img/mod3/muelle.jpg",
            "img/mod3/paletCompacto.jpg",
            "img/mod3/paletConvencional.jpg",
            "img/mod3/pasillo.jpg",
            "img/mod3/pasilloElevado.jpg",
            "img/mod3/picking.jpg",
            "img/mod3/porton.jpg",
            "img/mod3/pushback.jpg",
            "img/mod3/ruido.jpg",
            "img/mod3/suelo.jpg",
            "img/mod3/tiposAlmacenaje.jpg",
            "img/mod3/vias.jpg"
        ]);
            break;
        case "mod4": arrayFinal = arrayComun.concat([
            "img/mod4/accesoriosElevacion1.jpg",
            "img/mod4/accesoriosElevacion2.jpg",
            "img/mod4/accesoriosElevacion3.jpg",
            "img/mod4/accesoriosElevacion4.jpg",
            "img/mod4/almacen.jpg",
            "img/mod4/aparcamiento.svg",
            "img/mod4/aparcamiento2.jpg",
            "img/mod4/bastidor1.jpg",
            "img/mod4/bastidor2.jpg",
            "img/mod4/cabezasSujecion.jpg",
            "img/mod4/cargaCuesta.svg",
            "img/mod4/cargaLevantada.jpg",
            "img/mod4/cargaOscilante1.jpeg",
            "img/mod4/cargaPersona1.png",
            "img/mod4/cargaRedonda1.jpg",
            "img/mod4/cargaRedonda2.jpg",
            "img/mod4/cargaSiNo.svg",
            "img/mod4/carretilla.jpg",
            "img/mod4/colocacion.svg",
            "img/mod4/depositarCarga1.svg",
            "img/mod4/depositarCarga2.svg",
            "img/mod4/depositarCarga3.svg",
            "img/mod4/depositarCarga4.svg",
            "img/mod4/depositarCarga5.svg",
            "img/mod4/derrape.jpg",
            "img/mod4/despedida.svg",
            "img/mod4/diagramaCargas.jpg",
            "img/mod4/ecuacion.svg",
            "img/mod4/epis.jpeg",
            "img/mod4/estabilidad.svg",
            "img/mod4/estabilidadAltura.svg",
            "img/mod4/estabilidadEstatica.svg",
            "img/mod4/estabilidadLongitudinal.svg",
            "img/mod4/estructuras.jpg",
            "img/mod4/momento.svg",
            "img/mod4/palletCarretilla.jpg",
            "img/mod4/pictograma1.png",
            "img/mod4/recogerCarga1.svg",
            "img/mod4/recogerCarga2.svg",
            "img/mod4/recogerCarga3.svg",
            "img/mod4/recogerCarga4.svg",
            "img/mod4/recogerCarga5.svg"
        ]);
            break;
        case "mod5": arrayFinal = arrayComun.concat([
            "img/mod5/bienvenida.jpg",
            "img/mod5/boe.svg",
            "img/mod5/cambioLlantas.jpg",
            "img/mod5/carretilla.svg",
            "img/mod5/despedida.jpg",
            "img/mod5/exclamacion.svg",
            "img/mod5/libreta.svg",
            "img/mod5/operarios.svg",
            "img/mod5/pallets.jpg"
        ])
            break;            
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



       