class Molecule {
  constructor(type){
    this.type = type;
    this.location = createVector(windowWidth/2,windowHeight/2);
  }
  
  draw(x,y,size_,bgColor){
    textAlign(CENTER,CENTER);
    this.location.x = x;
    this.location.y = y;
    let size = size_;
    push();
    translate(windowWidth/2,windowHeight/2);
    rotate(radians(random(360)));  
    //CYTOSINE
    if(this.type == 0){
      stroke(255-bgColor);
      fill(255-bgColor);
      line(this.location.x-size/8,this.location.y,this.location.x-size/8,this.location.y-size);
      line(this.location.x+size/8,this.location.y,this.location.x+size/8,this.location.y-size);
      line(this.location.x,this.location.y-size,this.location.x+size,this.location.y-size*2);
      line(this.location.x+size,this.location.y-size*2,this.location.x+size,this.location.y-size*3);
      line(this.location.x+size*2,this.location.y-size,this.location.x+size*2,this.location.y);
      line(this.location.x+size-size/8,this.location.y-size*2-size/8,this.location.x+size*2-size/8,this.location.y-size-size/8);
      line(this.location.x+size+size/8,this.location.y-size*2-size/8,this.location.x+size*2+size/8,this.location.y-size-size/8);     
      line(this.location.x+size*2,this.location.y+size/8,this.location.x+size*3,this.location.y+size/2+size/8);
      line(this.location.x+size*2,this.location.y-size/8,this.location.x+size*3,this.location.y+size/2-size/8);
      line(this.location.x+size*2,this.location.y,this.location.x+size,this.location.y+size);
      line(this.location.x+size,this.location.y+size,this.location.x,this.location.y);
      
      stroke(255-bgColor);
      fill(bgColor);
      ellipse(this.location.x,this.location.y,size/2);
      ellipse(this.location.x,this.location.y-size,size/2);
      ellipse(this.location.x+size,this.location.y-size*2,size/2);
      ellipse(this.location.x+size,this.location.y-size*3.,size/1.5);
      ellipse(this.location.x+size*2,this.location.y-size,size/2);
      ellipse(this.location.x+size*2,this.location.y,size/2);
      ellipse(this.location.x+size*3,this.location.y+size/2,size/2);
      ellipse(this.location.x+size,this.location.y+size,size/2);
      
      textSize(size/4);
      stroke(255-bgColor);
      fill(255-bgColor);
      text("C",this.location.x,this.location.y);
      text("C",this.location.x,this.location.y-size);
      text("C",this.location.x+size,this.location.y-size*2);
      text("NH",this.location.x+size,this.location.y-size*3);
      text("N",this.location.x+size*2,this.location.y-size);
      text("C",this.location.x+size*2,this.location.y);
      text("O",this.location.x+size*3,this.location.y+size/2);
      text("N",this.location.x+size,this.location.y+size);
      textSize(size/8);
      text("2",this.location.x+size*1.25,this.location.y-size*2.9);
    }
    pop();
  }
}