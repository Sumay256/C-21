var fixedRect, movingRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(500,600,50,70);
  object2=createSprite(100,250,70,80);
  object3=createSprite(300,600,30,60);
  object4=createSprite(800,700,40,40);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  movingRect.velocityX=5;
  movingRect.velocityY=0;
  fixedRect.velocityX=4;
  fixedRect.velocityY=4;
  object3.velocityX=3;
  object3.velocityY=-2;
  if(custom(movingRect,fixedRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  custom2(movingRect,fixedRect);
  if(custom(movingRect,object2)){
    movingRect.shapeColor="blue";
    object2.shapeColor="cyan";
  }
  else{
    movingRect.shapeColor="green";
    object2.shapeColor="grey";
  }
  custom2(movingRect,object3);
  drawSprites();
}




