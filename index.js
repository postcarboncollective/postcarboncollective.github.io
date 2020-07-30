let introPlayed = false; fadeIn=false;
let bgIntroAlpha = 1;
let count0 = 0;
let logo;

function preload() {
  logo = loadImage('assets/PCCLogoBlack.jpg');
}
function setup(){
  resetBG();
  introPlayed = false; bgIntroAlpha=0;
}
function draw(){
  resetBG();
  drawMenu();
  introAnimation();
}

function resetBG(){
  var canvas = createCanvas(windowWidth, windowHeight*0.9);
  canvas.parent('sketch-div');
  background(0);
}

function drawMenu(){
  if(fadeIn==true){
    //Chip
    fill(255);
    stroke(255);
    strokeWeight(((width+height)/2)/200);
    rect(width/1.66,height/2.92,width/16,height/16);

    ellipse(width/1.7125,height/2.56,width/54,height/54);
    ellipse(width/1.7225,height/2.81,width/54,height/54);
    ellipse(width/1.807,height/2.72,width/54,height/54);
    ellipse(width/1.555,height/2.115,width/54,height/54);
    ellipse(width/1.46,height/2.275,width/54,height/54);
    // ellipse(width/1.475,height/3.3,width/54,height/54);
    ellipse(width/1.708,height/2,width/54,height/54);

    line(width/1.7125,height/2.56,width/1.875,height/2.27);
    line(width/1.875,height/2.27,width/1.88,height/2.05);
    line(width/1.7225,height/2.81,width/1.84,height/3.17);
    line(width/1.84,height/3.17,width/3.1,height/3.18);
    line(width/1.807,height/2.72,width/2.2,height/2.72);
    line(width/2.2,height/2.72,width/2.395,height/2.48);
    line(width/1.555,height/2.115,width/1.42,height/2.115);
    line(width/1.42,height/2.115,width/1.225,height/1.7);
    line(width/1.46,height/2.275,width/1.29,height/2.275);
    line(width/1.29,height/2.275,width/1.18,height/2.75);
    // line(width/1.475,height/3.3,width/1.29,height/3.3);
    // line(width/1.29,height/3.3,width/1.215,height/3.9);
    line(width/1.708,height/2,width/1.708,height/1.45);
    line(width/1.708,height/1.45,width/1.53,height/1.315);
    line(width/1.53,height/1.315,width/1.33,height/1.315);

    fill(0);
    ellipse(width/1.88,height/2.05,width/54,height/54);
    ellipse(width/3.1,height/3.18,width/54,height/54);
    ellipse(width/2.395,height/2.48,width/54,height/54);
    ellipse(width/1.225,height/1.7,width/54,height/54);
    ellipse(width/1.18,height/2.75,width/54,height/54);
    // ellipse(width/1.215,height/3.9,width/54,height/54);
    ellipse(width/1.33,height/1.315,width/54,height/54);

    // rect((width/2)-((width/6)/2),(height/2)-((height/6)/2),width/6,height/6);
    // //Lines
    // line(width/2,height/2.2,width/3,height/2.2);
    // line(width/3,height/2.2,width/3.5,height/2.5);
    // line(width/2,height/2,width/3.5,height/2);
    // line(width/2,height/1.85,width/3,height/1.85);
    // line(width/3,height/1.85,width/3.5,height/1.65);
    // //right
    // line(width/2,height/2.2,width/1.5,height/2.2);
    // line(width/1.5,height/2.2,width/1.4,height/2.5);
    // line(width/2,height/2,width/1.4,height/2);
    // line(width/2,height/1.85,width/1.5,height/1.85);
    // line(width/1.5,height/1.85,width/1.4,height/1.65);
    //
    // //Buttons
    // fill(0);
    // strokeWeight(4);
    // ellipse(width/3.5,height/2.5,width/64);
    // ellipse(width/3.5,height/2,width/64);
    // ellipse(width/3.5,height/1.65,width/64);
    // //right
    // ellipse(width/1.4,height/2.5,width/64)
    // ellipse(width/1.4,height/2,width/64);
    // ellipse(width/1.4,height/1.65,width/64);
  }
}

function introAnimation(){
  if(introPlayed==false){
    count0++;
    image(logo,0,0,width,height);
    // tint(255,50);
    tint(255, bgIntroAlpha);
    if(count0>0){
      if(fadeIn==false){
        bgIntroAlpha+=1;
      }
      if(fadeIn==true){
        bgIntroAlpha-=2;
      }
      count0=0;
    }
    if(bgIntroAlpha>255){
      fadeIn=true;
    }
    if(bgIntroAlpha<=0){
      introPlayed=true;
    }
  }
}
