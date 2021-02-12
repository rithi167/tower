const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImg, slingShot;
var ground1, platform1, platform2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16

var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9;

function preload() {
  polygonImg = loadImage("polygon.png")
 }


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

ground1 = new Ground(600,height,1200,20);
platform1 = new Ground(390,300,250,10);
platform2  = new Ground(700,200,200,10);

//bottom
block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
//thirdlevel
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//secondlevel
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
//top
block16 = new Block(390,155,30,40);

//bottom for second platform
Block1 = new Block(640,175,30,40);
Block2 = new Block(670,175,30,40);
Block3 = new Block(700,175,30,40);
Block4 = new Block(730,175,30,40);
Block5 = new Block(760,175,30,40);
//secondlevel 
Block6 = new Block(670,135,30,40);
Block7 = new Block(700,135,30,40);
Block8 = new Block(730,135,30,40);
//top
Block9 = new Block(700,95,30,40);


polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingShot = new SlingShot(this.polygon, {x:100, y:200});
}

function draw(){
  background(56,44,44); 
  Engine.update(engine);
  ground1.display();
  platform1.display();
  platform2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  fill("pink");

  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  

  imageMode(CENTER);
  image(polygonImg, polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
  slingShot.fly();
}

