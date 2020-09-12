var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1500,800);
  speed=random(223,321);
  weight=random(30,52);
  thickness =random(22,83);
  bllet = createSprite(150, 400, 300, 100);
  wall = createSprite (1200,400,thickness,height);
  wall.shapeColor= (80,80,80);
  bllet.velocityX= speed;
}

function draw() {
  background(255,255,255); 
  if(collided(bllet,wall))
  {bllet.velocityX=0;
   var damge =0.5*weight*speed*speed/(thickness*thickness*thickness)
 if(damge>10)
 {bllet.shapeColor=("red")}
  if(damge<10)
 {bllet.shapeColor=("green")}
}
  drawSprites();
}
function collided(bullet,wal)
{blletRightEdge = bullet.x+bullet.width/2
wallLeftEdge= wal.x-wal.width/2
if(blletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}

