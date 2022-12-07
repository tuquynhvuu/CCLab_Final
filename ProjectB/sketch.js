function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  background(220);
}

function draw() {
  background(25, 19, 67);
  
  fill(255);
  circle(random(width), random(height), random(15));
  
  fill(117, 233, 187);
  circle(random(width), random(height), random(15));
  
  fill(233, 179, 255);
  circle(random(width), random(height), random(20));
  
  fill(219, 112, 255);
  circle(random(width), random(height), random(20));
  
  fill(120, 255, 190);
  circle(random(width), random(height), random(20));
{
  push();
  noStroke();
  fill(219, 112, 255);
  rect(0, 0, 600, 10);  
  fill(120, 255, 190);
  rect(0, 10, 600, 10);  
  fill(255);
  rect(0, 20, 600, 5);
  
  fill(255);
  rect(0, 575, 600, 5);
  fill(120, 255, 190);
  rect(0, 580, 600, 10);  
  fill(219, 112, 255);
  rect(0, 590, 600, 10); 
  
  pop();
}
  
{
  push();
  translate(0, 0);
  fill(219, 112, 255);
  textSize(90);
  textFont("Courier New");
  textStyle(BOLDITALIC);
  text("CAT WARS", 91, 256);
  
  fill(120, 255, 190);
  textSize(90);
  textFont("Courier New");
  textStyle(BOLDITALIC);
  text("CAT WARS", 88, 253);
  
  fill(229, 235, 255);
  textSize(90);
  textFont("Courier New");
  textStyle(BOLDITALIC);
  text("CAT WARS", 85, 250);
  
  fill(255);
  textSize(90);
  textFont("Courier New");
  textStyle(BOLDITALIC);
  text("CAT WARS", 82, 247);
  pop();
}
  
{  // start button
  
  push();
  translate(0, 60);
  
  fill(203, 216, 255);
  rect(164, 254, 280, 80);

  fill(255);
  rect(162, 252, 280, 80);
  
  fill(229, 235, 255);
  rect(160, 250, 280, 80);

  fill(219, 112, 255);
  textSize(30);
  textFont("Courier New");
  textStyle(BOLD);
  text("CLICK TO START", 179, 304)

  fill(120, 255, 190);
  textSize(30);
  textFont("Courier New");
  textStyle(BOLD);
  text("CLICK TO START", 177, 302)
  
  fill(0);
  textSize(30);
  textFont("Courier New");
  textStyle(BOLD);
  text("CLICK TO START", 175, 300)
  pop();
}
 
{ //players
  push();
  translate(0, 60);
  
  fill(203, 216, 255);
  rect(254, 354, 100, 35);
  
  fill(255);
  rect(252, 352, 100, 35);
  
  fill(229, 235, 255);
  rect(250, 350, 100, 35);
  
  fill(219, 112, 255);
  textSize(15);
  textFont("Courier New");
  textStyle(BOLD);
  text("2 PLAYERS", 262, 372);
  
  fill(120, 255, 190);
  textSize(15);
  textFont("Courier New");
  textStyle(BOLD);
  text("2 PLAYERS", 261, 371);
  
  fill(0);
  textSize(15);
  textFont("Courier New");
  textStyle(BOLD);
  text("2 PLAYERS", 260, 370);
  pop();
}
  
  {
    push();
    translate(-40, 160);
    fill(233, 179, 255);
    triangle(150-20, 150-12, 150-4, 150-15, 150-12, 150-35);
    triangle(150+4, 150-15, 150+20, 150-12, 150+12, 150-35);
  
    //head
    fill(233, 179, 255);
    circle(150, 150, 45);
  
    //eyes
    fill(255);
    ellipse(150-8, 150-2, 7, 10);
    ellipse(150+8, 150-2, 7, 10);
  
    //pupils
    fill(0);
    ellipse(150-8, 150-2, 3, 5);
    ellipse(150+8, 150-2, 3, 5);
  
    //mouth
    triangle(150-3, 150+8, 150+3, 150+8, 150, 150+13);
  
    //whiskers
    line(150-7, 150+9, 150-15, 150+8);
    line(150-7, 150+11, 150-15, 150+12);
    line(150+7, 150+9, 150+15, 150+8);
    line(150+7, 150+11, 150+15, 150+12);
    pop();
  }
  
  {
    push();
    translate(40, -140);
    fill(117, 233, 187);
    triangle(450-20, 450-12, 450-4, 450-15, 450-12, 450-35);
    triangle(450+4, 450-15, 450+20, 450-12, 450+12, 450-35);
  
    //head
    fill(117, 233, 187);
    circle(450, 450, 45);
  
    //eyes
    fill(255);
    ellipse(450-8, 450-2, 7, 10);
    ellipse(450+8, 450-2, 7, 10);
  
    //pupils
    fill(0);
    ellipse(450-8, 450-2, 3, 5);
    ellipse(450+8, 450-2, 3, 5);
  
    //mouth
    triangle(450-3, 450+8, 450+3, 450+8, 450, 450+13);
  
    //whiskers
    line(450-7, 450+9, 450-15, 450+8);
    line(450-7, 450+11, 450-15, 450+12);
    line(450+7, 450+9, 450+15, 450+8);
    line(450+7, 450+11, 450+15, 450+12);
    pop();
  }
}