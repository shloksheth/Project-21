
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    ball = Matter.Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);

	groundObj= new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1100,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  groundObj.display();
  leftSide.display();
  rightSide.display();

  background(0);
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

	}
}

