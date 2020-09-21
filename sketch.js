
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	
	ball = new Ball(150, 25, 30);
	ground = new Ground(400, 700, 800, 30);
	box1 = new Dustbin(600, 585, 100, 100);

	Engine.run(engine);

	console.log(ball.body);
	
}


function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  ball.display();
  ground.display();

 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:60, y:-60});
	}
}





