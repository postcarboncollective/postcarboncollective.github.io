var bgColor = 0;
var count = 0;
var countMax = 0;

var mol1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mol1 = new Molecule(0);
}

function draw() {
  if(count == 0){
    countMax = round(random(10,100));
    // bgColor = round(random(0,1))*255;
  }
  background(bgColor,10);
  noStroke();
  fill(255-bgColor,50);
  textSize(50);
  textAlign(LEFT,CENTER);
  text("Post-Carbon Collective",0,30);
  mol1.draw(windowWidth/4,windowHeight/2,40);
  // mol1.draw(random(windowWidth),random(windowHeight),random(((windowWidth+windowHeight)/2)/8));
  count++;
  count%=countMax;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}