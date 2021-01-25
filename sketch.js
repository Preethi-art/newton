
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball1=new Ball(200,600,20);
	Ball2=new Ball(250,600,20);
	Ball3=new Ball(300,600,20);
	Ball4=new Ball(350,600,20);
	Ball5=new Ball(400,600,20);
	Ball6=new Ball(450,600,20);

	roof1=new Roof(350,350,150,10)
	chain1=new Chain(Ball1.body,roof1.body);
	


	Engine.run(engine);
  
}


function draw() {

  background(255);
  Ball1.display();
  Ball2.display();
  Ball3.display();
  Ball4.display();
  Ball5.display();
  Ball6.display(); 

  roof1.display();
  chain1.display();

  
  drawSprites();
 
}



