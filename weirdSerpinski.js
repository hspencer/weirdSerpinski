/*

Weird Serpinski

*/


var num, numO1, num02, prop;
var maxPoints = 2000;
var Points = [];
var inputBox;
var inputBlock;  // declare the boolean that tracks the state of the input box

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('sketch');
	numO1 = document.getElementById('num-output-1');
	numO2 = document.getElementById('num-output-2');
	propO = document.getElementById('prop-output');
	inputBox = document.getElementById('toggle');
	cursor(CROSS);
	updateInput();
	inputBlock = false;
	background(255);
}

function draw() {
	if(Points.length >= num){
		for(let i = 0; i < 50; i++){
		var randomVertex = Math.floor(random(0, num));
		Points[randomVertex].draw();
		var lastX = Points[Points.length-1].x;
		var lastY = Points[Points.length-1].y;

		var newX = (lastX + Points[randomVertex].x*(num-2)) / (num-1);
		var newY = (lastY + Points[randomVertex].y*(num-2)) / (num-1);

		
			p = new Point(newX, newY);
			Points.push(p);
			p.draw();
		}

	}
}

function Point(xpos, ypos) {
	this.x = xpos;
	this.y = ypos;
	this.d = 1;
	this.c = color(0, 200);
	this.draw = function() {
		stroke(this.c);
		strokeWeight(this.d);
		point(this.x, this.y);
	}
}

function mouseClicked() {
	if (Points.length <= num && !inputBlock) {
		var p = new Point(mouseX, mouseY);
		p.d = 5;
		p.c = color(172,33,9);
		Points.push(p);
		p.draw();
	}
}

function updateInput(){
	background(255);
	inputBlock = true;
	Points = [];
	num = document.getElementById('n').value;
	numO1.innerHTML = num;
	numO2.innerHTML = num;
	prop = ""+(num-2)+"/"+(num-1);
	propO.innerHTML = prop;
}

function block(){inputBlock = true;}
function unblock(){inputBlock = false;}
