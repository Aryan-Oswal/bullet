var weight , speed,bullet,wall,thickness;
var weight2 , speed2,bullet2,wall2,thickness2;

var deform;
function setup() {
  createCanvas(1600,1000);

  bullet = createSprite(50,200,50,50) 
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
   bullet.velocityX = speed;
   wall = createSprite(1000,200,thickness,height/2)
   wall.shapeColor = rgb(80,80,80)




   
   bullet2 = createSprite(50,600,50,50) 
   speed2 = random(223,321)
   weight2 = random(30,52)
   thickness2 = random(22,83)
    bullet2.velocityX = speed2;
    wall2 = createSprite(1000,600,thickness2,400)
    wall2.shapeColor = rgb(80,80,80)
} 

function draw() {
  background('black'); 
  
  if(wall.x  -bullet.x < (bullet.width + wall.width)/2) {
    bullet.velocityX=0;
    deform = 0.5*weight*speed**2/thickness ** 3  
    if(deform > 10){
      wall.shapeColor= rgb(225,0,0)
    }
    if(deform < 10){
      wall.shapeColor= rgb(0,0,225)
    }
    
  }

  if(wall2.x  -bullet2.x < (bullet2.width + wall2.width)/2) {
    bullet2.velocityX=0;
    deform2 = 0.5*weight2*speed2**2/thickness2 ** 3  
    if(deform2 > 10){
      wall2.shapeColor= rgb(225,0,0)
    }
    if(deform2 < 10){
      wall2.shapeColor= rgb(0,0,225)
    }
    
  }
  drawSprites();
}