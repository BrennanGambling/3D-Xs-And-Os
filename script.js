//main canvas.
var my_canvas = document.getElementById("canvas");
//main context.
//This is where the three grids are drawn.
var context = my_canvas.getContext("2d");



//turnDisplay canvas.
var turnDisplayCanvas = document.getElementById("turnDisplay");
//turnDisplay context.
//This is where the current players turn is displayed.
var turnDisplayContext = turnDisplayCanvas.getContext("2d");
//This keeps track of the turn number.
//if the turn is divisible by 2 it will be Os turn. If not it is Xs turn.
var turnCounter = 0;
console.log("Turn counter initialized to 0.");


var winnerAnimationDisplayCanvas = document.getElementById("winnerAnimationDisplay");
//winnerAnimation context.
//This is where the winner animation is drawn.
var winnerAnimationDisplayContext = winnerAnimationDisplayCanvas.getContext("2d");



//xoCuberArray is where the data for the cube is stored and what player is in what spot.
var xoCubeArray = new Array();
function initXOCubeArray() {
	for (a = 0; a < 3; a++) {
		//add three arrays to the first array
		console.log("Adding new Array. Second level.");
		xoCubeArray[a] = new Array();
		for (b = 0; b < 3; b++) {
			//add three array to each of the last three arrays
			console.log("Adding new Array. Third level.");
			xoCubeArray[a][b] = new Array();
			for (c = 0; c < 3; c++) {
				console.log("Set xoCubeArray[" + a +"][" + b + "][" + c + "] to 0.");
				//set all 27 positions in the cuber to 0.
				//0 = no player in position. X in the position equals 1. O in the position equals 2.
				xoCubeArray[a][b][c] = 0;
			}
		}
	}
	console.log("Done initializing xoCubeArray.");
}
initXOCubeArray();

//This function sets the a position in the cube array to the current players value (X=1, O=2).
function xoCubeArraySetter(a, b, c) {
	if (turnCounter % 2 === 0) {
		console.log("Set xoCubeArray[" + a + "][" + b + "][" + c + "] to 2.");
		xoCubeArray[a][b][c] = 2;
	} else {
		console.log("Set xoCubeArray[" + a + "][" + b + "][" + c + "] to 1.");
		xoCubeArray[a][b][c] = 1;
	}
}





//Top (Left) layer canvases for click detection
var ttlCanvas = document.getElementById("ttlCanvas");
var ttlContext = ttlCanvas.getContext("2d");
var ttmCanvas = document.getElementById("ttmCanvas");
var ttmContext = ttmCanvas.getContext("2d");
var ttrCanvas = document.getElementById("ttrCanvas");
var ttrContext = ttrCanvas.getContext("2d");

var tmlCanvas = document.getElementById("tmlCanvas");
var tmlContext = tmlCanvas.getContext("2d");
var tmmCanvas = document.getElementById("tmmCanvas");
var tmmContext = tmmCanvas.getContext("2d");
var tmrCanvas = document.getElementById("tmrCanvas");
var tmrContext = tmrCanvas.getContext("2d");

var tblCanvas = document.getElementById("tblCanvas");
var tblContext = tblCanvas.getContext("2d");
var tbmCanvas = document.getElementById("tbmCanvas");
var tbmContext = tbmCanvas.getContext("2d");
var tbrCanvas = document.getElementById("tbrCanvas");
var tbrContext = tbrCanvas.getContext("2d");



//Middle (Middle) layer canvases for click detection
var mtlCanvas = document.getElementById("mtlCanvas");
var mtlContext = mtlCanvas.getContext("2d");
var mtmCanvas = document.getElementById("mtmCanvas");
var mtmContext = mtmCanvas.getContext("2d");
var mtrCanvas = document.getElementById("mtrCanvas");
var mtrContext = mtrCanvas.getContext("2d");

var mmlCanvas = document.getElementById("mmlCanvas");
var mmlContext = mmlCanvas.getContext("2d");
var mmmCanvas = document.getElementById("mmmCanvas");
var mmmContext = mmmCanvas.getContext("2d");
var mmrCanvas = document.getElementById("mmrCanvas");
var mmrContext = mmrCanvas.getContext("2d");

var mblCanvas = document.getElementById("mblCanvas");
var mblContext = mblCanvas.getContext("2d");
var mbmCanvas = document.getElementById("mbmCanvas");
var mbmContext = mbmCanvas.getContext("2d");
var mbrCanvas = document.getElementById("mbrCanvas");
var mbrContext = mbrCanvas.getContext("2d");



//Bottom (Right) layer canvases for click detection
var btlCanvas = document.getElementById("btlCanvas");
var btlContext = btlCanvas.getContext("2d");
var btmCanvas = document.getElementById("btmCanvas");
var btmContext = btmCanvas.getContext("2d");
var btrCanvas = document.getElementById("btrCanvas");
var btrContext = btrCanvas.getContext("2d");

var bmlCanvas = document.getElementById("bmlCanvas");
var bmlContext = bmlCanvas.getContext("2d");
var bmmCanvas = document.getElementById("bmmCanvas");
var bmmContext = bmmCanvas.getContext("2d");
var bmrCanvas = document.getElementById("bmrCanvas");
var bmrContext = bmrCanvas.getContext("2d");

var bblCanvas = document.getElementById("bblCanvas");
var bblContext = bblCanvas.getContext("2d");
var bbmCanvas = document.getElementById("bbmCanvas");
var bbmContext = bbmCanvas.getContext("2d");
var bbrCanvas = document.getElementById("bbrCanvas");
var bbrContext = bbrCanvas.getContext("2d");


function drawSquares() {
	function drawLine(xStart, yStart, xEnd, yEnd) {
		console.log("Drawing line from (" + xStart + ", " + yStart + ") to (" + xEnd + ", " + yEnd + ").");
		context.beginPath();
		context.moveTo(xStart,yStart);
		context.lineWidth = 3;
		context.lineTo(xEnd, yEnd);
		context.stroke();
	}
	function topSquare() {
		console.log("Drawing top (left) square.");
		drawLine(0, 263, 399, 263);
		drawLine(0, 396, 399, 396);
		drawLine(133, 130, 133, 529);
		drawLine(266, 130, 266, 529);
	}	
	function middleSquare() {
		console.log("Drawing middle (middle) square.")
		drawLine(440, 263, 839, 263);
		drawLine(440, 396, 839, 396);
		drawLine(573, 130, 573, 529);
		drawLine(706, 130, 706, 529);
	}
	function bottomSquare() {
		console.log("Drawing bottom (right) square.");
		drawLine(880, 263, 1279, 263);
		drawLine(880, 396, 1279, 396);
		drawLine(1013, 130, 1013, 529);
		drawLine(1146, 130, 1146, 529);
	}
	topSquare();
	middleSquare();
	bottomSquare();
}
drawSquares();


//This message helps explain the game to the user before they play. It will only be displayed once when page is loade. Unless page is refresed it will not be displayed again.
alert("This is 3D X's and O's. Each 2D X's and O's board represent a layer of the 3D X's and O's cube with the left most being the top and the right most being the bottom. To best play the game think of the cube as 2D X's and O's from the top of the cube, the front of the cube, and the side of the cube.");



function clickableSquares() {
	//create event listerners for all of the 27 click detection boxes.
	//each event listener creation plus its function are grouped in blocks. 
	//almost all of these are identical except for a different context and position in the array, therefore only the first one will be commented.
	function topClickableSquares() {
		ttlCanvas.addEventListener("click", ttlClick, false);
		function ttlClick() {
			console.log("ttlCanvas has been clicked. Click event triggered.");
			//check to make sure the square clicked on isn't already taken.
			//it will be set to 0 if it isn't taken.
			if (xoCubeArray[0][0][0] === 0) {
				//if it is not taken.
				console.log("ttlCanvas events started (square is not taken).");
				//draw the appropriate player (based on whos turn it is).
				drawPlayer(ttlContext);
				//switch to the other players turn.
				xORoTurn();
				//set the array position for this box to the appropriate player (based on whos turn it is).
				xoCubeArraySetter(0, 0, 0);
				//check to see if anyone has one.
				winCheck();
			} else {
				//if it is write message to console.
				console.log("ttlCanvas has already been set to: " + xoCubeArray[0][0][0] + "(1 = X, 2 = O)");
			}
		}
		
		ttmCanvas.addEventListener("click", ttmClick, false);
		function ttmClick() {
			console.log("ttmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][0][1] === 0) {
				console.log("ttmCanvas events started (square is not taken).");
				drawPlayer(ttmContext);
				xORoTurn();
				xoCubeArraySetter(0, 0, 1);
				winCheck();
			} else {
				console.log("ttmCanvas has already been set to: " + xoCubeArray[0][0][1] + "(1 = X, 2 = O)");
			}
		}
		
		ttrCanvas.addEventListener("click", ttrClick, false);
		function ttrClick() {
			console.log("ttrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][0][2] === 0) {
				console.log("ttrCanvas events started (square is not taken).");
				drawPlayer(ttrContext);
				xORoTurn();
				xoCubeArraySetter(0, 0, 2);
				winCheck();
			} else {
				console.log("ttrCanvas has already been set to: " + xoCubeArray[0][0][2] + "(1 = X, 2 = O)");
			}
		}




		tmlCanvas.addEventListener("click", tmlClick, false);
		function tmlClick() {
			console.log("tmlCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][1][0] === 0) {
				console.log("tmlCanvas events started (square is not taken).");
				drawPlayer(tmlContext);
				xORoTurn();
				xoCubeArraySetter(0, 1, 0);
				winCheck();
			} else {
				console.log("tmlCanvas has already been set to: " + xoCubeArray[0][1][0] + "(1 = X, 2 = O)");
			}
		}
		
		tmmCanvas.addEventListener("click", tmmClick, false);
		function tmmClick() {
			console.log("tmmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][1][1] === 0) {
				console.log("tmmCanvas events started (square is not taken).");
				drawPlayer(tmmContext);
				xORoTurn();
				xoCubeArraySetter(0, 1, 1);
				winCheck();
			} else {
				console.log("tmmCanvas has already been set to: " + xoCubeArray[0][1][1] + "(1 = X, 2 = O)");
			}
		}
		
		tmrCanvas.addEventListener("click", tmrClick, false);
		function tmrClick() {
			console.log("tmrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][1][2] === 0) {
				console.log("tmrCanvas events started (square is not taken).");
				drawPlayer(tmrContext);
				xORoTurn();
				xoCubeArraySetter(0, 1, 2);
				winCheck();
			} else {
				console.log("tmrCanvas has already been set to: " + xoCubeArray[0][1][2] + "(1 = X, 2 = O)");
			}
		}




		tblCanvas.addEventListener("click", tblClick, false);
		function tblClick() {
			console.log("tblCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][2][0] === 0) {
				console.log("tblCanvas events started (square is not taken).");
				drawPlayer(tblContext);
				xORoTurn();
				xoCubeArraySetter(0, 2, 0);
				winCheck();
			} else {
				console.log("tblCanvas has already been set to: " + xoCubeArray[0][2][0] + "(1 = X, 2 = O)");
			}
		}
		
		tbmCanvas.addEventListener("click", tbmClick, false);
		function tbmClick() {
			console.log("tbmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][2][1] === 0) {
				console.log("tbmCanvas events started (square is not taken).");
				drawPlayer(tbmContext);
				xORoTurn();
				xoCubeArraySetter(0, 2, 1);
				winCheck();
			} else {
				console.log("tbmCanvas has already been set to: " + xoCubeArray[0][2][1] + "(1 = X, 2 = O)");
			}
		}
		
		tbrCanvas.addEventListener("click", tbrClick, false);
		function tbrClick() {
			console.log("tbrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[0][2][2] === 0) {
				console.log("tbrCanvas events started (square is not taken).");
				drawPlayer(tbrContext);
				xORoTurn();
				xoCubeArraySetter(0, 2, 2);
				winCheck();
			} else {
				console.log("tbrCanvas has already been set to: " + xoCubeArray[0][2][2] + "(1 = X, 2 = O)");
			}
		}
		console.log("Added event listeners for the top (left) square.");
	}
	topClickableSquares();

	function middleClickableSquares() {
		mtlCanvas.addEventListener("click", mtlClick, false);
		function mtlClick() {
			console.log("mtlCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][0][0] === 0) {
				console.log("mtlCanvas events started (square is not taken).");
				drawPlayer(mtlContext);
				xORoTurn();
				xoCubeArraySetter(1, 0, 0);
				winCheck();
			} else {
				console.log("mtlCanvas has already been set to: " + xoCubeArray[1][0][0] + " (1 = X, 2 = O).");
			}
		}

		mtmCanvas.addEventListener("click", mtmClick, false);
		function mtmClick() {
			console.log("mtmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][0][1] === 0) {
				console.log("mtmCanvas events started (square is not taken).");
				drawPlayer(mtmContext);
				xORoTurn();
				xoCubeArraySetter(1, 0, 1);
				winCheck();
			} else {
				console.log("mtmCanvas has already been set to: " + xoCubeArray[1][0][1] + " (1 = X, 2 = O).");
			}
		}

		mtrCanvas.addEventListener("click", mtrClick, false);
		function mtrClick() {
			console.log("mtrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][0][2] === 0) {
				console.log("mtrCanvas events started (square is not taken).");
				drawPlayer(mtrContext);
				xORoTurn();
				xoCubeArraySetter(1, 0, 2);
				winCheck();
			} else {
				console.log("mtrCanvas has already been set to: " + xoCubeArray[1][0][2] + " (1 = X, 2 = O).");
			}
		}



		mmlCanvas.addEventListener("click", mmlClick, false);
		function mmlClick() {
			console.log("mmlCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][1][0] === 0) {
				console.log("mmlCanvas events started (square is not taken).");
				drawPlayer(mmlContext);
				xORoTurn();
				xoCubeArraySetter(1, 1, 0);
				winCheck();
			} else {
				console.log("mmlCanvas has already been set to: " + xoCubeArray[1][1][0] + " (1 = X, 2 = O).");
			}
		}

		mmmCanvas.addEventListener("click", mmmClick, false);
		function mmmClick() {
			console.log("mmmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][1][1] === 0) {
				console.log("mmmCanvas events started (square is not taken).");
				drawPlayer(mmmContext);
				xORoTurn();
				xoCubeArraySetter(1, 1, 1);
				winCheck();
			} else {
				console.log("mmmCanvas has already been set to: " + xoCubeArray[1][1][1] + " (1 = X, 2 = O).");
			}
		}

		mmrCanvas.addEventListener("click", mmrClick, false);
		function mmrClick() {
			console.log("mmrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][1][2] === 0) {
				console.log("mmrCanvas events started (square is not taken).");
				drawPlayer(mmrContext);
				xORoTurn();
				xoCubeArraySetter(1, 1, 2);
				winCheck();
			} else {
				console.log("mmrCanvas has already been set to: " + xoCubeArray[1][1][2] + " (1 = X, 2 = O).");
			}
		}




		mblCanvas.addEventListener("click", mblClick, false);
		function mblClick() {
			console.log("mblCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][2][0] === 0) {
				console.log("mblCanvas events started (square is not taken).");
				drawPlayer(mblContext);
				xORoTurn();
				xoCubeArraySetter(1, 2, 0);
				winCheck();
			} else {
				console.log("mblCanvas has already been set to: " + xoCubeArray[1][2][0] + " (1 = X, 2 = O).");
			}
		}

		mbmCanvas.addEventListener("click", mbmClick, false);
		function mbmClick() {
			console.log("mbmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][2][1] === 0) {
				console.log("mbmCanvas events started (square is not taken).");
				drawPlayer(mbmContext);
				xORoTurn();
				xoCubeArraySetter(1, 2, 1);
				winCheck();
			} else {
				console.log("mbmCanvas has already been set to: " + xoCubeArray[1][2][1] + " (1 = X, 2 = O).");
			}
		}

		mbrCanvas.addEventListener("click", mbrClick, false);
		function mbrClick() {
			console.log("mbrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[1][2][2] === 0) {
				console.log("mbrCanvas events started (square is not taken).");
				drawPlayer(mbrContext);
				xORoTurn();
				xoCubeArraySetter(1, 2, 2);
				winCheck();
			} else {
				console.log("mbrCanvas has already been set to: " + xoCubeArray[1][2][2] + " (1 = X, 2 = O).");
			}
		}
		console.log("Added event listeners for the middle (middle) square.");
	}
	middleClickableSquares();

	function bottomClickableSquares() {

		btlCanvas.addEventListener("click", btlClick, false);
		function btlClick() {
			console.log("btlCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][0][0] === 0) {
				console.log("btlCanvas events started (square is not taken).");
				drawPlayer(btlContext);
				xORoTurn();
				xoCubeArraySetter(2, 0, 0);
				winCheck();
			} else {
				console.log("btlCanvas has already been set to: " + xoCubeArray[2][0][0] + " (1 = X, 2 = O).");
			}
		}

		btmCanvas.addEventListener("click", btmClick, false);
		function btmClick() {
			console.log("btlmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][0][1] === 0) {
				console.log("btmCanvas events started (square is not taken).");
				drawPlayer(btmContext);
				xORoTurn();
				xoCubeArraySetter(2, 0, 1);
				winCheck();
			} else {
				console.log("btlmCanva has already been set to: " + xoCubeArray[2][0][1] + " (1 = X, 2 = O).");
			}
		}

		btrCanvas.addEventListener("click", btrClick, false);
		function btrClick() {
			console.log("btrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][0][2] === 0) {
				console.log("btrCanvas events started (square is not taken).");
				drawPlayer(btrContext);
				xORoTurn();
				xoCubeArraySetter(2, 0, 2);
				winCheck();
			} else {
				console.log("btrCanvas has already been set to: " + xoCubeArray[2][0][2] + " (1 = X, 2 = O).");
			}
		}



		bmlCanvas.addEventListener("click", bmlClick, false);
		function bmlClick() {
			console.log("bmlCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][1][0] === 0) {
				console.log("bmlCanvas events started (square is not taken).");
				drawPlayer(bmlContext);
				xORoTurn();
				xoCubeArraySetter(2, 1, 0);
				winCheck();
			} else {
				console.log("bmlCanvas has already been set to: " + xoCubeArray[2][1][0] + " (1 = X, 2 = O).");
			}
		}

		bmmCanvas.addEventListener("click", bmmClick, false);
		function bmmClick() {
			console.log("bmmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][1][1] === 0) {
				console.log("bmmCanvas events started (square is not taken).");
				drawPlayer(bmmContext);
				xORoTurn();
				xoCubeArraySetter(2, 1, 1);
				winCheck();
			} else {
				console.log("bmmCanvas has already been set to: " + xoCubeArray[2][1][1] + " (1 = X, 2 = O).");
			}
		}
		bmrCanvas.addEventListener("click", bmrClick, false);
		function bmrClick() {
			console.log("bmrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][1][2] === 0) {
				console.log("bmrCanvas events started (square is not taken).");
				drawPlayer(bmrContext);
				xORoTurn();
				xoCubeArraySetter(2, 1, 2);
				winCheck();
			} else {
				console.log("bmrCanvas has already been set to: " + xoCubeArray[2][1][2] + " (1 = X, 2 = O).");
			}
		}



		bblCanvas.addEventListener("click", bblClick, false);
		function bblClick() {
			console.log("bblCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][2][0] === 0) {
				console.log("bblCanvas events started (square is not taken).");
				drawPlayer(bblContext);
				xORoTurn();
				xoCubeArraySetter(2, 2, 0);
				winCheck();
			} else {
				console.log("bblCanvas has already been set to: " + xoCubeArray[2][2][0] + " (1 = X, 2 = O).");
			}
		}

		bbmCanvas.addEventListener("click", bbmClick, false);
		function bbmClick() {
			console.log("bbmCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][2][1] === 0) {
				console.log("bbmCanvas events started (square is not taken).");
				drawPlayer(bbmContext);
				xORoTurn();
				xoCubeArraySetter(2, 2, 1);
				winCheck();
			} else {
				console.log("bbmCanvas has already been set to: " + xoCubeArray[2][2][1] + " (1 = X, 2 = O).");
			}
		}

		bbrCanvas.addEventListener("click", bbrClick, false);
		function bbrClick() {
			console.log("bbrCanvas has been clicked. Click event triggered.");
			if (xoCubeArray[2][2][2] === 0) {
				console.log("bbrCanvas events started (square is not taken).");
				drawPlayer(bbrContext);
				xORoTurn();
				xoCubeArraySetter(2, 2, 2);
				winCheck();
			} else {
				console.log("bbrCanvas has already been set to: " + xoCubeArray[2][2][2] + " (1 = X, 2 = O).");
			}
		}
		console.log("Added event listeners for the bottom (right) square.");
	}
	bottomClickableSquares();
}
clickableSquares();



function winCheck() {
	console.log("Win checker started.");
	
	console.log("Top checks started.");
	console.log("Top vertical check started.");
	//check all possible vertical lines (from the top prespective).
	for (var a = 0; a < 3; a++) {
		for (var b = 0; b < 3; b++) {
			//if all three position in the current vertical line are the same and one of them is not equal to 0, then a player won.
			if((xoCubeArray[a][0][b] !== 0) && (xoCubeArray[a][0][b] === xoCubeArray[a][1][b]) && (xoCubeArray[a][1][b] === xoCubeArray[a][2][b])) {
				console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
				winEvent();
				return;
			}
		}
	}
	console.log("Top horizontal check started.");
	//check all possible horizontal lines (from the top prespective).
	for (var a = 0; a < 3; a++) {
		for (var b = 0; b < 3; b++) {
			//if all three position in the current horizontal line are the same and one of them is not equal to 0, then a player won.
			if((xoCubeArray[a][b][0] !== 0) && (xoCubeArray[a][b][0] === xoCubeArray[a][b][1]) && (xoCubeArray[a][b][1] === xoCubeArray[a][b][2])) {
				console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
				winEvent();
				return;
			}
		}
	}
	console.log("Top diagonal (top left to bottom right) check started.");
	//check the three possible diagonal (top left to bottom right) lines (from the top prespective).
	for (var a = 0; a < 3; a++) {
		//if all three position in the current diagonal line are the same and one is not equal to 0, then a player won.
		if((xoCubeArray[a][0][0] !== 0) && (xoCubeArray[a][0][0] === xoCubeArray[a][1][1]) && (xoCubeArray[a][1][1] === xoCubeArray[a][2][2])) {
			console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
			winEvent();
			return;
		}
	}
	console.log("Top diagonal (bottom left to top right) check started.");
	//check the three possible diagonal (bottom left to top right) lines (from the top prespective).
	for (var a = 0; a < 3; a++) {
		//if all three position in the current diagonal line are the same and one is not equal to 0, than a player won.
		if((xoCubeArray[a][2][0] !== 0) && (xoCubeArray[a][2][0] === xoCubeArray[a][1][1]) && (xoCubeArray[a][1][1] === xoCubeArray[a][0][2])) {
			console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
			winEvent();
			return;
		}
	}



	console.log("Front checks started.");
	//check all nine possible vertical lines (from the front prespective).
	console.log("Front vertical check started.");
	for (var a = 0; a < 3; a++) {
		for (var b = 0; b < 3; b++) {
			//if all of the positions in the current vertical line are the same and one is not equal to zero, then a player won.
			if((xoCubeArray[0][a][b] !== 0) && (xoCubeArray[0][a][b] === xoCubeArray[1][a][b]) && (xoCubeArray[1][a][b] === xoCubeArray[2][a][b])) {
				console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
				winEvent();
				return;
			}
		}
	}
	console.log("Front horizontal check started.");
	//check all nine possible horizontal lines (from the front prespective).
	//redundant (same as top horizontal check).
	for (var a = 0; a < 3; a++) {
		for (var b = 0; b < 3; b++) {
			//if all of the positions in the current horizontal line are the same and one is not equal to zero, then a player won.
			if((xoCubeArray[a][b][0] !== 0) && (xoCubeArray[a][b][0] === xoCubeArray[a][b][1]) && (xoCubeArray[a][b][1] === xoCubeArray[a][b][2])) {
				console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
				winEvent();
				return;
			}
		}
	}
	console.log("Front diagonal (top left to bottom right) check started.");
	//check all of the three possible diagonal (top left to bottom right) lines (from the front prespective).
	for (var a = 0; a < 3; a++) {
		//if all of the positions in the current diagonal line are the same and one is not equal to zero, then a player won.
		if((xoCubeArray[0][a][0] !== 0) && (xoCubeArray[0][a][0] === xoCubeArray[1][a][1]) && (xoCubeArray[1][a][1] === xoCubeArray[2][a][2])) {
			console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
			winEvent();
			return;
		}
	}
	console.log("Front diagonal (bottom left to top right) check started.");
	//check all of the three possible diagonal (bottom left to top right) lines (from the front prespective).
	for (var a = 0; a < 3; a++) {
		//if all of the positions in the current diagonal line are the same and one is not equal to zero, then a player won.
		if((xoCubeArray[2][a][0] !== 0) && (xoCubeArray[2][a][0] === xoCubeArray[1][a][1]) && (xoCubeArray[1][a][1] === xoCubeArray[0][a][2])) {
			console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
			winEvent();
			return;
		}
	}



	console.log("Side checks started.");
	console.log("Side vertical check started.");
	//check all nine of the possible vertical lines (from the side prespective).
	//redundant (same as front vertical).
	for (var a = 0; a < 3; a++) {
		for (var b = 0; b < 3; b++) {
			//if all of the positions in the current vertical line are the same and one is not equal to zero, then a player won.
			if((xoCubeArray[0][a][b] !== 0) && (xoCubeArray[0][a][b] === xoCubeArray[1][a][b]) && (xoCubeArray[1][a][b] === xoCubeArray[2][a][b])) {
				console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
				winEvent();
				return;
			}
		}
	}
	console.log("Side horizontal check started.");
	//check all nine of the possible horizontal lines (from the side prespective).
	//redundant (same as top vertical check.)
	for (var a = 0; a < 3; a++) {
		for (var b = 0; b < 3; b++) {
			//if all of the positions in the current horizontal line are the same and one is not equal to zero, then a player won.
			if((xoCubeArray[a][0][b] !== 0) && (xoCubeArray[a][0][b] === xoCubeArray[a][1][b]) && (xoCubeArray[a][1][b] === xoCubeArray[a][2][b])) {
				console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
				winEvent();
				return;
			}
		}
	}
	console.log("Side diagonal (top left to bottom right) check started.");
	//check all three possible diagonal (top left to bottom right) lines (from the side prespective).
	for (var a = 0; a < 3; a++) {
		//if all of the positions in the current diagonal line are the same and one is not equal to zero, then a player won.
		if((xoCubeArray[0][2][a] !== 0) && (xoCubeArray[0][2][a] === xoCubeArray[1][1][a]) && (xoCubeArray[1][1][a] === xoCubeArray[2][0][a])) {
			console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
			winEvent();
			return;
		}
	}
	console.log("Side diagonal (bottom left to top right) check started.");
	//check all three possible diagonal (bottom right to top left) lines (from the side prespective).
	for (var a = 0; a < 3; a++) {
		//if all of the positions in the current diagonal line are the same and one is not equal to zerom then a player won.
		if((xoCubeArray[0][0][a] !== 0) && (xoCubeArray[0][0][a] === xoCubeArray[1][1][a]) && (xoCubeArray[1][1][a] === xoCubeArray[2][2][a])) {
			console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
			winEvent();
			return;
		}
	}



	console.log("Through cube diagonal check.")
	//There are four possible through cube diagonal lines (from top corner to bottom corner).
	if((xoCubeArray[0][0][0] !== 0) && (xoCubeArray[0][0][0] === xoCubeArray[1][1][1]) && (xoCubeArray[1][1][1] === xoCubeArray[2][2][2])) {
		console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
		winEvent();
		return;
	}
	if((xoCubeArray[0][0][2] !== 0) && (xoCubeArray[0][0][2] === xoCubeArray[1][1][1]) && (xoCubeArray[1][1][1] === xoCubeArray[2][2][0])) {
		console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
		winEvent();
		return;
	}
	if((xoCubeArray[0][2][0] !== 0) && (xoCubeArray[0][2][0] === xoCubeArray[1][1][1]) && (xoCubeArray[1][1][1] === xoCubeArray[2][0][2])) {
		console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
		winEvent();
		return;
	}
	if((xoCubeArray[0][2][2] !== 0) && (xoCubeArray[0][2][2] === xoCubeArray[1][1][1]) && (xoCubeArray[1][1][1] === xoCubeArray[2][0][0])) {
		console.log("A player won! Starting winEvent. Stopping execution of winCheck.");
		winEvent();
		return;
	}
}

function winEvent() {
	//x and o had to be reversed due to addition when game is won (when turns are changed).
	if (turnCounter % 2 === 0) {
		console.log("X wins!");
		winner = "X";
		winAnimation();
	} else {
		console.log("O wins!");
		winner = "O";
		winAnimation();
	}
	//reset the clickable canvases.
	resetClickableCanvas();
	//reset turn counters and turn display.
	xORoTurnINIT();
	//reset all cube positions to zero,
	initXOCubeArray();
}


//the winner (as a string).
var winner;
//how many times the animation has run.
var runCounter = 0;
/*This block of code (the following two functions will draw a animation of the "[player] wins!" when a player wins. It will run 1300 times each time the canvas is erased and the words are moved over one pixel.
*/
function clearAnimationDisplay() {
	//clear canvas.
	winnerAnimationDisplayContext.clearRect(0, 0, 1278, 50);
	//write text.
	winnerAnimationDisplayContext.beginPath();
	winnerAnimationDisplayContext.font = "20px Arial";
	winnerAnimationDisplayContext.fillText(winner + " wins!", runCounter, 20);
	winnerAnimationDisplayContext.stroke();
	winAnimation();
}
function winAnimation() {
	console.log(runCounter);
	//add one to the run counter
	runCounter++;
	//if the run counter is less than 1300 continue the animation
	if (runCounter < 1300) {
		//set text every 5ms. This funcion (winAnimation) will be called again by the clearAnimationDisplay function.
		//there will therefor be a 5ms delay inbetween each time the text is moved.
		setTimeout(clearAnimationDisplay, 5);
	} else {
		//if the animation is complete display an alert message telling the users who won.
		alert(winner + " wins!");
		runCounter = 0;
	}
}



function drawPlayer(xContext) {
	//draw the appropriate player (based on who turn it is).
	console.log("Draw player (either x or o) function triggered.");
	if (turnCounter % 2 === 0) {
		//draw an O in the given context.
		drawO(xContext);
	} else {
		//draw an X in the given context.
		drawX(xContext);
	}
}

function drawX(xContext) {
	//draw X in the given context
	//draw first line.
	xContext.beginPath();
	xContext.moveTo(0, 0);
	xContext.lineWidth = 3;
	xContext.lineTo(130, 130);
	xContext.stroke();

	//draw second line.
	xContext.beginPath();
	xContext.moveTo(130, 0);
	xContext.lineWidth = 3;
	xContext.lineTo(0, 130);
	xContext.stroke();
	console.log("Drawing X.");
}

function drawO(oContext) {
	//draw O in the given context
	//create arc
	oContext.beginPath();
	oContext.lineWidth = 3;
	oContext.arc(65, 65, 63, 0, 2*Math.PI);
	oContext.stroke();
	console.log("Drawing O.");
} 

/*function clearCanvas(clearContext) {
	//clear the entire canvas.
	//only for click decetion canvases (due to size).
	clearContext.clearRect(0, 0, 130, 130);
	console.log("Clearing canvas.");
}*/



function resetClickableCanvas() {
	//reset all of the clickable canvases
	ttlContext.clearRect(0, 0, 130, 130);
	ttmContext.clearRect(0, 0, 130, 130);
	ttrContext.clearRect(0, 0, 130, 130);
	tmlContext.clearRect(0, 0, 130, 130);
	tmmContext.clearRect(0, 0, 130, 130);
	tmrContext.clearRect(0, 0, 130, 130);
	tblContext.clearRect(0, 0, 130, 130);
	tbmContext.clearRect(0, 0, 130, 130);
	tbrContext.clearRect(0, 0, 130, 130);
	mtlContext.clearRect(0, 0, 130, 130);
	mtmContext.clearRect(0, 0, 130, 130);
	mtrContext.clearRect(0, 0, 130, 130);
	mmlContext.clearRect(0, 0, 130, 130);
	mmmContext.clearRect(0, 0, 130, 130);
	mmrContext.clearRect(0, 0, 130, 130);
	mblContext.clearRect(0, 0, 130, 130);
	mbmContext.clearRect(0, 0, 130, 130);
	mbrContext.clearRect(0, 0, 130, 130);
	btlContext.clearRect(0, 0, 130, 130);
	btmContext.clearRect(0, 0, 130, 130);
	btrContext.clearRect(0, 0, 130, 130);
	bmlContext.clearRect(0, 0, 130, 130);
	bmmContext.clearRect(0, 0, 130, 130);
	bmrContext.clearRect(0, 0, 130, 130);
	bblContext.clearRect(0, 0, 130, 130);
	bbmContext.clearRect(0, 0, 130, 130);
	bbrContext.clearRect(0, 0, 130, 130);
	console.log("Cleared all click detection canvases.");
}



function xORoTurnINIT() {
	console.log("Turn counter and determiner triggered (initialization).");
	//initialize turn counter.
	turnCounter = 1;
	console.log("Added one to turn counter. Turn counter is at: " + turnCounter);
	//clear the turnDisplay canvas.
	turnDisplayContext.clearRect(0, 0, 200, 50);
	if (turnCounter % 2 === 0) {
		//if it is Os turn write the message "It is Os turn" in the turnDisplay canvas (top left corner).
		console.log("It is Os turn.");
		turnDisplayContext.beginPath();
		turnDisplayContext.font = "20px Arial";
		turnDisplayContext.fillText("It is Os turn", 20, 30);
		turnDisplayContext.stroke();
	} else {
		//if it is Xs turn write the message "It is Xs turn" in the turnDisplay canvas (top left corner).
		console.log("It is Xs turn.");
		turnDisplayContext.beginPath();
		turnDisplayContext.font = "20px Arial";
		turnDisplayContext.fillText("It is Xs turn", 20, 30);
		turnDisplayContext.stroke();
	}
}
xORoTurnINIT();

function xORoTurn() {
	console.log("Turn counter and determiner triggered.");
	//add one to the turn counter.
	//this will make it the next persons turn.
	turnCounter++;
	console.log("Added one to turn counter. Turn counter is at: " + turnCounter);
	//clear the turnDisplat canvas.
	turnDisplayContext.clearRect(0, 0, 200, 50);
	if (turnCounter % 2 === 0) {
		//if it is Os turn write the message "It is Os turn" in the turnDisplay canvas (top left corner).
		console.log("It is Os turn.");
		turnDisplayContext.beginPath();
		turnDisplayContext.font = "20px Arial";
		turnDisplayContext.fillText("It is Os turn", 20, 30);
		turnDisplayContext.stroke();
	} else {
		//if it is Xs turn write the message "It is Xs turn" in the turnDisplay canvas (top left corner).
		console.log("It is Xs turn.");
		turnDisplayContext.beginPath();
		turnDisplayContext.font = "20px Arial";
		turnDisplayContext.fillText("It is Xs turn", 20, 30);
		turnDisplayContext.stroke();
	}
}
