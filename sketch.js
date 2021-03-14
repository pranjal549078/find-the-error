const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var obj1,obj2,obj3,obj4,obj5;
var ground,platform1,platform2;
var polgon;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(150, 305, 300, 170);
    platform2 = new Ground(150, 400, 300, 170); 

 obj1 = new Object(330,235,30,40);
 obj2 = new Object(360,235,30,40);
 obj3 = new Object(390,235,30,40);   
 obj4 = new Object(420,235,30,40);
 obj5 = new Object(450,235,30,40);

 polygon = new Polygon(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
 
    Engine.update(engine);
    strokeWeight(4);
 ground.display();
 platform1.display();
 platform2.display();
 obj1.display();
 obj2.display();
 obj3.display(); 
 obj4.display(); 
 obj5.display();
 polygon.display();
 slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}