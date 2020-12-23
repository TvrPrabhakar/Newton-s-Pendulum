const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
var engine,world;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world=engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    var mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
    
    bob1 = new Pendulum(100,300,"violet");
    bob2 = new Pendulum(160,300,"indigo");
    bob3 = new Pendulum(220,300,"blue");
    bob4 = new Pendulum(280,300,"green");
    bob5 = new Pendulum(390,260,"yellow");
    
    sling1 = new Sling(bob1.body,{x:100,y:80});
    sling2 = new Sling(bob2.body,{x:160,y:80});
    sling3 = new Sling(bob3.body,{x:220,y:80});
    sling4 = new Sling(bob4.body,{x:280,y:80});
    sling5 = new Sling(bob5.body,{x:340,y:80});
   
}
function draw(){
    background("pink");
    Engine.update(engine);

    push();
    strokeWeight(7);
    line(100,80,340,80);
    pop();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

    //bob1.depth=bob2.depth=bob3.depth=bob4.depth=bob5.depth;

}
function mouseDragged(){
    Matter.body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}