const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraints = Matter.MouseConstraints;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;

console.log("executing sketch.js");
alert("Inside sketch.js","my title");
function setup()
{
    a=b;
    console.log("executing setup function"); 
}
function setup2(){
    console.log("executing setup function");
    canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world=engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    bob1 = new Pendulum(200,300,"blue");
    bob2 = new Pendulum(250,300,"blue");
    bob3 = new Pendulum(300,300,"blue");
    bob4 = new Pendulum(350,300,"blue");
    bob5 = new Pendulum(400,300,"blue");

    sling1 = new Sling(bob1,{x:200,y:80});
    sling2 = new Sling(bob2,{x:250,y:80});
    sling3 = new Sling(bob3,{x:300,y:80});
    sling4 = new Sling(bob4,{x:350,y:80});
    sling5 = new Sling(bob5,{x:400,y:80});

}
function xdraw(){
    console.log("executing draw function");

    background("grey");
    
    Engine.update(engine);

    bob1.display();
}
function mouseDragged(){
    console.log("Mouse dragged funtion called");
    Matter.Body.setPosition(bob1.body,{x:mouseX, y: mouseY});
}
function draw(){
    background(backGroundImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}