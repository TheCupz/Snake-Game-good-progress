var timmehTheSnake
var scl = 20;
var food; 
function preload() {}
function setup() {
  createCanvas(400, 400);
  timmehTheSnake = new Snake()
  frameRate(500)
  pickLocation();
}
function draw() {
  background("black");
  timmehTheSnake.update();
  timmehTheSnake.show();
  if(timmehTheSnake.eat(food)) {
    pickLocation();
  } 

  fill(255,0,0);
  rect(food.x, food.y, scl, scl);

}

function keyPressed () {
  if(keyCode === UP_ARROW){
    timmehTheSnake.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW){
    console.log("Working");
    timmehTheSnake.dir(0,1);
  }
  else if(keyCode === LEFT_ARROW){
    timmehTheSnake.dir(-1,0);
  }
  else if(keyCode === RIGHT_ARROW){
    timmehTheSnake.dir(1,0);
  }

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  console.log("coloums" + cols);
  console.log("rows" + rows);
  food = createVector(floor(random(cols)),floor((random(rows))))
  food.mult(scl);
  console.log("food" + food);
}