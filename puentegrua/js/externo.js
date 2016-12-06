﻿function getArrayCSS(modulo) {
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
        case "mod01": arrayFinal = arrayComun.concat([
            "img/mod01/botonera.jpeg",
            "img/mod01/botoneraDesplazable.png",
            "img/mod01/botoneraSuspendidaCarro.png",
            "img/mod01/botoneraSuspendidaPuente.png",
            "img/mod01/cabina.png",
            "img/mod01/gruaMensula.jpg",
            "img/mod01/gruaPalomilla.jpg",
            "img/mod01/gruaPortico.jpg",
            "img/mod01/gruaPuente.jpg",
            "img/mod01/gruaSemiportico.jpg",
            "img/mod01/partes.jpg",
        ]);
            break;
        case "mod02": arrayFinal = arrayComun.concat([
            "img/mod02/comunicaciones.png",
            "img/mod02/operario.svg",
            "img/mod02/señalista.png",
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
            "img/mod03/gruaPolipasto.jpg" ,
            "img/mod03/modelo.png" ,
            "img/mod03/polipastos.jpg"
        ]);
            break;
        case "mod04":arrayFinal = arrayComun.concat([
            "img/mod04/accesorioC.png" ,
            "img/mod04/accesorioElectroiman.jpg" ,
            "img/mod04/accesorioHorquilla.jpg" ,
            "img/mod04/accesorioPinza.jpg" ,
            "img/mod04/accesorioViga.png" ,
            "img/mod04/cancamo1.jpg" ,
            "img/mod04/cancamo2.png" ,
            "img/mod04/cancamoSoldar.png" ,
            "img/mod04/carretillaManual.jpg" ,
            "img/mod04/centroGravedad.png" ,
            "img/mod04/colada.jpg" ,
            "img/mod04/contenedor.jpg" ,
            "img/mod04/contenedorGranel.png" ,
            "img/mod04/contenedorIso.jpg" ,
            "img/mod04/cubeta.png" ,
            "img/mod04/escombros.jpg" ,
            "img/mod04/grilleteLira.png" ,
            "img/mod04/grilleteRecto.png" ,
            "img/mod04/orejeta.png" ,
            "img/mod04/paletCarretilla.jpg" ,
            "img/mod04/saca.jpg" ,
            "img/mod04/sistemaMultiple.png" ,
            "img/mod04/sistemaSencillo.png" ,
            "img/mod04/tiposEslingas.png" 
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
            "img/mod05/cesta.svg",
            "img/mod05/comprobaciones.jpg",
            "img/mod05/dosEslingas.svg",
            "img/mod05/eslingas.jpg",
            "img/mod05/estrangulada.svg",
            "img/mod05/etiqueta.svg",
            "img/mod05/guiaSeleccion.jpg",
            "img/mod05/perchero.jpg",
            "img/mod05/retirada1.png",
            "img/mod05/retirada2.png",
            "img/mod05/tresEslingas.svg",
            "img/mod05/vertical.svg"
        ]);
            break;
        case "mod06":arrayFinal = arrayComun.concat([
            "img/mod06/ahorcado.png" ,
            "img/mod06/cantonera1.png" ,
            "img/mod06/cantonera2.png" ,
            "img/mod06/cantonera3.jpg" ,
            "img/mod06/checklist.png" ,
            "img/mod06/defecto.jpg" ,
            "img/mod06/deformacion1.png" ,
            "img/mod06/deformacion2.png" ,
            "img/mod06/fijaciones.jpg" ,
            "img/mod06/gancho.jpg" ,
            "img/mod06/identificacion.png" 
        ]);
            break;
        case "mod07":arrayFinal = arrayComun.concat([
            "img/mod07/calculoRamales.png",
            "img/mod07/cmuAnilla.png",
            "img/mod07/desgasteEslabones.svg",
            "img/mod07/desgasteGancho.png",
            "img/mod07/dosSimples.png",
            "img/mod07/extremo.jpg",
            "img/mod07/fijacion.jpg",
            "img/mod07/gancho.jpg",
            "img/mod07/hammerlock.jpg",
            "img/mod07/informe.png",
            "img/mod07/nudoAhorcado.png",
            "img/mod07/plaquitas.png",
            "img/mod07/tipos.png"
        ]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



       