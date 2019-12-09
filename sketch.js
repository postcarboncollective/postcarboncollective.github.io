var bgColor = 0;
var count = 0;
var countMax = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(count == 0){
    countMax = round(random(10,100));
    bgColor = round(random(0,1))*255;
  }
  background(bgColor,10);
  noStroke();
  fill(255-bgColor,50);
  textSize(50);
  text("Post-Carbon Collective",0,40);
  count++;
  count%=countMax;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}