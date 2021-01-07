const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var engine,world;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

  ground = new Ground(400,390,800,20);
  ground2 = new Ground(400,100,100,20);

  box1 = new Box(550,380,30,340);
  box2 = new Box(620,380,30,200);
  box3 = new Box(500,380,30,240);
  ball1 = new Ball(400,200,30);
  rope1 = new Rope(ground2.body,ball1.body);
  
}

function draw() {

  Engine.update(engine);
  background("blue");
  
  ground.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  rope1.display();
    
  
}