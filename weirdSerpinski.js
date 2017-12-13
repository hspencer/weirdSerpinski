var num, numO1, num02, prop;
var maxPoints = 2000;
var Points = [];
var inputBox;
var inputClicked = false; // declare the variable that tracks the state




function setup() {
  var myCanvas = createCanvas(screen.width, screen.height);
  myCanvas.parent('sketch');
  numO1 = document.getElementById('num-output-1');
  numO2 = document.getElementById('num-output-2');
  propO = document.getElementById('prop-output');
  inputBox = document.getElementById('toggle');

  updateInput();
}

function draw() {
  background(255);
  if(Points.length < num){
    for (var i = 0; i < Points.length; i++) {
      Points[i].draw();
    }
  }else if(/*Points.length <= maxPoints && */ Points.length >= num){
    for (var i = num; i < Points.length; i++) {
      Points[i].draw();
    }
    var randomVertex = Math.floor(random(0, num));
    Points[randomVertex].draw();
    var lastX = Points[Points.length-1].x;
    var lastY = Points[Points.length-1].y;
    var newX = (lastX + Points[randomVertex].x*(num-2)) / (num-1);
    var newY = (lastY + Points[randomVertex].y*(num-2)) / (num-1);
    p = new Point(newX, newY);
    Points.push(p);
  }
}

function Point(xpos, ypos) {
  this.x = xpos;
  this.y = ypos;
  this.d = 2;        // diameter
  this.c = 0;        // color
  this.draw = function() {
    stroke(this.c);
    strokeWeight(this.d);
    point(this.x, this.y);
  }
}

function mouseClicked() {
  if (Points.length <= num && inputClicked == false) {
    var p = new Point(mouseX, mouseY);
    p.d = 5;
    p.c = color(200, 10, 10);
    Points.push(p);
  }
}

function updateInput(){
  inputClicked = true;
  Points = [];
  num = document.getElementById('n').value;
  numO1.innerHTML = num;
  numO2.innerHTML = num;
  prop = ""+(num-2)+"/"+(num-1);
  propO.innerHTML = prop;
}

function releaseInput(){
  inputClicked = false;
}
