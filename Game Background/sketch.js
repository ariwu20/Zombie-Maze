let x = 0;
let y = 0;
let z = 0;
let y2 = 0;

function setup() {
  //createCanvas(1000, 500);
}

function draw() {
  createCanvas(100 + x, 500);
  background("blue");
  rect(50,50, 60 + z, 60 + y2);
  rect(50+x,50+y,50,50);
  rect(200,50,50,50);
  //function keyPressed();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW){
    x = x + 30;
    z = z + 30;
  }
  else if (keyCode === LEFT_ARROW){
    x = x - 30;
  }
}

//function keyPressed() {
  //if (keyCode === DOWN_ARROW){
    //y = y + 30;
    //y2 = y2 + 30;
  //}
  //else if (keyCode === UP_ARROW){
    //y = y - 30;
//  }
//}
