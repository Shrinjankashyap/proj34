const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rogy,marshmallow,hmsVanguard,hell;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

  
    hammer = new Hammer(10,100);
    rogy = new Stone(20,200);
    marshmallow= new iron(100,200);
   
   hell= new iron(900,200);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


   hell.display();
    hammer.display();
    rogy.display();
    marshmallow.display();    
 
}