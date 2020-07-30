let fadeIn=false;
let bgIntroAlphaFadeIn = 0;
let bgIntroAlphaFadeOut = 255;
let count0 = 0;
let logo;

function preload() {
  logo = loadImage('assets/PCCLogoBlack.jpg');
}
function setup(){
  resetBG();
  bgIntroAlpha=0;

  //SkipFadeIn
  // fadeIn = true;bgIntroAlpha=255;
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
  }
}

function introAnimation(){
  count0++;
  image(logo,0,0,width,height);
  if(count0>0){
    if(fadeIn==false){
      tint(255, bgIntroAlphaFadeIn);
      bgIntroAlphaFadeIn+=2;
    }
    if(fadeIn==true){
      if(bgIntroAlphaFadeOut>15){
        tint(255, bgIntroAlphaFadeOut);
        bgIntroAlphaFadeOut-=2;
      }
    }
    count0=0;
  }
  if(bgIntroAlphaFadeIn>255){
    fadeIn=true;
  }
}
