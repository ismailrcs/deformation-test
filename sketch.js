
var car,wall;

var speed,weight;



function setup() {
  
  var canvas = createCanvas(1600,400);
  
  speed=random(55,90)
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor= color(80,80,80,80);
  car.velocityX = speed;

  
  

}

function draw() {
  background(255,255,255);  

  
 

    if(wall.x-car.x<(car.width+wall.width)/2)
    {
      
      var deformation = 0.5*speed*speed/22509;

      car.velocityX=0;

      if(deformation>180)
      {

        
        wall.shapeColor=color(255,0,0);

      }


      if(deformation<180 && deformation>100)
      {


        wall.shapeColor=color(230,230,0);

      }  
        
      if(deformation<100)
      {


      wall.shapeColor=color(0,255,0);


      }
      

    }


 

drawSprites();
}