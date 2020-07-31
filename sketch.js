var bullet, wall, speed, weight,damage,thickness;

function setup() {
  createCanvas(1600,400);
bullet = createSprite(50, 200, 50, 50);
speed = random(5,10);
weight = random(30,52);
wall = createSprite(1200,200,thickness,height/2)
thickness = random(22,83)
}

function draw() {
  background(255,255,255); 
  bullet.velocityX=speed; 

  if(hascollided(bullet, wall)){
    bullert.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor="red";
    }
    if(damage<10){
      bullet.shapeColor="green";
    }
  
  }
  drawSprites();
}

function hascollided(lbullet,lwall){
bulletRightEdge =lbullet.x +lbullet.width;
wallLeftEdge= lwall;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
 return false;
}
