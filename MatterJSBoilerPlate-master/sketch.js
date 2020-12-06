
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1;
function preload()
{
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy=createSprite(100,590,200,200)
	boy.addImage(boyImage)
	boy.scale=0.08
	//Create the Bodies Here.
	stone1=new Stone(50,450);
	tree1=new Tree(600,400,600,600);
	ground1=new Ground(400,650,800,25);
	mango1=new Mango(600,200);
	mango2=new Mango(650,200);
	mango3=new Mango(550,250);
	mango4=new Mango(500,270);
	mango5=new Mango(700,260);
	mango6=new Mango(600,260);
	mango7=new Mango(550,190);
	mango8=new Mango(500,340);
	mango9=new Mango(600,320);
	mango10=new Mango(450,300);
	mango11=new Mango(680,300);
	mango12=new Mango(750,290);
	slingshot=new Slingshot(stone1.body,{x:300,y:550});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  ground1.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseRealeased(){
	slingshot.fly();
}


