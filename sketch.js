var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  o1 = createSprite(100, 200, 50, 50);
  o1.shapeColor = "green";
  o2 = createSprite(200, 200, 50, 50);
  o2.shapeColor = "green";
  o3 = createSprite(300, 200, 50, 50);
  o3.shapeColor = "green";
  o4 = createSprite(400, 200, 50, 50);
  o4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  o4.x = World.mouseX;
  o4.y = World.mouseY;

  if(isTouching(o4,o2)){
    o2.shapeColor = "red";
    o4.shapeColor = "red";
  } 
  else {
    o2.shapeColor = "green";
    o4.shapeColor = "green";
  }
  drawSprites();
}

