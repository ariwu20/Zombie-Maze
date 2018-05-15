let x = 50;
let w = 100;
let z = 100;
var timer;
var counter = 300;
var seconds, minutes;
let x = 50;
let y = 40;
let canvasX = 400;
let canvasY = 250;
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
  timer = createP('timer');
    setInterval(timeIt, 1000);
}

function draw() {
createCanvas(canvasX, canvasY);
 background(200);
 city(w,z);
 strokeWeight(4);
 // print(x);
 //function keyPressed();
 a.drawSprite();
 a.moveSprite();
 a.detectWall();
 a.canvasSprite();
 a.canvasSpriteY();
 fill("white");
  text(minutes + ":" + seconds, 100,100);
}

function timeIt() {
  // 1 counter = 1 second
  if (counter > 0) {
    counter--;
  }

	minutes = floor(counter/60);
  seconds = counter % 60;

  // if (counter < 60)
  //timer = text(minutes + ':' + seconds,100,200);
   timer.html(minutes + ":" + seconds);
   fill(255);

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
	}

	//update the location of the ball, so it moves across the screen
	moveSprite(){
    if(keyIsDown(RIGHT_ARROW)&& testRight[1]>=200){
      this.x = this.x + 5;
      steps = steps - 1;
     }
     else if (keyIsDown(LEFT_ARROW) && testLeft[1]>=200){
       this.x = this.x - 5;
       steps = steps - 1;
     }
     else if (keyIsDown(DOWN_ARROW)&& testDown[1]>=200){
       this.y = this.y + 5;
       steps = steps - 1;
     }
     else if (keyIsDown(UP_ARROW)&& testUp[1]>=200){
       this.y = this.y - 5;
       steps = steps - 1;
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
}


function city(w,z){//change lines into houses
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
  line(500,200,500,450);
  line(500,450,800,450);
  line(800,450,800,1000);
  line(300,300,400,300);
  line(400,300,400,550);
  line(400,550,700,550);
  line(700,550,700,750);
  //part A
  line(0,650,450,650);
  line(400,650,400,800);
  line(700,750,600,750);
  line(600,750,600,1000);
  line(700,860,700,1000);
  line(1000,700,900,700);
  line(800,800,900,800);
  line(1000,1000,800,1000);
  line(0,1000,600,1000);
  line(500,800,500,1000);
  line(300,800,300,1000);
  line(300,800,100,800);
}

function city2(w,z){//w= 100, z= 100
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
