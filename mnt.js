// TODO: EN GENERAL, O DEVOLVER O AÑADIR LA CAPA/OBJETO, AHORA MISMO CADA UNO ESTÁ A SU MANERA
/* Objeto principal */
var CURSO = {
    // String. Nombre del módulo (.json)
    modulo: "",
    // Objeto. El contenido del JSON
    json: null,
    // Integer. El SCO en el que estoy
    scoActual: null,
    // Integer. El SCO más avanzado
    scoUltimo: null,
    // Variable auxiliar para guardar el diagrama (un poco chapuza ponerlo aquí... pero no sé cómo si no! XD)
    diagrama: null,
    // Variable auxiliar para guardar el puzzle de palabras cruzadas
    oygCrosswordPuzzle: null,
    // Variable auxiliar para guardar las palabras de la sopa de letras
    arrayPalabras: null,
    // Variable auxiliar para guardar las definiciones de la sopa de letras
    arrayDefiniciones:null,
    // Métodos del objeto
    inicializar: function(modulo){
        this.modulo = modulo;
    },
    inicializar: function (modulo, sco) {
        this.modulo = modulo;
        this.scoActual = sco;
        this.scoUltimo = sco;
    }
};
/* EJECUCIÓN */
// FLUJO: init -> precarga -> precargaCSS -> precargaJS -> loop precargarScript -> precargarImagenes -> loop progreso -> onLoad -> crearEncabezado -> crearPantalla -> crearIndice -> cargarFondo -> cargarTextos -> (loop) cargarObjeto -> crearNavegacion -> crearCopyright -> inicializarObjetos -> inicializarAlto
// Precargar elementos de la página
function precarga() {
    precargarCSS();
    precargarJS();
}
//Precarga los CSS necesarios.
function precargarCSS() {
    // Recoger el array de css pertenecientes a ese módulo, definido en externo.js
    var cssArray = getArrayCSS(CURSO.modulo);
    // Si el array existe y tiene algún elemento
    if (cssArray && cssArray.length > 0) {
        // Recorrer el array
        for (var i = 0; i < cssArray.length; i++) {
            // Crear etiqueta y darle las propiedades
            var css = document.createElement("LINK");
            css.href = cssArray[i];
            css.rel = "stylesheet";
            //Si hay un error en la carga del fichero se muestra el nombre por la consola
            css.onerror = function () {
                console.log("Error al cargar el css " + css.href);
            }
            // Los css se añaden en la head de la página
            document.head.appendChild(css);
        }
    }
}
// Precarga los JS necesarios
function precargarJS() {
    // Recoger el array de js pertenecientes a ese módulo, definido en externo.js
    var jsArray = getArrayJS(CURSO.modulo)
    // Si el array existe y tiene algún elemento
    if (jsArray && jsArray.length > 0) {
        // Recorrer el array
        var i = 0;
        var loopArray = function (jsArray) {
            // Se carga cada script de manera independiente
            precargarScript(jsArray[i], function () {
                // Esta función se ejecuta en el callback (cuando termina la función principal, en este caso 'precargarScript'. Es decir, ejecuta la carga de un script y cuando ha terminado, aumenta la posición del array. Se hace de esta manera para que cada js se cargue entero antes de cargar el siguiente.)
                i++;
                // Si no se ha acabado con el array, se invoca recursivamente
                if (i < jsArray.length) {
                    loopArray(jsArray);
                }
                // Cuando se acaban de cargar todos los JS, se precargan todas las imágenes. Cuando se completan las imágenes, se entra en el onLoad. Esto es para evitar que los js no estén listos cuando se llamen las funciones de creación.
                else {
                    precargarImagenes();
                }
            });
        }
        // Se llama a la función, en el código anterior solo se estaba defininendo
        loopArray(jsArray);
    }
    // Para evitar que si hay un error en un js se quede la página en blanco, continúa la ejecución
    else {
        precargarImagenes();
    }
}
// Carga cada script independientemente.
function precargarScript(src, callback) {
    // Se crea la etiqueta
    var js = document.createElement("SCRIPT");
    // Si hay un error en la carga del fichero se muestra el nombre por la consola
    js.onerror = function () {
        console.log("Error al cargar el js " + js.src);
    }
    // Cuando acaba de cargar, se ejecuta el callback que es la que aumenta la posición del array. Definida en precargarJS().
    js.onload = function () {
        callback();
    }
    // Se le dan los atributos a la etiqueta
    js.src = src;
    // Apañete, por algún motivo la librería de la sopa de letras solo funciona cuando está añadida en el body.
    // Si el js contiene la palabra clave, se añade al body
    if (src.indexOf("wordsearch") > -1) {
        document.body.appendChild(js);
    }
    // Si no, se añade a la head
    else {
        document.head.appendChild(js);
    }
}
//Precarga las imágenes de la página. Crea la barra de carga.
function precargarImagenes() {
    // Recoger el array con las imágenes, definidas en externo.js
    var imagenes = getArrayImagenes(CURSO.modulo);
    // Si el array existe y tiene algún elemento
    if (imagenes && imagenes.length > 0) {
        // Las capas para la barra y el texto están definidas en el HTML del index de mano. Se apunta a ellas con JQUERY. Se introducen en variables para que sean más sencillas de manejar.
        var barraCarga = $("#barraCarga");       
        // Se inicializa la barra de carga (JQUERY UI)
        barraCarga.progressbar({
            //Valor con el que comienza
            value: 0,
            // Función que se ejecuta cada vez que cambia el valor de la barra. Se actualiza el texto de la etiqueta para cambiar el valor mostrado.
            change: function () {                
                $(".progress-label").text(barraCarga.progressbar("value") + "%");
            },
            // Función que se ejecuta cuando se termina de llenar la barra
            complete: function () {
                // Retrasar la llamada al onLoad() para que de tiempo a cargar bien las imágenes (5s)
                setTimeout(onLoad(), 5000);
                // Se oculta la barra
                barraCarga.hide();
            }
        });
        // Número de imágenes cargadas
        var nCargadas = 0;
        // Se recorre el array de imágenes
        for (var i = 0; i < imagenes.length; i++) {
            // Se crea la etiqueta y se le dan los atributos.
            var img = document.createElement("IMG");
            img.src = imagenes[i];
            img.className = "oculto";            
            // Cada vez que se carga una imagen se aumenta el porcentaje de la barra de carga.
            img.onload = function () {
                nCargadas++;
                // Se actualiza el valor de la barra con el porcentaje de imágenes cargadas sobre imágenes totales.
                progreso((parseFloat(100 * nCargadas / imagenes.length)).toFixed(2));
            };
            //Si hay un error en la carga del fichero se muestra el nombre por la consola
            img.onerror = function () {
                console.log("Error al precargar la imagen " + this.src);
            };
            // Añadir la imagen al body de la página
            document.body.appendChild(img);
        }
    }
    // Si no  hay imágenes que precagar, continúa la ejecución
    else {
        // Se oculta la barra
        barraCarga.hide();
        onLoad();
    }
}
// Actualiza el progreso de la barra de carga al valor que se le pasa
function progreso(valor) {
    $("#barraCarga").progressbar("value", parseFloat(valor));
}
// Creación del html y diseño principal de la página.
function onLoad() {
    // Se lee el json
    $.getJSON("json/" + CURSO.modulo + ".json")
        // Al acabar de leer el json
        .done(function (datos) {
            //Se guarda en la variable del objeto CURSO
            CURSO.json = datos;
            //Recoger de la base de datos la última página visitada del CURSO. Las funciones 'doLMS' están definidas en SCOFunctions.js
            var locationSCO = doLMSGetValue("cmi.core.lesson_location");
            // Si ya existe localización
            if (locationSCO) {
                // Se guarda el valor en el atributo correspondiente de CURSO (parseado a int porque está guardado como cadena)
                CURSO.scoActual = parseInt(locationSCO);
                // Si el número de la diapositiva que se intenta cargar es mayor que la longitud del curso. (Esto puede ocurrir al cambiar un módulo y reducir el número de diapositivas que contiene 
                if (CURSO.scoActual >= CURSO.json.contenido.length) {
                    // Se actualiza el valor a la última diapositiva posible del curso
                    CURSO.scoActual = CURSO.json.contenido.length - 1;
                    doLMSSetValue("cmi.core.lesson_location", CURSO.scoActual);
                    // Se guarda el cambio en la base de datos de moodle
                    doLMSCommit();
                }
                // Se sitúa en la última diapositiva vista.
                CURSO.scoUltimo = CURSO.scoActual;
            }
            // Si no existe una última posición en la base de datos, se empieza en la 0. 
            //TODO: CHECKEAR QUE NO DE PROBLEMAS EN MOODLE 
            else if (!CURSO.scoActual) {
                CURSO.scoActual = 0;
                CURSO.scoUltimo = 0;
            }                
            /*else {
                CURSO.scoActual = 0;
                CURSO.scoUltimo = 0;
            }*/

            // Se crea la capa que contendrá el diseño
            var divLayout = document.createElement("DIV");
            divLayout.id = "divLayout";
            // Se crea la capa de encabezado, la de la pantalla de los textos y el footer con la navegación
            crearEncabezado(divLayout);
            crearPantalla(divLayout);
            crearNavegacion(divLayout);
            // La capa de diseño se incluye en el body
            $("body").append(divLayout);
            // Inicializa los objetos que lo necesiten, así como la altura del índice
            inicializarObjetos();
            inicializarAlto();
        })
        // Si se produce un error al leer el json se muestra un mensaje en la consola
        .error(function () {
            console.log("Error al leer el JSON");
        });
}
// Crea el encabezado. Título y subtítulo del SCO, e imagen de cabecera, definidos en el JSON
function crearEncabezado(div) {
    // Crear la etiqueta para la cabecera
    var headerCabecera = document.createElement("HEADER");

    // Franja horizontal arriba del todo
    var divCabeceraSuperior = document.createElement("DIV");
    divCabeceraSuperior.id = "divCabeceraSuperior";
        
    // Donde se coloca la imagen y los títulos
    var divCabeceraInferior = document.createElement("DIV");
    divCabeceraInferior.id = "divCabeceraInferior";

    //Imagen del logo
    var divCabeceraImagen = document.createElement("DIV");
    divCabeceraImagen.id = "divCabeceraImagen";

    // Si existe la imagen se carga
    if (CURSO.json.imagenEncabezado) {
        var imgCabeceraImagen = document.createElement("IMG");
        imgCabeceraImagen.src =  CURSO.json.imagenEncabezado;
        imgCabeceraImagen.alt = "Logo";
        divCabeceraImagen.appendChild(imgCabeceraImagen);
    }

    // Contendor textos
    var divCabeceraTextos = document.createElement("DIV");
    divCabeceraTextos.id = "divCabeceraTextos";

    // Nombre del módulo
    var h1Encabezado = document.createElement("H1");
    h1Encabezado.innerHTML = CURSO.json.modulo;
    // Nombre y  número (+1 porque los arrays empiezan en 0) de la diapositiva actual
    var h2Encabezado = document.createElement("H2");
    h2Encabezado.innerHTML = (parseInt(CURSO.scoActual) + 1) + ". " + CURSO.json.contenido[CURSO.scoActual].titulo;
    h2Encabezado.id = "h2Encabezado";

    // Se agregan las capas desde la más interior a la más exterior
    divCabeceraTextos.appendChild(h1Encabezado);
    divCabeceraTextos.appendChild(h2Encabezado);

    divCabeceraInferior.appendChild(divCabeceraImagen);
    divCabeceraInferior.appendChild(divCabeceraTextos);

    headerCabecera.appendChild(divCabeceraSuperior);
    headerCabecera.appendChild(divCabeceraInferior);

    // Se agrega a la capa principal enviada en la función
    div.appendChild(headerCabecera);
}
// Crear la capa de contenido general con índice, textos y fondo
function crearPantalla(div) {
    // La capa que contiene el índice y los textos
    var divContenido = document.createElement("DIV");
    divContenido.id = "divContenido";

    // La capa que contiene los textos del curso
    var divTextos = document.createElement("DIV");
    divTextos.id = "divTextos";
    
    // Se crea la capa de índice que se añadirá a la de contenido
    crearIndice(divContenido);
    // Se cargan el fondo y los textos en la capa correspondiente 
    cargarFondo(divTextos);
    cargarTextos(divTextos);

    divContenido.appendChild(divTextos);
    
    // Añadir la capa de contenido a su padre
    div.appendChild(divContenido)
}
// Crear el índice del módulo, definido en el JSON
function crearIndice(div) {
    // Crear la etiqueta para el elemento de navegación
    var navIndice = document.createElement("NAV");
    navIndice.id = "navIndice";
   
    // Crear la capa contenedora del índice
    var divIndiceLista = document.createElement("DIV");
    divIndiceLista.id = "divIndiceLista";
    // Crear la etiqueta para la lista
    var ulIndiceLista = document.createElement("UL");
    ulIndiceLista.id = "ulIndiceLista";
  
    // Se declaran las variables internas para el $.each
    var liIndiceLista = null;
    var aIndiceLista = null;

    // Recorrer el JSON para recoger los nombres de las diapositivas. 
    $.each(CURSO.json.contenido, function (indice, diapositiva) {
        // Se crea la etiqueta del ítem 
        liIndiceLista = document.createElement("LI");
        // Se crea la etiqueta del hipervínculo y se inicializan sus atributos
        aIndiceLista = document.createElement("A");
        aIndiceLista.innerHTML = diapositiva.titulo;
        
        // Añadir el hipervínculo al ítem
        liIndiceLista.appendChild(aIndiceLista);
        // Añadir el ítem a la lista
        ulIndiceLista.appendChild(liIndiceLista);

        // Si se genera el ítem de la diapositiva actual se le da la clase 'scoActivo'
        if (indice == CURSO.scoActual) {
            liIndiceLista.classList.add("scoActivo");
        }
        // Si la diapositiva es la última vista, se le da la clase 'scoUltimo'. Es posible navegar a ella.
        if (indice == CURSO.scoUltimo) {
            liIndiceLista.classList.add("scoUltimo");
            liIndiceLista.setAttribute("onClick", "navegar(" + indice + ");");
        }
        // Las diapositivas anteriores a la última visitada se marcan como completadas mediante la clase 'scoCompletado'. Es posible navegar a ellas. La última no se cuenta como completada al entrar en ella, si no tras haber pasado a la siguiente.           
        if (indice < CURSO.scoUltimo) {
            liIndiceLista.classList.add("scoCompletado");
            aIndiceLista.setAttribute("onClick", "navegar(" + indice + ");");
        }
        // Las diapositivas posteriores a la última visitada se marcan como deshabilitadas mediante la clase 'scoDeshabilitado'. No es posible navegar a ellas
        if (indice > CURSO.scoUltimo){
            liIndiceLista.classList.add("scoDeshabilitado");
        }  
    });
    // Se agrega la lista a la capa del índice
    divIndiceLista.appendChild(ulIndiceLista);

    // Crear las flechas de desplazamiento por el índice
    var divIndiceFlechas = document.createElement("DIV");
    divIndiceFlechas.id = "divIndiceFlechas";

    // Las flechas se generan en svg //TODO METER EN FUNCIOENS
    var divIndiceArriba = document.createElement("DIV");
    divIndiceArriba.id = "divIndiceArriba";
    divIndiceArriba.innerHTML = "<svg viewBox='0 0 60 60'><path d='M 0 60 L 30 0 L 60 60 z'/></svg>"
    var divIndiceAbajo = document.createElement("DIV");
    divIndiceAbajo.id = "divIndiceAbajo";
    divIndiceAbajo.innerHTML = "<svg viewBox='0 0 60 60'><path d='M 0 0 L 60 0 L 30 60 z'/></svg>"

    // Movimiento de las flechas al pasar el cursor por encima
    $(divIndiceArriba).mouseenter(function () {
        // Para que se desplace a intervalos de tiempo regulares y dé tiempo a ver el cambio
        this.iid = setInterval(function () {
            // Altura del scroll en relación a su ventana
            var posScroll = $('#divIndiceLista').scrollTop();
            // Altura de una li del índice (la activa, por escoger una). La altura tiene en cuenta los márgenes.
            var alturaLi = $("#ulIndiceLista").find(".scoActivo").outerHeight(true);
            // Actualizar la posición del scroll reduciéndola en la altura de una li
            $('#divIndiceLista').scrollTop(posScroll - alturaLi);
        }, 250); //Tiempo hasta la siguiente iteración en ms        
    }).mouseleave(function () {
        // Cuando el ratón abandona la flecha, se para el movimiento
        this.iid && clearInterval(this.iid);
    });

    $(divIndiceAbajo).mouseenter(function () {
        this.iid = setInterval(function () {
            var posScroll = $('#divIndiceLista').scrollTop();
            var alturaLi = $("#ulIndiceLista").find(".scoActivo").outerHeight(true);
            // Al ir hacia abajo, la altura se suma
            $('#divIndiceLista').scrollTop(posScroll + alturaLi);
        }, 250);
    }).mouseleave(function () {
        this.iid && clearInterval(this.iid);
    });

    // Se añaden las flechas a la capa
    divIndiceFlechas.appendChild(divIndiceArriba);
    divIndiceFlechas.appendChild(divIndiceAbajo);

    // Se añade el índice y las flechas a la navegación
    navIndice.appendChild(divIndiceFlechas);
    navIndice.appendChild(divIndiceLista);
        
    // Se añade la navegación a la capa padre
    div.appendChild(navIndice);
}
// Cargar un fondo de diapositiva, definido en el JSON.
function cargarFondo(div) {
    // Recoger la url de la imagen de fondo y la subclase
    var fondo = CURSO.json.contenido[CURSO.scoActual].fondo;
    var subclase = CURSO.json.contenido[CURSO.scoActual].subclase;
    // Por si hubiera una clase anterior, se le quita
    $("#divTextos").removeClass();
    // Se le quita el atributo de estilo que incluye el fondo
    $("#divTextos").removeAttr("style");
    // Si la nueva diapositiva tiene fondo
    if (fondo) {
        // Se le añade la clase
        div.classList.add("fondo");
        // Se le añaden las subclases (deben venir separadas por espacios en el JSON)
        if (subclase) {
            div.classList.add(subclase);
        }
        // Se añade la url de la imagen
        div.style.backgroundImage = "url("+fondo +")";
    }
    inicializarAlto();
}
// Cargar los textos definidos en el JSON correspondientes al SCO actual.
function cargarTextos(div) {
    var contenido = CURSO.json.contenido[CURSO.scoActual].contenido;
    // Si la diapositiva tiene contenido
    if (contenido) {
        // Recorrer la lista de textos del scoActual.
        $.each(contenido, function (indice, elemento) {
            cargarObjeto(div, elemento);
        });
    }
}
// Crear un objeto según su clase.
function cargarObjeto(div, elemento) {

    if (elemento) {
        // Crear la capa contenedora del objeto
        var divParrafo = document.createElement("DIV");
        divParrafo.className = elemento.clase;

        // Si tiene subclases se le añaden (separadas por espacios en el json)
        if (elemento.subclase) {
            // Guarda la cadena en un array utilizando el espacio como separador
            var arrayClases = elemento.subclase.split(" ");
            // Recorrer el array de clases
            $.each(arrayClases, function (index, clase) {
                // Añadir cada clase a la capa contenedora
                divParrafo.classList.add(clase);
            });
        }
        // Si tiene una animación (utiliza animate.css)
        if (elemento.animacion) {
            divParrafo.classList.add("animated");
            divParrafo.classList.add(elemento.animacion);
        }
        // Si tiene elementos de dataset
        leerDataset(divParrafo, elemento);

        switch (elemento.clase) {
                // Párrafo con un texto
            case "texto":
                cargarTexto(divParrafo, elemento);
                break;
                // Caja con un icono contenido en un círculo en la esquina superior derecha.
            case "icono":
                cargarIcono(divParrafo, elemento);
                break;
                // Lista con imágenes en puntos (opcional). Sublistas.
            case "lista":
                cargarLista(divParrafo, elemento);
                break;
                // Imagen normal
            case "imagen":
                cargarImagen(divParrafo, elemento);
                break;
                // Imagen con un mapa para mostrar tooltips
            case "mapa":
                cargarMapa(divParrafo, elemento);
                break;
                // Caja de pestañas (JQUERY) 
            case "tabs":
                cargarTabs(divParrafo, elemento);
                break;
                // Pestañas (BOOTSTRAP)
            case "tabsB":
                cargarTabsLado(divParrafo, elemento)
                break;
                // Acordeón horizontal con textos e imágenes (JQUERY)
            case "acordeon":
                cargarAcordeon(divParrafo, elemento);
                break;
                // Acordeón vertical con hasta 6 subsecciones.
            case "acordeonSub":
                cargarAcordeonSub(divParrafo, elemento);
                break;
                // Acordeón vertical con texto e imágenes
            case "acordeonHorizontal":
                cargarAcordeonHor(divParrafo, elemento);
                break;
            case "acordeonImagenes":
                cargarAcordeonImg(divParrafo, elemento);
                break;
                // Imágenes dentro de círculos, situadas en línea, con su texto correspondiente arriba.
            case "circulo":
                // TODO QUITAR SUBCLASE
                cargarCirculo(divParrafo, elemento, elemento.subclase);
                break;
                // Tabla de texto
            case "tabla":
                // TODO QUITAR SUBCLASE
                cargarTabla(divParrafo, elemento, elemento.subclase);
                break;
                // Slider con imágenes, thumbnails y texto
            case "slider":
                cargarSlider(divParrafo, elemento);
                break;
                // Slider con imágenes y texto superpuesto (BOOTSTRAP)
            case "sliderB":
                cargarSliderB(divParrafo, elemento);
                break;
                // Lista de objetos, es un contenedor. Se colocan con flex.
            case "listaObjetos":
                cargarListaObjetos(divParrafo, elemento);
                break;
                // Elementos de autoevaluación
                // Formulario con preguntas
            case "autoevalPreguntas":
                crearAutoevalPreguntas(divParrafo, elemento);
                break;
                // Tabla con elementos seleccionables
            case "autoevalTabla":
                crearAutoevalTabla(divParrafo, elemento);
                break;
                // Arrastrar elementos a cajas
            case "autoevalArrastrar":
                crearAutoevalArrastrar(divParrafo, elemento);
                break;
                /*case "preguntaDesplegable":
                    crearPreguntaDesplegable(divParrafo, elemento);
                    break;
                case "preguntaVFDesplegable":
                    crearPreguntaVFDesplegable(divParrafo, elemento);
                    break;*/
                // Juego de palabras cruzadas    
            case "juegoPalabrasCruzadas":
                crearPalabrasCruzadas(divParrafo, elemento);
                break;
                // Juego de sopa de letras
            case "juegoSopaLetras":
                crearSopaLetras(divParrafo, elemento);
                break;
                // Caja con un texto y una zona droppable
            case "caja":
                crearCaja(divParrafo, elemento);
                break;
                // Diagrama con flechas
            case "diagrama":
                CURSO.diagrama = cargarDiagrama(divParrafo, elemento);
                break;
                // Imagen SVG con tooltips
            case "imagenSVG":
                cargarSVG(divParrafo, elemento);
                break;                
            default:
                console.log("Objeto no encontrado: " + elemento.clase);
        }
        div.appendChild(divParrafo);
    }
}
// Cargar un texto en un párrafo.
function cargarTexto(div, elemento) {
    if (elemento.opacidad) {
        div.style.backgroundColor = "rgba(255, 255, 255," + elemento.opacidad + ")";
    }
    if (elemento.texto) {
        //F. Pongo un ancho para los textos similar al del acordeón
        if (elemento.ancho) {
            div.style.width = elemento.ancho + "%";
        }
        // Si alguna de las subclases existe en ese párrafo
        if (div.classList.contains('anillas')) {
            var divCabecera = document.createElement('DIV');            
            divCabecera.className = 'cabecera';
            svgAnillas(divCabecera);
            var divContenido = document.createElement('DIV');
            divContenido.className = 'contenido';
            divContenido.innerHTML = "<p>" + elemento.texto + "</p>";
            div.appendChild(divCabecera);
            div.appendChild(divContenido);
        }
		else if(div.classList.contains('celo')){
			var divCabecera = document.createElement('DIV');
            divCabecera.className = 'cabecera';
            var divContenido = document.createElement('DIV');
            divContenido.className = 'contenido';
            divContenido.innerHTML = "<p>" + elemento.texto + "</p>";
            div.appendChild(divCabecera);
            div.appendChild(divContenido);			
		}
        else if (div.classList.contains('banner')) {
            var divIzq = document.createElement("DIV");
            divIzq.className = 'izquierda';
            svgTrianguloIzquierda(divIzq);
            var divContenido = document.createElement("DIV");
            divContenido.className = 'contenido';
            divContenido.innerHTML = "<p>" + elemento.texto + "</p>";
            var divDch = document.createElement("DIV");
            divDch.className = 'derecha';
            svgTrianguloDerecha(divDch);
            div.appendChild(divIzq);
            div.appendChild(divContenido);
            div.appendChild(divDch);
        }
        else {
            div.innerHTML = "<p>" + elemento.texto + "</p>";
        }
    }
}
// Cargar texto en recuadro con icono en círculo. El icono del círculo se especifica a través de una subclase.
function cargarIcono(div, elemento) {
    var divIcono = document.createElement("DIV");
    divIcono.className = "divIcono";

    var divFondo = document.createElement("DIV");
    divFondo.className = "divFondo";

    var divTexto = document.createElement("DIV");
    divTexto.className = "divTexto";

    if (elemento.imagen) {
        var img = document.createElement("IMG");
        img.src = elemento.imagen;
        if (elemento.ancho) {
            img.style.width = elemento.ancho + "px";
        }
        divTexto.appendChild(img);
    }
    if (elemento.texto) {
        divTexto.innerHTML += elemento.texto;
    }
    if (elemento.contenido) {
        $.each(elemento.contenido, function (indice, elemento) {
            cargarObjeto(divTexto, elemento)
        });
    }

    divIcono.appendChild(divFondo);
    div.appendChild(divIcono);
    div.appendChild(divTexto);

    // Si es del tipo "picos" se añade una capa inferior que los contendrá.
    if (div.classList.contains('picos')) {
        var divPie = document.createElement("DIV");
        divPie.className = "divPie";
        svgPicos(divPie);
        div.appendChild(divPie);
    }
}
// Cargar lista de puntos con textos o imágenes. Recursividad.
// TODO: ¿CAMBIAR "CONTENIDO" POR ¿"PUNTOS"?
function cargarLista(div, elemento) {
    var ulLista = document.createElement("UL");
    ulLista.className = 'ulLista';

    if (elemento.titulo) {
        var spanTitulo = document.createElement("SPAN");
        spanTitulo.innerHTML = elemento.titulo;
        ulLista.appendChild(spanTitulo);
    }
    if (elemento.imgPunto) {
        ulLista.style.listStyleImage = "url(" + elemento.imgPunto + ")";
    }
    if (elemento.contenido) {
        crearLista(elemento.contenido, ulLista);
    }

    // Aspecto especial para algunas subclases
    if (div.classList.contains('anillas')) {
        var divCabecera = document.createElement('DIV');
        divCabecera.className = 'cabecera';
        svgAnillas(divCabecera);
        var divContenido = document.createElement('DIV');
        divContenido.className = 'contenido';
        divContenido.appendChild(ulLista);
        div.appendChild(divCabecera);
        div.appendChild(divContenido);
    }
    else if (div.classList.contains('celo')) {
        var divCabecera = document.createElement('DIV');
        divCabecera.className = 'cabecera';
        var divContenido = document.createElement('DIV');
        divContenido.className = 'contenido';
        divContenido.appendChild(ulLista);
        div.appendChild(divCabecera);
        div.appendChild(divContenido);        
    }
    else {
        div.appendChild(ulLista);
    }
}
// Cargar imagen básica
function cargarImagen(div, elemento) {
    if (elemento.imagen) {
        var imgImagen = document.createElement("IMG");
        imgImagen.src = elemento.imagen;
        if (elemento.ancho) {
            imgImagen.style.width = elemento.ancho + "px";
        }
        div.appendChild(imgImagen);
    }
    if (elemento.pie) {
        var spanPie = document.createElement("SPAN");
        spanPie.innerHTML = elemento.pie;
        div.appendChild(spanPie);
    }   
}
// Cargar una imagen con partes y tooltips. (SNAPSVG)
function cargarMapa(div, elemento) {
    // La imagen se carga utilizando la librería snapsvg
    var svg = Snap(div);
    var svgImagen = Snap.load(elemento.imagen, function (data) {
        svg.append(data);
        // Agregar los tooltips de las zonas
        if (elemento.nodos) {
            $.each(elemento.nodos, function (indice, nodo) {
                var gSvg = $(".mapa svg g").find("#" + nodo.id);
                var titleNodo = document.createElement("TITLE");
                titleNodo.innerHTML = nodo.texto;
                // Se ponen al principio del grupo
                gSvg.prepend(titleNodo);
            });
        }
    });
}
// Cargar pestañas (JQUERY)
function cargarTabs(div, elemento) {
    var ulLista = document.createElement("UL");
    ulLista.className = 'ulLista';
    var divContenido = document.createElement("DIV");
    divContenido.className = 'divContenido';

    $.each(elemento.contenido, function (indice, elemento) {
        var divTab = document.createElement("DIV");
        divTab.id = "tabs-" + (indice + 1);
        divTab.classList.add("clearfix");

        if (elemento.titulo) {
            var liTitulo = document.createElement("LI");
            var aTitulo = document.createElement("A");
            aTitulo.href = "#tabs-" + (indice + 1);
            aTitulo.innerHTML = elemento.titulo;
            liTitulo.appendChild(aTitulo);
            ulLista.appendChild(liTitulo);
        }       
        if (elemento.imagen) {
            var imgTab = document.createElement("IMG");
            imgTab.src = elemento.imagen;
            if (elemento.ancho) {
                imgTab.style.width = elemento.ancho + "px";
            }
            divTab.appendChild(imgTab);
        }
        if (elemento.subtitulo) {
            var h2Tab = document.createElement("H2");
            h2Tab.innerHTML = elemento.subtitulo;
            divTab.appendChild(h2Tab);
        }
        if (elemento.texto) {
            var pTab = document.createElement("P");
            pTab.innerHTML = elemento.texto
            divTab.appendChild(pTab);
        }
        if (elemento.contenido) {
            $.each(elemento.contenido, function (indice, elemento) {
                cargarObjeto(divTab, elemento);
            });
        }

        divContenido.appendChild(divTab);
    });

    div.appendChild(ulLista);
    div.appendChild(divContenido);
}
// Carga unas pestañas (BOOTSTRAP) según el lado en el que se quieran situar
function cargarTabsLado(div, elemento) {
    // Capa extra que contiene la navegación y las pestañas (no sé por qué es necesaria, cosas del bootstrap)
    var divWrapper = document.createElement("DIV");
    // Variable que guarda el tipo de pestaña. Se usa para construir el id de cada una de ellas.
    var id = '';
    // Capa que contiene la lista de navegación
    var divLista = document.createElement("DIV");
    if (div.classList.contains('izquierda')) {
        divLista.className = "tabbable tabs-left";
        id = "tabLeft";
    }
    else if (div.classList.contains('derecha')) {
        divLista.className = "tabbable tabs-right";
        id = "tabRight";
    }

    // Lista de navegación
    var ulLista = document.createElement("UL");
    ulLista.className = "nav nav-tabs";

    // Contenedor de las pestañas
    var divContenedor = document.createElement("DIV");
    divContenedor.className = "tab-content";

    // Cada pestaña
    $.each(elemento.contenido, function (indice, elemento) {
        var divTab = document.createElement("DIV");
        divTab.className = "tab-pane";
        divTab.id = id + indice;
        // Si es la primera pestaña, se activa
        indice == 0 ? divTab.classList.add("active"): '';

        if (elemento.titulo) {
            var liTitulo = document.createElement("LI");
            var aTitulo = document.createElement("A");
            // Si es la primera pestaña, se activa
            indice == 0 ? liTitulo.className = 'active' : '';

            aTitulo.innerHTML = elemento.titulo;
            aTitulo.href = "#" + id + indice;
            aTitulo.dataset.toggle = "tab"

            liTitulo.appendChild(aTitulo);
            ulLista.appendChild(liTitulo);
        }
        if (elemento.imagen) {
            var imgImagen = document.createElement("IMG");
            imgImagen.src = elemento.imagen;
            if (elemento.ancho) {
                imgImagen.style.width = elemento.ancho + "px";
            }
            divTab.appendChild(imgImagen);
        }
        if (elemento.subtitulo) {
            var h2Subtitulo = document.createElement("H2");
            h2Subtitulo.innerHTML = elemento.subtitulo;
            divTab.appendChild(h2Subtitulo);
        }
        if (elemento.texto) {
            var pTexto = document.createElement("P");
            pTexto.innerHTML = elemento.texto;
            divTab.appendChild(pTexto);
        }
        if (elemento.contenido) {
            $.each(elemento.contenido, function (indice, elemento) {
                cargarObjeto(divTabsElemento, elemento);
            });
        }

        divContenedor.appendChild(divTab);
    });

    divLista.appendChild(ulLista);
    divWrapper.appendChild(divLista);
    divWrapper.appendChild(divContenedor);

    div.appendChild(divWrapper);
}
// Cargar acordeón (JQUERY)
function cargarAcordeon(div, elemento) {
    if (elemento.ancho) {
        div.style.width = elemento.ancho + "%";
    }
    $.each(elemento.contenido, function (indice, elemento) {
        var divTab = document.createElement("DIV");

        if (elemento.titulo) {
            var h3Titulo = document.createElement("H3");
            h3Titulo.innerHTML = elemento.titulo;
        }
        if (elemento.imagen) {
           var imgTab = document.createElement("IMG");         
           imgTab.src = elemento.imagen;
            if (elemento.ancho) {
                imgTab.style.width = elemento.ancho + "px";
            }
            divTab.appendChild(imgTab);
        }
        if (elemento.subtitulo) {
            h2Tab = document.createElement("H2");
            h2Tab.innerHTML = elemento.subtitulo;
            divTab.appendChild(h2Tab);
        }
        if (elemento.texto) {
            pTab = document.createElement("P");
            pTab.innerHTML = elemento.texto;
            divTab.appendChild(pTab);
        }
        if (elemento.contenido) {
            $.each(elemento.contenido, function (indice, elemento) {
                cargarObjeto(divTab, elemento);
            });         
        }

        div.appendChild(h3Titulo);
        div.appendChild(divTab);
    });
}
// Cargar acordeón con subelementos. Recursivo.
function cargarAcordeonSub(div, elemento) {
    var divAcordeon = document.createElement("DIV");
    divAcordeon.className = "divAcordeonSub";
    // Al ser por niveles, empezamos por el 1
    crearContenidoAcordeonSub(elemento.contenido, divAcordeon, 1);

   /* $(div).click(function (e) {
        var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];
        var target = e.target,
            name = target.nodeName.toUpperCase();

        if ($.inArray(name, headers) > -1) {
            var subItem = $(target).next();

            //slideUp all elements (except target) at current depth or greater
            var depth = $(subItem).parents().length;
            var allAtDepth = $(".acordeonSub").filter(function () {
                if ($(this).parents().length >= depth && this !== subItem.get(0)) {
                    return true;
                }
            });
            $(allAtDepth).slideUp("fast");

            //slideToggle target content and adjust bottom border if necessary
            subItem.slideToggle("fast", function () {
                $(".acordeonSub :visible:last").css("border-radius", "0 0 10px 10px");
            });
            $(target).css({ "border-bottom-right-radius": "0", "border-bottom-left-radius": "0" });
        }
    });*/

    div.appendChild(divAcordeon);
}
// Cargar acordeón de imágenes
function cargarAcordeonImg(div, elemento) {
    var ulAcordeon = document.createElement("UL");
    if (elemento.alto) {
        ulAcordeon.style.height = elemento.alto + "px";
    }

    var liAcordeon = null;
    var divContenido = null;
    var imgAcordeon = null;
    var h2Acordeon = null;

    $.each(elemento.contenido, function (indice, elemento) {        
        var liAcordeon = document.createElement("LI");
        if (elemento.titulo) {
            h2Acordeon = document.createElement("H2");
            h2Acordeon.innerHTML = elemento.titulo;
            liAcordeon.appendChild(h2Acordeon);
        }
        if (elemento.imagen) {
            liAcordeon.style.backgroundImage = "url(" + elemento.imagen + ")";            
        }

        ulAcordeon.appendChild(liAcordeon);
    });
    div.appendChild(ulAcordeon);
}
// Cargar acordeón horizontal (ASACCORDION)
function cargarAcordeonHor(div, elemento) {
    var ulAcordeonHorizontal = document.createElement("UL");
    ulAcordeonHorizontal.dataset.direction = 'horizontal';
    ulAcordeonHorizontal.className = 'accordion accordion--basic accordion--horizontal';

    var liAcordeonHorizontal = null;
    var spanAcordeonHorizontal = null;
    var iAcordeonHorizontal = null;
    var divAcordeonHorizontal = null;
    var pAcordeonHorizontal = null;

    $.each(elemento.contenido, function (indice, elemento) {
        liAcordeonHorizontal = document.createElement("LI");
        liAcordeonHorizontal.className = 'accordion__panel';

        spanAcordeonHorizontal = document.createElement("SPAN");
        spanAcordeonHorizontal.className = 'accordion__heading';
        spanAcordeonHorizontal.innerHTML = elemento.titulo;

        iAcordeonHorizontal = document.createElement("I");
        iAcordeonHorizontal.className='-icon -icon--right';

        spanAcordeonHorizontal.appendChild(iAcordeonHorizontal);

        divAcordeonHorizontal = document.createElement("DIV");
        divAcordeonHorizontal.className = 'accordion__expander';

        if (elemento.imagen) {
            imgAcordeonHorizontal = document.createElement("IMG");
            imgAcordeonHorizontal.src = elemento.imagen;
            if (elemento.ancho) {
                imgAcordeonHorizontal.style.width = elemento.ancho + "px";
            }
            divAcordeonHorizontal.appendChild(imgAcordeonHorizontal);
        }
        if (elemento.subtitulo) {
            h2AcordeonHorizontal = document.createElement("H2");
            h2AcordeonHorizontal.innerHTML = elemento.subtitulo;
            divAcordeonHorizontal.appendChild(h2AcordeonHorizontal);
        }
        if (elemento.texto) {
            pAcordeonHorizontal = document.createElement("P");
            pAcordeonHorizontal.innerHTML = elemento.texto;
            divAcordeonHorizontal.appendChild(pAcordeonHorizontal);
        }
        if (elemento.contenido) {
            $.each(elemento.contenido, function (i, e) {
                divAcordeonHorizontal.appendChild(cargarObjeto(e));
            });
        }
        
        liAcordeonHorizontal.appendChild(divAcordeonHorizontal);
        liAcordeonHorizontal.appendChild(spanAcordeonHorizontal);

        ulAcordeonHorizontal.appendChild(liAcordeonHorizontal);
    });
    div.appendChild(ulAcordeonHorizontal);
}
// TODO: MEJORAR EN CÍRCULO Y SEMI, DINÁMICO Y RESPONSIVO
// Crear círculos en horizontal, círculo o semicírculo
function cargarCirculo(div, elemento, tipo) {
    var divTextos = document.createElement("DIV");
    divTextos.className = "textos";
    var divImagenes = document.createElement("DIV");
    divImagenes.className = "imagenes";

    var divImagen = null;
    var divTexto = null;
    var h2Texto = null;
    var pTexto = null;
    var offset = 0;
    if (tipo == 'circular') {
        offset = Math.round(360 / parseInt(elemento.contenido.length));
    }
    else if (tipo == 'semi') {
        offset = Math.round(180 / (parseInt(elemento.contenido.length)-1));
    }
    var elementos = elemento.contenido.length;
    var grados = 0;

    // Recorrer los círculos
    $.each(elemento.contenido, function (indice, elemento) {
        divImagen = document.createElement("DIV");
        divImagen.className = "imagen";
        divImagen.style.backgroundImage = "url(" +   elemento.imagen + ")";
        if (tipo == 'circular' || tipo =='semi') {
            divImagen.style.transform = "rotate(" + grados + "deg) translate(17em) rotate(" + (-grados) + "deg)";
            grados = grados + offset;
        }

        divImagen.onmouseover = function (e) {
            // Recoger la capa padre para activar solo los textos correspondientes (que no se activen los de varios objetos del mismo tipo a la vez)
            $(e.relatedTarget.parentElement).find(".textos .texto.activo").removeClass("activo");
            $(e.relatedTarget.parentElement).find(".textos .texto:nth-of-type(" + (indice + 1) + ")").addClass("activo");
        }
        divImagen.onmouseout = function (e) {
            $(e.relatedTarget.parentElement).find(".textos .texto.activo").removeClass("activo");
        }
        divImagenes.appendChild(divImagen);

        divTexto = document.createElement("DIV");
        divTexto.className = "texto";

        h2Texto = document.createElement("H2");
        h2Texto.innerHTML = elemento.titulo;
        pTexto = document.createElement("P");
        pTexto.innerHTML = elemento.texto;

        divTexto.appendChild(h2Texto);
        divTexto.appendChild(pTexto);
        divTextos.appendChild(divTexto);
    });

    div.appendChild(divTextos);
    div.appendChild(divImagenes);
}
// Crear tabla
function cargarTabla(div, elemento, subclase) {
    var tableTabla = document.createElement("TABLE");
    var tHead = document.createElement("THEAD");
    var th = null;
    var tr = null;
    var td = null;

    // Cargar los títulos de la tabla
    if (elemento.filaTitulos) {
        $.each(elemento.filaTitulos, function (indice, elementoTH) {
            th = document.createElement("TH");
            th.innerHTML = elementoTH.titulo;

            if (elementoTH.rowspan) {
                th.rowSpan = elementoTH.rowspan;
            }
            if (elementoTH.colspan) {
                th.colSpan = elementoTH.colspan;
            }

            tHead.appendChild(th);
        });
        tableTabla.appendChild(tHead);
    }
    // Cargar las filas de la tabla
    $.each(elemento.filaContenido, function (indice, elementoTR) {
        tr = document.createElement("TR");
        $.each(elementoTR.fila, function (indice, elementoTD) {
            td = document.createElement("TD");
            if (elementoTD.imagen) {
                var img = "<img src=" +   elementoTD.imagen;
                if (elementoTD.ancho) {
                    img += " style='width:" + elementoTD.ancho + "px;'";
                }
                img += " />";
                td.innerHTML += img;
            }
            if (elementoTD.texto) {
                td.innerHTML += "<p>"+elementoTD.texto+"</p>";
            }
            if (elementoTD.rowspan) {
                td.rowSpan = elementoTD.rowspan;
            }
            if (elementoTD.colspan) {
                td.colSpan = elementoTD.colspan;
            }
            if (elementoTD.clase) {
                cargarObjeto(td, elementoTD);
                //td.appendChild(cargarObjeto(elementoTD));
            }

            // Si tiene esta subclase OJO, PUEDE SER UNA CADENA CON VARIAS SUBCLASES //TODO: ARREGLAR
            if (subclase == 'rebordeHover') {
                td.onclick = function () {
                    $(this).toggleClass("seleccionado");
                }
            }
            tr.appendChild(td);
        });
        tableTabla.appendChild(tr);
    });
    if (elemento.respuestas) {
        cargarRespuestas(tableTabla, elemento.respuestas);
    }
    div.appendChild(tableTabla);
}
// Crear slider (PGWSLIDESHOW)
function cargarSlider(div, elemento) {
    var ulSlider = document.createElement("UL");
    ulSlider.className = "pgwSlideshow"

    var liSlider = null;
    var imgSlider = null;
        
    $.each(elemento.contenido, function (index, elementoLI) {
        liSlider = document.createElement("LI");
        imgSlider = document.createElement("IMG");     
        imgSlider.src =   elementoLI.thumb;
        imgSlider.alt = elementoLI.titulo;
        
        if (elementoLI.texto) {
            imgSlider.dataset.description = elementoLI.texto;
        }

            imgSlider.dataset.largeSrc =   elementoLI.imagen;
            liSlider.appendChild(imgSlider);
                
        ulSlider.appendChild(liSlider);
    });

    div.appendChild(ulSlider);
}
// Crear slider simple (BOOTSTRAP)
function cargarSliderB(div, elemento) {
    div.id = "myCarousel";
    div.classList.add("carousel", "slide");
    div.dataset.ride = "carousel";

    var olIndic = document.createElement("OL");
    olIndic.className = "carousel-indicators";
    var liIndic = null;

    var divSlides = document.createElement("DIV");
    divSlides.className = "carousel-inner";
    divSlides.role = "listbox";
        
    var divItem = null;
    var imgItem = null;
    var divCaption = null;
    var h3Caption = null;
    var pCaption = null;

    // Índice de elementos
    $.each(elemento.contenido, function (indice, elem) {
        liIndic = document.createElement("LI");
        liIndic.dataset.target = "#myCarousel";
        liIndic.dataset.slideTo = indice;
        if (indice == 0) {
            liIndic.classList.add("active");
        }
        olIndic.appendChild(liIndic);
    });

    div.appendChild(olIndic);

    // Frontal, imagen
    $.each(elemento.contenido, function (indice, elem) {
        divItem = document.createElement("DIV");
        if (indice == 0) {
            divItem.classList.add("item", "active");
        }
        else {
            divItem.classList.add("item");
        }
        imgItem = document.createElement("IMG");
        imgItem.src =   elem.imagen;
        if (elem.ancho) {
            imgItem.style.width = elem.ancho+"px";
        }

        divCaption = document.createElement("DIV");
        divCaption.className = "carousel-caption";

        h3Caption = document.createElement("H3");
        h3Caption.innerHTML = elem.titulo;

        pCaption = document.createElement("P");
        pCaption.innerHTML = elem.texto;

        divCaption.appendChild(h3Caption);
        divCaption.appendChild(pCaption);

        divItem.appendChild(imgItem);
        divItem.appendChild(divCaption);

        divSlides.appendChild(divItem);
    });

    div.appendChild(divSlides);

    var aNav = document.createElement("A");
    aNav.classList.add("left", "carousel-control");
    aNav.href = "#myCarousel";
    aNav.role = "button";
    aNav.dataset.slide = "prev";

    var spanNav = document.createElement("DIV");
    spanNav.innerHTML = "<svg height='81.3' width='67.4' viewBox='0 0 67.4 81.3'><path d='M 37.1,41 67.4,63.6 51.4,81.3 0,41.6 46.1,0 67.2,16.3 Z'/></svg>"; 
    spanNav.classList.add("flechaIzq");
    spanNav.ariaHidden = "true";

    var span2Nav = document.createElement("SPAN");
    span2Nav.className = "sr-only";
    span2Nav.innerHTML = "Anterior";

    aNav.appendChild(spanNav);
    aNav.appendChild(span2Nav);
    div.appendChild(aNav);

    aNav = document.createElement("A");
    aNav.classList.add("right", "carousel-control");
    aNav.href = "#myCarousel";
    aNav.role = "button";
    aNav.dataset.slide = "next";

    spanNav = document.createElement("DIV");
    spanNav.innerHTML = "<svg height='81.3' width='67.4' viewBox='0 0 67.4 81.3'><path d='M 30.3,41 0,63.6 16,81.3 67.4,41.6 21.3,0 0.2,16.3 Z'/></svg>";
    spanNav.classList.add("flechaDcha");
    spanNav.ariaHidden = "true";

    var span2Nav = document.createElement("SPAN");
    span2Nav.className = "sr-only";
    span2Nav.innerHTML = "Siguiente";

    aNav.appendChild(spanNav);
    aNav.appendChild(span2Nav);
    div.appendChild(aNav);
}
// Crear lista de objetos, cualquier tipo que esté creado ya
function cargarListaObjetos(div, elemento) {
    $.each(elemento.contenido, function (indice, ele) {
        cargarObjeto(div, ele)
    });
}
/* AUTOEVALUACIONES */
// Crear un formulario de preguntas con opciones
function crearAutoevalPreguntas(div, elemento){
    var divFormulario = document.createElement("DIV");
    divFormulario.className = "divFormulario";
    divFormulario.id = "formAutoeval";
    var formPregunta = document.createElement("FORM");

    var divPregunta = null;

    // Recorrer las preguntas
    $.each(elemento.preguntas, function (indiceI, elementoUl) {
        divPregunta = document.createElement("DIV");
        var h2Pregunta = document.createElement("H2");
        h2Pregunta.innerHTML = elementoUl.texto;
        divPregunta.appendChild(h2Pregunta);

        if (elementoUl.imagen) {
            var imgPregunta = document.createElement("IMG");
            imgPregunta.src = elementoUl.imagen;
            divPregunta.appendChild(imgPregunta);
        }
        var ulRespuestas = document.createElement("UL");   
        var liRespuesta = null;
        var inputRespuesta = null;
        var labelRespuesta = null;
        var pFeedback = null;

        // ATENCIÓN: ELEMENTO DE DATASET A PELO (USAR LEERDATA?)
        // Recorrer las respuestas
        $.each(elementoUl.respuestas, function (indiceJ, elementoLi) {
            liRespuesta = document.createElement("LI");
            liRespuesta.dataset.c = elementoLi.correcto;

            inputRespuesta = document.createElement("INPUT");
            inputRespuesta.id = "e" + (indiceI) + "r" + (indiceJ + 1);
            inputRespuesta.type = "radio";
            inputRespuesta.name = "r" + (indiceI);
            labelRespuesta = document.createElement("LABEL");
            labelRespuesta.setAttribute("for", "e" + (indiceI) + "r" + (indiceJ + 1));
            labelRespuesta.innerHTML = elementoLi.opcion;

            liRespuesta.appendChild(inputRespuesta);
            liRespuesta.appendChild(labelRespuesta);
            if (elementoLi.feedback) {
                pFeedback = document.createElement("P");
                pFeedback.className = "feedback";
                pFeedback.innerHTML = elementoLi.feedback;
                pFeedback.style.display = "none";
                liRespuesta.appendChild(pFeedback);
            }

            ulRespuestas.appendChild(liRespuesta);
            
            divPregunta.appendChild(ulRespuestas);
        });
 
        formPregunta.appendChild(divPregunta);

        // Las respuestas se ordenan aleatoriamente
        $(ulRespuestas).shuffle();
        divFormulario.appendChild(formPregunta);

    });

    var divResultados = document.createElement("DIV");
    divResultados.id = "divResultados";
    divResultados.style.display = "none";

    if (elemento.feedback) {
        var divFeedback = document.createElement("DIV");
        divFeedback.id = "divFeedback";
        divFeedback.innerHTML = elemento.feedback;
        divFeedback.style.display = "none";
    }

    // Botón para corregir el ejercicio
    var divBotonera = document.createElement("DIV");
    divBotonera.className = "botonera";

    var botonCorregir = document.createElement("BUTTON");
    botonCorregir.onclick = function () {
        $("#divResultados").hide();
        $("#divResultados").empty();
        $("#formAutoeval > form > ul > li > p").hide();
        var forms = $("#formAutoeval > form");
        var nCorrectas = 0;
        var nPreguntas = $(forms).find("h2").length;
        $.each(forms, function (i, form) {
            $(form).find('input').each(function (j, res) {
                if ($(res).is(":checked")) {
                    // Darle la clase "correcto" si está bien la respuesta
                    if ($(res).parent().data("c")) {
                        $(res).parent().addClass("correcto");
                        nCorrectas++;
                    }
                        // Si no, clase "incorrecto"
                    else {
                        $(res).parent().addClass("incorrecto");
                    }
                    // Mostrar el feedback
                    $(res).siblings("P").show();
                }
                else {
                    $(res).parent().removeClass();
                }
            });
        });
        var pResultado = document.createElement("P");
        pResultado.innerHTML = "Has contestado correctamente a <b>" + nCorrectas + "</b> de <b>" + (nPreguntas) + "</b> preguntas.";
        $("#divResultados").append(pResultado);
        $("#divResultados").show();
    }
    botonCorregir.innerHTML = "Corregir";

    // Botón para resolver el ejercicio
    var botonResolver = document.createElement("BUTTON");
    botonResolver.onclick = function () {

        $("#divFeedback").show();

        var forms = $("#formAutoeval > form");
        $.each(forms, function (i, form) {
            $(form).find('input').each(function (j, res) {
                $(res).parent().removeClass("incorrecto");
                $(res).parent().find(".feedback").addClass("oculto");
                if ($(res).parent().data("c")) {
                    $(res).parent().addClass("correcto");
                    $(res).siblings("P").show();
                }
                else {
                    $(res).parent().addClass("incorrecto");
                    $(res).siblings("P").show();
                }
            });
        });
    }
    botonResolver.innerHTML = "Resolver";

    divBotonera.appendChild(botonCorregir);
    divBotonera.appendChild(botonResolver);

    divFormulario.appendChild(divResultados);
    if (divFeedback) {
        divFormulario.appendChild(divFeedback);
    }
    divFormulario.appendChild(divBotonera)
    div.appendChild(divFormulario);
}
// Crear un ejercicio de autoevaluación que consiste en una tabla en la que señalar elementos
// TODO: CREAR SUBCLASE PARA DIFERENCIAR ENTRE LOS DE ALIMERKA Y EL DE MANIPULADOR QUE MUESTRA UN FEEDBACK DIFERENTE
function crearAutoevalTabla(div, elemento) {
    // Crear la imagen
    if (elemento.imagen) {
        var imgImagen = document.createElement("IMG");
        imgImagen.src = elemento.imagen;
        if (elemento.ancho) {
            imgImagen.style.width = elemento.ancho + "px";
        }
        div.appendChild(imgImagen);
    }

    // Crear la tabla con las respuestas
    //div.appendChild(cargarObjeto(elemento.tabla[0]));
    cargarObjeto(div, elemento.tabla[0]);
    // Crear capa de feedback
    var divFeedback = document.createElement("DIV");
    divFeedback.classList.add('feedback', 'oculto');
    var pFeedback = document.createElement("P");
    if (elemento.feedback) {
        // TODO: ???? FEEDBACK FIJO?
        // Si existe un texto enviado como feedback, se pone y no se cambia.
        pFeedback.className = "fijo";
        pFeedback.innerHTML = elemento.feedback;        
    }
    divFeedback.appendChild(pFeedback);

    // Crear los botones
    var divBotonera = document.createElement("DIV");
    divBotonera.classList.add('botonera');

    var buttonCorregir = document.createElement("BUTTON");
    buttonCorregir.innerHTML = "Corregir";
    buttonCorregir.onclick = function () {
        var nCorrectos = 0;
        var nRespuestas = $('.tabla').find('td.respuesta').length;
        var tabla = $(this).parent().parent();
        var seleccionados = $(tabla).find('.seleccionado');
        $.each(seleccionados, function (i, ele) {
            ele.classList.remove("seleccionado");
            if ($(ele).hasClass('respuesta')) {
                ele.classList.add("correcto");
            }
            else {
                ele.classList.add("incorrecto");
            }
        });
        nCorrectos = $('.tabla').find('td.correcto').length;
        //p.innerHTML = "Seguro que en todos los casos has identificado correctamente el alimento alterado. Sin embargo, no has podido hacer lo mismo con el alimento seguro y con el alimento contaminado."
        // Si no tiene un texto de feedback, se usa el normal de correctos sobre respuestas que se tiene que actualizar.
        if ($('.feedback').find('p:not(.fijo)')) {
            $('.feedback').find('p:not(.fijo)').html("Has señalado correctamente <b>" + nCorrectos + "</b> características de  <b>" + nRespuestas + "</b>. ");
        }
        $('.feedback').show();
    }
    var buttonResolver = document.createElement("BUTTON");
    buttonResolver.innerHTML = "Resolver";
    buttonResolver.onclick = function () {
        $('.tabla.rebordeHover tr').each(function (i, tr) {
            $(tr).children("td").each(function (j, cell) {
                if ($(cell).hasClass("respuesta")) {
                    $(cell).addClass("correcto");
                } else {
                    $(cell).removeClass("incorrecto");
                }
            });
        });
    }

    divBotonera.appendChild(buttonCorregir);
    divBotonera.appendChild(buttonResolver);

    div.appendChild(divFeedback);
    div.appendChild(divBotonera);
}
// Crear un ejercicio de autoevaluación que consiste en arrastrar elementos a su caja correcta
function crearAutoevalArrastrar(div, elemento) {
    var divContenedoresSuperior = document.createElement("DIV");
    divContenedoresSuperior.className = "contenedores";
    var divContenedoresInferior = document.createElement("DIV");
    divContenedoresInferior.className = "contenedores";
    var divContenidos = document.createElement("DIV");
    divContenidos.className = "contenidos";
    // Crear las cajas
    $.each(elemento.contenedores, function (indice, contenedor) {
        // Se crean dos hileras de cajas para poner las imágenes entre ellas
        if (indice < elemento.contenedores.length / 2) {
            cargarObjeto(divContenedoresSuperior, contenedor);
        }
        else {
            cargarObjeto(divContenedoresInferior, contenedor);
        }        
    });
    // Rellenar los contenidos con las imágenes
    $.each(elemento.contenidos, function (indice, contenido) {
        cargarObjeto(divContenidos, contenido);
        //divContenidos.appendChild(cargarObjeto(contenido));
    });
    
    var divSolucion = divSolucion = document.createElement("DIV");
    // Capa de solución
    if (elemento.solucion) {
        
        divSolucion.classList.add("solucion", "oculto");
        var imgSolucion = document.createElement("IMG");
        imgSolucion.src =  elemento.solucion;
        imgSolucion.style.width = "40%";
        divSolucion.appendChild(imgSolucion);
    }

    // Crear los botones
    var divBotonera = document.createElement("DIV");
    divBotonera.className = "botonera";
    var buttonReiniciar = document.createElement("BUTTON");
    buttonReiniciar.innerHTML = "Reiniciar";
    buttonReiniciar.onclick = function () {
        $(".ui-draggable").animate({
            top: "0px",
            left: "0px"
        });
        $(".ui-draggable-disabled").draggable({ disabled: false });
        $.each($(".droppable"), function (i, ele) {
            ele.classList.remove("correcto");
        });
        $('.autoevalArrastrar .solucion').addClass("oculto");
        $('.botonera').removeAttr('style');
        inicializarDraggable();   
    };

    // Resolver muestra una imagen de como se deberían ordenar
    var buttonResolver = document.createElement("BUTTON");
    buttonResolver.innerHTML = "Resolver";
    buttonResolver.onclick = function () {
        $('.autoevalArrastrar .solucion.oculto').removeClass("oculto");
    };
    
    divBotonera.appendChild(buttonReiniciar);
    divBotonera.appendChild(buttonResolver);

    // Aleatorizar las imágenes para que no salgan siempre en el mismo orden
    div.appendChild($(divContenedoresSuperior).shuffle()[0]);    
    div.appendChild($(divContenidos).shuffle()[0]);
    div.appendChild($(divContenedoresInferior).shuffle()[0]);
    div.appendChild(divSolucion);
    div.appendChild(divBotonera);

}
// Crear un crossword
// TODO: REPASAR FUNCIONALIDAD EN LOS OY.JS
function crearPalabrasCruzadas(div, elemento) {  
    var arrayPistas = new Array();

    $.each(elemento.pistas, function (i, pista) {
        arrayPistas.push(new oyCrosswordClue(pista.palabra.length, pista.definicion, pista.palabra, '', pista.direccion == 'H' ? 0 : 1, pista.posX, pista.posY));
    });

    CURSO.oygCrosswordPuzzle = new oyCrosswordPuzzle("p1","./crossword","/a/a",elemento.titulo,elemento.descripcion,arrayPistas,elemento.ancho,elemento.alto);
    for (var i = 0; i < CURSO.oygCrosswordPuzzle.clues.length; i++) {
        CURSO.oygCrosswordPuzzle.clues[i].matched = false;
        CURSO.oygCrosswordPuzzle.clues[i].revealed = false;
    }

    div.innerHTML = "<div id='oygContext' align='center' style='width:100%;'> <table class='oyOuterFrame' border='0' cellpadding='0' cellspacing='0'> <tr> <td align='center'> <table class='oyFrame' border='0' cellpadding='0' cellspacing='0'> <tr> <td colspan='5'> <table class='oyFrame' border='0' cellpadding='0' cellspacing='0' width='100%'> <tr class='oyHeader'> <td class='oyHeader'> <div id='oygHeader'></div> </td> <td align='right'> <div id='oygHeaderMenu'></div> </td> </tr> </table> </td> </tr> <tr style='height: 4px;'> <td colspan='5'></td> </tr>    <tr> <td rowspan='3' class='oyPuzzleCell' align='center' valign='top'> <div id='oygState'></div> <div class='oyPuzzle' id='oygPuzzle'></div> <div class='oyPuzzleFooter' id='oygPuzzleFooter'></div> </td> <td class='oyListCellDot'>.</td> <td class='oyListCell' valign='top' id='oygListH'></td> </tr><tr style='height: 4px;'> <td colspan='4'></td> </tr> <tr> <td class='oyListCellDot'>.</td> <td class='oyListCell' valign='top' id='oygListV'></td> </tr> <tr style='height: 4px;'> <td colspan='5'></td> </tr> <tr> <td colspan='5' class='oyFooter'> <div id='oygFooter'></div> </td> </tr> </table> </td></tr></table><div id='oygStatic' align='center'></div></div>";
}
// TODO: REPASAR EL ASPECTO
// Crear una sopa de letras 
function crearSopaLetras(div, elemento) {
    var divPuzzle = document.createElement("DIV");
    divPuzzle.id="puzzle";

    var divContenedor = document.createElement("DIV");
    divContenedor.id = "contenedor";

    var divWords = document.createElement("DIV");
    divWords.id = "words";

    CURSO.arrayPalabras= new Array(),
    CURSO.arrayDefiniciones= new Array(),
    // Leer las definiciones y las palabras e introducirlas en arrays
    $.each(elemento.pistas, function (i, pista) {
        CURSO.arrayPalabras.push(pista.palabra);
        CURSO.arrayDefiniciones.push(pista.definicion);
    });

    // Botón de resolver (la lógica está en la inicialización porque necesita que ya esté el puzzle creado)
    var divBotonera = document.createElement("DIV");
    divBotonera.className = 'botonera';
     
   
    var buttonResolver = document.createElement("BUTTON");
    buttonResolver.id = "solve";
    buttonResolver.innerHTML = "Resolver";

    divBotonera.appendChild(buttonResolver);

    divContenedor.appendChild(divWords);
    divContenedor.appendChild(divBotonera);

    div.appendChild(divPuzzle);
    div.appendChild(divContenedor);
}
// Crea un diagrama (JOINTJS)
function cargarDiagrama(div, elemento) {
    // Crear un array con las cajas y los enlaces. Al inicializar, se usa para crear el graph
    var celdas = [];
    var rect = null;
    // Cajas
    $.each(elemento.cajas, function (i, caja) {
        switch (caja.forma) {
            case "rect":
                rect = new joint.shapes.basic.TextBlock({
                    position: { x: caja.x, y: caja.y },
                    size: { width: caja.ancho, height: caja.alto },
                    attrs: { rect: { fill: caja.relleno, stroke: caja.borde, 'stroke-width':caja.anchoBorde, 'stroke-dasharray':caja.dashArray} },
                    content: caja.texto
                });
                // Se ocultan por defecto para poder mostrarlos luego con tiempo
                rect.attr('./visibility', 'hidden');
                rect.attr('orden', caja.orden);
                celdas.push(rect);
                break;
            default:;
        }
    });
    // Enlaces
    var link = null;
    for (var i = 0; i < elemento.enlaces.length; i++) {
        var enlace = elemento.enlaces[i];
        link = new joint.dia.Link({
            source: { id: celdas[enlace.origen-1].id },
            target: { id: celdas[enlace.destino-1].id }
        });
        link.attr({
            '.connection': { stroke: enlace.color },
            '.marker-target': { fill: enlace.color, d: 'M 20 0 L 0 10 L 20 20 z' }
        });
        // Se ocultan por defecto para poder mostrarlos luego con tiempo
        link.attr('./visibility', 'hidden');
        link.attr('orden', enlace.orden);
        //link.set('connector', { name: 'smooth' });
        celdas.push(link);    
    }
    return celdas;
}
// Cargar una imagen con tooltips. (SNAPSVG)
function cargarSVG(div, elemento) {
    // La imagen se carga utilizando la librería snapsvg
    var svg = Snap(div);
    var svgImagen = Snap.load(elemento.imagen, function (data) {
        svg.append(data);
        // Agregar los tooltips de las zonas
        /*if (elemento.nodos) {
            $.each(elemento.nodos, function (indice, nodo) {
                var gSvg = $(".mapa svg g").find("#" + nodo.id);
                var titleNodo = document.createElement("TITLE");
                titleNodo.innerHTML = nodo.texto;
                // Se ponen al principio del grupo
                gSvg.prepend(titleNodo);
            });
        }*/
    });
}
/* NAVEGACIÓN */
// Crear la capa de navegación, botones anterior y siguiente. Copyright.
function crearNavegacion(div) {

    var footerNavegacion = document.createElement("FOOTER");

    // Franja superior de la navegación
    var divBarraSuperior = document.createElement("DIV");
    divBarraSuperior.id = "barraSuperiorFooter";

    var divFooterBotonera = document.createElement("DIV");
    divFooterBotonera.id = "divFooterBotonera";

    // Botón anterior
    divFooterBotonera.appendChild(crearBotonNav("Anterior", parseInt(CURSO.scoActual) - 1));
    
    // Botón siguiente
    divFooterBotonera.appendChild(crearBotonNav("Siguiente", parseInt(CURSO.scoActual) + 1));

    footerNavegacion.appendChild(divBarraSuperior);
    footerNavegacion.appendChild(divFooterBotonera);
    footerNavegacion.appendChild(crearCopyright());

    div.appendChild(footerNavegacion);
}
// Crea un botón de navegación y lo devuelve. Recibe el nombre y el SCO al que tiene que navegar.
function crearBotonNav(texto, proximoSCO) {
    var divBoton = document.createElement("DIV");
    divBoton.id = "btnFooter" + texto;
    divBoton.setAttribute("onClick", "navegar(" + proximoSCO + ");")
    var divFlecha = document.createElement("DIV");
    if (texto == 'Siguiente') {
        $(divBoton).on('click', function () {centrarScoSiguiente();});         
        divFlecha.classList.add('footerFlecha', 'derecha');
        divFlecha.innerHTML = "<svg viewBox='0 0 56.1 81.3' height='30' width='30'><path d='M 24.7,41 -5.6,63.6 10.4,81.3 61.8,41.6 15.7,0 -5.4,16.3 Z'/></svg>";
    } else if (texto == 'Anterior') {
        $(divBoton).on('click', function () {centrarScoAnterior();});
        divFlecha.classList.add('footerFlecha', 'izquierda');
        divFlecha.innerHTML = "<svg viewBox='0 0 56.1 81.3' width='30' height='30'><path d='M 31.5,41 61.8,63.6 45.8,81.3 -5.6,41.6 40.5,0 61.6,16.3 Z'/></svg>";
    }
    var spanTexto = document.createElement("SPAN");
    spanTexto.className = "h3";
    spanTexto.innerHTML = texto;
    divBoton.appendChild(spanTexto);
    divBoton.appendChild(divFlecha);
    // En el primer y último sco, no se muestran los botones correspondientes
    if ((CURSO.scoActual == 0 && texto=="Anterior") || (proximoSCO == CURSO.json.contenido.length && texto=="Siguiente")) {
        divBoton.style.visibility = "hidden";
    }
    return divBoton;
}
// Crear la capa de copyright. Se le pasa la capa de navegación para que le añada esta.
function crearCopyright() {
    var divCopyright = document.createElement("DIV");
    divCopyright.id = "divFooterCopyright";
    divCopyright.innerHTML = "<div class='h6'>2016 © MAVI Nuevas Tecnologías · <b><a target=_blank href=http://www.mavint.es>www.mavint.es</a></b> · accesiblidad</div>"
    return divCopyright;
}
/*** INICIALIZACIONES *****/
// Inicializar los objetos, si existen, que necesitan inicialización. Se ha de llamar tras crear toda la página
function inicializarObjetos() {

    // Pestañas arriba (JQUERY)
    if ($(".tabs").length > 0) {
        $(".tabs").tabs({ show: 'fade', hide: 'fade' });
    }
    // Pestañas a la izquierda (JQUERY)
    if ($(".tabs.vertical").length > 0) {
        $(".tabs.vertical").tabs({ show: 'fade', hide: 'fade'}).addClass('ui-tabs-vertical ui-helper-clearfix');
        $(".tabs.vertical li").removeClass("ui-corner-top").addClass("ui-corner-left");
    }
    // Acordeón (JQUERY)
    if ($(".acordeon").length > 0) {
        $('.acordeon').accordion({ active: 'false', heightStyle: 'content', collapsible: 'true' });
    }
    // Acordeón con subelementos
    if ($(".acordeonSub").length > 0) {
        inicializarAcordeonSub();
    }
    // Acordeón horizontal
    if ($(".acordeonHorizontal").length > 0) {
        $('.accordion').asAccordion({
            namespace: 'accordion',
            direction: 'horizontal'
        });
    }
    // Slider
    if ($('.pgwSlideshow').length > 0) {
        $('.pgwSlideshow').pgwSlideshow();
    }
    // Slider simple
    // TODO: NO IMPLEMENTADO :S
    /*if ($('.flexslider').length > 0) {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    }*/
    // Elemento sortable
    if ($('.sortable').length > 0) {
        inicializarSortable(); 
    }
    // Elemento draggable
    if ($('.draggable').length > 0) {
        inicializarDraggable();
    }
    // Elemento droppable
    if ($('.droppable').length > 0) {
        inicializarDroppable();
    }
    // Crossword
    if ($("#oygContext").length > 0) {
        inicializarCrossword();
    }
    // Sopa de letras
    if ($("#puzzle").length > 0) {
        inicializarSopaLetras();
    }
    if ($(".diagrama").length > 0) {
        inicializarDiagrama();
    }       
    // Mapa de imagen
    /*if ($("#mapa").length > 0) {
        // Se recupera la url de la imagen
        var url = $("#mapa").html();
        $("#mapa").empty();
        // Se carga el svg en la capa y se muestra
        var svg = Snap("#mapa");
        var svgImagen = Snap.load(url, function (data){
            svg.append(data);
        });
        $("#mapa").show();
    }*/     
}
// Inicializar acordeón con subtítulos
function inicializarAcordeonSub() {
    var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];

    $(".acordeonSub").click(function (e) {
        var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];
        var target = e.target,
            name = target.nodeName.toUpperCase();

        if ($.inArray(name, headers) > -1) {
            var subItem = $(target).next();

            //slideUp all elements (except target) at current depth or greater
            var depth = $(subItem).parents().length;
            var allAtDepth = $(".acordeonSub").filter(function () {
                if ($(this).parents().length >= depth && this !== subItem.get(0)) {
                    return true;
                }
            });
            $(allAtDepth).slideUp("fast");

            //slideToggle target content and adjust bottom border if necessary
            subItem.slideToggle("fast", function () {
                $(".acordeonSub :visible:last").css("border-radius", "0 0 10px 10px");
            });
            $(target).css({ "border-bottom-right-radius": "0", "border-bottom-left-radius": "0" });
        }
    });
}
// Inicializar el tamaño del índice
function inicializarAlto() {
    // Calcular el espacio para el índice y el contenido
    var alturaPantalla = $(window).height() - $("header").outerHeight(true) - $("footer").outerHeight(true);
        // Solo si tiene fondo
        if (CURSO.json.contenido[CURSO.scoActual].fondo) {
           $("#divTextos").height(alturaPantalla);
        }
    $("#navIndice").height(alturaPantalla);    
}
// Inicializar los elementos ordenables
function inicializarSortable(){
    $('.sortable ul').shuffle();
    $('.sortable ul').sortable({
        //containment: "parent",
        placeholder: "placeholder",
        revert: true,
        tolerance: "pointer",
        CURSOR: "move",
        opacity: 0.5,
        CURSOrAt: { top: 0, left: 0 },
        helper: "clone"
    });
    $('.sortable').on('sortupdate', function (e, ui) {
        var elementos = $(this).children("ul").children();
        $.each(elementos, function (index, elementoLI) {
            if ((parseInt(elementoLI.dataset.orden))-1 == index) {
                elementoLI.classList.add("correcto");
            }
            else {
                elementoLI.classList.remove("correcto");
            }                   
        });
    });
}
// Inicializar los elementos arrastrables
function inicializarDraggable() {
    $('.draggable').draggable({
        snap: ".droppable",
        containment: "#divTextos",
        revert: "invalid" 
    });
}
// Inicializa elementos en los que se pueden dejar otros. Comprueba si el elemento puesto dentro es correcto.
function inicializarDroppable() {
    $('.autoevalArrastrar .droppable').droppable({
        tolerance: "fit",
        // Al colocar cada uno hay que comprobar si se ha acabado el ejercicio
        drop: function (event, ui) {
            var nElementos = $('.imagen.draggable').length;
            if ($(this).attr('data_id') == ui.draggable.attr('data_caja')) {
                $(this).addClass("correcto");
                ui.draggable.draggable('disable');
                // Si ya se han colocado todos los elementos
                if ($('.ui-draggable-disabled').length == nElementos) {
                    document.getElementsByClassName("botonera").item(0).style.background = "#ffffff url('img/comunes/thumbUp.svg') no-repeat scroll left center / contain";
                }
            }
        }
    });
}
// Inicializar las palabras cruzadas
function inicializarCrossword() {
    oygInit = true;
    oygError = null;

    oygBind(CURSO.oygCrosswordPuzzle);
    CURSO.oygCrosswordPuzzle.hlist.clickItem(0);

    // this is how to turn off server support; score submission and action tracking will be disabled
    CURSO.oygCrosswordPuzzle.canTalkToServer = false;
}
// Inicializar sopa de letras
function inicializarSopaLetras() {
    // start a word find game
    var gamePuzzle = wordfindgame.create(CURSO.arrayPalabras, CURSO.arrayDefiniciones, '#puzzle', '#words');
    $('#solve').click(function () {
        wordfindgame.solve(gamePuzzle, CURSO.arrayPalabras);
    });
}
// Inicializar un diagrama
function inicializarDiagrama(){
    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('.diagrama'),
        model: graph,
        gridSize: 1,
        perpendicularLinks: true,
        interactive: false
    });
    graph.addCells(CURSO.diagrama);
    paper.fitToContent(8, 8, 4);

    var i = 1;
    var indiceCeldaVisible=null;
    function bucleCeldas() {
        for (var j=0; j < graph.getCells().length; j++) {
            if (graph.getCells()[j].attr('orden') == i) {
                indiceCeldaVisible = j;
                break;
            }
        }
        
        setTimeout(function () {
            graph.getCells()[indiceCeldaVisible].attr('./visibility', 'visible');
            i++;
            if (i <= graph.getCells().length) {
                bucleCeldas();
            }
            //TODO: CAMBIAR, HACER UN GET PARA RECUPERAR EL RETARDO, O ENVIARLO EN LA CAPA O ALGO
            //parseInt(CURSO.json.contenido[CURSO.scoActual].contenido[0].retardo)
        }, 1000); 
    }
    bucleCeldas();
}
/*** NAVEGACIÓN **/
// Carga el SCO de la posición pasada como parámetro
function navegar(posicion) {

    // Actualizar la base de datos a la posición más avanzada
    // Si la posición guardada es inferior a la posición actual, la actualizamos para cargar la página más avanzada
    if (CURSO.scoUltimo < posicion) {
        CURSO.scoUltimo = posicion;
        doLMSSetValue("cmi.core.lesson_location", posicion);
        // Si he llegado al último sco, el módulo está terminado
        if (CURSO.scoUltimo == CURSO.json.contenido.length-1) {
            doLMSSetValue("cmi.core.lesson_status", "passed");
        }
        doLMSCommit();
    }

    CURSO.scoActual = posicion;
    recargarCabecera();
    recargarTextos();
    // Recargar solo el elemento actual y el siguiente
    recargarIndice(posicion);
    recargarNavegacion();
    cargarFondo(document.getElementById("divTextos"));
    // Actualizar el último SCO
    if (CURSO.scoActual > CURSO.scoUltimo) {
        CURSO.scoUltimo = CURSO.scoActual;
    }
    //  Para que se vea la página desde arriba del todo (reiniciar la scrollbar)
    $(window).scrollTop(0);
    // Calcular a qué altura está la li del sco activo y recolocar la ventana
    /*if ($("#ulIndiceLista").find(".scoActivo").offset().top - $("header").height() < 0) {
    }*/

}
// Recarga la cabecera actualizando el nombre de sco
function recargarCabecera() {
    var h2 = document.getElementById("h2Encabezado");
    h2.innerHTML = (CURSO.scoActual+1)+". "+ CURSO.json.contenido[CURSO.scoActual].titulo;
}
// Vacía la capa de textos y carga los nuevos. Reinicia los objetos.
function recargarTextos() {
    $("#divTextos").empty();
    cargarTextos(document.getElementById("divTextos"));
    inicializarObjetos();
    inicializarAlto();
}
// Actualiza el sco a completado
function recargarIndice(posicion) {
    var ulIndice = document.getElementById("ulIndiceLista");

    // TODO: VER SI SE PUEDE RECOGER SOLO EL ACTIVO Y QUITARLE LA CLASE DIRECTAMENTE
    $.each(ulIndice.childNodes, function (indice, elemento) {
        elemento.classList.remove("scoActivo");
    });

    ulIndice.childNodes[posicion].classList.add("scoActivo");
    if (posicion >= CURSO.scoUltimo) {
            
        if (CURSO.scoActual - 1 >= 0) {
            ulIndice.childNodes[(CURSO.scoActual - 1)].classList.remove("scoUltimo");
            ulIndice.childNodes[(CURSO.scoActual - 1)].classList.add("scoCompletado");
            ulIndice.childNodes[(CURSO.scoActual - 1)].childNodes[0].setAttribute("onClick", "navegar(" + (CURSO.scoActual - 1) + ");");
        }
        if (CURSO.scoActual < CURSO.json.contenido.length) {
            ulIndice.childNodes[CURSO.scoActual].classList.remove("scoDeshabilitado");
            ulIndice.childNodes[CURSO.scoActual].classList.add("scoUltimo");
            ulIndice.childNodes[CURSO.scoActual].childNodes[0].setAttribute("onClick", "navegar(" + CURSO.scoActual + ");");
            if (CURSO.scoActual == CURSO.json.contenido.length-1) {
                ulIndice.childNodes[CURSO.scoActual].classList.add("scoCompletado");
            }
        }
    }
}
// Actualiza los botones de navegación
function recargarNavegacion() {
    recargarNavegacionBoton(document.getElementById("btnFooterAnterior"), parseInt(CURSO.scoActual) - 1);
    recargarNavegacionBoton(document.getElementById("btnFooterSiguiente"), parseInt(CURSO.scoActual) + 1);
    // Si es la última, le quita la clase 'textoLargo'
    document.getElementById("btnFooterSiguiente").classList.remove();
}
// Actualiza uno de los botones
function recargarNavegacionBoton(boton, posicion) {
    // Si es el primero
    if (posicion < 0) {
        boton.style.visibility = "hidden";
    }
    // Si es el último
    else if (posicion == CURSO.json.contenido.length) {        
            // Mensaje para mostrar al finalizar el curso
            var span = document.getElementById("btnFooterSiguiente").children[0];
            span.innerHTML = "Recuerda, para continuar con el curso debes pulsar en 'SALIR DE LA ACTIVIDAD' en la parte superior de la pantalla.";
            $(span).removeClass('h3');
            $("#btnFooterSiguiente").addClass('textoLargo');            
            $(boton).removeAttr("onClick");
    }
    // SCO intermedio
    else {
        boton.setAttribute("onClick", "navegar(" + posicion + ");");
        if ($("#btnFooterSiguiente").hasClass('textoLargo')) {
            var span = document.getElementById("btnFooterSiguiente").children[0];
            span.innerHTML = "Siguiente";
            $(span).removeClass('h4');
            $(span).addClass('h3');
            $("#btnFooterSiguiente").removeClass('textoLargo');
        }
        boton.style.visibility = "visible";
    }
}
/*** AUXILIARES ***/
// Crear una lista. Recursivo con sublistas.
function crearLista(elemento, lista){
    var liLista = null;
    $.each(elemento, function (indice, elementoLI) {
        liLista = document.createElement("LI");
        if (elementoLI.clase) {
            cargarObjeto(liLista, elementoLI);
        }
        else {
            if (elementoLI.punto) {
                liLista.innerHTML = elementoLI.punto;
            }
            if (elementoLI.imagen) {
                var imgLi = document.createElement("IMG");
                imgLi.src = elementoLI.imagen;
                if (elementoLI.ancho) {
                    imgLi.style.width = elementoLI.ancho + "px";
                }
                liLista.className = "sinPunto";
                liLista.appendChild(imgLi);
            }
            if (elementoLI.data_orden) {
                liLista.dataset.orden = elementoLI.data_orden;
            }
            if (elementoLI.contenido) {
                var subLista = document.createElement("UL");
                crearLista(elementoLI.contenido, subLista);
                liLista.appendChild(subLista);
            }
        }
        lista.appendChild(liLista);
    });      
}
// Rellenar acordeón con subelementos
// TODO: SI HAY SUBNIVELES NO SE VE EL TEXTO, ARREGLAR
function crearContenidoAcordeonSub(contenido, div, nivel) {
    /* NUEVO */
    /*$.each(contenido, function (indice, elemento) {
        var divTab = document.createElement("DIV");
        divTab.className = "divTab";

        if (elemento.titulo) {
            var hTitulo = null;
            switch (nivel) {
                case 1:
                    hTitulo = document.createElement("H1");
                    break;
                case 2:
                    hTitulo = document.createElement("H2");
                    break;
                case 3:
                    hTitulo = document.createElement("H3");
                    break;
                case 4:
                    hTitulo = document.createElement("H4");
                    break;
                case 5:
                    hTitulo = document.createElement("H5");
                    break;
                case 6:
                    hTitulo = document.createElement("H6");
                    break;
                default:
                    hTitulo = document.createElement("P");
            }
            hTitulo.innerHTML = elemento.titulo;
            hTitulo.className = 'hTitulo';
            // Cuando se pulsa en el título se activa la div siguiente que contiene el texto
            hTitulo.onclick = function () {
                /*$.each($(this).siblings("div"), function (indice, div) {
                    if (div.hasClass('divWrapper')) {
                        $.each($)
                    }
                });*/

               /* $(this).addClass('activo');
                // Cierro todos los hermanos de tipo 'div'
                $(this).siblings("div").hide();
                // Muestro solo la capa del que acompaña al título que se pulsó
                $(this).next("div").show();
            };
            div.appendChild(hTitulo);
        }      
        if (elemento.imagen) {
            var imgTab = document.createElement("IMG");
            imgTab.src = elemento.imagen;
            if (elemento.ancho) {
                imgTab.style.width = elemento.ancho + "px";
            }
            divTab.classList.add("clearfix");
            divTab.appendChild(imgTab);
        }
        if (elemento.subtitulo) {
            var h2Tab = document.createElement("H2");
            h2Tab.className = 'subtitulo';
            h2Tab.innerHTML = elemento.subtitulo;
            divTab.appendChild(h2Tab);
        }
        if (elemento.texto) {
            var pTab = document.createElement("P");
            pTab.innerHTML = elemento.texto;
            divTab.appendChild(pTab);
        }
        // Si hay una lista de elementos dentro, se llama a la función recursivamente para crear el siguiente nivel.
        if (elemento.contenido) {           
            crearContenidoAcordeonSub(elemento.contenido, divTab, nivel + 1);
        }
        // Si la capa no está vacía, se añade
        if (divTab.hasChildNodes()) {
            div.appendChild(divTab);
        }
    });*/
    $.each(contenido, function (indiceAcor, elementoAcor) {
        var hAcordeonSub = null;
        switch (nivel) {
            case 1:
                hAcordeonSub = document.createElement("H1");
                break;
            case 2:
                hAcordeonSub = document.createElement("H2");
                break;
            case 3:
                hAcordeonSub = document.createElement("H3");
                break;
            case 4:
                hAcordeonSub = document.createElement("H4");
                break;
            case 5:
                hAcordeonSub = document.createElement("H5");
                break;
            case 6:
                hAcordeonSub = document.createElement("H6");
                break;
            default:
                hAcordeonSub = document.createElement("P");
        }
        hAcordeonSub.innerHTML = elementoAcor.titulo;
        // Dar la clase activo y quitarla de los demás excepto el elemento pulsado.
        hAcordeonSub.onclick = function (e) {
            this.classList.toggle("activo");
            $(this).siblings().each(function (indice, elemento) {
                elemento.classList.remove("activo");               
            });
         
            
            /*var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];
            var target = e.target,
                name = target.nodeName.toUpperCase();

            if ($.inArray(name, headers) > -1) {
                var subItem = $(target).next();

                //slideUp all elements (except target) at current depth or greater
                var depth = $(subItem).parents().length;
                var allAtDepth = $(".acordeonSub").filter(function () {
                    if ($(this).parents().length >= depth && this !== subItem.get(0)) {
                        return true;
                    }
                });
                $(allAtDepth).slideUp("fast");

                //slideToggle target content and adjust bottom border if necessary
                subItem.slideToggle("fast", function () {
                    $(".acordeonSub :visible:last").css("border-radius", "0 0 10px 10px");
                });
                $(target).css({ "border-bottom-right-radius": "0", "border-bottom-left-radius": "0" });
            }*/
        };
        div.appendChild(hAcordeonSub);

        var divAcordeonElementos = document.createElement("DIV");
        divAcordeonElementos.className = "divAcordeonElemento";

        if (elementoAcor.imagen) {
            var imgAcordeonSub = document.createElement("IMG");
            imgAcordeonSub.src = elementoAcor.imagen;
            if (elementoAcor.ancho) {
                imgAcordeonSub.style.width = elementoAcor.ancho + "px";
            }
            divAcordeonElementos.classList.add("clearfix");
            divAcordeonElementos.appendChild(imgAcordeonSub);
        }

        // Si hay una lista de elementos dentro, se llama a la función recursivamente para crear el siguiente nivel.
        if (elementoAcor.contenido) {
            var divAcordeonSub = document.createElement("DIV");
            // Desplegar el primer nivel de mano
            //if (nivel == 1) {
            //    divAcordeonSub.style.display = "block";
            //}
            crearContenidoAcordeonSub(elementoAcor.contenido, divAcordeonSub, nivel + 1);
            div.appendChild(divAcordeonSub);
        }
        if (elementoAcor.texto) {
            var pAcordeonSub = document.createElement("P");
            pAcordeonSub.innerHTML = elementoAcor.texto;
            divAcordeonElementos.appendChild(pAcordeonSub);
        }

        div.appendChild(divAcordeonElementos);
    });
}
// Crear una caja droppable
function crearCaja(div, contenedor) {
    var divTexto = document.createElement("DIV");
    var divDroppable = document.createElement("DIV");
    divTexto.innerHTML = "<h4>" + contenedor.texto + "</h4>";
    divTexto.className = "titulo";
    divDroppable.classList.add("droppable");
    $(divDroppable).attr('data_id', contenedor.data_id)
    div.appendChild(divTexto);
    div.appendChild(divDroppable);
}
// Actualizar el scroll cuando se pasa al siguiente SCO
function centrarScoSiguiente() {
    // Posición en la pantalla del sco activo del índice
    var posActual = $("#ulIndiceLista").find(".scoActivo").position().top;
    var altoIndice = $("#divIndiceLista").height();
    var posScroll = $('#divIndiceLista').scrollTop();
    var altoLi = $('#divIndiceLista').find('.scoActivo').outerHeight(true);
    if (posActual > altoIndice / 2) {
        $('#divIndiceLista').scrollTop(posScroll + altoLi);
    }
}
// Actualizar el scroll cuando se pasa al anterior SCO
function centrarScoAnterior() {
    var posActual = $("#ulIndiceLista").find(".scoActivo").position().top;
    var altoIndice = $("#divIndiceLista").height();
    var posScroll = $('#divIndiceLista').scrollTop();
    var altoLi = $('#divIndiceLista').find('.scoActivo').outerHeight(true);
    if (posActual < altoIndice / 2) {
        $('#divIndiceLista').scrollTop(posScroll - altoLi);
    }
}
// Cargar respuestas tabla opciones
function cargarRespuestas(tabla, matriz) {
    $.each(matriz, function (i, ele) {
        var cell = tabla.rows[ele[1]].cells[ele[0]];
        cell.classList.add("respuesta");
    });
}
// Añadir eventos al teclado de siguiente y anterior
function eventosTeclado() {
    $(document).keydown(function (e) {
        // Unicode de la tecla pulsada
        var char = e.keyCode;
        // Derecha
        if (char == 39 && CURSO.scoActual < CURSO.json.contenido.length - 1) {
            navegar(CURSO.scoActual + 1);
            centrarScoSiguiente();
        }
        // Izquierda
        if (char == 37 && CURSO.scoActual > 0) {
            navegar(CURSO.scoActual - 1);
            centrarScoAnterior();
        }
    });
}
// Leer los posibles atributos de tipo data
function leerDataset(div, elemento) {
    for (var atributo in elemento) {
        // Expresión regular para recoger los elementos con el nombre "data_"
        if (atributo.match(/data_?/i)) {
            div.setAttribute(atributo, elemento[atributo]);
        }
    }
}
// Añadir los eventos de teclado al documento
$(document).ready(function () {  
    // Usar flechas del teclado a la derecha e izquierda para navegar
    eventosTeclado();
    // Definida en SCOFunctions.js
    init();
});
// Función para ordenar aleatoriamente una lista de elementos.
(function ($) {
    $.fn.shuffle = function () {
        return this.each(function () {
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }
    $.shuffle = function (arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
})(jQuery);
// Al cambiar el tamaño de la ventana, hay que recalcular el alto de las pantallas.
$(window).resize(function () {
    inicializarAlto();
});
// Introducen los svg en la capa que se le pasa como parámetro
function svgAnillas(div) {
    div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='anilla' width='30' height='30' patternUnits='userSpaceOnUse'><path d='M 14 26C 7 26 2 20 2 14S 8 2 14 2c 7 0 12 5 12 12 S 20 26 14 26 M 0 30h 30V0H0z'> </pattern></defs><rect width='100%' height='100%' fill='url(#anilla)'/></svg>";
}
function svgTrianguloIzquierda(div) {
    div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='trianguloI' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M 0 30 L 60 0 L 60 60 z'/> </pattern></defs><rect width='100%' height='100%' fill='url(#trianguloI)'/></svg>";
}
function svgTrianguloDerecha(div) {
    div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='trianguloD' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M 0 0 L 0 60 L 60 30 z'/> </pattern></defs><rect width='100%' height='100%' fill='url(#trianguloD)'/></svg>";
}
function svgPicos(div) {
    div.innerHTML = "<svg width='100%' height='100%'><defs><pattern id='trianguloAb' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M 0 0 L 60 0 L 30 40 z'/> </pattern></defs><rect width='100%' height='100%' fill='url(#trianguloAb)'/></svg>";
}
