var mouth=false;
var ears=false;
var eyes=false;
var flower=false;


var grass;
var carrot;

function preload(){
 grass=loadImage("data/grass.png");
 carrot=loadImage("data/carrot.png");
}

function setup() {
  createCanvas(900,500);
  background(255);
  smooth();
  frameRate(5);

}

function draw() {
  image(grass,0,0,900,500);
  
  noStroke(0);
  textSize(20);
  text("Press these keys to change rabbit's features",420,150);
  textSize(18);
  text("a to change mouth",520,200);
  text("s to move eyes",520,250);
  text("d to change color of ears",520,300);
  text("f to make flower",520,350);
   
  //translate(mouseX-250,mouseY-320); 
  stroke(0);
  
  if(flower){
  //noStroke();
  fill(21, 29, 242);
  ellipse(300, 30, 20, 20);
  ellipse(310, 20, 20, 20);
  ellipse(320, 30, 20, 20);
  ellipse(310, 40, 20, 20);

  fill(255, 229, 0);

  ellipse(310, 30, 20, 20); 
  }//flower
  
  if(ears){
  fill(mouseX/2, 0, mouseY/2);
  ellipse(220, 80, 40, 130);
  ellipse(280, 80, 40, 130);

  fill(255); 
  ellipse(220, 100, 20, 80);
  ellipse(280, 100, 20, 80);
// ear
  }
  else{
   fill(255,170,224); 
   ellipse(220, 80, 40, 130);
   ellipse(280, 80, 40, 130);

  fill(255); 
  ellipse(220, 100, 20, 80);
  ellipse(280, 100, 20, 80);
  }

  ellipse(200, 410, 60, 30);
  ellipse(300, 410, 60, 30);
// foot

  
  fill(255);
  ellipse(320, 360, 30, 30);
//tail

  ellipse(250, 320, 130, 200);
  fill(255, 198, 252);
  ellipse(250, 300, 90,140);
  fill(0);
  ellipse(250,360,10,10);
  ellipse(250,330,10,10);
  ellipse(250,300,10,10);
// body

  stroke(0);
  fill(255);
  ellipse(250, 190, 150, 155);
// head

  noStroke();
  fill(250,159,159);
  ellipse(200, 190, 45, 15);
  ellipse(300, 190, 45, 15);
//blusher  

  
  if(mouth){
   fill(252,97,97);
   ellipse(250,230,30,30);
  }
  else{
  fill(252,97,97); 
  arc(250,230,30,50,0,PI,OPEN);
//mouse
  }


  if(eyes){
  stroke(0);
  fill(0);
  arc(220,170,30,40,0,PI,OPEN);
  arc(280,170,30,40,0,PI,OPEN);
  }
  else{
  stroke(0);
  fill(0);
  ellipse(220, 170, 15, 20);
  ellipse(280, 170, 15, 20);

// eyes
  }
  


image(carrot,random(10,650),random(10,650),90,100);
}

function mousePressed(){
  
  image(carrot,random(10,650),random(10,650),90,100);
 
}

function keyTyped(){
    if (key == 'a') {
      mouth=!mouth;
    }
    if(key == 's'){
      eyes=!eyes;
    }
    if(key == 'd'){
      ears=!ears;
    }
    if(key == 'f'){
      flower=!flower;
    }
  }
