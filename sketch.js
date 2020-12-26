
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new roof(200,200,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  roof.display();
  drawSprites();
 
}



