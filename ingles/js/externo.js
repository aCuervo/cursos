function getArrayJS(modulo) {
    var arrayComun = [
        "js/cssBrowserSelector/css_browser_selector.js"];
    var arrayFinal = null;

    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([

        ]);
            break;   */
        case "mod01": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
			"js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod02": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod04": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod06": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod08": arrayFinal = arrayComun.concat([
            "js/jointJS/lodash.min.js",
            "js/jointJS/backbone-min.js",
            "js/jointJS/joint.min.js",
            "js/bootstrap/bootstrap.min.js",
            "js/flexSlider/jquery.flexslider-min.js",
            "js/slideshow/pgwslideshow.min.js",
            "js/snapsvg/snap.svg-min.js",
            "js/crossword/oy.js",
            "js/wordsearch/wordfind.js",
            "js/wordsearch/wordfindgame.js",
            "js/asAccordion/jquery-asAccordion.min.js"
        ]);
            break;
        case "mod09": arrayFinal = arrayComun.concat([
        "js/jointJS/lodash.min.js",
        "js/jointJS/backbone-min.js",
        "js/jointJS/joint.min.js",
        "js/bootstrap/bootstrap.min.js",
        "js/flexSlider/jquery.flexslider-min.js",
        "js/slideshow/pgwslideshow.min.js",
        "js/snapsvg/snap.svg-min.js",
        "js/crossword/oy.js",
        "js/wordsearch/wordfind.js",
        "js/wordsearch/wordfindgame.js",
        "js/asAccordion/jquery-asAccordion.min.js"
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
            "css/jointJS/joint.min.css",
			"css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod02": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod03": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod04": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod05": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod06": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod07": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod08": arrayFinal = arrayComun.concat([
            "css/jointJS/joint.min.css",
            "css/bootstrap/bootstrap.min.css",
            "css/flexSlider/flexslider.css",
            "css/slideshow/pgwslideshow.min.css",
            "css/crossword/base.css",
            "css/wordsearch/style.css",
            "css/asAccordion/asAccordion.min.css"
        ]);
            break;
        case "mod09": arrayFinal = arrayComun.concat([
        "css/jointJS/joint.min.css",
        "css/bootstrap/bootstrap.min.css",
        "css/flexSlider/flexslider.css",
        "css/slideshow/pgwslideshow.min.css",
        "css/crossword/base.css",
        "css/wordsearch/style.css",
        "css/asAccordion/asAccordion.min.css"
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
        "img/comunes/bigBen.jpg",
		"img/comunes/carga.svg",
        "img/comunes/check.svg",
        "img/comunes/contraportada.svg",
		"img/comunes/definicion.svg",
		"img/comunes/exclamacion.svg",
		"img/comunes/exclamacionBlanca.svg",
        "img/comunes/keep.png",
        "img/comunes/logo.svg",
        "img/comunes/londonLast2.png",
        "img/comunes/portada.svg",
		"img/comunes/sabiasQue.svg",
        "img/comunes/thumbUp.svg",
        "img/comunes/tick_menu.svg",
        "img/comunes/towerB.jpg",
    ];
    var arrayFinal = null;
    switch (modulo) {
        /*case "nombreModulo": arrayFinal = arrayComun.concat([

        ]);
            break;*/
        case "mod01":
            arrayFinal = arrayComun.concat([
                "img/mod01/afternoon.svg",
                "img/mod01/bye.png",
                "img/mod01/cabin.png",
                "img/mod01/evening.svg",
                "img/mod01/hello.svg",
                "img/mod01/john.svg",
                "img/mod01/mary.svg",
                "img/mod01/meetYou.jpg",
                "img/mod01/morning.svg",
                "img/mod01/night.svg",
                "img/mod01/no.jpg",
                "img/mod01/photo.jpg",
                "img/mod01/skull.png"]);
            break;
        case "mod02":
            arrayFinal = arrayComun.concat([
                "img/mod02/girlFlower.png",
                "img/mod02/owlClock.svg",
                "img/mod02/reloj.jpg",
                "img/mod02/uncountable.jpg"]);
            break;
        case "mod03":
            arrayFinal = arrayComun.concat([
                "img/mod03/3guards.svg",
                "img/mod03/autumn.jpg",
                "img/mod03/brushTeeth.jpg",
                "img/mod03/bus.svg",
                "img/mod03/calabaza.png",
                "img/mod03/cinema.jpg",
                "img/mod03/claus.png",
                "img/mod03/coffee.jpg",
                "img/mod03/dates.png",
                "img/mod03/hat.png",
                "img/mod03/joggin.jpg",
                "img/mod03/preps.svg",
                "img/mod03/queen.jpg",
                "img/mod03/rutinaBF.jpg",
                "img/mod03/shopping.jpg",
                "img/mod03/spring.jpg",
                "img/mod03/summer.jpg",
                "img/mod03/tv.png",
                "img/mod03/valentin.png",
                "img/mod03/welcome.svg",
                "img/mod03/winter.jpg",
                "img/mod03/wMachine.png"]);
            break;
        case "mod04":
            arrayFinal = arrayComun.concat([
                "img/mod04/at.svg",
                "img/mod04/behind.svg",
                "img/mod04/between.svg",
                "img/mod04/emily.png",
                "img/mod04/farola.svg",
                "img/mod04/in.svg",
                "img/mod04/infront.svg",
                "img/mod04/jimy.png",
                "img/mod04/john.png",
                "img/mod04/katy.png",
                "img/mod04/movie.jpg",
                "img/mod04/nearto.svg",
                "img/mod04/nexto.svg",
                "img/mod04/on.svg",
                "img/mod04/over.svg",
                "img/mod04/preps.svg",
                "img/mod04/under.svg"]);
            break;
        case "mod05":
            arrayFinal = arrayComun.concat([
                "img/mod05/email.png",
                "img/mod05/formalemail.png",
                "img/mod05/informalemail.png",
                "img/mod05/stamp.svg",
                "img/mod05/vocabulary.png",
                "img/mod05/youCan.svg"]);
            break;
        case "mod06":
            arrayFinal = arrayComun.concat([
                "img/mod06/Beverages.jpg",
                "img/mod06/Breakfast2.jpg",
                "img/mod06/costumer.svg",
                "img/mod06/food.jpg",
                "img/mod06/fruits.jpg",
                "img/mod06/here.jpg",
                "img/mod06/menu.jpg",
                "img/mod06/orange.jpg",
                "img/mod06/raining.png",
                "img/mod06/reading.png",
                "img/mod06/riding.png",
                "img/mod06/Snacks.jpg",
                "img/mod06/there.jpg",
                "img/mod06/vocabulary.jpg",
                "img/mod06/waitress.svg",
                "img/mod06/working.png"]);
            break;
        case "mod07":
            arrayFinal = arrayComun.concat([
                "img/mod07/reading.jpg",
                "img/mod07/sports.jpg",
                "img/mod07/surf.jpg",
                "img/mod07/te.jpg",
                "img/mod07/work.jpg"]);
            break;
        case "mod08":
            arrayFinal = arrayComun.concat([
                "img/mod08/clock.jpg",
                "img/mod08/hourglass.jpg",
                "img/mod08/list.png",
                "img/mod08/maldives.jpg",
                "img/mod08/sand.jpg",
                "img/mod08/vocabulary.jpg",
                "img/mod08/words.jpg"]);
            break;
        default: arrayFinal = arrayComun;
    }
    return arrayFinal;
}



