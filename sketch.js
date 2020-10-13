var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
 fixedRect.debug=true
  movingRect=createSprite(200, 300, 100, 50);
  movingRect.shapeColor="green"
 movingRect.debug=true

fixedRect.velocityY=5
movingRect.velocityY=-5



}

function draw() {
  background(255,255,255);  
 // movingRect.x=mouseX;
  //movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x)
  /*if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2)
    {
      movingRect.shapeColor="red"
      fixedRect.shapeColor="red"
    }
    else
    {
      movingRect.shapeColor="green"
      fixedRect.shapeColor="green"
    }*/

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2    
  && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2)
{
  fixedRect.velocityX = 5
  movingRect.velocityX =-5

  
}



if( movingRect.y - fixedRect.y < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.y - movingRect.y < fixedRect.width / 2 + movingRect.width / 2 )

    {

  fixedRect.velocityY = 5
  movingRect.velocityY = -5





    }






















  drawSprites();
}















