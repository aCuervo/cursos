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
         "img/comunes/bienvenida.jpg",
    ];
    var arrayFinal = null;
    switch (modulo) {
        case "mod01": arrayFinal = arrayComun.concat([
        "img/mod01/architecture.jpg",
        "img/mod01/balance.png",
        "img/mod01/bienvenida.jpg",
        "img/mod01/construction.jpg",
        "img/mod01/dance.jpg",
        "img/mod01/descansando.jpg",
        "img/mod01/head.jpg",
        "img/mod01/house.jpg",
        "img/mod01/oceana.jpg",
        "img/mod01/sky.jpg",
        "img/mod01/tower.jpg"
        ]);
            break;
        case "mod02": arrayFinal = arrayComun.concat([
            "img/mod02/arnes.jpg",
            "img/mod02/caidalibre.jpg",
            "img/mod02/combado.jpg",
            "img/mod02/distancias.jpg",
            "img/mod02/efectoPendulo.jpg",
            "img/mod02/errorAnclaje.jpg",
            "img/mod02/factores.jpg",
            "img/mod02/factores2.jpg",
            "img/mod02/pendulo.jpg",
            "img/mod02/puntoanclaje.jpg",
            "img/mod02/retencion.jpg",
            "img/mod02/sujecion.jpg",
            "img/mod02/welding.jpg"
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
            "img/mod03/anticaida.jpg",
            "img/mod03/arnesAsiento.jpg",
            "img/mod03/arnesAsientoIncor.jpg",
            "img/mod03/arnesVsCinturon.jpg",
            "img/mod03/autoeval.jpg",
            "img/mod03/colgando.jpg",
            "img/mod03/espalda.jpg",
            "img/mod03/esternon.jpg",
            "img/mod03/lateral.jpg",
            "img/mod03/pasoA-1.jpg",
            "img/mod03/pasoA-2.jpg",
            "img/mod03/pasoA-3.jpg",
            "img/mod03/pasoA-4.jpg",
            "img/mod03/pasoA-5.jpg",
            "img/mod03/pasoA-6.jpg",
            "img/mod03/pasoA-7.jpg",
            "img/mod03/pasoB-1.jpg",
            "img/mod03/pasoB-2.jpg",
            "img/mod03/pasoB-3.jpg",
            "img/mod03/pasoB-4.jpg",
            "img/mod03/pasoB-5.jpg",
            "img/mod03/pasoB-6.jpg",
            "img/mod03/pasoB-7.jpg",
            "img/mod03/pasoB-8.jpg",
            "img/mod03/tiposArneses.jpg"
        ]);
            break;
        case "mod04": arrayFinal = arrayComun.concat([
             "img/mod04/absorbedor.jpg",
             "img/mod04/absorbedor2.jpg",
             "img/mod04/absorbedores.jpg",
             "img/mod04/amarilla.jpg",
             "img/mod04/amarre.jpg",
             "img/mod04/bienvenida.jpg",
             "img/mod04/bloqueoAutomatico.jpg",
             "img/mod04/bloqueoCierre.jpg",
             "img/mod04/blueRope.jpg",
             "img/mod04/carabiner.jpg",
             "img/mod04/casquillo.jpg",
             "img/mod04/codino.jpg",
             "img/mod04/conectorAcero.jpg",
             "img/mod04/conectorAnclaje.jpg",
             "img/mod04/conectorBasico.jpg",
             "img/mod04/conectorBien.jpg",
             "img/mod04/conectorBien2.jpg",
             "img/mod04/conectorDegradado.jpg",
             "img/mod04/conectorPalanca.jpg",
             "img/mod04/conectorRosca.jpg",
             "img/mod04/conectorTerminacion.jpg",
             "img/mod04/desfavorable.jpg",
             "img/mod04/enganche.jpg",
             "img/mod04/fuerzas.jpg",
             "img/mod04/horizontal.jpg",
             "img/mod04/incorrectoBloqueo.jpg",
             "img/mod04/incorrectoBorde.jpg",
             "img/mod04/incorrectoConector.jpg",
             "img/mod04/incorrectoEjeMenor.jpg",
             "img/mod04/incorrectoPalanca.jpg",
             "img/mod04/kernmantle.jpg",
             "img/mod04/knot.jpg",
             "img/mod04/maillon.jpg",
             "img/mod04/mosquet.jpg",
             "img/mod04/muyDesfavorable.jpg",
             "img/mod04/retractil.jpg",
             "img/mod04/rodearRoseta.jpg",
             "img/mod04/ropes.jpg",
             "img/mod04/rotisima.jpg",
             "img/mod04/roto.jpg",
             "img/mod04/roturaConector.jpg",
             "img/mod04/roturaConector2.jpg",
             "img/mod04/verticalEncima.jpg",
             "img/mod04/verticalPies.jpg"
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
                     "img/mod05/a1.jpg",
                     "img/mod05/a2.jpg",
                     "img/mod05/acoplar.jpg",
                     "img/mod05/anclajeAcero.jpg",
                     "img/mod05/anillosRegulables.jpg",
                     "img/mod05/anticaida.jpg",
                     "img/mod05/anticaida2.jpg",
                     "img/mod05/anticaidaFlexible.jpg",
                     "img/mod05/autoeval01.jpg",
                     "img/mod05/autoeval05.jpg",
                     "img/mod05/b.jpg",
                     "img/mod05/bienvenida.jpg",
                     "img/mod05/c.jpg",
                     "img/mod05/cincha.jpg",
                     "img/mod05/cintas.jpg",
                     "img/mod05/cintasAnclaje.jpg",
                     "img/mod05/cintaTextil.jpg",
                     "img/mod05/climbing.jpg",
                     "img/mod05/cuerda.jpg",
                     "img/mod05/cuerdas.jpg",
                     "img/mod05/cuerdas2.jpg",
                     "img/mod05/dispositivo.jpg",
                     "img/mod05/fig1.jpg",
                     "img/mod05/frenadoLeva.jpg",
                     "img/mod05/frenadoPoleas.jpg",
                     "img/mod05/lineasVida.jpg",
                     "img/mod05/marcos.jpg",
                     "img/mod05/nudoCinta.jpg",
                     "img/mod05/pertigas.jpg",
                     "img/mod05/rodamientos.jpg",
                     "img/mod05/taladrosCiegos.jpg",
                     "img/mod05/taladrosPasantes.jpg",
                     "img/mod05/tripodes.jpg",
                     "img/mod05/tripodes2.jpg",
                     "img/mod05/tripodes3.jpg",
                     "img/mod05/union.jpg",
                     "img/mod05/wall.jpg"
        ]);
            break;
        case "mod06": arrayFinal = arrayComun.concat([
                             "img/mod06/ascensoDescenso.jpg",
                             "img/mod06/baca.jpg",
                             "img/mod06/bienvenida.jpg",
                             "img/mod06/escaleraDosPersonas.jpg",
                             "img/mod06/escalerasGato.jpg",
                             "img/mod06/escaleraUnaPersona.jpg",
                             "img/mod06/inclinacionEscalera.jpg",
                             "img/mod06/inmovilización.jpg",
                             "img/mod06/ladder.jpg",
                             "img/mod06/levantamientoEscalera.jpg",
                             "img/mod06/noColgarse.jpg",
                             "img/mod06/noDoble.jpg",
                             "img/mod06/reposapies.jpg",
                             "img/mod06/sobrepaso.jpg",
                             "img/mod06/subirFrente.jpg",
                             "img/mod06/upright.jpg",                            
                             "img/mod06/woodWall.jpg"
        ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
                 "img/mod07/alturasMinimas.jpg",
                 "img/mod07/andamioModular.jpg",
                 "img/mod07/andamioProteccion.jpg",
                 "img/mod07/anticaida.jpg",
                 "img/mod07/autoeval04.jpg",
                 "img/mod07/bienvenida.jpg",
                 "img/mod07/calzado.jpg",
                 "img/mod07/casco.jpg",
                 "img/mod07/comprobaciones.jpg",
                 "img/mod07/detalleAcceso.jpg",
                 "img/mod07/escaleraZanca.jpg",
                 "img/mod07/escalerillaCruceta.jpg",
                 "img/mod07/esquemaDistribucion.jpg",
                 "img/mod07/guantes.jpg",
                 "img/mod07/instruccionesAndamioModular.jpg",
                 "img/mod07/metalicoTubular.jpg",
                 "img/mod07/pasosModular.jpg",
                 "img/mod07/proteccionesPerimetrales.jpg",
                 "img/mod07/seguridad.jpg"
        ]);
            break;
        case "mod08": arrayFinal = arrayComun.concat([
                             "img/mod08/anclajeFijo.jpg",
                             "img/mod08/bienvenida.jpg",
                             "img/mod08/contrapeso.jpg",
                             "img/mod08/lineaAnclaje.jpg",
                             "img/mod08/pertiga.jpg",
                             "img/mod08/posicionBloqueo.jpg"
        ]);
            break;
        case "mod09": arrayFinal = arrayComun.concat([
                             "img/mod09/bienvenida.jpg",
                             "img/mod09/descensor.jpg",
                             "img/mod09/frenadoAutomatico.jpg",
                             "img/mod09/pas.jpg",
                             "img/mod09/path124.gif"
        ]);
            break;
        default: arrayFinal = arrayComun;
       }
       return arrayFinal;
    }



       