let w = 100;
let z = 100;
var timer;
var counter = 177;
var seconds=0;
var minutes=0;
let x = 50;
let y = 40;
let canvasX = 450;
let canvasY = 300;
let sprites=[];
let a;

let testRight;
let testLeft;
let testDown;
let testUp;
let time;

function setup() {
  a = new sprite (x,y);
  fill('white');
img = loadImage("assets/start.png");
img2 = loadImage("assets/car2.png");
img3 = loadImage("assets/zombie-car.png");
    setInterval(timeIt, 1000);
}

function draw() {
createCanvas(canvasX, canvasY);
 background(200);
 city(w,z);

 strokeWeight(4);
 //function keyPressed();
 a.drawSprite();
 a.moveSprite();
 a.detectWall();
 a.canvasSprite();
 a.canvasSpriteY();
 a.endGameSprite();
 imageLoad();
}

function imageLoad(){
  if (counter<177 && counter>150){
    image(img, 0, 0,canvasX,canvasY);
  }
  else if (counter<100&&counter>95){
    image(img2,0,0,canvasX,canvasY);
    counter=counter-30
  }
  else if (counter<3 && counter>0){
    image(img2,0, 0,canvasX,canvasY);
  }
  else if (counter<=0){
    canvasX = canvasX + 500;
    background("black");
    fill("red");
    textSize(100);
    text("YOU DIED", width/8, height*0.7);
}
}

function timeIt() {
  // 1 counter = 1 second
  if (counter > 0) {
    counter--;
  }

	minutes = floor(counter/60);
  seconds = counter % 60;


   timer.html(minutes + ":" + seconds);

}

class sprite {

  constructor(x,y){
		    this.x = x;
    		this.y = y;
        // this.canvasx = canvasX;
        // this.canvasy = canvasY;
      }

  drawSprite(){
        strokeWeight(2);
        fill("blue");
    		rect(this.x,this.y,20,20);
      //  print(this.x + this.y);
      fill(255);
       text(minutes + ":" + seconds, this.x,this.y+10);
	}

	//update the location of the ball, so it moves across the screen
	moveSprite(){
    if(keyIsDown(RIGHT_ARROW)&& testRight[1]>=200){
      this.x = this.x + 5;
     }
     else if (keyIsDown(LEFT_ARROW) && testLeft[1]>=200){
       this.x = this.x - 5;
     }
     else if (keyIsDown(DOWN_ARROW)&& testDown[1]>=200){
       this.y = this.y + 5;
     }
     else if (keyIsDown(UP_ARROW)&& testUp[1]>=200){
       this.y = this.y - 5;
    }
   }

   detectWall(){

      testRight = get(this.x+22,this.y);
      testLeft = get(this.x-2, this.y);
      testDown = get(this.x, this.y+22);
      testUp = get(this.x, this.y-2);
    }

   canvasSprite(){
     if(this.x+50>=canvasX){
       canvasX = canvasX + 30;
     }
   }
   canvasSpriteY(){
     if(this.y+50>=canvasY){
       canvasY = canvasY + 30;
     }
   }

   endGameSprite(){
     if(615<=this.x && this.x<=780 && this.y<=1000 && this.y>=950){
       canvasX = canvasX + 500;
       background("black");
       fill("red");
       textSize(100);
       text("YOU ESCAPED", width/8, height*0.7);
     }
   }
}

function city(w,z){//w= 100, z= 100
  strokeWeight(30);
  stroke('black')
  //top
  line(w-100,z-100,w+900,z-100);//top side line
  line(w+900,z-100,w+900,z+900);//right side line
  line(w-100,z,w+100,z);
  line(w+200,z-100,w+200,z);
  line(w+200,z,w+450,z);
  line(w+570,z-100,w+570,z);
  line(w+570,z,w+800,z);
  line(w,z+100,w+600,z+100);
  line(w+600,z+100,w+600,z+250);
  line(w+700,z+100,w+700,z+250);
  line(w+700,z+250,w+800,z+250);
  line(w+800,z+250,w+800,z+500);
  line(w+800,z+500,w+700,z+500);
//part C
  line(w+800,z+100,w+800,z+170);
  line(w+800,z+170,w+900,z+170);
  line(w-100,z+200,w+100,z+200);
  line(w-100,z-100,w-100,z+900);//left side line
  line(w+100,z+200,w+100,z+350);
  line(w+170,z+350,w,z+350);
  line(w,z+350,w,z+290);
  line(w+170,z+450,w,z+450);
//part B
  line(w+400,z+100,w+400,z+350);
  line(w+400,z+350,w+700,z+350);
  line(w+700,z+350,w+700,z+900);
  line(w+200,z+200,w+300,z+200);
  line(w+300,z+200,w+300,z+450);
  line(w+300,z+450,w+600,z+450);
  line(w+600,z+450,w+600,z+650);
  //part A
  line(w-100,z+550,w+350,z+550);
  line(w+300,z+550,w+300,z+700);
  line(w+600,z+650,w+500,z+650);
  line(w+500,z+650,w+500,z+900);
  line(w+600,z+760,w+600,z+900);
  line(w+900,z+600,w+800,z+600);
  line(w+700,z+700,w+800,z+700);
  line(w+900,z+900,w+700,z+900);
  line(w-100,z+900,w+500,z+900);
  line(w+400,z+700,w+400,z+900);
  line(w+200,z+700,w+200,z+900);
  line(w+200,z+700,w,z+700);

}
