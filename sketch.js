var sandy=0;
var jim=255;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(96, 110, 209); //an RGB color for the canvas' background

 

  //circle that grows with every click + moves with mouse
  fill(230, 228, 227);
  ellipse(mouseX,mouseY,sandy,sandy);

  // pic
  fill(240,random(100,190),30);//sun color
  stroke(240,random(100,190),30);
  ellipse(mouseX,mouseY,150,150);//sun
   //moon
  stroke(22, 77, 2,0); // an RGB color for the circle's border
  fill(230, 228, 227); // ramdom colors mostly blues and purples + jim(no idea what that means) and opacity depends on mouse y
  strokeWeight(5)
  ellipse(mouseY,mouseX,50,50); // color changing circle, moves against mouse
  fill(163, 163, 163);
  stroke(163, 180, 180);
  triangle(450,200,350,450,500,450);//mountain 1
  triangle(380,250,310,450,410,500);//mountian 2
  fill(50,100,20);
  stroke(22, 77, 2,0);
  rect(0,440,500,60);//ground
  ellipse(150,450,150,100);//hill 1
  ellipse(50,450,150,150);//hill 2

  //text
  textFont('Ariel');
  textSize(15);
  stroke(255);
  text("Made by: Melissa",390,490);

}
//finally working
function mousePressed() {
  if (sandy>=255) {
    sandy=0;
  } else {
    sandy=sandy+5;
  }
  //i have no idea what jim does :p
  if (jim<=0){
    jim=255;
  }else{
    jim=jim-5;
  }
}