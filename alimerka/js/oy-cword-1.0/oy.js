var oygInit = false;
var oygError = "Failed to load or execute required JavaScript files.";

function JSONscriptRequest(fullUrl) {
    this.fullUrl = fullUrl; 											// REST request path    
    this.headLoc = document.getElementsByTagName("head").item(0);		// Get the DOM location to put the script tag    
    this.scriptId = 'JscriptId' + JSONscriptRequest.scriptCounter++;	// Generate a unique script tag id
}

JSONscriptRequest.scriptCounter = 1; 	// Static script ID counter

JSONscriptRequest.prototype.init = function () {
    this.scriptObj = document.createElement("script");

    this.scriptObj.setAttribute("type", "text/javascript");
    this.scriptObj.setAttribute("charset", "utf-8");
    this.scriptObj.setAttribute("src", this.fullUrl);
    this.scriptObj.setAttribute("id", this.scriptId);
}

JSONscriptRequest.prototype.finit = function () {
    this.headLoc.removeChild(this.scriptObj);
}

JSONscriptRequest.prototype.submit = function (timeout) {
    this.headLoc.appendChild(this.scriptObj);
}

//
// This a typical clue
//

function oyCrosswordClue(
	len,		// length of the word in symnbols, i.e. for the word "Abstract" this will be 8
	clue,		// the text of the word clue given to the user, i.e. for the word "Abstract" this will be "This factory creates an instance of several families of classes"
	answer,		// thw word itself, i.e. "Abstract"; maybe be ommited, thus disabling the "Reveal" function
	sign,		// MD5 signature of the word itself with puzzle uid, i.e. for the word "Abstract" and uid "5748185539682739085" this will be "26f265b96e01081a5ef26a432eda9cff"
	dir,		// word direction; 0 for horizontal and 1 for vertical
	xpos,		// zero-based coordinate of the word on X axis, zero on the left, i.e. for the word "Abstract" this will be 12
	ypos		// zero-based coordinate of the word on Y axis, zero at t he top, i.e. for the word "Abstract" this will be 6
) {
    this.len = len;
    this.clue = clue;
    this.answer = answer;
    this.sign = sign;
    this.dir = dir;
    this.xpos = xpos;
    this.ypos = ypos;

    this.revealed = false;
    this.matched = false;
}

oyCrosswordClue.prototype.completed = function () {
    return this.matched || this.revealed;
}

//
// This a list of clues (across/down)
//

function oyClueList(puzz, name, clues, ns) {
    this.puzz = puzz;
    this.name = name;
    this.clues = clues;
    this.ns = ns;

    this.selIdx = -1;
}

oyClueList.prototype.render = function () {
    var buf = this.name;
    buf += "<table class='oyList' border='0' cellspacing='0' cellpadding='0'>";

    for (var i = 0; i < this.clues.length; i++) {
        if (i != 0) {
            buf += "<tr class='oyListSpacer'><td></td></tr>";
        }
        buf += "<tr><td class='oyListNormal' id='" + this.ns + i + "'><b>" + (i + 1) + ".</b> " + this.clues[i].clue + "</td></tr>";
    }
    buf += "</table>";

    return buf;
}

oyClueList.prototype.bind = function () {
    for (var i = 0; i < this.clues.length; i++) {
        var elem = document.getElementById(this.ns + i);
        this.bindItem(elem, i);
    }
}

oyClueList.prototype.unbind = function () {
    for (var i = 0; i < this.clues.length; i++) {
        var elem = document.getElementById(this.ns + i);
        elem.onclick = null;
    }
}

oyClueList.prototype.bindItem = function (elem, idx) {
    var oThis = this;
    elem.onclick = function () {
        oThis.clickItem(idx);
    };
}

oyClueList.prototype.clickItem = function (idx) {
    this.selectItem(idx);

    this.puzz.unfocusOldCell();
    this.puzz.focusNewCell(this.clues[idx].xpos, this.clues[idx].ypos, true, this.clues[idx]);
}

oyClueList.prototype.selectItem = function (idx) {
    if (this.selIdx != -1) {
        document.getElementById(this.ns + this.selIdx).className = "oyListNormal";
    }
    if (idx != -1) {
        document.getElementById(this.ns + idx).className = "oyListSel";
    }
    this.selIdx = idx;
}

oyClueList.prototype.getClueIndexForPoint = function (x, y) {
    for (var i = 0; i < this.clues.length; i++) {
        if (this.clues[i].dir == 0) {
            if (y == this.clues[i].ypos) {
                if (x >= this.clues[i].xpos && x < this.clues[i].xpos + this.clues[i].len) {
                    return i;
                }
            }
        } else {
            if (x == this.clues[i].xpos) {
                if (y >= this.clues[i].ypos && y < this.clues[i].ypos + this.clues[i].len) {
                    return i;
                }
            }
        }
    }

    return -1;
}

//
// Actions menu
//
function oyCrosswordMenu(puzz) {
    this.puzz = puzz;

    this.hlist = puzz.hlist;
    this.vlist = puzz.vlist;
    this.footer = puzz.footer;

    this.canReveal = puzz.canReveal;
    this.canCheck = puzz.canCheck;

    this.clues = puzz.clues;

    this.currentMenu = null;
    this.over = null;

    // cell states
    this.cache = new Array();
    for (var i = 0; i < this.puzz.h; i++) {
        for (var j = 0; j < this.puzz.w; j++) {
            var key = j + "_" + i;
            this.cache[key] = -1; 	// -1 - empty, 0 - full, 1 - guessed, 2 - revealed
        }
    }

    // init scores	
    this.checks = 0;
    this.reveals = 0;
    this.deducts = 0;
    this.matches = 0;
    this.score = 0;

    this.rank = -1;

    this.xpos = puzz.xpos;
    this.ypos = puzz.ypos;

    this.name = oyGetCookie("OYG_NICK_NAME");
    if (this.name == null || this.name == "") {
        this.name = "Anonymous";
    }

    this.server = new oyServer(this.puzz.appHome, this.puzz.ns, this.puzz.canTalkToServer);
    this.scoreSubmittedMatches = 0;	// number of matches for which core was submitted sucesfully
}

oyCrosswordMenu.prototype.setCellState = function (x, y, value) {
    this.cache[x + "_" + y] = value;
}

oyCrosswordMenu.prototype.getCellState = function (x, y) {
    return this.cache[x + "_" + y];
}


oyCrosswordMenu.prototype.bind = function () {
    this.inputCache = this.puzz.inputCache;

    this.startOn = new Date();
}

oyCrosswordMenu.prototype.unbind = function () {
    this.inputCache = null;
}

oyCrosswordMenu.prototype.focusNewCell = function (x, y) {
    this.xpos = x;
    this.ypos = y;
}

oyCrosswordMenu.prototype.invalidateMenu = function () {
    if (this.currentMenu != null) {
        this.currentMenu();
    }
}

oyCrosswordMenu.prototype.installWelcomeMenu = function () {
    this.currentMenu = this.installWelcomeMenu;

    var target = document.getElementById("oygPuzzleFooter");
    target.innerHTML = "";

    var oThis = this;

    /*var dispName = escape(this.name);
	dispName = dispName.replace(/%20/g, " ");
	this.addNoneWordAction( 
		target, 
		"Welcome, <a class='oysTextLink' href='' id='oygWelcomeLink'>" + dispName + "</a>! "
	);		
	var link = document.getElementById("oygWelcomeLink");
	link.onclick = function(){
		oThis.askNickName();
		oThis.invalidateMenu();
		return false; 
	} */

    //this.addNewLine(target);
    oThis.puzz.bind();
    //oThis.puzz.hlist.clickItem(0);
    oThis.installContextMenu();

    //document.getElementById("oygStatic").innerHTML = "";

    /*this.addAction(
		target, "Empezar", "Empezando...", "strt",
		function () {
		    oThis.puzz.bind();
		    oThis.puzz.hlist.clickItem(0);
		    oThis.installContextMenu();

		    document.getElementById("oygStatic").innerHTML = "";

		    //oThis.footer.stateOk("Enjoy the game!");
		}
	);

    //this.footer.stateOk("Ready to begin!");

    this.server.trackAction(this.puzz.uid, "wlm");*/
}

oyCrosswordMenu.prototype.installContextMenu = function () {
    this.currentMenu = this.installContextMenu;

    var target = document.getElementById("oygPuzzleFooter");
    target.innerHTML = "";

    var hidx = this.hlist.getClueIndexForPoint(this.xpos, this.ypos);
    var vidx = this.vlist.getClueIndexForPoint(this.xpos, this.ypos);

    // reveals
    if (!this.canReveal) {
        this.addNoneWordAction(target, "Reveal Disabled");
    } else {
        if (hidx != -1) {
            var caption = "Mostrar <b>" + (hidx + 1) + "H</b>"
            if (!this.hlist.clues[hidx].completed()) {
                this.addRevealWordAction(
					this.hlist.clues[hidx], target, caption
				);
            } else {
                this.addAction(target, caption, "", null, null);
            }
        }
        if (vidx != -1) {
            var caption = "Mostrar <b>" + (vidx + 1) + "V</b>";
            if (!this.vlist.clues[vidx].completed()) {
                this.addRevealWordAction(
					this.vlist.clues[vidx], target, caption
				);
            } else {
                this.addAction(target, caption, "", null, null);
            }
        }
    }

    // checks
    if (!this.canCheck) {
        this.addNoneWordAction(target, "Check Disabled");
    } else {
        var caption = "Comprobar <b>" + (hidx + 1) + "H</b>";
        if (hidx != -1) {
            if (!this.hlist.clues[hidx].completed()) {
                this.addCheckWordAction(
					this.hlist.clues[hidx], target, caption
				);
            } else {
                this.addAction(target, caption, "", null, null);
            }
        }

        var caption = "Comprobar <b>" + (vidx + 1) + "V</b>";
        if (vidx != -1) {
            if (!this.vlist.clues[vidx].completed()) {
                this.addCheckWordAction(
					this.vlist.clues[vidx], target, caption
				);
            } else {
                this.addAction(target, caption, "", null, null);
            }
        }


        var oThis = this;
        this.addAction(target, "Comprobar <b>todas</b>", "Comprobando todas...", "chkll",
			function () {
			    oThis.checkAll();
			    oThis.invalidateMenu();
			    return false;
			}
		);

        this.addNewLine(target);

        var oThis = this;
        this.addSubmitLeaveMenuItems(target);
    }

    // footer
    this.footer.update();

    // check game over
    var hasNext = false;
    for (var i = 0; i < this.clues.length; i++) {
        if (!this.clues[i].completed()) {
            hasNext = true;
            break;
        }
    }
    if (!hasNext) {
        this.over = true;
    }

    if (this.over) {
        this.over = true;
        this.puzz.unbind();
        this.installDoneMenu();
    }
}

oyCrosswordMenu.prototype.installDoneMenu = function () {
    this.currentMenu = this.installDoneMenu;

    var target = document.getElementById("oygPuzzleFooter");
    target.innerHTML = "";

    this.addNoneWordAction(target, "Fin del juego");
    this.addNewLine(target);

    /*var msg = "You have <b>" + this.score + "</b> points";
	if (this.rank != -1){
		msg += " (rank <b>" +  this.rank + "</b>)";
	}  
	msg += ".";
	
	this.addNoneWordAction(target, msg);	  
	this.addNewLine(target); */

    var oThis = this;
    //this.addSubmitLeaveMenuItems(target);

    this.footer.stateOk("Fin del juego");

    //this.server.trackAction(this.puzz.uid, "ovr");

    this.footer.update();
}

oyCrosswordMenu.prototype.addSubmitLeaveMenuItems = function (target) {
    /*if (this.puzz.canTalkToServer){
		var caption = "Submit <b>Score</b>";  
		if (this.matches > 0 && this.scoreSubmittedMatches < this.matches){		
			var oThis = this;
			this.addAction(target, caption, "Submitting score...", "sbmt",
				function(){	 	 		 
					oThis.submitScore();
					oThis.invalidateMenu();
					return false; 
				}  
			);
		} else {
			this.addAction(target, caption, "", null, null);
		}
	}*/

    /*var oThis = this;
	this.addAction(target, "Leave <b>Game</b>", "Leaving...", "lv",
		function(){			
			oThis.leaveGameEarly(oThis.puzz.leaveGameURL);
			oThis.footer.stateOk("Done");
			return false; 
		} 
	);*/
}

oyCrosswordMenu.prototype.leaveGameEarly = function (url) {
    /*this.footer.stateBusy("Leaving...");

	var canLeave = true;
	if (this.puzz.started && !this.over){
		canLeave = confirm("Game is in progress. Do you want to leave the game?");
	}	  
	if (canLeave){ 
		window.location = url;
	}
	
	this.footer.stateOk("Done");*/
}

oyCrosswordMenu.prototype.addAction = function (target, caption, hint, track, lambda) {
    caption = caption.replace(" ", "&nbsp;");

    var elem = document.createElement("SPAN");
    elem.innerHTML = " &nbsp; ";
    target.appendChild(elem);

    var elem = document.createElement("A");
    elem.innerHTML = caption;
    elem.href = "";
    if (!lambda) {
        elem.className = "oyMenuActionDis";
        elem.onclick = function () {
            return false;
        }
    } else {
        elem.className = "oyMenuAction";
        var oThis = this;
        elem.onclick = function () {
            oThis.footer.stateBusy(hint);
            setTimeout(
				function () {
				    lambda();
				    oThis.server.trackAction(oThis.puzz.uid, track);
				}, 100
			);
            return false;
        }
    }

    target.appendChild(elem);
}

oyCrosswordMenu.prototype.addNewLine = function (target) {
    var elem = document.createElement("SPAN");
    elem.innerHTML = "<span style='font-size: 4px;'><br />&nbsp;<br /></span>";
    target.appendChild(elem);
}

oyCrosswordMenu.prototype.addNoneWordAction = function (target, caption) {
    var elem = document.createElement("SPAN");
    elem.className = "oyMenuActionNone";
    elem.innerHTML = caption;
    target.appendChild(elem);

    var elem = document.createElement("SPAN");
    elem.innerHTML = " ";
    target.appendChild(elem);
}

oyCrosswordMenu.prototype.addCheckWordAction = function (clue, target, caption) {
    var oThis = this;
    this.addAction(target, caption, "Comprobando...", "chk",
		function () {
		    oThis.checkWord(clue);
		    oThis.invalidateMenu();
		    return false;
		}
	);
}

oyCrosswordMenu.prototype.addRevealWordAction = function (clue, target, caption) {
    var oThis = this;
    this.addAction(target, caption, "Mostrando...", "rvl",
		function () {
		    oThis.revealWord(clue);
		    oThis.invalidateMenu();
		    return false;
		}
	);
}

oyCrosswordMenu.prototype.getCurrentValueFor = function (x, y) {
    var value = this.inputCache.getElement(x, y).value;
    if (value == " " || value == "") {
        value = null;
    }

    return value;
}

oyCrosswordMenu.prototype.getCellPosListFor = function (clue, left, top) {
    var all = new Array();

    for (var i = 0; i < clue.len; i++) {
        all.push(this.charToPos(clue, i));
    }

    return all;
}

oyCrosswordMenu.prototype.charToPos = function (clue, offset) {
    var pos = new function () { }

    if (clue.dir == 0) {
        pos.x = clue.xpos + offset;
        pos.y = clue.ypos;
    } else {
        pos.x = clue.xpos;
        pos.y = clue.ypos + offset;
    }

    return pos;
}

oyCrosswordMenu.prototype.showAnswer = function (clue, stateCode) {
    for (var i = 0; i < clue.len; i++) {
        var pos = this.charToPos(clue, i);
        var input = this.inputCache.getElement(pos.x, pos.y);
        if (!input.readOnly) {
            input.readOnly = true;
            input.value = clue.answer.charAt(i).toUpperCase();

            this.setCellState(pos.x, pos.y, stateCode);

            var cell = document.getElementById("oyCell" + pos.x + "_" + pos.y);
            switch (stateCode) {
                case 1:
                    cell.className = "oyCellGuessed";
                    break;
                case 2:
                    cell.className = "oyCellRevealed";
                    break;
                default:
                    console.log("Bad state code!");
            }
        }
    }

    this.puzz.invalidate();
}

oyCrosswordMenu.prototype.checkWordStatus = function (clue) {
    var status = new function () { };

    status.wrong = 0;
    status.isComplete = true;
    status.buf = "";

    for (var i = 0; i < clue.len; i++) {
        var value;
        if (clue.dir == 0) {
            value = this.getCurrentValueFor(clue.xpos + i, clue.ypos);
        } else {
            value = this.getCurrentValueFor(clue.xpos, clue.ypos + i);
        }

        if (value == null) {
            status.isComplete = false;
            status.buf += ".";
        } else {
            status.buf += value;
        }

        if (value != clue.answer.charAt(i).toUpperCase()) {
            status.wrong++;
        }
    }

    return status;
}

oyCrosswordMenu.prototype.askNickName = function (score) {
    /*if (score){
		score = "Score: " + score + ". ";
	} else { 
		score = "";
	}
  
	if (this.name == null){
		this.name = "";
	}

	var oldName = this.name;
	this.name = window.prompt(  
		score + "Enter your NICK NAME or E-MAIL.\n" +  
		"Without e-mail, the score is recorded, but you aren't eligible for the prizes.",
		this.name 
	);
	 
	var result = true; 
	if (this.name == null || this.name == ""){
		this.name = oldName;     
		result = false; 
	} 
	
	if (this.name != null && this.name != ""){  
		oySetCookieForPeriod("OYG_NICK_NAME", this.name, 1000*60*60*24*360, "/");
		return result;
	} else {  
		this.name = "Anonymous";
		return false; 
	}*/
}

oyCrosswordMenu.prototype.getScoreForMatch = function (clue) {
    return clue.len;
}

oyCrosswordMenu.prototype.getDeductsForReveal = function (clue) {
    return clue.len * 2;
}

oyCrosswordMenu.prototype.getDeductionForCheck = function (clue) {
    var CHECK_FRAQ = 3;

    var deduction = (clue.len - clue.len % CHECK_FRAQ) / CHECK_FRAQ;
    if (deduction < 1) {
        deduction = 1;
    }

    return deduction;
}

oyCrosswordMenu.prototype.revealWord = function (clue) {
    this.deducts += this.getDeductsForReveal(clue);
    this.reveals++;
    this.showAnswer(clue, 2);

    clue.revealed = true;
    clue.matched = false;

    var status = this.checkWordStatus(clue);
    this.footer.stateOk("Mostrado [" + status.buf + "]");
}

oyCrosswordMenu.prototype.checkAll = function () {
    var checked = 0;
    var correct = 0;
    for (var i = 0; i < this.clues.length; i++) {
        if (this.clues[i].completed()) continue;

        var status = this.checkWordStatus(this.clues[i]);
        if (status.isComplete) {
            checked++;
            this.checks++;
            this.deducts += this.getDeductionForCheck(this.clues[i]);
            if (status.wrong == 0) {
                this.showAnswer(this.clues[i], 1);
                this.score += this.getScoreForMatch(this.clues[i]);

                this.clues[i].matched = true;
                this.clues[i].revealed = false;

                correct++;
                this.matches++;
            }
        }
    }

    /*if  (checked == 0){
		this.footer.stateError("No se encontraron palabras completas.");
	} else {
		this.footer.stateOk("Checked " + checked + ", " + correct + " matched!"); 
	}*/
}

oyCrosswordMenu.prototype.checkWord = function (clue) {
    var status = this.checkWordStatus(clue);
    if (!status.isComplete) {
        this.footer.stateError("La palabra [" + status.buf + "] est&acute; incompleta.");
    } else {
        this.checks++;
        this.deducts += this.getDeductionForCheck(clue);
        if (status.wrong != 0) {
            this.footer.stateError("[" + status.buf + "] no es correcta.");
        } else {
            this.matches++;
            this.showAnswer(clue, 1);
            this.score += this.getScoreForMatch(clue);

            clue.revealed = false;
            clue.matched = true;

            this.footer.stateOk("[" + status.buf + "] es correcta.");
        }
    }
}

oyCrosswordMenu.prototype.submitScore = function () {
    /*if (this.matches == 0){   
		this.footer.stateError("Nothing to submit yet!");
		alert("Nothing to submit yet!\nUncover some words first.");
	} else {		  
		var ms = new Date().getTime() - this.puzz.menu.startOn.getTime();
		this.server.submitScore(
			this, this.puzz.uid, 
			this.score, this.deducts, this.checks, this.reveals, this.matches,
			ms, this.name,
			this.puzz.clues
		); 
		this.footer.stateBusy("Submitting score...");
	}*/
}

//
// This is a typical puzzle
//
function oyCrosswordPuzzle(
	guid,	// universal identifier for this puzzle in your system, i.e. "12345"
	home,	// relative location of js libraries and image files relative to the main HTML file where puzzle is embedded, i.e. "./oy-cword-1.0"
	ns,		// think of it as of your own 'cookie'; you set it and it is carried all the way to the server when the move is submitted, i.e. "67890"
	title,	// title of the puzzle, i.e. "World's Best Puzzle"
	desc,	// description of the puzzle, i.e. "This is for all puzzle lover's out there..."
	clues,	// array of oyCrosswordClue objects for this puzzle
	w,		// play area width in cells, i.e. "20"
	h		// play area height in cells, i.e. "20"
) {
    this.uid = oygNextRandomInt();

    this.guid = guid;
    this.appHome = home;
    this.ns = ns;
    this.title = title;
    this.desc = desc;
    this.w = w;
    this.h = h;
    this.clues = clues;

    this.xpos = 0;
    this.ypos = 0;

    this.focused = null;

    // direction of focus movement when typing
    this.dir = 0;

    // allow override some things
    this.leaveGameURL = null;
    this.publisherURL = null;
    this.publisherName = null;
    this.canTalkToServer = true;

    this.menu = null;

    this.canReveal = true;
    this.canCheck = true;

    this.reorderClues();

    this.started = false;
}

oyCrosswordPuzzle.prototype.reorderClues = function () {

    // make sure that 2A and 2D are in the same cell so we can use same cell image for both
    var oldClues = [].concat(this.clues);
    var overlap = [];
    for (var i = 0; i < this.clues.length; i++) {
        for (var j = 0; j < this.clues.length; j++) {
            if (this.clues[i] == null || this.clues[j] == null || i == j) {
                continue;
            }

            if (
				this.clues[i].xpos == this.clues[j].xpos
				&&
				this.clues[i].ypos == this.clues[j].ypos
			) {
                overlap.push(this.clues[i]);
                overlap.push(this.clues[j]);
                this.clues[i] = null;
                this.clues[j] = null;
            }
        }
    }

    this.hclues = [];
    this.vclues = [];

    for (var i = 0; i < overlap.length; i++) {
        if (overlap[i].dir == 0) {
            this.hclues.push(overlap[i]);
        } else {
            this.vclues.push(overlap[i]);
        }
    }

    for (var i = 0; i < this.clues.length; i++) {
        if (this.clues[i] == null) {
            continue;
        }
        if (this.clues[i].dir == 0) {
            this.hclues.push(this.clues[i]);
        } else {
            this.vclues.push(this.clues[i]);
        }
    }

    this.clues = oldClues;
}

oyCrosswordPuzzle.prototype.init = function () {
    this.hlist = new oyClueList(this, "Horizontal", this.hclues, "oygHClue", "H");
    this.vlist = new oyClueList(this, "Vertical", this.vclues, "oygVClue", "V");

    var oThis = this;

    document.getElementById("oygHeader").innerHTML =
		"<span class='oyHeaderTitle'>" + this.title + "</span><br><span class='oyHeaderDesc'>" + this.desc + "</span>";

    var buf = "<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr>";
    buf += "<td class='oyFooter' id='oygFooterStatus' align='left'></td>";
    buf += "<td class='oyFooter' id='oygFooterClock' align='right'></td>";
    buf += "</tr>";

    var cr = "&nbsp;";
    if (this.publisherName != null) {
        cr = this.publisherName;
    }

    buf += "<tr><td class='oyCopyright' colspan='2' align='center'><a class='oysTextLink' id='oygCopyright' href=''></a></tr>";
    buf += "</table>";
    document.getElementById("oygFooter").innerHTML = buf;

    document.getElementById("oygCopyright").onclick = function () {
        oThis.menu.leaveGameEarly(oThis.publisherURL);
        return false;
    }

    var trackAction = "<img id='oygTrackAction' width='1px' height='1px'>"
    var target = document.getElementById("oygHeaderMenu");
    target.innerHTML = trackAction + '<a id="oygHeaderMenuBtn" href=""></a>';//<img style="padding: 4px;" src="' + this.appHome + '/img/whereto.gif" border="0" alt="Leave Game">

    document.getElementById("oygHeaderMenuBtn").onclick = function () {
        oThis.menu.leaveGameEarly(oThis.leaveGameURL);
        return false;
    }

    this.footer = new oyCrosswordFooter(this);
    //this.footer.stateBusy("Cargando...");

    this.menu = new oyCrosswordMenu(this);
}

oyCrosswordPuzzle.prototype.render = function () {
    var buf = "";
    buf += "<table border='0' cellspacing='0' cellpadding='0' style='border-collapse: collapse;'>";

    for (var i = 0; i < this.h; i++) {
        var row = "<tr>";
        for (var j = 0; j < this.w; j++) {
            row += "<td class='oyCellEmpty' id='oyCell" + j + "_" + i + "'></td>";
        }
        buf += row + "</tr>";
    }
    buf += "</table>";

    var CELL_H_SIZE = 25;
    var MIN_DIV_WIDTH = 400;
    var divWidth = this.w * CELL_H_SIZE;
    if (divWidth < MIN_DIV_WIDTH) {
        divWidth = MIN_DIV_WIDTH;
    }
    divWidth += "px";

    var target = document.getElementById("oygPuzzleFooter");
    target.style.width = divWidth;

    var target = document.getElementById("oygState");
    target.style.width = divWidth;

    var target = document.getElementById("oygPuzzle");
    target.style.width = divWidth;

    target.innerHTML = buf;

    for (var i = 0; i < this.hlist.clues.length; i++) {
        this.renderHorz(this.hlist.clues[i]);
    }
    for (var i = 0; i < this.vlist.clues.length; i++) {
        this.renderVert(this.vlist.clues[i]);
    }

    var target = document.getElementById("oygListH");
    target.innerHTML = "";
    target.className = "oyPanelDivHidden";

    var target = document.getElementById("oygListV");
    target.innerHTML = "";
    target.className = "oyPanelDivHidden";
}

oyCrosswordPuzzle.prototype.renderVert = function (clue) {
    for (var i = 0; i < clue.len; i++) {
        var key = "oyCell" + clue.xpos + "_" + (clue.ypos + i);
        var cell = document.getElementById(key);
        cell.className = "oyCellFull";
    }
}

oyCrosswordPuzzle.prototype.renderHorz = function (clue) {
    for (var i = 0; i < clue.len; i++) {
        var key = "oyCell" + (clue.xpos + i) + "_" + clue.ypos
        var cell = document.getElementById(key);
        cell.className = "oyCellFull";
    }
}

oyCrosswordPuzzle.prototype.fillVert = function (clue, idx) {
    for (var i = 0; i < clue.len; i++) {
        var key = "oyCell" + clue.xpos + "_" + (clue.ypos + i);
        var cell = document.getElementById(key);

        this.fillIn(cell, clue.xpos, clue.ypos + i, i, idx, 1);
        this.menu.setCellState(clue.xpos, clue.ypos + i, 0);
    }
}

oyCrosswordPuzzle.prototype.fillHorz = function (clue, idx) {
    for (var i = 0; i < clue.len; i++) {
        var key = "oyCell" + (clue.xpos + i) + "_" + clue.ypos
        var cell = document.getElementById(key);

        this.fillIn(cell, clue.xpos + i, clue.ypos, i, idx, 0);
        this.menu.setCellState(clue.xpos + i, clue.ypos, 0);
    }
}

oyCrosswordPuzzle.prototype.fillIn = function (cell, x, y, i, idx, dir) {
    if (i == 0) {
        cell.style.backgroundImage = "url('css/oy-cword-1.0/img/" + (idx + 1) + ".gif')";

       // cell.style.backgroundImage = "url('" + this.appHome + "/img/" + (idx + 1) + ".gif')";
    }
    cell.innerHTML = "<input id='oyInput" + x + "_" + y + "' class='oyCellInput' autocomplete='off' type='text' size='1' maxlength='1' value=''>";
}

oyCrosswordPuzzle.prototype.bind = function () {

    var target = document.getElementById("oygListH");
    target.className = "oyPanelDiv";
    target.innerHTML = this.hlist.render();

    var target = document.getElementById("oygListV");
    target.className = "oyPanelDiv";
    target.innerHTML = this.vlist.render();


    // fill in table with inputs
    var hcount = 0;
    for (var i = 0; i < this.hlist.clues.length; i++) {
        this.fillHorz(this.hlist.clues[i], hcount);
        hcount++;
    }

    var vcount = 0;
    for (var i = 0; i < this.vlist.clues.length; i++) {
        this.fillVert(this.vlist.clues[i], vcount);
        vcount++;
    }

    this.inputCache = new oyGridElementCache(this.w, this.h, "oyInput");


    // bind inputs
    for (var i = 0; i < this.h; i++) {
        for (var j = 0; j < this.w; j++) {
            this.bindItem(j, i);
        }
    }

    this.menu.bind();
    this.footer.bind();

    this.hlist.bind();
    this.vlist.bind();

    this.footer.update();
    this.started = true;
}

oyCrosswordPuzzle.prototype.unbind = function () {

    for (var i = 0; i < this.h; i++) {
        for (var j = 0; j < this.w; j++) {
            var target = this.inputCache.getElement(j, i);
            if (target != null) {
                target.onclick = null;
                target.onkeydown = null;
                target.onchange = null;
            }
        }
    }

    this.hlist.unbind();
    this.vlist.unbind();

    this.footer.unbind();
    this.menu.unbind();
}

oyCrosswordPuzzle.prototype.bindItem = function (x, y) {
    var target = this.inputCache.getElement(x, y);
    if (target != null) {
        var oThis = this;

        target.onclick = function () {
            oThis.unfocusOldCell();
            oThis.focusNewCell(x, y, false);
        }

        target.onkeydown = function (e) {
            return oThis.handleKeyDown(x, y, e);
        }

        target.onkeypress = function (e) {
            return oThis.handleKeyPress(x, y, e);
        }
    }
}

oyCrosswordPuzzle.prototype.focusLists = function (x, y) {
    var hidx = this.hlist.getClueIndexForPoint(x, y);
    this.hlist.selectItem(hidx);

    var vidx = this.vlist.getClueIndexForPoint(x, y);
    this.vlist.selectItem(vidx);
}

oyCrosswordPuzzle.prototype.focusCellList = function (all, focused) {
    for (var i = 0; i < all.length; i++) {
        var cell = document.getElementById("oyCell" + all[i].x + "_" + all[i].y);
        var stateCode = this.menu.getCellState(all[i].x, all[i].y);
        if (cell != null) {
            if (focused && stateCode == 0) {
                cell.className = "oyCellFocused";
            } else {
                this.restoreCellState(cell, all[i].x, all[i].y);
            }
        }
    }
}

oyCrosswordPuzzle.prototype.unfocusOldWord = function () {
    if (this.focused != null) {
        this.focusCellList(
			this.menu.getCellPosListFor(this.focused),
			false
		);

        this.focused = null;
    }
}

oyCrosswordPuzzle.prototype.focusNewWord = function (x, y) {
    var hidx = this.hlist.getClueIndexForPoint(x, y);
    var vidx = this.vlist.getClueIndexForPoint(x, y);

    var clue = null;
    if (hidx != -1 && vidx != -1) {
        if (this.dir == 0) {
            clue = this.hlist.clues[hidx];
        } else {
            clue = this.vlist.clues[vidx];
        }
    } else {
        if (hidx != -1) {
            clue = this.hlist.clues[hidx];
        }
        if (vidx != -1) {
            clue = this.vlist.clues[vidx];
        }
    }

    return clue;
}

oyCrosswordPuzzle.prototype.focusNewCell = function (x, y, focus, clue) {
    if (clue != null) {
        this.focused = clue;
    } else {
        this.focused = this.focusNewWord(x, y);
    }

    if (this.focused != null) {
        this.dir = this.focused.dir;

        this.focusCellList(
			this.menu.getCellPosListFor(this.focused),
			true
		);
    }

    var target = document.getElementById("oyCell" + x + "_" + y);
    if (target != null) {
        target.className = "oyCellActive";
        this.focusLists(x, y);

        if (focus) {
            var target = this.inputCache.getElement(x, y);
            target.focus();
        }
    }

    this.xpos = x;
    this.ypos = y;
    this.menu.focusNewCell(x, y);

    this.menu.invalidateMenu();
}

oyCrosswordPuzzle.prototype.unfocusOldCell = function () {
    var target = document.getElementById("oyCell" + this.xpos + "_" + this.ypos);
    if (target != null) {
        this.restoreCellState(target, this.xpos, this.ypos);
    }

    this.unfocusOldWord();
}

oyCrosswordPuzzle.prototype.invalidate = function () {
    this.unfocusOldCell();
    this.focusNewCell(this.xpos, this.ypos, true);
}

oyCrosswordPuzzle.prototype.restoreCellState = function (target, x, y) {
    var stateCode = this.menu.getCellState(x, y);
    switch (stateCode) {
        case -1:
            target.className = "oyCellEmpty";
            break;
        case 0:
            target.className = "oyCellFull";
            break;
        case 1:
            target.className = "oyCellGuessed";
            break;
        case 2:
            target.className = "oyCellRevealed";
            break;
        default:
            alert("Bad state code!");
    }
}

oyCrosswordPuzzle.prototype.isValidChar = function (c) {
    return (c >= "A" && c <= "Z") || c == " ";
}

oyCrosswordPuzzle.prototype.moveToPrevCell = function (x, y) {
    if (this.dir == 0) {
        x--;
    } else {
        y--;
    }

    var stateCode = this.menu.getCellState(x, y);
    if (stateCode != -1) {
        var target = this.inputCache.getElement(x, y);
        if (target != null) {
            this.unfocusOldCell();
            this.focusNewCell(x, y, false);
            target.focus();
        }
    }
}

oyCrosswordPuzzle.prototype.moveToNextCell = function (x, y) {
    if (this.dir == 0) {
        x++;
    } else {
        y++;
    }

    var stateCode = this.menu.getCellState(x, y);
    if (stateCode != -1) {
        var target = this.inputCache.getElement(x, y);
        if (target != null) {
            this.unfocusOldCell();
            this.focusNewCell(x, y, false);
            target.focus();
        }
    }
}

oyCrosswordPuzzle.prototype.handleKeyPress = function (x, y, e) {
    //
    // space - 32
    //

    if (!e) {
        e = window.event;
    }
    var keyCode = (e.which) ? e.which : e.keyCode;

    var c = String.fromCharCode(keyCode).toUpperCase();
    if (keyCode == 32) {
        c = " ";
    }

    if (this.isValidChar(c)) {
        var target = this.inputCache.getElement(x, y);
        if (!target.readOnly) {
            target.value = c.toUpperCase();
        }
        this.moveToNextCell(x, y);
    }

    return false;
}

oyCrosswordPuzzle.prototype.handleKeyDown = function (x, y, e) {
    //
    // left 37
    // up - 38
    // right - 39 
    // down - 40	 
    // backspace - 8
    //

    if (!e) {
        e = window.event;
    }
    var keyCode = (e.which) ? e.which : e.keyCode;

    var dir = (keyCode >= 37 && keyCode <= 40) || keyCode == 8;
    if (dir) {
        var target = null;

        switch (keyCode) {
            case 8:
                this.moveToPrevCell(x, y);
                break;
            case 37:
                while (true) {
                    if (x > 0) {
                        x = x - 1;
                        target = this.inputCache.getElement(x, y);
                        if (target != null) {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                break;
            case 39:
                while (true) {
                    if (x < this.w - 1) {
                        x = x + 1;
                        target = this.inputCache.getElement(x, y);
                        if (target != null) {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                break;
            case 38:
                while (true) {
                    if (y > 0) {
                        y = y - 1;
                        target = this.inputCache.getElement(x, y);
                        if (target != null) {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                break;
            case 40:
                while (true) {
                    if (y < this.h - 1) {
                        y = y + 1;
                        target = this.inputCache.getElement(x, y);
                        if (target != null) {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                break;
        }

        if (target != null) {
            this.unfocusOldCell();
            this.focusNewCell(x, y, false);
            target.focus();
        }
    }

    return true;
}

//
// This is connection endpoint
//
function oygEndpoint() {
    this.cookie = oygNextRandomInt();	// each endpoint is unique
    this.seq = 0;						// all requests are sequentially numbered

    this.oob = 0;					// out of ban responces
    this.badcookie = 0;				// reply not to my cookie
}

oygEndpoint.noendpoint = 0;			// counter of cases when reply received to non-existent end point

function oygCompletionPort(endpoint, url) {
    this.endpoint = endpoint;

    endpoint.seq++;
    this.seq = endpoint.seq;

    this.onError = null;
    this.onTimeout = null;
    this.onComplete = null;
    this.onDone = null;

    this.timeout = 15 * 1000;

    this.ajax = new JSONscriptRequest(url + "&seq=" + this.seq + "&cookie=" + endpoint.cookie);
}

oygCompletionPort.prototype.init = function () {
    this.ajax.init();

    var oThis = this;
    this.timer = setTimeout(
		function () {
		    var onTimeout = oThis.onTimeout;
		    oThis.finit();

		    if (onTimeout != null) {
		        onTimeout();
		    }
		}, this.timeout
	);

    this.ajax.submit();
}

oygCompletionPort.prototype.finit = function () {
    this.onError = null;
    this.onTimeout = null;
    this.onComplete = null;

    this.ajax.finit();
    this.ajax = null;

    clearTimeout(this.timer);
    this.timer = null;
}

function oyServer(appHome, ns, canTalkToServer) {
    this.appHome = appHome;
    this.ns = ns;
    this.canTalkToServer = canTalkToServer;

    this.ep = new oygEndpoint();
    this.md5 = new oySign();

    this.trackSeq = 0;

    this.trackURL = this.appHome + "/app/trackAction.php";
    this.submitURL = this.appHome + "/app/submitScore.php";
}

//
// compute state matrix [0, 1, ,1, 0, ...] and 
// concatenate all completed clue answers
//
oyServer.prototype.computeMatrix = function (clues) {
    var result = new function () { };

    var concat = "";
    var states = "";
    for (var i = 0; i < clues.length; i++) {
        if (clues[i].matched) {
            states += "1";
            concat += clues[i].answer;
        } else {
            states += "0";
        }
    }

    result.states = states;
    result.concat = concat;

    return result;
}

oyServer.prototype.trackAction = function (uid, verb) {
    if (this.canTalkToServer && verb != null) {
        var key = escape(uid);
        var data =
			"uid=" + key +
			"&ns=" + escape(this.ns) +
			"&verb=" + escape(verb);
        var sign = this.md5.hex_hmac_md5(key, data);
        var qstr = "data=" + escape(data) + "&sign=" + sign + "&seq=" + this.trackSeq;
        var url = this.trackURL + "?" + qstr;

        document.getElementById("oygTrackAction").src = url;

        this.trackSeq++;
    }
}

oyServer.prototype.submitScore = function (target, uid, score, deducts, checks, reveals, matches, time, name, clues) {
    var key = uid;
    var matrix = this.computeMatrix(clues);
    var concat = this.md5.hex_hmac_md5(key, matrix.concat);
    var data =
		"uid=" + key +
		"&ns=" + escape(this.ns) +
		"&states=" + matrix.states +
		"&concat=" + concat +
		"&score=" + score +
		"&deducts" + deducts +
		"&checks=" + checks +
		"&reveals=" + reveals +
		"&matches=" + matches +
		"&time=" + time +
		"&name=" + escape(name);
    var sign = this.md5.hex_hmac_md5(key, data);
    var qstr = "uid=" + key + "&data=" + escape(data) + "&sign=" + sign;
    var url = this.submitURL + "?" + qstr;

    this.submitScoreAjaxAnywhere(this.ep, target, url, matches);
}

oyServer.prototype.submitScoreAjaxAnywhere = function (ep, target, url, matches) {
    var oThis = target;
    var cp = new oygCompletionPort(ep, url);

    cp.onComplete = function (data) {
        oThis.scoreSubmittedMatches = matches;
        oThis.rank = data.rank;
        oThis.invalidateMenu();
        oThis.footer.stateOk("Score submitted!");
    }

    cp.onTimeout = function () {
        oThis.footer.stateError("Timeout waiting for server to reply!");
        alert("Failed to submit score. Server didn't reply!");
    }

    cp.onError = function (msg) {
        oThis.footer.stateError("Failed to submit score!");
        alert("Failed to submit score. Server replied with:\n\n" + msg);
    }

    oygSubmitScoreCompletionPoint = cp;
    cp.init();
}

var oygSubmitScoreCompletionPoint;

function oygSubmitScoreJSONComplete(response, seq) {
    var cp = oygSubmitScoreCompletionPoint;
    if (cp != null) {
        if (response.envelope.cookie == cp.endpoint.cookie) {
            if (response.envelope.seq == cp.seq) {
                var onComplete = cp.onComplete;
                var onError = cp.onError;
                cp.finit();

                if (response.envelope.success) {
                    if (onComplete != null) {
                        onComplete(response.data);
                    }
                } else {
                    if (onError != null) {
                        onError(response.envelope.msg);
                    }
                }
            } else {
                cp.endpoint.oob++;
            }
        } else {
            cp.endpoint.badcookie++;
        }
    } else {
        oygEndpoint.noendpoint++;
    }
}

function oySign() {
    this.hexcase = 0;  // hex output format. 0 - lowercase / 1 - uppercase
    this.b64pad = ""; // base-64 pad char. "=" for strict RFC compliance
    this.chrsz = 8;  // bits per input char. 8 - ASCII / 16 - Unicode
    // Public methods..
    this.calculate = function (s) { return this.hex_md5(s); };
    this.test = function (s) { return this.md5_vm_test(); };
};
oySign.prototype.hex_md5 = function (s) { return this.binl2hex(this.core_md5(this.str2binl(s), s.length * this.chrsz)); }
oySign.prototype.b64_md5 = function (s) { return this.binl2b64(this.core_md5(this.str2binl(s), s.length * this.chrsz)); }
oySign.prototype.str_md5 = function (s) { return this.binl2str(this.core_md5(this.str2binl(s), s.length * this.chrsz)); }
oySign.prototype.hex_hmac_md5 = function (key, data) { return this.binl2hex(this.core_hmac_md5(key, data)); }
oySign.prototype.b64_hmac_md5 = function (key, data) { return this.binl2b64(this.core_hmac_md5(key, data)); }
oySign.prototype.str_hmac_md5 = function (key, data) { return this.binl2str(this.core_hmac_md5(key, data)); }
oySign.prototype.md5_vm_test = function () { return this.hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"; }
oySign.prototype.core_md5 = function (x, len) {
    x[len >> 5] |= 0x80 << ((len) % 32); x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193; var b = -271733879; var c = -1732584194; var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a; var oldb = b; var oldc = c; var oldd = d;
        a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = this.safe_add(a, olda); b = this.safe_add(b, oldb);
        c = this.safe_add(c, oldc); d = this.safe_add(d, oldd);
    } return new Array(a, b, c, d);
}
oySign.prototype.md5_cmn = function (q, a, b, x, s, t) { return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b); }
oySign.prototype.md5_ff = function (a, b, c, d, x, s, t) { return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t); }
oySign.prototype.md5_gg = function (a, b, c, d, x, s, t) { return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t); }
oySign.prototype.md5_hh = function (a, b, c, d, x, s, t) { return this.md5_cmn(b ^ c ^ d, a, b, x, s, t); }
oySign.prototype.md5_ii = function (a, b, c, d, x, s, t) { return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t); }
oySign.prototype.core_hmac_md5 = function (key, data) {
    var bkey = this.str2binl(key);
    if (bkey.length > 16) bkey = this.core_md5(bkey, key.length * this.chrsz);
    var ipad = new Array(16), opad = new Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636; opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
    var hash = this.core_md5(ipad.concat(this.str2binl(data)), 512 + data.length * this.chrsz);
    return this.core_md5(opad.concat(hash), 512 + 128);
}
oySign.prototype.safe_add = function (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF); var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
oySign.prototype.bit_rol = function (num, cnt) { return (num << cnt) | (num >>> (32 - cnt)); }
oySign.prototype.str2binl = function (str) {
    var bin = new Array(); var mask = (1 << this.chrsz) - 1;
    for (var i = 0; i < str.length * this.chrsz; i += this.chrsz) bin[i >> 5] |= (str.charCodeAt(i / this.chrsz) & mask) << (i % 32);
    return bin;
}
oySign.prototype.binl2str = function (bin) {
    var str = ""; var mask = (1 << this.chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += this.chrsz) str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
    return str;
}
oySign.prototype.binl2hex = function (binarray) {
    var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef"; var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
    } return str;
}
oySign.prototype.binl2b64 = function (binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32) str += this.b64pad;
            else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
        }
    } return str;
}

//
// Footer manager
//
function oyCrosswordFooter(puzz) {
    this.puzz = puzz;
}

oyCrosswordFooter.prototype.bind = function () {
    var oThis = this;
    this.clockTime = setInterval(
		function () {
		    oThis.clockUpdate();
		}, 1000
	);
}

oyCrosswordFooter.prototype.unbind = function () {
    clearInterval(this.clockTime);
    this.clockTime = null;
}

oyCrosswordFooter.prototype.stateOk = function (text) {
    var target = document.getElementById("oygState");
    target.innerHTML = "<b>&gt;</b> " + text + "&nbsp;";
    target.className = "ousStateOk";
}

oyCrosswordFooter.prototype.stateBusy = function (text) {
    var target = document.getElementById("oygState");
    target.innerHTML = "<b>&gt;</b> " + text + "&nbsp;";
    target.className = "ousStateBusy";
}

oyCrosswordFooter.prototype.stateError = function (text) {
    var target = document.getElementById("oygState");
    target.innerHTML = "<b>&gt;</b> " + text + "&nbsp;";
    target.className = "ousStateError";
}

oyCrosswordFooter.prototype.clockUpdate = function () {

    var pad = function (i) {
        if (i < 10)
        { i = "0" + i }
        return i
    }

    if (this.puzz.started) {
        var ms = new Date().getTime() - this.puzz.menu.startOn.getTime();

        var sec = Math.round(ms / 1000);
        var min = 0;
        if (sec >= 60) {
            min = Math.round(sec / 60);
            sec = sec % 60;
        }
        //document.getElementById("oygFooterClock").innerHTML = "&nbsp;Time: <b>" + pad(min) + "</b>:<b>" + pad(sec) +"</b>";
    }
}

oyCrosswordFooter.prototype.update = function () {
    var buf = "";

    if (!this.puzz.started) {
        buf += "Game has not yet started!";
    } else {
        buf += "Score: <b>" + this.puzz.menu.score + "</b> points";
        if (this.puzz.menu.rank != -1) {
            buf += " (rank <b>" + this.puzz.menu.rank + "</b>)";
        }
    }

    //document.getElementById("oygFooterStatus").innerHTML = buf;	
}


//
// This is cache for speeding up document.getElementById()
//

function oyGridElementCache(w, h, ns) {
    this.ns = ns;

    this.cache = new Array();
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            var key;
            key = this.ns + j + "_" + i;
            this.cache[key] = document.getElementById(key);
        }
    }
}

oyGridElementCache.prototype.getElement = function (x, y) {
    return this.cache[this.ns + x + "_" + y];
}


//
// Global functions
//

var ie4 = (document.all) ? true : false;
var ns4 = (document.layers) ? true : false;
var ns6 = (document.getElementById && !document.all) ? true : false;

function oyShowLayer(lay) {
    if (ie4) {
        document.all[lay].style.visibility = "visible";
        document.all[lay].style.display = "block";
    }
    if (ns4) {
        document.layers[lay].visibility = "show";
    }
    if (ns6) {
        document.getElementById([lay]).style.visibility = "visible";
        document.getElementById([lay]).style.display = "block";
    }
}

function oyHideLayer(lay) {
    if (ie4) {
        document.all[lay].style.visibility = "hidden";
        document.all[lay].style.display = "none";
    }
    if (ns4) {
        document.layers[lay].visibility = "hide";
    }
    if (ns6) {
        document.getElementById([lay]).style.visibility = "hidden";
        document.getElementById([lay]).style.display = "none";
    }
}


/**
* Sets a Cookie with the given name and value.
*
* name       Name of the cookie
* value      Value of the cookie
* [expires]  Expiration date of the cookie (default: end of current session)
* [path]     Path where the cookie is valid (default: path of calling document)
* [domain]   Domain where the cookie is valid
*              (default: domain of calling document)
* [secure]   Boolean value indicating if the cookie transmission requires a
*              secure transmission
*/
function oySetCookie(name, value, expires, path, domain, secure) {
    /*document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");*/
}

/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 */
function oyGetCookie(name) {
    /*var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin != 0)
        return null;
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));*/
}


/**
*	expires can be set to 1000*60*60*24*90 if you want the cookie expire in 90 days
*/
function oySetCookieForPeriod(name, value, expires, path, domain, secure) {
    /*var expdate = new Date ();
    expdate.setTime (expdate.getTime() + expires);
    oySetCookie(name, value, expdate, path, domain, secure)*/
}

function oyBrowserDetection() {
    this.agt = navigator.userAgent.toLowerCase();
    this.browser = '';
    this.version = 0;
    this.compleVersion = 0;
    this.isIE = false;
    this.isNetscape = false;
    this.isFirefox = false;
    this.isGood = false;
    this.sf = false;

    this.isWin = ((this.agt.indexOf("win") != -1) || (this.agt.indexOf("16bit") != -1));
    this.isMac = (this.agt.indexOf("mac") != -1);
    this.isLinux = (this.agt.indexOf("linux") != -1);
    if (navigator.userAgent.indexOf('MSIE') != -1 && navigator.userAgent.indexOf('AOL') == -1) {
        this.browser = 'IE'
        this.isIE = true;
        reg = /(MSIE)(.)(\d+)(.)(\d+)/i
        ar = reg.exec(navigator.userAgent)
        this.version = ar[3]
        this.compleVersion = ar[3] + ar[4] + ar[5]
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
        this.browser = 'Firefox'
        this.isFirefox = true;
        reg = /(Firefox)(.)(\d+)(.)(\d+)/i
        ar = reg.exec(navigator.userAgent)
        this.version = ar[3]
        this.compleVersion = ar[3] + ar[4] + ar[5]
    } else if (navigator.userAgent.indexOf('Netscape') != -1) {
        this.browser = 'Netscape'
        this.isNetscape = true;
        reg = /(Netscape)(.)(\d+)(.)(\d+)/i
        ar = reg.exec(navigator.userAgent)
        this.version = ar[3]
        this.compleVersion = ar[3] + ar[4] + ar[5]
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        this.sf = true;
    }

    if (
		(this.isIE && this.version >= 5) ||
		(this.isNetscape && this.version >= 6) ||
		(this.isFirefox && this.version >= 1)
	) {
        this.isGood = true;
    }
}

function oygBind(puzz) {
    /*var isSupported = new oyBrowserDetection().isGood;
    if (!isSupported) {
        var msg =
			"Your current browser is not ideal for accessing this site.\n" +
			"We support Microsoft IE 6.0+, Firefox 1.0+, Netscape6.0+ versions.\n\n" +
			"It might still work OK, do you want to try?";
        if (confirm(msg)) {
            isSupported = true;
        }
    }

    if (!isSupported) {
        oygError = "This browser is not supported.";
    } else {*/
        var div = document.getElementById("oygContext");
        if (div == null) {
            oygError = "Bad template file.";
        } else {
            var frame = document.getElementById("oygPuzzle");
            if (frame == null) {
                oygError = "Failed to load puzzle file.";
            } else {
                puzz.init();
                puzz.render();
                puzz.menu.installWelcomeMenu();
            }
        }
    //}
}

function oygNextRandomInt() {
    var rnd = "" + Math.random();
    var idx = rnd.indexOf(".");
    return rnd.substring(idx + 1);
}

//
// Let others know that we are done.
//
oygInit = true;
oygError = null;

var oygCrosswordPuzzle = new oyCrosswordPuzzle(
		  "p1",
		  "./oy-cword-1.0",
		  "/a/a",
		  "Surtido y Recomendar productos",
		  "Repasa los elementos m&aacute;s importantes.<br><span class='h4 importante'>NO utilices acentos</span>",
		  [
			 new oyCrosswordClue(9, 'De este tipo son los atributos que debemos destacar de nuestros productos', 'POSITIVOS', '', 0, 11, 0)
            , new oyCrosswordClue(8, 'Se utiliza, en lugar de levadura, para "impulsar" a la masa a hincharse', 'IMPULSOR', '', 0, 6, 3)
            , new oyCrosswordClue(6, 'Tipo de masa sometida a un proceso que provoca que incorpore aire para quedar esponjosa', 'BATIDO', '', 0, 0, 4)
            , new oyCrosswordClue(8, 'Otra manera más común de denominar la harina que no es refinada', 'INTEGRAL', '', 0, 2, 6)
            , new oyCrosswordClue(4, 'Lo que se queda retenido en forma de pequeñas burbujas en las masas sometidas a batido', 'AIRE', '', 0, 16, 6)
            , new oyCrosswordClue(9, 'Materia grasa utilizada como ingrediente habitual de las masas dulces', 'MARGARINA', '', 0, 7, 8)
            , new oyCrosswordClue(8, 'Aquellos productos dulces que no son de masa de hojaldre ni de batido', 'BOLLERIA', '', 0, 8, 10)
            , new oyCrosswordClue(11, 'Materia grasa derivada de la leche usada en lugar de la margarina', 'MANTEQUILLA', '', 0, 9, 12)
                                    , new oyCrosswordClue(5, 'Con la harina de este cereal se elaboran la mayoría de los panes', 'TRIGO', '', 0, 16, 14)
                                    , new oyCrosswordClue(9, 'Tipo de comparaciones que no se deben realizar con los productos', 'NEGATIVAS', '', 0, 7, 15)
                                    , new oyCrosswordClue(6, 'Productos que no son ni Salados ni Pan', 'DULCES', '', 0, 9, 20)
                                    , new oyCrosswordClue(5, 'Masa muy dulce, suave y compacta', 'SUCRE', '', 1, 13, 0)
                                    , new oyCrosswordClue(8, 'Producto con relleno salado pensado para compartir entre varias personas', 'EMPANADA', '', 1, 8, 1)
                                    , new oyCrosswordClue(7, 'Es la persona que queremos fidelizar para que vuelva', 'CLIENTE', '', 1, 3, 2)
                                    , new oyCrosswordClue(3, 'Grupo productos que habitualmente sirven para acompañar otras comidas', 'PAN', '', 1, 16, 5)
                                    , new oyCrosswordClue(8, 'Microorganismo responsable de la fermentación del pan', 'LEVADURA', '', 1, 19, 5)
                                    , new oyCrosswordClue(12, 'Proceso durante el cual la levadura provoca que la masa se hinche', 'FERMENTACION', '', 1, 12, 6)
                                    , new oyCrosswordClue(8, 'Tipo de masa muy crujiente consistente en varias capas superpuestas', 'HOJALDRE', '', 1, 17, 8)
                                    , new oyCrosswordClue(5, 'Es en lo que nos basamos para clasificar los productos de cara al cliente', 'SABOR', '', 1, 10, 14)
                                    , new oyCrosswordClue(7, 'Grupo de productos que incorporan relleno de sabor salado', 'SALADOS', '', 1, 14, 14)
                                    , new oyCrosswordClue(2, 'Palabra que debemos olvidar cuando nos encontremos en el punto de venta', 'NO', '', 1, 7, 15)

		  ],
		  21,
		  21
		);


// this is how to turn off server support; score submission and action tracking will be disabled
oygCrosswordPuzzle.canTalkToServer = false;
