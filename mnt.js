var CURSO = { modulo: "", json: null, scoActual: null, scoUltimo: null, diagrama: null, oygCrosswordPuzzle: null, arrayPalabras: null, arrayDefiniciones: null, inicializar: function (modulo) { this.modulo = modulo }, inicializar: function (modulo, sco) { this.modulo = modulo; this.scoActual = sco; this.scoUltimo = sco } }; function precarga() { precargarCSS(); precargarJS() }
function precargarCSS() {
    var cssArray = getArrayCSS(CURSO.modulo); if (cssArray && cssArray.length > 0) {
        for (var i = 0; i < cssArray.length; i++) {
            var css = document.createElement("LINK"); css.href = cssArray[i]; css.rel = "stylesheet"; css.onerror = function () { console.log("Error al cargar el css " + css.href) }
            document.head.appendChild(css)
        }
    }
}
function precargarJS() {
    var jsArray = getArrayJS(CURSO.modulo)
    if (jsArray && jsArray.length > 0) {
        var i = 0; var loopArray = function (jsArray) {
            precargarScript(jsArray[i], function () {
                i++; if (i < jsArray.length) { loopArray(jsArray) }
                else { precargarImagenes() }
            })
        }
        loopArray(jsArray)
    }
    else { precargarImagenes() }
}
function precargarScript(src, callback) {
    var js = document.createElement("SCRIPT"); js.onerror = function () { console.log("Error al cargar el js " + js.src) }
    js.onload = function () { callback() }
    js.src = src; if (src.indexOf("wordsearch") > -1) { document.body.appendChild(js) }
    else { document.head.appendChild(js) }
}
function precargarImagenes() {
    var imagenes = getArrayImagenes(CURSO.modulo); if (imagenes && imagenes.length > 0) { var barraCarga = $("#barraCarga"); barraCarga.progressbar({ value: 0, change: function () { $(".progress-label").text(barraCarga.progressbar("value") + "%") }, complete: function () { setTimeout(onLoad(), 5000); barraCarga.hide() } }); var nCargadas = 0; for (var i = 0; i < imagenes.length; i++) { var img = document.createElement("IMG"); img.src = imagenes[i]; img.className = "oculto"; img.onload = function () { nCargadas++; progreso((parseFloat(100 * nCargadas / imagenes.length)).toFixed(2)) }; img.onerror = function () { console.log("Error al precargar la imagen " + this.src) }; document.body.appendChild(img) } }
    else { barraCarga.hide(); onLoad() }
}
function progreso(valor) { $("#barraCarga").progressbar("value", parseFloat(valor)) }
function onLoad() {
    $.getJSON("json/" + CURSO.modulo + ".json").done(function (datos) {
        CURSO.json = datos; var locationSCO = doLMSGetValue("cmi.core.lesson_location"); if (locationSCO) {
            CURSO.scoActual = parseInt(locationSCO); if (CURSO.scoActual >= CURSO.json.contenido.length) { CURSO.scoActual = CURSO.json.contenido.length - 1; doLMSSetValue("cmi.core.lesson_location", CURSO.scoActual); doLMSCommit() }
            CURSO.scoUltimo = CURSO.scoActual
        }
        else if (!CURSO.scoActual) { CURSO.scoActual = 0; CURSO.scoUltimo = 0 }
        document.body.appendChild(crearEncabezado()); document.body.appendChild(crearIndice()); document.body.appendChild(crearPantalla()); document.body.appendChild(crearNavegacion()); inicializarObjetos(); inicializarAlto()
    }).error(function () { console.log("Error al leer el JSON") })
}
function crearEncabezado() {
    var headerCabecera = document.createElement("HEADER"); var divCabeceraSuperior = document.createElement("DIV"); divCabeceraSuperior.id = "divCabeceraSuperior"; var divCabeceraInferior = document.createElement("DIV"); divCabeceraInferior.id = "divCabeceraInferior"; var divCabeceraImagen = document.createElement("DIV"); divCabeceraImagen.id = "divCabeceraImagen"; if (CURSO.json.imagenEncabezado) { divCabeceraImagen.style.backgroundImage = "url(" + CURSO.json.imagenEncabezado + ")" }
    var divCabeceraTextos = document.createElement("DIV"); divCabeceraTextos.id = "divCabeceraTextos"; var h1Encabezado = document.createElement("H1"); h1Encabezado.innerHTML = CURSO.json.modulo; var h2Encabezado = document.createElement("H2"); h2Encabezado.innerHTML = (parseInt(CURSO.scoActual) + 1) + ". " + CURSO.json.contenido[CURSO.scoActual].titulo; h2Encabezado.id = "h2Encabezado"; divCabeceraTextos.appendChild(h1Encabezado); divCabeceraTextos.appendChild(h2Encabezado); divCabeceraInferior.appendChild(divCabeceraImagen); divCabeceraInferior.appendChild(divCabeceraTextos); headerCabecera.appendChild(divCabeceraSuperior); headerCabecera.appendChild(divCabeceraInferior); return headerCabecera
}
function crearIndice() {
    var navIndice = document.createElement("NAV"); navIndice.id = "navIndice"; var divIndiceLista = document.createElement("DIV"); divIndiceLista.id = "divIndiceLista"; var ulIndiceLista = document.createElement("UL"); ulIndiceLista.id = "ulIndiceLista"; var liIndiceLista = null; var aIndiceLista = null; $.each(CURSO.json.contenido, function (indice, diapositiva) {
        liIndiceLista = document.createElement("LI"); aIndiceLista = document.createElement("A"); aIndiceLista.innerHTML = diapositiva.titulo; liIndiceLista.appendChild(aIndiceLista); ulIndiceLista.appendChild(liIndiceLista); if (indice == CURSO.scoActual) { liIndiceLista.classList.add("scoActivo") }
        if (indice == CURSO.scoUltimo) { liIndiceLista.classList.add("scoUltimo"); liIndiceLista.setAttribute("onClick", "navegar(" + indice + ");") }
        if (indice < CURSO.scoUltimo) { liIndiceLista.classList.add("scoCompletado"); aIndiceLista.setAttribute("onClick", "navegar(" + indice + ");") }
        if (indice > CURSO.scoUltimo) { liIndiceLista.classList.add("scoDeshabilitado") }
    }); divIndiceLista.appendChild(ulIndiceLista); var divIndiceFlechas = document.createElement("DIV"); divIndiceFlechas.id = "divIndiceFlechas"; var divIndiceArriba = document.createElement("DIV"); divIndiceArriba.id = "divIndiceArriba"; divIndiceArriba.innerHTML = "<svg viewBox='0 0 60 60'><path d='M 0 60 L 30 0 L 60 60 z'/></svg>"
    var divIndiceAbajo = document.createElement("DIV"); divIndiceAbajo.id = "divIndiceAbajo"; divIndiceAbajo.innerHTML = "<svg viewBox='0 0 60 60'><path d='M 0 0 L 60 0 L 30 60 z'/></svg>"
    $(divIndiceArriba).mouseenter(function () { this.iid = setInterval(function () { var posScroll = $('#divIndiceLista').scrollTop(); var alturaLi = $("#ulIndiceLista").find(".scoActivo").outerHeight(!0); $('#divIndiceLista').scrollTop(posScroll - alturaLi) }, 250) }).mouseleave(function () { this.iid && clearInterval(this.iid) }); $(divIndiceAbajo).mouseenter(function () { this.iid = setInterval(function () { var posScroll = $('#divIndiceLista').scrollTop(); var alturaLi = $("#ulIndiceLista").find(".scoActivo").outerHeight(!0); $('#divIndiceLista').scrollTop(posScroll + alturaLi) }, 250) }).mouseleave(function () { this.iid && clearInterval(this.iid) }); divIndiceFlechas.appendChild(divIndiceArriba); divIndiceFlechas.appendChild(divIndiceAbajo); navIndice.appendChild(divIndiceFlechas); navIndice.appendChild(divIndiceLista); return navIndice
}
function crearPantalla() { var divTextos = document.createElement("DIV"); divTextos.id = "divTextos"; cargarFondo(divTextos); cargarTextos(divTextos); return divTextos }
function cargarFondo(div) {
    var fondo = CURSO.json.contenido[CURSO.scoActual].fondo; var subclase = CURSO.json.contenido[CURSO.scoActual].subclase; $("#divTextos").removeClass(); $("#divTextos").removeAttr("style"); if (fondo) {
        div.classList.add("fondo"); if (subclase) { div.classList.add(subclase) }
        div.style.backgroundImage = "url(" + fondo + ")"
    }
    inicializarAlto()
}
function cargarTextos(div) { var contenido = CURSO.json.contenido[CURSO.scoActual].contenido; if (contenido) { $.each(contenido, function (indice, elemento) { cargarObjeto(div, elemento) }) } }
function cargarObjeto(div, elemento) {
    if (elemento) {
        var divParrafo = document.createElement("DIV"); divParrafo.className = elemento.clase; if (elemento.subclase) { var arrayClases = elemento.subclase.split(" "); $.each(arrayClases, function (index, clase) { divParrafo.classList.add(clase) }) }
        if (elemento.animacion) { divParrafo.classList.add("animated"); divParrafo.classList.add(elemento.animacion) }
        leerDataset(divParrafo, elemento); switch (elemento.clase) {
            case "texto": cargarTexto(divParrafo, elemento); break; case "icono": cargarIcono(divParrafo, elemento); break; case "lista": cargarLista(divParrafo, elemento); break; case "imagen": cargarImagen(divParrafo, elemento); break; case "mapa": cargarMapa(divParrafo, elemento); break; case "tabs": cargarTabs(divParrafo, elemento); break; case "tabsB": cargarTabsLado(divParrafo, elemento)
                break; case "acordeon": cargarAcordeon(divParrafo, elemento); break; case "acordeonSub": cargarAcordeonSub(divParrafo, elemento); break; case "acordeonHorizontal": cargarAcordeonHor(divParrafo, elemento); break; case "acordeonImagenes": cargarAcordeonImg(divParrafo, elemento); break; case "circulo": cargarCirculo(divParrafo, elemento, elemento.subclase); break; case "tabla": cargarTabla(divParrafo, elemento, elemento.subclase); break; case "slider": cargarSlider(divParrafo, elemento); break; case "sliderB": cargarSliderB(divParrafo, elemento); break; case "listaObjetos": cargarListaObjetos(divParrafo, elemento); break; case "autoevalPreguntas": crearAutoevalPreguntas(divParrafo, elemento); break; case "autoevalTabla": crearAutoevalTabla(divParrafo, elemento); break; case "autoevalArrastrar": crearAutoevalArrastrar(divParrafo, elemento); break; case "juegoPalabrasCruzadas": crearPalabrasCruzadas(divParrafo, elemento); break; case "juegoSopaLetras": crearSopaLetras(divParrafo, elemento); break; case "caja": crearCaja(divParrafo, elemento); break; case "diagrama": CURSO.diagrama = cargarDiagrama(divParrafo, elemento); break; case "imagenSVG": cargarSVG(divParrafo, elemento); break; default: console.log("Objeto no encontrado: " + elemento.clase)
        }
        div.appendChild(divParrafo)
    }
}
function cargarTexto(div, elemento) {
    if (elemento.opacidad) { div.style.backgroundColor = "rgba(255, 255, 255," + elemento.opacidad + ")" }
    if (elemento.texto) {
        if (elemento.ancho) { div.style.width = elemento.ancho + "%" }
        if (div.classList.contains('anillas')) { var divCabecera = document.createElement('DIV'); divCabecera.className = 'cabecera'; svgAnillas(divCabecera); var divContenido = document.createElement('DIV'); divContenido.className = 'contenido'; divContenido.innerHTML = "<p>" + elemento.texto + "</p>"; div.appendChild(divCabecera); div.appendChild(divContenido) }
        else if (div.classList.contains('celo')) { var divCabecera = document.createElement('DIV'); divCabecera.className = 'cabecera'; var divContenido = document.createElement('DIV'); divContenido.className = 'contenido'; divContenido.innerHTML = "<p>" + elemento.texto + "</p>"; div.appendChild(divCabecera); div.appendChild(divContenido) }
        else if (div.classList.contains('banner')) { var divIzq = document.createElement("DIV"); divIzq.className = 'izquierda'; svgTrianguloIzquierda(divIzq); var divContenido = document.createElement("DIV"); divContenido.className = 'contenido'; divContenido.innerHTML = "<p>" + elemento.texto + "</p>"; var divDch = document.createElement("DIV"); divDch.className = 'derecha'; svgTrianguloDerecha(divDch); div.appendChild(divIzq); div.appendChild(divContenido); div.appendChild(divDch) }
        else { div.innerHTML = "<p>" + elemento.texto + "</p>" }
    }
}
function cargarIcono(div, elemento) {
    var divIcono = document.createElement("DIV"); divIcono.className = "divIcono"; var divFondo = document.createElement("DIV"); divFondo.className = "divFondo"; var divTexto = document.createElement("DIV"); divTexto.className = "divTexto"; if (elemento.imagen) {
        var img = document.createElement("IMG"); img.src = elemento.imagen; if (elemento.ancho) { img.style.width = elemento.ancho + "px" }
        divTexto.appendChild(img)
    }
    if (elemento.texto) { divTexto.innerHTML += elemento.texto }
    if (elemento.contenido) { $.each(elemento.contenido, function (indice, elemento) { cargarObjeto(divTexto, elemento) }) }
    divIcono.appendChild(divFondo); div.appendChild(divIcono); div.appendChild(divTexto); if (div.classList.contains('picos')) { var divPie = document.createElement("DIV"); divPie.className = "divPie"; svgPicos(divPie); div.appendChild(divPie) }
}
function cargarLista(div, elemento) {
    var ulLista = document.createElement("UL"); ulLista.className = 'ulLista'; if (elemento.opacidad) { div.style.backgroundColor = "rgba(255, 255, 255," + elemento.opacidad + ")" }
    if (elemento.titulo) { var spanTitulo = document.createElement("SPAN"); spanTitulo.innerHTML = elemento.titulo; ulLista.appendChild(spanTitulo) }
    if (elemento.imgPunto) { ulLista.style.listStyleImage = "url(" + elemento.imgPunto + ")" }
    if (elemento.contenido) { crearLista(elemento.contenido, ulLista) }
    if (div.classList.contains('anillas')) { var divCabecera = document.createElement('DIV'); divCabecera.className = 'cabecera'; svgAnillas(divCabecera); var divContenido = document.createElement('DIV'); divContenido.className = 'contenido'; divContenido.appendChild(ulLista); div.appendChild(divCabecera); div.appendChild(divContenido) }
    else if (div.classList.contains('celo')) { var divCabecera = document.createElement('DIV'); divCabecera.className = 'cabecera'; var divContenido = document.createElement('DIV'); divContenido.className = 'contenido'; divContenido.appendChild(ulLista); div.appendChild(divCabecera); div.appendChild(divContenido) }
    else { div.appendChild(ulLista) }
}
function cargarImagen(div, elemento) {
    if (elemento.imagen) {
        var imgImagen = document.createElement("IMG"); imgImagen.src = elemento.imagen; if (elemento.ancho) { imgImagen.style.width = elemento.ancho + "px" }
        div.appendChild(imgImagen)
    }
    if (elemento.pie) { var spanPie = document.createElement("SPAN"); spanPie.innerHTML = elemento.pie; div.appendChild(spanPie) }
}
function cargarMapa(div, elemento) { var svg = Snap(div); var svgImagen = Snap.load(elemento.imagen, function (data) { svg.append(data); if (elemento.nodos) { $.each(elemento.nodos, function (indice, nodo) { var gSvg = $(".mapa svg g").find("#" + nodo.id); var titleNodo = document.createElement("TITLE"); titleNodo.innerHTML = nodo.texto; gSvg.prepend(titleNodo) }) } }) }
function cargarTabs(div, elemento) {
    var ulLista = document.createElement("UL"); ulLista.className = 'ulLista'; var divContenido = document.createElement("DIV"); divContenido.className = 'divContenido'; $.each(elemento.contenido, function (indice, elemento) {
        var divTab = document.createElement("DIV"); divTab.id = "tabs-" + (indice + 1); divTab.classList.add("clearfix"); if (elemento.titulo) { var liTitulo = document.createElement("LI"); var aTitulo = document.createElement("A"); aTitulo.href = "#tabs-" + (indice + 1); aTitulo.innerHTML = elemento.titulo; liTitulo.appendChild(aTitulo); ulLista.appendChild(liTitulo) }
        if (elemento.imagen) {
            var imgTab = document.createElement("IMG"); imgTab.src = elemento.imagen; if (elemento.ancho) { imgTab.style.width = elemento.ancho + "px" }
            divTab.appendChild(imgTab)
        }
        if (elemento.subtitulo) { var h2Tab = document.createElement("H2"); h2Tab.innerHTML = elemento.subtitulo; divTab.appendChild(h2Tab) }
        if (elemento.texto) {
            var pTab = document.createElement("P"); pTab.innerHTML = elemento.texto
            divTab.appendChild(pTab)
        }
        if (elemento.contenido) { $.each(elemento.contenido, function (indice, elemento) { cargarObjeto(divTab, elemento) }) }
        divContenido.appendChild(divTab)
    }); div.appendChild(ulLista); div.appendChild(divContenido)
}
function cargarTabsLado(div, elemento) {
    var divWrapper = document.createElement("DIV"); var id = ''; var divLista = document.createElement("DIV"); if (div.classList.contains('izquierda')) { divLista.className = "tabbable tabs-left"; id = "tabLeft" }
    else if (div.classList.contains('derecha')) { divLista.className = "tabbable tabs-right"; id = "tabRight" }
    var ulLista = document.createElement("UL"); ulLista.className = "nav nav-tabs"; var divContenedor = document.createElement("DIV"); divContenedor.className = "tab-content"; $.each(elemento.contenido, function (indice, elemento) {
        var divTab = document.createElement("DIV"); divTab.className = "tab-pane"; divTab.id = id + indice; indice == 0 ? divTab.classList.add("active") : ''; if (elemento.titulo) {
            var liTitulo = document.createElement("LI"); var aTitulo = document.createElement("A"); indice == 0 ? liTitulo.className = 'active' : ''; aTitulo.innerHTML = elemento.titulo; aTitulo.href = "#" + id + indice; aTitulo.dataset.toggle = "tab"
            liTitulo.appendChild(aTitulo); ulLista.appendChild(liTitulo)
        }
        if (elemento.imagen) {
            var imgImagen = document.createElement("IMG"); imgImagen.src = elemento.imagen; if (elemento.ancho) { imgImagen.style.width = elemento.ancho + "px" }
            divTab.appendChild(imgImagen)
        }
        if (elemento.subtitulo) { var h2Subtitulo = document.createElement("H2"); h2Subtitulo.innerHTML = elemento.subtitulo; divTab.appendChild(h2Subtitulo) }
        if (elemento.texto) { var pTexto = document.createElement("P"); pTexto.innerHTML = elemento.texto; divTab.appendChild(pTexto) }
        if (elemento.contenido) { $.each(elemento.contenido, function (indice, elemento) { cargarObjeto(divTabsElemento, elemento) }) }
        divContenedor.appendChild(divTab)
    }); divLista.appendChild(ulLista); divWrapper.appendChild(divLista); divWrapper.appendChild(divContenedor); div.appendChild(divWrapper)
}
function cargarAcordeon(div, elemento) {
    if (elemento.ancho) { div.style.width = elemento.ancho + "%" }
    $.each(elemento.contenido, function (indice, elemento) {
        var divTab = document.createElement("DIV"); if (elemento.titulo) { var h3Titulo = document.createElement("H3"); h3Titulo.innerHTML = elemento.titulo }
        if (elemento.imagen) {
            var imgTab = document.createElement("IMG"); imgTab.src = elemento.imagen; if (elemento.ancho) { imgTab.style.width = elemento.ancho + "px" }
            divTab.appendChild(imgTab)
        }
        if (elemento.subtitulo) { h2Tab = document.createElement("H2"); h2Tab.innerHTML = elemento.subtitulo; divTab.appendChild(h2Tab) }
        if (elemento.texto) { pTab = document.createElement("P"); pTab.innerHTML = elemento.texto; divTab.appendChild(pTab) }
        if (elemento.contenido) { $.each(elemento.contenido, function (indice, elemento) { cargarObjeto(divTab, elemento) }) }
        div.appendChild(h3Titulo); div.appendChild(divTab)
    })
}
function cargarAcordeonSub(div, elemento) { var divAcordeon = document.createElement("DIV"); divAcordeon.className = "divAcordeonSub"; crearContenidoAcordeonSub(elemento.contenido, divAcordeon, 1); div.appendChild(divAcordeon) }
function cargarAcordeonImg(div, elemento) {
    var ulAcordeon = document.createElement("UL"); if (elemento.alto) { ulAcordeon.style.height = elemento.alto + "px" }
    var liAcordeon = null; var divContenido = null; var imgAcordeon = null; var h2Acordeon = null; $.each(elemento.contenido, function (indice, elemento) {
        var liAcordeon = document.createElement("LI"); if (elemento.titulo) { h2Acordeon = document.createElement("H2"); h2Acordeon.innerHTML = elemento.titulo; liAcordeon.appendChild(h2Acordeon) }
        if (elemento.imagen) { liAcordeon.style.backgroundImage = "url(" + elemento.imagen + ")" }
        ulAcordeon.appendChild(liAcordeon)
    }); div.appendChild(ulAcordeon)
}
function cargarAcordeonHor(div, elemento) {
    var ulAcordeonHorizontal = document.createElement("UL"); ulAcordeonHorizontal.dataset.direction = 'horizontal'; ulAcordeonHorizontal.className = 'accordion accordion--basic accordion--horizontal'; var liAcordeonHorizontal = null; var spanAcordeonHorizontal = null; var iAcordeonHorizontal = null; var divAcordeonHorizontal = null; var pAcordeonHorizontal = null; $.each(elemento.contenido, function (indice, elemento) {
        liAcordeonHorizontal = document.createElement("LI"); liAcordeonHorizontal.className = 'accordion__panel'; spanAcordeonHorizontal = document.createElement("SPAN"); spanAcordeonHorizontal.className = 'accordion__heading'; spanAcordeonHorizontal.innerHTML = elemento.titulo; iAcordeonHorizontal = document.createElement("I"); iAcordeonHorizontal.className = '-icon -icon--right'; spanAcordeonHorizontal.appendChild(iAcordeonHorizontal); divAcordeonHorizontal = document.createElement("DIV"); divAcordeonHorizontal.className = 'accordion__expander'; if (elemento.imagen) {
            imgAcordeonHorizontal = document.createElement("IMG"); imgAcordeonHorizontal.src = elemento.imagen; if (elemento.ancho) { imgAcordeonHorizontal.style.width = elemento.ancho + "px" }
            divAcordeonHorizontal.appendChild(imgAcordeonHorizontal)
        }
        if (elemento.subtitulo) { h2AcordeonHorizontal = document.createElement("H2"); h2AcordeonHorizontal.innerHTML = elemento.subtitulo; divAcordeonHorizontal.appendChild(h2AcordeonHorizontal) }
        if (elemento.texto) { pAcordeonHorizontal = document.createElement("P"); pAcordeonHorizontal.innerHTML = elemento.texto; divAcordeonHorizontal.appendChild(pAcordeonHorizontal) }
        if (elemento.contenido) { $.each(elemento.contenido, function (i, e) { divAcordeonHorizontal.appendChild(cargarObjeto(e)) }) }
        liAcordeonHorizontal.appendChild(divAcordeonHorizontal); liAcordeonHorizontal.appendChild(spanAcordeonHorizontal); ulAcordeonHorizontal.appendChild(liAcordeonHorizontal)
    }); div.appendChild(ulAcordeonHorizontal)
}
function cargarCirculo(div, elemento, tipo) {
    var divTextos = document.createElement("DIV"); divTextos.className = "textos"; var divImagenes = document.createElement("DIV"); divImagenes.className = "imagenes"; var divImagen = null; var divTexto = null; var h2Texto = null; var pTexto = null; var offset = 0; if (tipo == 'circular') { offset = Math.round(360 / parseInt(elemento.contenido.length)) }
    else if (tipo == 'semi') { offset = Math.round(180 / (parseInt(elemento.contenido.length) - 1)) }
    var elementos = elemento.contenido.length; var grados = 0; $.each(elemento.contenido, function (indice, elemento) {
        divImagen = document.createElement("DIV"); divImagen.className = "imagen"; divImagen.style.backgroundImage = "url(" + elemento.imagen + ")"; if (tipo == 'circular' || tipo == 'semi') { divImagen.style.transform = "rotate(" + grados + "deg) translate(17em) rotate(" + (-grados) + "deg)"; grados = grados + offset }
        divImagen.onmouseover = function (e) { $(e.relatedTarget.parentElement).find(".textos .texto.activo").removeClass("activo"); $(e.relatedTarget.parentElement).find(".textos .texto:nth-of-type(" + (indice + 1) + ")").addClass("activo") }
        divImagen.onmouseout = function (e) { $(e.relatedTarget.parentElement).find(".textos .texto.activo").removeClass("activo") }
        divImagenes.appendChild(divImagen); divTexto = document.createElement("DIV"); divTexto.className = "texto"; h2Texto = document.createElement("H2"); h2Texto.innerHTML = elemento.titulo; pTexto = document.createElement("P"); pTexto.innerHTML = elemento.texto; divTexto.appendChild(h2Texto); divTexto.appendChild(pTexto); divTextos.appendChild(divTexto)
    }); div.appendChild(divTextos); div.appendChild(divImagenes)
}
function cargarTabla(div, elemento, subclase) {
    var tableTabla = document.createElement("TABLE"); var tHead = document.createElement("THEAD"); var th = null; var tr = null; var td = null; if (elemento.filaTitulos) {
        $.each(elemento.filaTitulos, function (indice, elementoTH) {
            th = document.createElement("TH"); th.innerHTML = elementoTH.titulo; if (elementoTH.rowspan) { th.rowSpan = elementoTH.rowspan }
            if (elementoTH.colspan) { th.colSpan = elementoTH.colspan }
            tHead.appendChild(th)
        }); tableTabla.appendChild(tHead)
    }
    $.each(elemento.filaContenido, function (indice, elementoTR) {
        tr = document.createElement("TR"); $.each(elementoTR.fila, function (indice, elementoTD) {
            td = document.createElement("TD"); if (elementoTD.imagen) {
                var img = "<img src=" + elementoTD.imagen; if (elementoTD.ancho) { img += " style='width:" + elementoTD.ancho + "px;'" }
                img += " />"; td.innerHTML += img
            }
            if (elementoTD.texto) { td.innerHTML += "<p>" + elementoTD.texto + "</p>" }
            if (elementoTD.rowspan) { td.rowSpan = elementoTD.rowspan }
            if (elementoTD.colspan) { td.colSpan = elementoTD.colspan }
            if (elementoTD.clase) { cargarObjeto(td, elementoTD) }
            if (subclase == 'rebordeHover') { td.onclick = function () { $(this).toggleClass("seleccionado") } }
            tr.appendChild(td)
        }); tableTabla.appendChild(tr)
    }); if (elemento.respuestas) { cargarRespuestas(tableTabla, elemento.respuestas) }
    div.appendChild(tableTabla)
}
function cargarSlider(div, elemento) {
    var ulSlider = document.createElement("UL"); ulSlider.className = "pgwSlideshow"
    var liSlider = null; var imgSlider = null; $.each(elemento.contenido, function (index, elementoLI) {
        liSlider = document.createElement("LI"); imgSlider = document.createElement("IMG"); imgSlider.src = elementoLI.thumb; imgSlider.alt = elementoLI.titulo; if (elementoLI.texto) { imgSlider.dataset.description = elementoLI.texto }
        imgSlider.dataset.largeSrc = elementoLI.imagen; liSlider.appendChild(imgSlider); ulSlider.appendChild(liSlider)
    }); div.appendChild(ulSlider)
}
function cargarSliderB(div, elemento) {
    div.id = "myCarousel"; div.classList.add("carousel", "slide"); div.dataset.ride = "carousel"; var olIndic = document.createElement("OL"); olIndic.className = "carousel-indicators"; var liIndic = null; var divSlides = document.createElement("DIV"); divSlides.className = "carousel-inner"; divSlides.role = "listbox"; var divItem = null; var imgItem = null; var divCaption = null; var h3Caption = null; var pCaption = null; $.each(elemento.contenido, function (indice, elem) {
        liIndic = document.createElement("LI"); liIndic.dataset.target = "#myCarousel"; liIndic.dataset.slideTo = indice; if (indice == 0) { liIndic.classList.add("active") }
        olIndic.appendChild(liIndic)
    }); div.appendChild(olIndic); $.each(elemento.contenido, function (indice, elem) {
        divItem = document.createElement("DIV"); if (indice == 0) { divItem.classList.add("item", "active") }
        else { divItem.classList.add("item") }
        imgItem = document.createElement("IMG"); imgItem.src = elem.imagen; if (elem.ancho) { imgItem.style.width = elem.ancho + "px" }
        divCaption = document.createElement("DIV"); divCaption.className = "carousel-caption"; h3Caption = document.createElement("H3"); h3Caption.innerHTML = elem.titulo; pCaption = document.createElement("P"); pCaption.innerHTML = elem.texto; divCaption.appendChild(h3Caption); divCaption.appendChild(pCaption); divItem.appendChild(imgItem); divItem.appendChild(divCaption); divSlides.appendChild(divItem)
    }); div.appendChild(divSlides); var aNav = document.createElement("A"); aNav.classList.add("left", "carousel-control"); aNav.href = "#myCarousel"; aNav.role = "button"; aNav.dataset.slide = "prev"; var spanNav = document.createElement("DIV"); spanNav.innerHTML = "<svg height='81.3' width='67.4' viewBox='0 0 67.4 81.3'><path d='M 37.1,41 67.4,63.6 51.4,81.3 0,41.6 46.1,0 67.2,16.3 Z'/></svg>"; spanNav.classList.add("flechaIzq"); spanNav.ariaHidden = "true"; var span2Nav = document.createElement("SPAN"); span2Nav.className = "sr-only"; span2Nav.innerHTML = "Anterior"; aNav.appendChild(spanNav); aNav.appendChild(span2Nav); div.appendChild(aNav); aNav = document.createElement("A"); aNav.classList.add("right", "carousel-control"); aNav.href = "#myCarousel"; aNav.role = "button"; aNav.dataset.slide = "next"; spanNav = document.createElement("DIV"); spanNav.innerHTML = "<svg height='81.3' width='67.4' viewBox='0 0 67.4 81.3'><path d='M 30.3,41 0,63.6 16,81.3 67.4,41.6 21.3,0 0.2,16.3 Z'/></svg>"; spanNav.classList.add("flechaDcha"); spanNav.ariaHidden = "true"; var span2Nav = document.createElement("SPAN"); span2Nav.className = "sr-only"; span2Nav.innerHTML = "Siguiente"; aNav.appendChild(spanNav); aNav.appendChild(span2Nav); div.appendChild(aNav)
}
function cargarListaObjetos(div, elemento) { $.each(elemento.contenido, function (indice, ele) { cargarObjeto(div, ele) }) }
function crearAutoevalPreguntas(div, elemento) {
    var divFormulario = document.createElement("DIV"); divFormulario.className = "divFormulario"; divFormulario.id = "formAutoeval"; var formPregunta = document.createElement("FORM"); var divPregunta = null; $.each(elemento.preguntas, function (indiceI, elementoUl) {
        divPregunta = document.createElement("DIV"); var h2Pregunta = document.createElement("H2"); h2Pregunta.innerHTML = elementoUl.texto; divPregunta.appendChild(h2Pregunta); if (elementoUl.imagen) { var imgPregunta = document.createElement("IMG"); imgPregunta.src = elementoUl.imagen; divPregunta.appendChild(imgPregunta) }
        var ulRespuestas = document.createElement("UL"); var liRespuesta = null; var inputRespuesta = null; var labelRespuesta = null; var pFeedback = null; $.each(elementoUl.respuestas, function (indiceJ, elementoLi) {
            liRespuesta = document.createElement("LI"); liRespuesta.dataset.c = elementoLi.correcto; inputRespuesta = document.createElement("INPUT"); inputRespuesta.id = "e" + (indiceI) + "r" + (indiceJ + 1); inputRespuesta.type = "radio"; inputRespuesta.name = "r" + (indiceI); labelRespuesta = document.createElement("LABEL"); labelRespuesta.setAttribute("for", "e" + (indiceI) + "r" + (indiceJ + 1)); labelRespuesta.innerHTML = elementoLi.opcion; liRespuesta.appendChild(inputRespuesta); liRespuesta.appendChild(labelRespuesta); if (elementoLi.feedback) { pFeedback = document.createElement("P"); pFeedback.className = "feedback"; pFeedback.innerHTML = elementoLi.feedback; pFeedback.style.display = "none"; liRespuesta.appendChild(pFeedback) }
            ulRespuestas.appendChild(liRespuesta); divPregunta.appendChild(ulRespuestas)
        }); formPregunta.appendChild(divPregunta); $(ulRespuestas).shuffle(); divFormulario.appendChild(formPregunta)
    }); var divResultados = document.createElement("DIV"); divResultados.id = "divResultados"; divResultados.style.display = "none"; if (elemento.feedback) { var divFeedback = document.createElement("DIV"); divFeedback.id = "divFeedback"; divFeedback.innerHTML = elemento.feedback; divFeedback.style.display = "none" }
    var divBotonera = document.createElement("DIV"); divBotonera.className = "botonera"; var botonCorregir = document.createElement("BUTTON"); botonCorregir.onclick = function () {
        $("#divResultados").hide(); $("#divResultados").empty(); $("#formAutoeval > form > ul > li > p").hide(); var forms = $("#formAutoeval > form"); var nCorrectas = 0; var nPreguntas = $(forms).find("h2").length; $.each(forms, function (i, form) {
            $(form).find('input').each(function (j, res) {
                if ($(res).is(":checked")) {
                    if ($(res).parent().data("c")) { $(res).parent().addClass("correcto"); nCorrectas++ }
                    else { $(res).parent().addClass("incorrecto") }
                    $(res).siblings("P").show()
                }
                else { $(res).parent().removeClass() }
            })
        }); var pResultado = document.createElement("P"); pResultado.innerHTML = "Has contestado correctamente a <b>" + nCorrectas + "</b> de <b>" + (nPreguntas) + "</b> preguntas."; $("#divResultados").append(pResultado); $("#divResultados").show()
    }
    botonCorregir.innerHTML = "Corregir"; var botonResolver = document.createElement("BUTTON"); botonResolver.onclick = function () {
        $("#divFeedback").show(); var forms = $("#formAutoeval > form"); $.each(forms, function (i, form) {
            $(form).find('input').each(function (j, res) {
                $(res).parent().removeClass("incorrecto"); $(res).parent().find(".feedback").addClass("oculto"); if ($(res).parent().data("c")) { $(res).parent().addClass("correcto"); $(res).siblings("P").show() }
                else { $(res).parent().addClass("incorrecto"); $(res).siblings("P").show() }
            })
        })
    }
    botonResolver.innerHTML = "Resolver"; divBotonera.appendChild(botonCorregir); divBotonera.appendChild(botonResolver); divFormulario.appendChild(divResultados); if (divFeedback) { divFormulario.appendChild(divFeedback) }
    divFormulario.appendChild(divBotonera)
    div.appendChild(divFormulario)
}
function crearAutoevalTabla(div, elemento) {
    if (elemento.imagen) {
        var imgImagen = document.createElement("IMG"); imgImagen.src = elemento.imagen; if (elemento.ancho) { imgImagen.style.width = elemento.ancho + "px" }
        div.appendChild(imgImagen)
    }
    cargarObjeto(div, elemento.tabla[0]); var divFeedback = document.createElement("DIV"); divFeedback.classList.add('feedback', 'oculto'); var pFeedback = document.createElement("P"); if (elemento.feedback) { pFeedback.className = "fijo"; pFeedback.innerHTML = elemento.feedback }
    divFeedback.appendChild(pFeedback); var divBotonera = document.createElement("DIV"); divBotonera.classList.add('botonera'); var buttonCorregir = document.createElement("BUTTON"); buttonCorregir.innerHTML = "Corregir"; buttonCorregir.onclick = function () {
        var nCorrectos = 0; var nRespuestas = $('.tabla').find('td.respuesta').length; var tabla = $(this).parent().parent(); var seleccionados = $(tabla).find('.seleccionado'); $.each(seleccionados, function (i, ele) {
            ele.classList.remove("seleccionado"); if ($(ele).hasClass('respuesta')) { ele.classList.add("correcto") }
            else { ele.classList.add("incorrecto") }
        }); nCorrectos = $('.tabla').find('td.correcto').length; if ($('.feedback').find('p:not(.fijo)')) { $('.feedback').find('p:not(.fijo)').html("Has señalado correctamente <b>" + nCorrectos + "</b> características de  <b>" + nRespuestas + "</b>. ") }
        $('.feedback').show()
    }
    var buttonResolver = document.createElement("BUTTON"); buttonResolver.innerHTML = "Resolver"; buttonResolver.onclick = function () { $('.tabla.rebordeHover tr').each(function (i, tr) { $(tr).children("td").each(function (j, cell) { if ($(cell).hasClass("respuesta")) { $(cell).addClass("correcto") } else { $(cell).removeClass("incorrecto") } }) }) }
    divBotonera.appendChild(buttonCorregir); divBotonera.appendChild(buttonResolver); div.appendChild(divFeedback); div.appendChild(divBotonera)
}
function crearAutoevalArrastrar(div, elemento) {
    var divContenedoresSuperior = document.createElement("DIV"); divContenedoresSuperior.className = "contenedores"; var divContenedoresInferior = document.createElement("DIV"); divContenedoresInferior.className = "contenedores"; var divContenidos = document.createElement("DIV"); divContenidos.className = "contenidos"; $.each(elemento.contenedores, function (indice, contenedor) {
        if (indice < elemento.contenedores.length / 2) { cargarObjeto(divContenedoresSuperior, contenedor) }
        else { cargarObjeto(divContenedoresInferior, contenedor) }
    }); $.each(elemento.contenidos, function (indice, contenido) { cargarObjeto(divContenidos, contenido) }); var divSolucion = divSolucion = document.createElement("DIV"); if (elemento.solucion) { divSolucion.classList.add("solucion", "oculto"); var imgSolucion = document.createElement("IMG"); imgSolucion.src = elemento.solucion; imgSolucion.style.width = "40%"; divSolucion.appendChild(imgSolucion) }
    var divBotonera = document.createElement("DIV"); divBotonera.className = "botonera"; var buttonReiniciar = document.createElement("BUTTON"); buttonReiniciar.innerHTML = "Reiniciar"; buttonReiniciar.onclick = function () { $(".ui-draggable").animate({ top: "0px", left: "0px" }); $(".ui-draggable-disabled").draggable({ disabled: !1 }); $.each($(".droppable"), function (i, ele) { ele.classList.remove("correcto") }); $('.autoevalArrastrar .solucion').addClass("oculto"); $('.botonera').removeAttr('style'); inicializarDraggable() }; var buttonResolver = document.createElement("BUTTON"); buttonResolver.innerHTML = "Resolver"; buttonResolver.onclick = function () { $('.autoevalArrastrar .solucion.oculto').removeClass("oculto") }; divBotonera.appendChild(buttonReiniciar); divBotonera.appendChild(buttonResolver); div.appendChild($(divContenedoresSuperior).shuffle()[0]); div.appendChild($(divContenidos).shuffle()[0]); div.appendChild($(divContenedoresInferior).shuffle()[0]); div.appendChild(divSolucion); div.appendChild(divBotonera)
}
function crearPalabrasCruzadas(div, elemento) {
    var arrayPistas = new Array(); $.each(elemento.pistas, function (i, pista) { arrayPistas.push(new oyCrosswordClue(pista.palabra.length, pista.definicion, pista.palabra, '', pista.direccion == 'H' ? 0 : 1, pista.posX, pista.posY)) }); CURSO.oygCrosswordPuzzle = new oyCrosswordPuzzle("p1", "./crossword", "/a/a", elemento.titulo, elemento.descripcion, arrayPistas, elemento.ancho, elemento.alto); for (var i = 0; i < CURSO.oygCrosswordPuzzle.clues.length; i++) { CURSO.oygCrosswordPuzzle.clues[i].matched = !1; CURSO.oygCrosswordPuzzle.clues[i].revealed = !1 }
    div.innerHTML = "<div id='oygContext' align='center' style='width:100%;'> <table class='oyOuterFrame' border='0' cellpadding='0' cellspacing='0'> <tr> <td align='center'> <table class='oyFrame' border='0' cellpadding='0' cellspacing='0'> <tr> <td colspan='5'> <table class='oyFrame' border='0' cellpadding='0' cellspacing='0' width='100%'> <tr class='oyHeader'> <td class='oyHeader'> <div id='oygHeader'></div> </td> <td align='right'> <div id='oygHeaderMenu'></div> </td> </tr> </table> </td> </tr> <tr style='height: 4px;'> <td colspan='5'></td> </tr>    <tr> <td rowspan='3' class='oyPuzzleCell' align='center' valign='top'> <div id='oygState'></div> <div class='oyPuzzle' id='oygPuzzle'></div> <div class='oyPuzzleFooter' id='oygPuzzleFooter'></div> </td> <td class='oyListCellDot'>.</td> <td class='oyListCell' valign='top' id='oygListH'></td> </tr><tr style='height: 4px;'> <td colspan='4'></td> </tr> <tr> <td class='oyListCellDot'>.</td> <td class='oyListCell' valign='top' id='oygListV'></td> </tr> <tr style='height: 4px;'> <td colspan='5'></td> </tr> <tr> <td colspan='5' class='oyFooter'> <div id='oygFooter'></div> </td> </tr> </table> </td></tr></table><div id='oygStatic' align='center'></div></div>"
}
function crearSopaLetras(div, elemento) { var divPuzzle = document.createElement("DIV"); divPuzzle.id = "puzzle"; var divContenedor = document.createElement("DIV"); divContenedor.id = "contenedor"; var divWords = document.createElement("DIV"); divWords.id = "words"; CURSO.arrayPalabras = new Array(), CURSO.arrayDefiniciones = new Array(), $.each(elemento.pistas, function (i, pista) { CURSO.arrayPalabras.push(pista.palabra); CURSO.arrayDefiniciones.push(pista.definicion) }); var divBotonera = document.createElement("DIV"); divBotonera.className = 'botonera'; var buttonResolver = document.createElement("BUTTON"); buttonResolver.id = "solve"; buttonResolver.innerHTML = "Resolver"; divBotonera.appendChild(buttonResolver); divContenedor.appendChild(divWords); divContenedor.appendChild(divBotonera); div.appendChild(divPuzzle); div.appendChild(divContenedor) }
function cargarDiagrama(div, elemento) {
    var celdas = []; var rect = null; $.each(elemento.cajas, function (i, caja) { switch (caja.forma) { case "rect": rect = new joint.shapes.basic.TextBlock({ position: { x: caja.x, y: caja.y }, size: { width: caja.ancho, height: caja.alto }, attrs: { rect: { fill: caja.relleno, stroke: caja.borde, 'stroke-width': caja.anchoBorde, 'stroke-dasharray': caja.dashArray } }, content: caja.texto }); rect.attr('./visibility', 'hidden'); rect.attr('orden', caja.orden); celdas.push(rect); break; default: } }); var link = null; for (var i = 0; i < elemento.enlaces.length; i++) { var enlace = elemento.enlaces[i]; link = new joint.dia.Link({ source: { id: celdas[enlace.origen - 1].id }, target: { id: celdas[enlace.destino - 1].id } }); link.attr({ '.connection': { stroke: enlace.color }, '.marker-target': { fill: enlace.color, d: 'M 20 0 L 0 10 L 20 20 z' } }); link.attr('./visibility', 'hidden'); link.attr('orden', enlace.orden); celdas.push(link) }
    return celdas
}
function cargarSVG(div, elemento) { var svg = Snap(div); var svgImagen = Snap.load(elemento.imagen, function (data) { svg.append(data) }) }
function crearNavegacion() { var footerNavegacion = document.createElement("FOOTER"); var divBarraSuperior = document.createElement("DIV"); divBarraSuperior.id = "barraSuperiorFooter"; var divFooterBotonera = document.createElement("DIV"); divFooterBotonera.id = "divFooterBotonera"; divFooterBotonera.appendChild(crearBotonNav("Anterior", parseInt(CURSO.scoActual) - 1)); divFooterBotonera.appendChild(crearBotonNav("Siguiente", parseInt(CURSO.scoActual) + 1)); footerNavegacion.appendChild(divBarraSuperior); footerNavegacion.appendChild(divFooterBotonera); footerNavegacion.appendChild(crearCopyright()); return footerNavegacion }
function crearBotonNav(texto, proximoSCO) {
    var divBoton = document.createElement("DIV"); divBoton.id = "btnFooter" + texto; divBoton.setAttribute("onClick", "navegar(" + proximoSCO + ");")
    var divFlecha = document.createElement("DIV"); if (texto == 'Siguiente') { $(divBoton).on('click', function () { centrarScoSiguiente() }); divFlecha.classList.add('footerFlecha', 'derecha'); divFlecha.innerHTML = "<svg viewBox='0 0 56.1 81.3' height='30' width='30'><path d='M 24.7,41 -5.6,63.6 10.4,81.3 61.8,41.6 15.7,0 -5.4,16.3 Z'/></svg>" } else if (texto == 'Anterior') { $(divBoton).on('click', function () { centrarScoAnterior() }); divFlecha.classList.add('footerFlecha', 'izquierda'); divFlecha.innerHTML = "<svg viewBox='0 0 56.1 81.3' width='30' height='30'><path d='M 31.5,41 61.8,63.6 45.8,81.3 -5.6,41.6 40.5,0 61.6,16.3 Z'/></svg>" }
    var spanTexto = document.createElement("SPAN"); spanTexto.className = "h3"; spanTexto.innerHTML = texto; divBoton.appendChild(spanTexto); divBoton.appendChild(divFlecha); if ((CURSO.scoActual == 0 && texto == "Anterior") || (proximoSCO == CURSO.json.contenido.length && texto == "Siguiente")) { divBoton.style.visibility = "hidden" }
    return divBoton
}
function crearCopyright() {
    var divCopyright = document.createElement("DIV"); divCopyright.id = "divFooterCopyright"; divCopyright.innerHTML = "<div class='h6'>2016 © MAVI Nuevas Tecnologías · <b><a target=_blank href=http://www.mavint.es>www.mavint.es</a></b> · accesiblidad</div>"
    return divCopyright
}
function inicializarObjetos() {
    if ($(".tabs").length > 0) { $(".tabs").tabs({ show: 'fade', hide: 'fade' }) }
    if ($(".tabs.vertical").length > 0) { $(".tabs.vertical").tabs({ show: 'fade', hide: 'fade' }).addClass('ui-tabs-vertical ui-helper-clearfix'); $(".tabs.vertical li").removeClass("ui-corner-top").addClass("ui-corner-left") }
    if ($(".acordeon").length > 0) { $('.acordeon').accordion({ active: 'false', heightStyle: 'content', collapsible: 'true' }) }
    if ($(".acordeonSub").length > 0) { inicializarAcordeonSub() }
    if ($(".acordeonHorizontal").length > 0) { $('.accordion').asAccordion({ namespace: 'accordion', direction: 'horizontal' }) }
    if ($('.pgwSlideshow').length > 0) { $('.pgwSlideshow').pgwSlideshow() }
    if ($('.sortable').length > 0) { inicializarSortable() }
    if ($('.draggable').length > 0) { inicializarDraggable() }
    if ($('.droppable').length > 0) { inicializarDroppable() }
    if ($("#oygContext").length > 0) { inicializarCrossword() }
    if ($("#puzzle").length > 0) { inicializarSopaLetras() }
    if ($(".diagrama").length > 0) { inicializarDiagrama() }
}
function inicializarAcordeonSub() { var headers = ["H1", "H2", "H3", "H4", "H5", "H6"]; $(".acordeonSub").click(function (e) { var headers = ["H1", "H2", "H3", "H4", "H5", "H6"]; var target = e.target, name = target.nodeName.toUpperCase(); if ($.inArray(name, headers) > -1) { var subItem = $(target).next(); var depth = $(subItem).parents().length; var allAtDepth = $(".acordeonSub").filter(function () { if ($(this).parents().length >= depth && this !== subItem.get(0)) { return !0 } }); $(allAtDepth).slideUp("fast"); subItem.slideToggle("fast", function () { $(".acordeonSub :visible:last").css("border-radius", "0 0 10px 10px") }); $(target).css({ "border-bottom-right-radius": "0", "border-bottom-left-radius": "0" }) } }) }
function inicializarAlto() {
    var alturaPantalla = $(window).height() - $("header").outerHeight(!0) - $("footer").outerHeight(!0); $("#navIndice").css("margin-top", $("header").outerHeight(!0)); $("#navIndice").height(alturaPantalla); $("#divTextos").css("margin-top", $("header").outerHeight(!0)); if (CURSO.json.contenido[CURSO.scoActual].fondo) { $("#divTextos").height(alturaPantalla); $("#divTextos").css("padding-bottom", $("footer").outerHeight(!0)) }
    else { $("#divTextos").height(alturaPantalla) }
}
function inicializarSortable() {
    $('.sortable ul').shuffle(); $('.sortable ul').sortable({ placeholder: "placeholder", revert: !0, tolerance: "pointer", CURSOR: "move", opacity: 0.5, CURSOrAt: { top: 0, left: 0 }, helper: "clone" }); $('.sortable').on('sortupdate', function (e, ui) {
        var elementos = $(this).children("ul").children(); $.each(elementos, function (index, elementoLI) {
            if ((parseInt(elementoLI.dataset.orden)) - 1 == index) { elementoLI.classList.add("correcto") }
            else { elementoLI.classList.remove("correcto") }
        })
    })
}
function inicializarDraggable() { $('.draggable').draggable({ snap: ".droppable", containment: "#divTextos", revert: "invalid" }) }
function inicializarDroppable() { $('.autoevalArrastrar .droppable').droppable({ tolerance: "fit", drop: function (event, ui) { var nElementos = $('.imagen.draggable').length; if ($(this).attr('data_id') == ui.draggable.attr('data_caja')) { $(this).addClass("correcto"); ui.draggable.draggable('disable'); if ($('.ui-draggable-disabled').length == nElementos) { document.getElementsByClassName("botonera").item(0).style.background = "#ffffff url('img/comunes/thumbUp.svg') no-repeat scroll left center / contain" } } } }) }
function inicializarCrossword() { oygInit = !0; oygError = null; oygBind(CURSO.oygCrosswordPuzzle); CURSO.oygCrosswordPuzzle.hlist.clickItem(0); CURSO.oygCrosswordPuzzle.canTalkToServer = !1 }
function inicializarSopaLetras() { var gamePuzzle = wordfindgame.create(CURSO.arrayPalabras, CURSO.arrayDefiniciones, '#puzzle', '#words'); $('#solve').click(function () { wordfindgame.solve(gamePuzzle, CURSO.arrayPalabras) }) }
function inicializarDiagrama() {
    var graph = new joint.dia.Graph; var paper = new joint.dia.Paper({ el: $('.diagrama'), model: graph, gridSize: 1, perpendicularLinks: !0, interactive: !1 }); graph.addCells(CURSO.diagrama); paper.fitToContent(8, 8, 4); var i = 1; var indiceCeldaVisible = null; function bucleCeldas() {
        for (var j = 0; j < graph.getCells().length; j++) { if (graph.getCells()[j].attr('orden') == i) { indiceCeldaVisible = j; break } }
        setTimeout(function () { graph.getCells()[indiceCeldaVisible].attr('./visibility', 'visible'); i++; if (i <= graph.getCells().length) { bucleCeldas() } }, 1000)
    }
    bucleCeldas()
}
function navegar(posicion) {
    if (CURSO.scoUltimo < posicion) {
        CURSO.scoUltimo = posicion; doLMSSetValue("cmi.core.lesson_location", posicion); if (CURSO.scoUltimo == CURSO.json.contenido.length - 1) { doLMSSetValue("cmi.core.lesson_status", "passed") }
        doLMSCommit()
    }
    CURSO.scoActual = posicion; recargarCabecera(); recargarTextos(); recargarIndice(posicion); recargarNavegacion(); cargarFondo(document.getElementById("divTextos")); if (CURSO.scoActual > CURSO.scoUltimo) { CURSO.scoUltimo = CURSO.scoActual }
    $(window).scrollTop(0)
}
function recargarCabecera() { var h2 = document.getElementById("h2Encabezado"); h2.innerHTML = (CURSO.scoActual + 1) + ". " + CURSO.json.contenido[CURSO.scoActual].titulo }
function recargarTextos() { $("#divTextos").empty(); cargarTextos(document.getElementById("divTextos")); inicializarObjetos(); inicializarAlto() }
function recargarIndice(posicion) {
    var ulIndice = document.getElementById("ulIndiceLista"); $.each(ulIndice.childNodes, function (indice, elemento) { elemento.classList.remove("scoActivo") }); ulIndice.childNodes[posicion].classList.add("scoActivo"); if (posicion >= CURSO.scoUltimo) {
        if (CURSO.scoActual - 1 >= 0) { ulIndice.childNodes[(CURSO.scoActual - 1)].classList.remove("scoUltimo"); ulIndice.childNodes[(CURSO.scoActual - 1)].classList.add("scoCompletado"); ulIndice.childNodes[(CURSO.scoActual - 1)].childNodes[0].setAttribute("onClick", "navegar(" + (CURSO.scoActual - 1) + ");") }
        if (CURSO.scoActual < CURSO.json.contenido.length) { ulIndice.childNodes[CURSO.scoActual].classList.remove("scoDeshabilitado"); ulIndice.childNodes[CURSO.scoActual].classList.add("scoUltimo"); ulIndice.childNodes[CURSO.scoActual].childNodes[0].setAttribute("onClick", "navegar(" + CURSO.scoActual + ");"); if (CURSO.scoActual == CURSO.json.contenido.length - 1) { ulIndice.childNodes[CURSO.scoActual].classList.add("scoCompletado") } }
    }
}
function recargarNavegacion() { recargarNavegacionBoton(document.getElementById("btnFooterAnterior"), parseInt(CURSO.scoActual) - 1); recargarNavegacionBoton(document.getElementById("btnFooterSiguiente"), parseInt(CURSO.scoActual) + 1); document.getElementById("btnFooterSiguiente").classList.remove() }
function recargarNavegacionBoton(boton, posicion) {
    if (posicion < 0) { boton.style.visibility = "hidden" }
    else if (posicion == CURSO.json.contenido.length) { var span = document.getElementById("btnFooterSiguiente").children[0]; span.innerHTML = "Recuerda, para continuar con el curso debes pulsar en 'SALIR DE LA ACTIVIDAD' en la parte superior de la pantalla."; $(span).removeClass('h3'); $("#btnFooterSiguiente").addClass('textoLargo'); $(boton).removeAttr("onClick") }
    else {
        boton.setAttribute("onClick", "navegar(" + posicion + ");"); if ($("#btnFooterSiguiente").hasClass('textoLargo')) { var span = document.getElementById("btnFooterSiguiente").children[0]; span.innerHTML = "Siguiente"; $(span).removeClass('h4'); $(span).addClass('h3'); $("#btnFooterSiguiente").removeClass('textoLargo') }
        boton.style.visibility = "visible"
    }
}
function crearLista(elemento, lista) {
    var liLista = null; $.each(elemento, function (indice, elementoLI) {
        liLista = document.createElement("LI"); if (elementoLI.clase) { cargarObjeto(liLista, elementoLI) }
        else {
            if (elementoLI.icono) {
                var imgLi = document.createElement("IMG"); imgLi.src = elementoLI.icono; if (elementoLI.ancho) { imgLi.style.width = elementoLI.ancho + "px" }
                liLista.className = "sinPunto"; liLista.appendChild(imgLi)
            }
            if (elementoLI.punto) { var spanLi = document.createElement("SPAN"); spanLi.innerHTML = elementoLI.punto; liLista.appendChild(spanLi) }
            if (elementoLI.imagen) {
                var imgLi = document.createElement("IMG"); imgLi.src = elementoLI.imagen; if (elementoLI.ancho) { imgLi.style.width = elementoLI.ancho + "px" }
                liLista.className = "sinPunto"; liLista.appendChild(imgLi)
            }
            if (elementoLI.data_orden) { liLista.dataset.orden = elementoLI.data_orden }
            if (elementoLI.contenido) { var subLista = document.createElement("UL"); crearLista(elementoLI.contenido, subLista); liLista.appendChild(subLista) }
        }
        lista.appendChild(liLista)
    })
}
function crearContenidoAcordeonSub(contenido, div, nivel) {
    $.each(contenido, function (indiceAcor, elementoAcor) {
        var hAcordeonSub = null; switch (nivel) { case 1: hAcordeonSub = document.createElement("H1"); break; case 2: hAcordeonSub = document.createElement("H2"); break; case 3: hAcordeonSub = document.createElement("H3"); break; case 4: hAcordeonSub = document.createElement("H4"); break; case 5: hAcordeonSub = document.createElement("H5"); break; case 6: hAcordeonSub = document.createElement("H6"); break; default: hAcordeonSub = document.createElement("P") }
        hAcordeonSub.innerHTML = elementoAcor.titulo; hAcordeonSub.onclick = function (e) { this.classList.toggle("activo"); $(this).siblings().each(function (indice, elemento) { elemento.classList.remove("activo") }) }; div.appendChild(hAcordeonSub); var divAcordeonElementos = document.createElement("DIV"); divAcordeonElementos.className = "divAcordeonElemento"; if (elementoAcor.imagen) {
            var imgAcordeonSub = document.createElement("IMG"); imgAcordeonSub.src = elementoAcor.imagen; if (elementoAcor.ancho) { imgAcordeonSub.style.width = elementoAcor.ancho + "px" }
            divAcordeonElementos.classList.add("clearfix"); divAcordeonElementos.appendChild(imgAcordeonSub)
        }
        if (elementoAcor.contenido) { var divAcordeonSub = document.createElement("DIV"); crearContenidoAcordeonSub(elementoAcor.contenido, divAcordeonSub, nivel + 1); div.appendChild(divAcordeonSub) }
        if (elementoAcor.texto) { var pAcordeonSub = document.createElement("P"); pAcordeonSub.innerHTML = elementoAcor.texto; divAcordeonElementos.appendChild(pAcordeonSub) }
        div.appendChild(divAcordeonElementos)
    })
}
function crearCaja(div, contenedor) {
    var divTexto = document.createElement("DIV"); var divDroppable = document.createElement("DIV"); divTexto.innerHTML = "<h4>" + contenedor.texto + "</h4>"; divTexto.className = "titulo"; divDroppable.classList.add("droppable"); $(divDroppable).attr('data_id', contenedor.data_id)
    div.appendChild(divTexto); div.appendChild(divDroppable)
}
function centrarScoSiguiente() { var posActual = $("#ulIndiceLista").find(".scoActivo").position().top; var altoIndice = $("#divIndiceLista").height(); var posScroll = $('#divIndiceLista').scrollTop(); var altoLi = $('#divIndiceLista').find('.scoActivo').outerHeight(!0); if (posActual > altoIndice / 2) { $('#divIndiceLista').scrollTop(posScroll + altoLi) } }
function centrarScoAnterior() { var posActual = $("#ulIndiceLista").find(".scoActivo").position().top; var altoIndice = $("#divIndiceLista").height(); var posScroll = $('#divIndiceLista').scrollTop(); var altoLi = $('#divIndiceLista').find('.scoActivo').outerHeight(!0); if (posActual < altoIndice / 2) { $('#divIndiceLista').scrollTop(posScroll - altoLi) } }
function cargarRespuestas(tabla, matriz) { $.each(matriz, function (i, ele) { var cell = tabla.rows[ele[1]].cells[ele[0]]; cell.classList.add("respuesta") }) }
function eventosTeclado() {
    $(document).keydown(function (e) {
        var char = e.keyCode; if (char == 39 && CURSO.scoActual < CURSO.json.contenido.length - 1) { navegar(CURSO.scoActual + 1); centrarScoSiguiente() }
        if (char == 37 && CURSO.scoActual > 0) { navegar(CURSO.scoActual - 1); centrarScoAnterior() }
    })
}
function leerDataset(div, elemento) { for (var atributo in elemento) { if (atributo.match(/data_?/i)) { div.setAttribute(atributo, elemento[atributo]) } } }
$(document).ready(function () { eventosTeclado(); init() }); (function ($) {
    $.fn.shuffle = function () { return this.each(function () { var items = $(this).children().clone(!0); return (items.length) ? $(this).html($.shuffle(items)) : this }) }
    $.shuffle = function (arr) { for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x); return arr }
})(jQuery); $(window).resize(function () { inicializarAlto() }); function svgAnillas(div) { div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='anilla' width='30' height='30' patternUnits='userSpaceOnUse'><path d='M 14 26C 7 26 2 20 2 14S 8 2 14 2c 7 0 12 5 12 12 S 20 26 14 26 M 0 30h 30V0H0z'> </pattern></defs><rect width='100%' height='100%' fill='url(#anilla)'/></svg>" }
function svgTrianguloIzquierda(div) { div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='trianguloI' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M 0 30 L 60 0 L 60 60 z'/> </pattern></defs><rect width='100%' height='100%' fill='url(#trianguloI)'/></svg>" }
function svgTrianguloDerecha(div) { div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='trianguloD' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M 0 0 L 0 60 L 60 30 z'/> </pattern></defs><rect width='100%' height='100%' fill='url(#trianguloD)'/></svg>" }
function svgPicos(div) { div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='trianguloAb' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M 0 0 L 60 0 L 30 40 z'/> </pattern></defs><rect width='100%' height='100%' fill='url(#trianguloAb)'/></svg>" }