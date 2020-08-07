let fadeIn=false;
let bgIntroAlphaFadeIn = 0;
let bgIntroAlphaFadeOut = 255;
let count0 = 0;
let logo;
let ePosX = 0;
let ePosY = 0;
let cWidth = 0;
let cHeight = 0;
let sizeDiv = 54;
let fCount = 0;
let eSpeedDiv = 20;
let seg = 0;
var xI,xF,yI,yF,xDistance,xGran,yDistance,yGran;
let hoover=false;
let nPos = [];
for(i=0;i<100;i++){
  nPos[i] = [];
  for(j=0;j<2;j++){
    nPos[i][j]=[];
  }
}

var timeC = 0;
var timeP = 0;
var canvas;

function preload() {
  logo = loadImage('assets/PCCLogoBlack.jpg');
}
function setup(){
  resetBG();
  bgIntroAlpha=0;
  // //SkipFadeIn
  // fadeIn = true;bgIntroAlpha=255;
}
function draw(){
  resetBG();
  drawMenu();
  introAnimation();
}

function resetBG(){
  if(windowWidth>=(windowHeight*0.9)){
    canvas = createCanvas(windowHeight*0.9,windowHeight*0.9)
  }
  else{canvas = createCanvas(windowWidth,windowWidth)}
  // canvas = createCanvas(windowWidth, windowHeight*0.9);
  // // var canvas = createCanvas(windowHeight*0.9, windowHeight*0.9);
  // canvas.parent('sketch-div');
  // background(0);

  // canvas = createCanvas(windowWidth, windowHeight*0.9);
  var xc = (windowWidth - width)/2;
  var yc = (windowHeight - height)/2;
  // canvas.position(xc,yc);
  canvas.parent('sketch-div');
  background(0, 0, 0);

  cWidth = width/sizeDiv;
  cHeight = height/sizeDiv;

  nPos[0][0][0]= width/1.7125;
  nPos[0][1][0]= height/2.56;
  nPos[0][0][1]= width/1.88;
  nPos[0][1][1]= height/2.27;
  nPos[0][0][2]= width/1.88;
  nPos[0][1][2]= height/2.05;

  nPos[1][0][0]= width/1.7225;
  nPos[1][1][0]= height/2.81;
  nPos[1][0][1]= width/1.84;
  nPos[1][1][1]= height/3.17;
  nPos[1][0][2]= width/3.1;
  nPos[1][1][2]= height/3.18;

  nPos[2][0][0]= width/1.807;
  nPos[2][1][0]= height/2.72;
  nPos[2][0][1]= width/2.2;
  nPos[2][1][1]= height/2.72;
  nPos[2][0][2]= width/2.395;
  nPos[2][1][2]= height/2.48;

  nPos[3][0][0]= width/1.555;
  nPos[3][1][0]= height/2.115;
  nPos[3][0][1]= width/1.42;
  nPos[3][1][1]= height/2.115;
  nPos[3][0][2]= width/1.225;
  nPos[3][1][2]= height/1.7;

  nPos[4][0][0]= width/1.46;
  nPos[4][1][0]= height/2.275;
  nPos[4][0][1]= width/1.29;
  nPos[4][1][1]= height/2.275;
  nPos[4][0][2]= width/1.18;
  nPos[4][1][2]= height/2.75;

  nPos[5][0][0]= width/1.708;
  nPos[5][1][0]= height/2;
  nPos[5][0][1]= width/1.708;
  nPos[5][1][1]= height/1.45;
  nPos[5][0][2]= width/1.53;
  nPos[5][1][2]= height/1.315;
  nPos[5][0][3]= width/1.33;
  nPos[5][1][3]= height/1.315;
}

function drawMenu(){
  if(fadeIn==true){
    fill(255);
    stroke(255);
    strokeWeight(((width+height)/2)/200);
    rect(width/1.66,height/2.92,width/16,height/16);

    ellipse(nPos[0][0][0],nPos[0][1][0],cWidth,cHeight);
    line(nPos[0][0][0],nPos[0][1][0],nPos[0][0][1],nPos[0][1][1]);
    line(nPos[0][0][1],nPos[0][1][1],nPos[0][0][2],nPos[0][1][2]);
    ellipse(nPos[1][0][0],nPos[1][1][0],cWidth,cHeight);
    line(nPos[1][0][0],nPos[1][1][0],nPos[1][0][1],nPos[1][1][1]);
    line(nPos[1][0][1],nPos[1][1][1],nPos[1][0][2],nPos[1][1][2]);
    ellipse(nPos[2][0][0],nPos[2][1][0],cWidth,cHeight);
    line(nPos[2][0][0],nPos[2][1][0],nPos[2][0][1],nPos[2][1][1]);
    line(nPos[2][0][1],nPos[2][1][1],nPos[2][0][2],nPos[2][1][2]);
    ellipse(nPos[3][0][0],nPos[3][1][0],cWidth,cHeight);
    line(nPos[3][0][0],nPos[3][1][0],nPos[3][0][1],nPos[3][1][1]);
    line(nPos[3][0][1],nPos[3][1][1],nPos[3][0][2],nPos[3][1][2]);
    ellipse(nPos[4][0][0],nPos[4][1][0],cWidth,cHeight);
    line(nPos[4][0][0],nPos[4][1][0],nPos[4][0][1],nPos[4][1][1]);
    line(nPos[4][0][1],nPos[4][1][1],nPos[4][0][2],nPos[4][1][2]);

    ellipse(nPos[5][0][0],nPos[5][1][0],cWidth,cHeight);
    line(nPos[5][0][0],nPos[5][1][0],nPos[5][0][1],nPos[5][1][1]);
    line(nPos[5][0][1],nPos[5][1][1],nPos[5][0][2],nPos[5][1][2]);
    line(nPos[5][0][2],nPos[5][1][2],nPos[5][0][3],nPos[5][1][3]);

    fill(0);
    ellipse(nPos[0][0][2],nPos[0][1][2],cWidth,cHeight);
    ellipse(nPos[1][0][2],nPos[1][1][2],cWidth,cHeight);
    ellipse(nPos[2][0][2],nPos[2][1][2],cWidth,cHeight);
    ellipse(nPos[3][0][2],nPos[3][1][2],cWidth,cHeight);
    ellipse(nPos[4][0][2],nPos[4][1][2],cWidth,cHeight);
    ellipse(nPos[5][0][3],nPos[5][1][3],cWidth,cHeight);

    fill(255);
    strokeWeight(0);
    textAlign(RIGHT,CENTER);
    textSize(((width+height)/2)/sizeDiv);
    text('Events', nPos[0][0][2]-(width/sizeDiv), nPos[0][1][2]);
    text('About', nPos[1][0][2]-(width/sizeDiv), nPos[1][1][2]);
    text('Artists', nPos[2][0][2]-(width/sizeDiv), nPos[2][1][2]);
    textAlign(LEFT,CENTER);
    text('Projects',nPos[3][0][2]+(width/sizeDiv),nPos[3][1][2]);
    text('Label', nPos[4][0][2]+(width/sizeDiv), nPos[4][1][2]);
    text('Software', nPos[5][0][3]+(width/sizeDiv),nPos[5][1][3]);

    hoover=false;
    for(n=0;n<6;n++){
      xI = nPos[n][0][nPos[n][0].length-(seg+1)];
      yI = nPos[n][1][nPos[n][1].length-(seg+1)];
      xF = nPos[n][0][nPos[n][0].length-(seg+2)];
      yF = nPos[n][1][nPos[n][1].length-(seg+2)];
      xDistance = xF-xI;
      xGran = xDistance/eSpeedDiv;
      yDistance = yF-yI;
      yGran = yDistance/eSpeedDiv;
      if(mouseX > (nPos[n][0][nPos[n][0].length-1])-(cWidth) && mouseX < ((nPos[n][0][nPos[n][0].length-1])+(cWidth))){
        if(mouseY > (nPos[n][1][nPos[n][1].length-1])-(cHeight) && mouseY < (nPos[n][1][nPos[n][1].length-1])+(cHeight)){
          if(mouseIsPressed){
            if(n==1){
              window.location='about.html';
            }
          }
          hoover=true;
          fill(255);
          ellipse(nPos[n][0][nPos[n][0].length-1],nPos[n][1][nPos[n][1].length-1],cWidth,cHeight);
          fill(255,random(100,200));
          ellipse(xI+ePosX,yI+ePosY,cWidth,cHeight);
          if(fCount < eSpeedDiv){
            ePosX += xGran;
            ePosY += yGran;
            fCount++;
          }
          else{
            ePosX = 0;
            ePosY = 0;
            fCount = 0;
            seg+=1;
            if(nPos[n][0].length-(seg+2)<0){
              seg=0;
            }
          }
        }
      }
    }
    if(hoover==false){
      ePosX = 0;
      ePosY = 0;
      fCount = 0;
      seg=0;
    }
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
      if(bgIntroAlphaFadeOut>20){
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
