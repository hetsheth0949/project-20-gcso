
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var car,wall;
var speed,weight;
var deformation;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
	speed = random(55,90);
	weight = random(400,1500);

	car  = createSprite(50,200,50,50);
	car.velocityX = speed;
	wall = createSprite(1500,200,60, height/2)
	wall.shapeColor = color(80,80,80)

	engine = Engine.create();
	world = engine.world;
	deformation =  Math.round((0.5*weight*speed*speed)/22500)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
if(wall.x - car.x <(car.width + wall.width)/2)
  {
 car.velocityX = 0;
 var deformartion = 0.5 *weight**speed* speed/22509;
 if(deformation > 180)
{

}


}
drawSprites();
} 

