function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js",
    ];
    var arrayFinal = null;

    switch (modulo) {
        case "mod02": arrayFinal = arrayComun.concat([
			"js/crossword/oy.js",
			"js/bootstrap/bootstrap.min.js",
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
			"js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/slideshow/pgwslideshow.min.js",
        ]);
            break;
        case "mod04": arrayFinal = arrayComun.concat([
            "js/slideshow/pgwslideshow.min.js",
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
			"js/crossword/oy.js",
            "js/slideshow/pgwslideshow.min.js",
        ]);
            break;
        case "mod06": arrayFinal = arrayComun.concat([
			"js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
			"js/bootstrap/bootstrap.min.js",
        ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
			"js/bootstrap/bootstrap.min.js",
        ]);
            break;
        case "mod08": arrayFinal = arrayComun.concat([
			"js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
        ]);
            break;
        case "mod09": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
        ]);
            break;
        case "mod10": arrayFinal = arrayComun.concat([
			"js/bootstrap/bootstrap.min.js",
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
		]); 
            break;       
		case "mod11": arrayFinal = arrayComun.concat([
			"js/bootstrap/bootstrap.min.js",
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/crossword/oy.js",
		]);
            break;       
        case "mod12": arrayFinal = arrayComun.concat([
			"js/bootstrap/bootstrap.min.js",
        ]);
            break;
        case "intro": arrayFinal = arrayComun.concat([
			"js/bootstrap/bootstrap.min.js",
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
        case "mod02": arrayFinal = arrayComun.concat([
			"css/crossword/base.css",
			"css/bootstrap/bootstrap.min.css",
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
			"css/wordsearch/style.css",
            "css/slideshow/pgwslideshow.min.css",
        ]);
            break;
        case "mod04": arrayFinal = arrayComun.concat([
            "css/slideshow/pgwslideshow.min.css",
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
			"css/crossword/base.css",
            "css/slideshow/pgwslideshow.min.css",
        ]);
            break;
        case "mod06": arrayFinal = arrayComun.concat([
			"css/wordsearch/style.css",
			"css/bootstrap/bootstrap.min.css",
        ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
			"css/bootstrap/bootstrap.min.css",
        ]);
            break;
        case "mod08": arrayFinal = arrayComun.concat([
			"css/wordsearch/style.css",
        ]);
            break;
        case "mod09": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
        ]);
            break;
        case "mod10": arrayFinal = arrayComun.concat([
			"css/bootstrap/bootstrap.min.css",
            "css/jointJS/joint.min.css",
		]);
			break;
		case "mod11": arrayFinal = arrayComun.concat([
			"css/bootstrap/bootstrap.min.css",
            "css/jointJS/joint.min.css",
			"css/crossword/base.css",
		]);
			break;
        case "mod12": arrayFinal = arrayComun.concat([
			"css/bootstrap/bootstrap.min.css",
        ]);
            break;
        case "intro": arrayFinal = arrayComun.concat([
			"css/bootstrap/bootstrap.min.css",
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
        case "mod01": arrayFinal = arrayComun.concat([
			"img/mod01/fondo1.jpg",
			"img/mod01/hombre_carretilla.jpg",
			"img/mod01/johnLgrove.jpg",
        ]);
            break;
        case "mod02": arrayFinal = arrayComun.concat([
			"img/mod02/arrastrar/chasis.png",
			"img/mod02/arrastrar/plataforma.png",
			"img/mod02/arrastrar/soluccion.png",
			"img/mod02/arrastrar/tijera.png",
            "img/mod02/circulo614.png",
			"img/mod02/circulo1215.png",
			"img/mod02/circulo1627.png",
			"img/mod02/circulo2177.png",
			"img/mod02/circuloUNE.png",
			"img/mod02/clasificacionPEMP.png",
			"img/mod02/elementosPEMP.jpg",
            "img/mod02/fondoEstrella.svg",
			"img/mod02/hombre_escalera.jpg",
			"img/mod02/hombreCualEsLaMejor.png",
			"img/mod02/hombrePEMP.png",
            "img/mod02/lineasDeVuelco.jpg",
            "img/mod02/mapas.jpg",
			"img/mod02/ojos.png",
			"img/mod02/peligro.png",
            "img/mod02/tiposPEMP.png",
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
            "img/mod03/autoevaluacion1.jpg",
            "img/mod03/autoevaluacion2.png",
            "img/mod03/carpetaAmarilla.png",
            "img/mod03/dosPEMP.png",
            "img/mod03/fondoArnes.png",
            "img/mod03/fondoSlice3.jpg",
            "img/mod03/fondoValla.jpg",
            "img/mod03/hombreCualEsLaMejor.png",
            "img/mod03/operario.png",
            "img/mod03/peligro1.jpg",
            "img/mod03/peligro2.jpg",
            "img/mod03/peligro3.jpg",
            "img/mod03/peligro4.jpg",
            "img/mod03/peligro5.jpg",
            "img/mod03/peligro6.jpg",
            "img/mod03/peligro7.jpg",
            "img/mod03/peligro8.jpg",
            "img/mod03/PEMPmastil.png",
            "img/mod03/PEMPtijera.png",
            "img/mod03/revisionPEMP.png",
            "img/mod03/riesgosPEMPcaida.png",
            "img/mod03/riesgosPEMPotros.png",
            "img/mod03/riesgosPEMPvuelco.png",
            "img/mod03/separador.jpg",
            "img/mod03/tick.png",
            "img/mod03/tijeraAmarilla.png",
        ]);
            break;
        case "mod04": arrayFinal = arrayComun.concat([
			"img/mod04/carpetaAmarilla.png",
			"img/mod04/ejercicioPEMP1.jpg",
			"img/mod04/ejercicioPEMP2.jpg",
			"img/mod04/fondo2.png",
			"img/mod04/fondoArnes.png",
			"img/mod04/fondoJardin.jpg",
			"img/mod04/fondoNoray.jpg",
			"img/mod04/fondoValla.jpg",
			"img/mod04/hombreRueda.png",
			"img/mod04/mastilHombre.png",
			"img/mod04/mastilJirafa.png",
			"img/mod04/operario.png",
			"img/mod04/partesPEMPtelescopica.png",
			"img/mod04/peligro1.jpg",
			"img/mod04/peligro2.jpg",
			"img/mod04/peligro3.jpg",
			"img/mod04/peligro4.jpg",
			"img/mod04/peligro5.jpg",
			"img/mod04/peligro6.jpg",
			"img/mod04/peligro7.jpg",
			"img/mod04/peligro8.jpg",
			"img/mod04/revisionPEMP.png",
			"img/mod04/riesgos1.png",
			"img/mod04/riesgos2.png",
			"img/mod04/telescopica1.png",
			"img/mod04/tick.png",
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
			"img/mod05/3PEMP-autopropulsada.jpg",
			"img/mod05/3PEMP-remolcable.jpg",
			"img/mod05/3PEMP-sobreCamion.jpg",
			"img/mod05/arrastrar1.png",
			"img/mod05/arrastrar2.png",
			"img/mod05/arrastrar3.png",
			"img/mod05/arrastrarTexto1.jpg",
			"img/mod05/arrastrarTexto2.jpg",
			"img/mod05/arrastrarTexto3.jpg",
			"img/mod05/arrastrarTexto4.jpg",
			"img/mod05/arrastrarTexto5.jpg",
			"img/mod05/arrastrarTexto6.jpg",
			"img/mod05/camionIntroduccion.png",
			"img/mod05/carpetaAmarilla.png",
			"img/mod05/fondoValla.jpg",
			"img/mod05/hombreMandoEmergencia.png",
			"img/mod05/operario.png",
			"img/mod05/peligro1.jpg",
			"img/mod05/peligro2.jpg",
			"img/mod05/peligro3.jpg",
			"img/mod05/peligro4.jpg",
			"img/mod05/peligro5.jpg",
			"img/mod05/peligro6.jpg",
			"img/mod05/peligro7.jpg",
			"img/mod05/peligro8.jpg",
			"img/mod05/revisionPEMP.png",
			"img/mod05/solucionArrastrar.jpg",
			"img/mod05/tick.png",
        ]);
            break;
        case "mod06": arrayFinal = arrayComun.concat([
			"img/mod06/botonParada.png",
			"img/mod06/despedida.png",
			"img/mod06/familiarizacion.png",
			"img/mod06/hojaRevision.png",
			"img/mod06/hombreManual.png",
			"img/mod06/limitadores.png",
			"img/mod06/mantenimiento.jpg",
			"img/mod06/puestoDeMando.png",
			"img/mod06/puestoDeMandoPrimario.jpg",
			"img/mod06/puestoDeMandoSecundario.jpg",
        ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
			"img/mod07/correcto.png",
			"img/mod07/estabilizador1.png",
			"img/mod07/estabilizador2.png",
			"img/mod07/estabilizador3.png",
			"img/mod07/estabilizador4.png",
			"img/mod07/estabilizador5.png",
			"img/mod07/estabilizador6.png",
			"img/mod07/estabilizadores.jpg",
			"img/mod07/estudioGeotecnico.png",
			"img/mod07/flecha.png",
			"img/mod07/hombreEstabilizador.png",
			"img/mod07/hombreRevision.png",
			"img/mod07/incorrecto.png",
			"img/mod07/lupa.png",
            "img/mod07/placaDistribucionPeso.jpg",
        ]);
            break;
        case "mod08": arrayFinal = arrayComun.concat([
			"img/mod08/flechas.png",
            "img/mod08/fondoEscavadora.jpg",
			"img/mod08/fondoJoyas.jpg",
			"img/mod08/formulario.png",
			"img/mod08/formularioElevacion.png",
			"img/mod08/formularioPrevioPEMP.png",
			"img/mod08/hombreCasco.png",
			"img/mod08/hombreLupa.png",
			"img/mod08/PEMP.jpg",
        ]);
            break;
        case "mod09": arrayFinal = arrayComun.concat([
			"img/mod09/arnes.png",
			"img/mod09/epis.jpg",
			"img/mod09/flechaGrupos.png",
			"img/mod09/fondoPEMP.png",
			"img/mod09/fondoResumen.jpg",
			"img/mod09/hombreArnes.png",
			"img/mod09/hombreVendado.png",
			"img/mod09/inspeccionPrevia.png",
			"img/mod09/inspeccionPreviaElevacion.png",
			"img/mod09/PEMPfueraDeServicio.png",
			"img/mod09/presion.png",
        ]);
            break;
        case "mod10": arrayFinal = arrayComun.concat([
			"img/mod10/atrapamiento.png",
			"img/mod10/caidaDeMaterial.png",
			"img/mod10/caidas.png",
			"img/mod10/contactoElectrico.png",
			"img/mod10/distanciaAtorreta.png",
			"img/mod10/distanciasLimite.jpg",
			"img/mod10/dontForget.png",
			"img/mod10/golpes.png",
			"img/mod10/hidraulico.png",
			"img/mod10/hombreParaguas.png",
			"img/mod10/hombrePeligros.jpg",
			"img/mod10/indicadores.png",
			"img/mod10/information.png",
			"img/mod10/interruptor.png",
			"img/mod10/intoxicacion.png",
			"img/mod10/mecanico.png",
			"img/mod10/ok.png",
			"img/mod10/plataformaDeTrabajo.png",
			"img/mod10/seta.png",
			"img/mod10/simbolos.png",
			"img/mod10/vuelcos.png",
        ]);
            break;
        case "mod11": arrayFinal = arrayComun.concat([
			"img/mod11/atropello.jpg",
			"img/mod11/bateria.jpg",
			"img/mod11/caida.jpg",
			"img/mod11/caidaDeObjetos.jpg",
			"img/mod11/descargaElectrica.jpg",
			"img/mod11/efectoCatapulta.jpg",
			"img/mod11/escalaDeBeaufort.jpg",
			"img/mod11/fondoIncidente.jpg",
			"img/mod11/fondoResumen.jpg",
			"img/mod11/hombreAtrapado.jpg",
			"img/mod11/hombreConBotas.jpg",
			"img/mod11/rangoVoltajes.jpg",
        ]);
            break;
        case "mod12": arrayFinal = arrayComun.concat([
			"img/mod12/fondoDesacelerar.jpg",
			"img/mod12/fondoDistracciones.jpg",
			"img/mod12/fondoPuentear.jpg",
			"img/mod12/fondoSuelo.jpg",
			"img/mod12/fondoTrabajador.jpg",
			"img/mod12/fondoVisibilidadAltura.jpg",
			"img/mod12/hombreAtrapado.jpg",
			"img/mod12/hombreDespedida.jpg",
			"img/mod12/indicadores.jpg",
            "img/mod12/obstaculos.svg",
			"img/mod12/resumen1.jpg",
			"img/mod12/resumen2.jpg",
			"img/mod12/resumen3.jpg",
			"img/mod12/secuenciaDeOperaciones.jpg",
        ]);
            break;
        case "intro": arrayFinal = arrayComun.concat([
			"img/intro/hombreDespedida.jpg",
			"img/intro/fondoSuelo.jpg",
        ]);
            break;

        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



       