var movingRect,fixedRect;
var box1,box2;

function setup() {
  createCanvas(800,800);
  // movingRect= createSprite(400, 200, 50, 50);
  // movingRect.shapeColor="green";
  // movingRect.debug=true;
  // fixedRect= createSprite(400,400,50,50);
  // fixedRect.shapeColor="green";
  // fixedRect.debug=true;
  box1=createSprite(200,50,45,45);
  box1.shapeColor="blue";
  box1.velocityY= 5;
  box2=createSprite(200,500,45,45);
  box2.shapeColor="green";
  box2.velocityY=-5;
}  


function draw() {
  background(0);  
  // box1.x=mouseX;
  // box1.y=mouseY;

  // if(isTouching(box1,movingRect)){
  //   movingRect.shapeColor= "blue";
  //   box1.width= 100;
  // }
  // else{
  //   movingRect.shapeColor= "green";
  //   box1.width=45;
  // }

  bounceOff(box1,box2);
  
  
  drawSprites();
}  



