function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 strokeWeight(0)
  fill(255, 153, 204);
 circle(200, 200, 250);

fill(0, 0, 0);
  ellipse(130, 200, 45, 60);
  ellipse(270, 200, 45, 60)
  
 
  fill(255, 51, 51);  
//angleMode(DEGREES);
push();
rotate(PI / 150);
  arc(200, 250, 50, 50, 0, PI + QUARTER_PI, CHORD);
  pop();
    
  
  fill(255, 255, 255);
  circle(130, 190, 35);
  circle(270, 190, 35)

fill(255, 255, 255);
  circle(130, 190, 35);
  circle(270, 190, 35)

fill(81, 118, 240);
  circle(130, 218, 20);
  circle(270, 218, 20)

fill(255, 102, 102);
  ellipse(130, 250, 45, 20);
  ellipse(270, 250, 45, 20)
}