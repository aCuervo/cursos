function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
        case "mod01": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js"
        ]);
            break;
        case "mod02": arrayFinal = arrayComun.concat([
            "js/bootstrap/bootstrap.min.js"
        ]);
            break;
        case "modPes": arrayFinal = arrayComun.concat([
            "js/snapsvg/snap.svg-min.js"
        ]);
            break;
        case "modFrut": arrayFinal = arrayComun.concat([
            "js/bootstrap/bootstrap.min.js",
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js"
        ]);
            break;
        case "modPan": arrayFinal = arrayComun.concat([
            "js/bootstrap/bootstrap.min.js",
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js"
        ]);
            break;
        case "modCar":
        case "modRes":
            arrayFinal = arrayComun.concat([
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
        "css/jquery/jquery-ui.theme.css"];
    var arrayFinal = null;

    switch (modulo) {
        case "mod01": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css"
        ]);
            break;
        case "mod02":
            arrayFinal = arrayComun.concat([
            "css/bootstrap/bootstrap.min.css"
            ]);
            break;
        case "modFrut":
            arrayFinal = arrayComun.concat([
            "css/bootstrap/bootstrap.min.css",
            "css/jointJS/joint.min.css"
            ]);
            break;
        case "modPan":
            arrayFinal = arrayComun.concat([
            "css/bootstrap/bootstrap.min.css",
            "css/jointJS/joint.min.css"
            ]);
            break;
        case "modCar":
        case "modPes":
        case "modRes":
            arrayFinal = arrayComun.concat([
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
        "img/comunes/sabiasQue.svg",
        "img/comunes/contraportada.svg",
        "img/comunes/exclamacion.svg",
        "img/comunes/exclamacionBlanca.svg",
        "img/comunes/logo.svg",
        "img/comunes/definicion.svg",
        "img/comunes/portada.svg",
        "img/comunes/separadorArbol.svg",
        "img/comunes/separadorHierba.svg",
        "img/comunes/thumbUp.svg",
        "img/comunes/tick_menu.svg"
    ];
    var arrayFinal = null;
    switch (modulo) {
        case "mod01":
            arrayFinal = arrayComun.concat([
            "img/mod1/cadenaAlimentaria.svg",
            "img/mod1/cadenaCuatro.svg",
            "img/mod1/cadenaDos.svg",
            "img/mod1/cadenaGranjaMesa.svg",
            "img/mod1/cadenaMesaGranja.svg",
            "img/mod1/cadenaPaso1.svg",
            "img/mod1/cadenaPaso2.svg",
            "img/mod1/cadenaPaso3.svg",
            "img/mod1/cadenaPaso4.svg",
            "img/mod1/cadenaTres.svg",
            "img/mod1/cadenaUno.svg",
            "img/mod1/codigoBarras.svg",
            "img/mod1/despedida.jpg",
            "img/mod1/M1cepilloManos.jpg",
            "img/mod1/M1guantesPlastico.jpg",
            "img/mod1/M1higosFresas.jpg",
            "img/mod1/M1manoDcha.jpg",
            "img/mod1/M1manoIzq.jpg"
            ]);
            break;
        case "mod02":
            arrayFinal = arrayComun.concat([
            "img/mod2/adoquines.jpg",
            "img/mod2/atomo.jpg",
            "img/mod2/avispas.jpg",
            "img/mod2/basura.svg",
            "img/mod2/contaminacionCruzada.svg",
            "img/mod2/contaminacionCruzada2.svg",
            "img/mod2/estornudo.jpg",
            "img/mod2/fuente.jpg",
            "img/mod2/huevoRoto.jpg",
            "img/mod2/leche.jpg",
            "img/mod2/M2arandanos.jpg",
            "img/mod2/M2centralNuclear.jpg",
            "img/mod2/M2cestaVerduras.jpg",
            "img/mod2/M2equipos.jpg",
            "img/mod2/carneBien.svg",
            "img/mod2/carnePocha.svg",
            "img/mod2/M2Fin.jpg",
            "img/mod2/M2frutosSecos.jpg",
            "img/mod2/M2fumando.jpg",
            "img/mod2/M2lavabo.jpg",
            "img/mod2/M2limpieza.jpg",
            "img/mod2/M2medicamentos.jpg",
            "img/mod2/manzanaBien.svg",
            "img/mod2/manzanaPocha.svg",
            "img/mod2/M2paletaTierra.jpg",
            "img/mod2/pescadoBien.svg",
            "img/mod2/pescadoPocho.svg",
            "img/mod2/M2pezglobo.jpg",
            "img/mod2/M2plagas.jpg",
            "img/mod2/M2polvo.jpg",
            "img/mod2/M2quimico.jpg",
            "img/mod2/M2radiacion.png",
            "img/mod2/M2sol.jpg",
            "img/mod2/M2tractor.jpg",
            "img/mod2/manzanaAmbiental.jpg",
            "img/mod2/manzanaPocha.jpg",
            "img/mod2/medioAmbiente.png",
            "img/mod2/patatasTierra.jpg",
            "img/mod2/platosSucios.jpg",
            "img/mod2/tuboEnsayo.svg"
            ]);
            break;
        case "mod03":
            arrayFinal = arrayComun.concat([
            "img/mod3/acidez.svg",
            "img/mod3/aerobias.svg",
            "img/mod3/anaerobias.svg",
            "img/mod3/cascada.jpg",
            "img/mod3/crecimiento.svg",
            "img/mod3/espora.jpg",
            "img/mod3/M3agua.jpg",
            "img/mod3/M3bacteria.jpg",
            "img/mod3/M3bacteriaColi.jpg",
            "img/mod3/M3basura.jpg",
            "img/mod3/M3carneCruda.jpg",
            "img/mod3/M3despedida.jpg",
            "img/mod3/M3Hielo.jpg",
            "img/mod3/M3hongo.png",
            "img/mod3/M3manipuladorBacterias.gif",
            "img/mod3/M3manipuladorEstadio.png",
            "img/mod3/M3manipuladorMediaCancha.png",
            "img/mod3/M3manipuladorPelotaTennis.png",
            "img/mod3/M3mesaCena.jpg",
            "img/mod3/M3Moho.jpg",
            "img/mod3/M3paloma.jpg",
            "img/mod3/M3parasito.png",
            "img/mod3/M3peloBocaNariz.jpg",
            "img/mod3/M3polvo.jpg",
            "img/mod3/M3quesoLeche.jpg",
            "img/mod3/M3rata.jpg",
            "img/mod3/M3relojArena.jpg",
            "img/mod3/M3tablaCortar.jpg",
            "img/mod3/M3Uvaspochas.jpg",
            "img/mod3/M3virus.png",
            "img/mod3/M3virus2.png",
            "img/mod3/miel.jpg",
            "img/mod3/nutrientes.svg",
            "img/mod3/placaPetri.jpg",
            "img/mod3/rangoTemperatura.svg",
            "img/mod3/reloj.png",
            "img/mod3/tamanios.svg",
            "img/mod3/temperatura.svg",
            ]);
            break;
        case "mod04":
            arrayFinal = arrayComun.concat([
            "img/mod4/alergenos.svg",
            "img/mod4/Clostridio.png",
            "img/mod4/dolorTripa.jpg",
            "img/mod4/estafilococos.jpg",
            "img/mod4/etiquetadoEnvases.svg",
            "img/mod4/M4Agua.jpg",
            "img/mod4/M4anisakis.jpg",
            "img/mod4/M4Arroz.jpg",
            "img/mod4/M4BacillusCereus.jpg",
            "img/mod4/M4bacteriaColi.jpg",
            "img/mod4/M4ClostridiumPerfringens.jpg",
            "img/mod4/M4conservas.jpg",
            "img/mod4/M4despedida.jpg",
            "img/mod4/M4EnfermedadesTransmision.png",
            "img/mod4/M4formacion.jpg",
            "img/mod4/M4Giardia.jpg",
            "img/mod4/M4Hamburguesa.jpg",
            "img/mod4/M4huevos.jpg",
            "img/mod4/M4huevos2.jpg",
            "img/mod4/M4introduccion.jpg",
            "img/mod4/M4jamon.jpg",
            "img/mod4/M4Lacteos.jpg",
            "img/mod4/M4Listeria.jpg",
            "img/mod4/M4mermelada.jpg",
            "img/mod4/M4Salmonella.jpg",
            "img/mod4/M4salsa.jpg",
            "img/mod4/M4tenia.png",
            "img/mod4/M4Toxoplasma.jpg",
            "img/mod4/M4trichinella.jpg",
            "img/mod4/patogenosAlimentos1.svg",
            "img/mod4/patogenosAlimentos2.svg",
            "img/mod4/patogenosAlimentos3.svg",
            "img/mod4/patogenosAlimentos4.svg",
            "img/mod4/patogenosAlimentos5.svg"
            ]);
            break;
        case "mod05":
            arrayFinal = arrayComun.concat([
            "img/mod5/anatomia.png",
            "img/mod5/M5bocaNariz.jpg",
            "img/mod5/M5despedida.jpg",
            "img/mod5/M5fumando.jpg",
            "img/mod5/M5introduccion.jpg",
            "img/mod5/M5jabonesFrutas.jpg",
            "img/mod5/M5joyas.jpg",
            "img/mod5/M5lavarManos.svg",
            "img/mod5/M5muffin.jpg",
            "img/mod5/M5pelo.jpg",
            "img/mod5/M5ropaTrio.svg",
            "img/mod5/M5uñas.jpg",
            "img/mod5/manoBacterias.jpeg",
            "img/mod5/prohibidoFumar.png"
            ]);
            break;
        case "mod06":
            arrayFinal = arrayComun.concat([
            "img/mod6/abrelatas.svg",
            "img/mod6/ahumado.svg",
            "img/mod6/aplicacionCalor.svg",
            "img/mod6/aplicacionFrio.svg",
            "img/mod6/azucar.svg",
            "img/mod6/bacalao.svg",
            "img/mod6/cadenaFrio.svg",
            "img/mod6/chiles.svg",
            "img/mod6/conserva.svg",
            "img/mod6/desierto.jpg",
            "img/mod6/embutido.svg",
            "img/mod6/especias.svg",
            "img/mod6/hamburguesa.svg",
            "img/mod6/lata.svg",
            "img/mod6/M6congelador.jpg",
            "img/mod6/M6desecado.jpg",
            "img/mod6/M6despedida.jpg",
            "img/mod6/M6estalactitas.jpg",
            "img/mod6/M6fruta.jpg",
            "img/mod6/M6lataFruta.jpg",
            "img/mod6/M6termometro.jpg",
            "img/mod6/metodoAgua.svg",
            "img/mod6/metodoCalor.svg",
            "img/mod6/metodoFrio.svg",
            "img/mod6/queso.svg",
            "img/mod6/radura.svg",
            "img/mod6/salero.svg",
            "img/mod6/vinagre.svg",
            "img/mod6/autoeval/tarta.svg",
            "img/mod6/autoeval/anchoas.svg",
            "img/mod6/autoeval/armario.svg",
            "img/mod6/autoeval/cacerola.svg",
            "img/mod6/autoeval/congelador.svg",
            "img/mod6/autoeval/conserva.svg",
            "img/mod6/autoeval/estanteria.svg",
            "img/mod6/autoeval/helado.svg",
            "img/mod6/autoeval/limpiacristales.svg",
            "img/mod6/autoeval/mermelada.svg",
            "img/mod6/autoeval/nevera.svg",
            "img/mod6/autoeval/neveraCompleta.svg",
            "img/mod6/autoeval/pez.svg",
            "img/mod6/autoeval/pollo.svg",
            "img/mod6/autoeval/solucion.png",
            ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
            "img/mod7/APPCC1.svg",
            "img/mod7/APPCC2.svg",
            "img/mod7/APPCC3.svg",
            "img/mod7/APPCCCono.svg",
            "img/mod7/engranajes.jpg",
            "img/mod7/heladeria.jpg",
            "img/mod7/industria.jpg",
            "img/mod7/insecticida.svg",
            "img/mod7/LimpiezaDesinfeccion.svg",
            "img/mod7/M7basura.svg",
            "img/mod7/M7ensalada.jpg",
            "img/mod7/M7ensalada2.jpg",
            "img/mod7/M7especias.jpg",
            "img/mod7/M7hotel.jpg",
            "img/mod7/M7Intro.jpg",
            "img/mod7/M7local.jpg",
            "img/mod7/M7madera.jpg",
            "img/mod7/M7mantenimiento.jpg",
            "img/mod7/M7mar.jpg",
            "img/mod7/mesaCocina.svg",
            "img/mod7/M7metal.jpg",
            "img/mod7/M7ok.jpg",
            "img/mod7/M7oruga.jpg",
            "img/mod7/M7peligro.jpg",
            "img/mod7/M7plan.jpg",
            "img/mod7/M7plastico.jpg",
            "img/mod7/M7productos.png",
            "img/mod7/M7ratita.jpg",
            "img/mod7/M7veneno.jpg",
            "img/mod7/mosquitera.jpg"
        ]);
            break;
        case "modRes": arrayFinal = arrayComun.concat([
            "img/modRes/almacen.jpg",
            "img/modRes/almejas.jpg",
            "img/modRes/bienvenida.jpg",
            "img/modRes/caja.jpg",
            "img/modRes/calientaplatos.jpg",
            "img/modRes/carneCongelada.jpg",
            "img/modRes/carnePocha.svg",
            "img/modRes/cocina.jpg",
            "img/modRes/contaminacionCruzada2.svg",
            "img/modRes/desorden.jpg",
            "img/modRes/despedida.jpg",
            "img/modRes/emplatado.jpg",
            "img/modRes/estanteriaLatas.jpg",
            "img/modRes/freidora.jpg",
            "img/modRes/frio.png",
            "img/modRes/humedad.jpg",
            "img/modRes/manzanaPocha.svg",
            "img/modRes/pescadoPocho.svg",
            "img/modRes/recalentar.jpg",
            "img/modRes/reloj.jpg",
            "img/modRes/salchichas.jpg",
            "img/modRes/salmon.jpg",
            "img/modRes/termometro.jpg",
            "img/modRes/vitrina.jpg",
            "img/modRes/zamburinas.jpg"
        ]);
            break;
        case "modFrut": arrayFinal = arrayComun.concat([
            "img/modFru/greengrocers.jpg",
            "img/modFru/hortalizas.jpg",
            "img/modFru/legumbres.jpg",
            "img/modFru/fruits.jpg",
            "img/modFru/setas.jpg",
            "img/modFru/carrots.jpg",
            "img/modFru/verduras.jpg",
            "img/modFru/frutas.jpg",
            "img/modFru/hraiz.jpg",
            "img/modFru/htuberculos.jpg",
            "img/modFru/hbulbos.jpg",
            "img/modFru/htallos.jpg",
            "img/modFru/hinflorescencia.jpg",
            "img/modFru/hfrutos.jpg",
            "img/modFru/hsemillas.jpg",
            "img/modFru/hpeponides.jpg",
            "img/modFru/fsecos.jpg",
            "img/modFru/fhueso.jpg",
            "img/modFru/fpepita.jpg",
            "img/modFru/fgrano.jpg",
            "img/modFru/fbayas.jpg",
            "img/modFru/fpeponides.jpg",
            "img/modFru/fcitricos.jpg",
            "img/modFru/ftropical.jpg",
            "img/modFru/kiwi.jpg",
            "img/modFru/mediaNaranja.jpg",
            "img/modFru/mediaCebolla.jpg",
            "img/modFru/berries.jpg",
            "img/modFru/apple.jpg",
            "img/modFru/maduracion.jpg",
            "img/modFru/senescencia.jpg",
            "img/modFru/oranges.jpg",
            "img/modFru/frutaverde.jpg",
            "img/modFru/frutanaranja.jpg",
            "img/modFru/manzanaCorte.png",
            "img/modFru/graficoMaduracion.png",
            "img/modFru/graficoNoclimaterico.png",
            "img/modFru/strawberryPlant.jpg",
            "img/modFru/banana1.png",
            "img/modFru/banana2.png",
            "img/modFru/banana3.jpg",
            "img/modFru/fruitsFondo2.jpg",
            "img/modFru/golpes.jpg",
            "img/modFru/caracol.jpg",
            "img/modFru/chungas.jpg",
            "img/modFru/stillif.jpg",
            "img/modFru/appetiz.jpg",
            "img/modFru/salad.jpg",
            "img/modFru/paprika.jpg",
            "img/modFru/moras.jpg",
            "img/modFru/artichokes.jpg",
            "img/modFru/diagrama.png",
            "img/modFru/manzano.jpg",
            "img/modFru/nutrientes.svg",
            "img/modFru/zanahorias.jpg",
            "img/modFru/agarico.jpg",
            "img/modFru/contaminacionq.svg",
            "img/modFru/campo.jpg",
            "img/modFru/factory.jpg",
            "img/modFru/irrigation.jpg",
            "img/modFru/compost.jpg",
            "img/modFru/almacen.jpg",
            "img/modFru/sandiamal.jpg",
            "img/modFru/fondofruta.jpg",
            "img/modFru/fondoindustria.jpg",
            "img/modFru/grapes.jpg"
        ]);
            break;
        case "modCar": arrayFinal = arrayComun.concat([
            "img/modCar/establo.svg",
            "img/modCar/sco2intro.jpg",
            "img/modCar/sco3p1.jpg",
            "img/modCar/sco3p2.png",
            "img/modCar/sco3p3.jpg",
            "img/modCar/sco3p4.jpg",
            "img/modCar/sco3p5.jpg",
            "img/modCar/sco4der.png",
            "img/modCar/sco4izq.png",
            "img/modCar/sco5aco1.jpg",
            "img/modCar/sco5aco2.png",
            "img/modCar/sco5aco3.png",
            "img/modCar/sco5aco4.jpg",
            "img/modCar/sco5aco5.png",
            "img/modCar/sco5fondo.jpg",
            "img/modCar/sco11fondo.png",
            "img/modCar/sco11fondob.svg",
            "img/modCar/sco12p1.jpg",
            "img/modCar/sco12p2.jpg",
            "img/modCar/sco12p3.png",
            "img/modCar/sco13.jpg",
            "img/modCar/sco14.jpg",
            "img/modCar/sco14micro.jpg",
            "img/modCar/sco14oreja.jpg",
            "img/modCar/sco16d.jpg",
            "img/modCar/sco16i.jpg",
            "img/modCar/sco17c.png",
            "img/modCar/scoAcondicionamientomp1.jpg",
            "img/modCar/scoAcondicionamientomp2.jpg",
            "img/modCar/scoAcondicionamientop1.jpg",
            "img/modCar/scoAcondicionamientop2.jpg",
            "img/modCar/scoBienestar.png",
            "img/modCar/scoDespedida.jpg",
            "img/modCar/scoElaboracionp1.jpg",
            "img/modCar/scoElaboracionp2.jpg",
            "img/modCar/scoElaboracionp3.jpg",
            "img/modCar/scoExposicion2fondo.jpg",
            "img/modCar/scoExposicionfondo.jpg",
            "img/modCar/scoManip2.png",
            "img/modCar/scoRecepcion.jpg",
            "img/modCar/scoSacrificio.jpg",
            "img/modCar/scoTransporte.jpg",
            "img/modCar/syringe.jpg",
            "img/modCar/vaquita.svg"
        ]);
            break;
        case "modPes": arrayFinal = arrayComun.concat([
            "img/modPes/algaRoja.jpg",
            "img/modPes/algaVerde.jpg",
            "img/modPes/almacenamiento.jpg",
            "img/modPes/antibiotico.jpg",
            "img/modPes/anzuelo.jpg",
            "img/modPes/atun.jpg",
            "img/modPes/barcas.jpg",
            "img/modPes/barcoFaenero.jpg",
            "img/modPes/barcoPesquero.jpg",
            "img/modPes/cadenaAnisakis.svg",
            "img/modPes/calamar.jpg",
            "img/modPes/calamarCocinado.jpg",
            "img/modPes/cigalas.jpg",
            "img/modPes/contaminacionBiologica.jpg",
            "img/modPes/elaboracion.jpg",
            "img/modPes/etiqueta.png",
            "img/modPes/exposicion.jpg",
            "img/modPes/frescuraPescado.png",
            "img/modPes/hojas.jpg",
            "img/modPes/kois.jpg",
            "img/modPes/marisco.jpg",
            "img/modPes/metalesPesados.svg",
            "img/modPes/molecula.svg",
            "img/modPes/muestraAnisakis.png",
            "img/modPes/mundoTierra.jpg",
            "img/modPes/paella.jpg",
            "img/modPes/pececitos.jpg",
            "img/modPes/pecesCaja.jpg",
            "img/modPes/pecesPiscina.jpg",
            "img/modPes/pescado_malo.jpg",
            "img/modPes/pescadoPlata.jpg",
            "img/modPes/petroleo.jpg",
            "img/modPes/pezLeon.jpg",
            "img/modPes/pezPuzzle.svg",
            "img/modPes/pezPresentacion.jpg",
            "img/modPes/pulpo.jpg",
            "img/modPes/salmon.jpg",
            "img/modPes/sardinas.jpg",
            "img/modPes/sardinas2.jpg",
            "img/modPes/sepia.jpg",
            "img/modPes/sombrerero.png",
            "img/modPes/zamburinia.jpg"
        ]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}