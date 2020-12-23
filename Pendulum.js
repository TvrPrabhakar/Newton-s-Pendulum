class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution: 1,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
            
            
            //showCollisions: true,
            //showDebug:true

            //density: Infinity
           /* showBounds: false,
            showVelocity: false,
            showCollisions: true,
            showSeparations: false,
            showAxes: false,
            showPositions: false,
            showAngleIndicator: false,
            showIds: false,
            showShadows: false,
            showVertexNumbers: false,
            showConvexHulls: false,
            showInternalEdges: false,
            showMousePosition: false*/
        }
        this.body = Bodies.rectangle(x,y,40,40,color,options);
        //adding x, y and color to the pendulum
        this.x=x;
       // console.log(this.x);
        this.y=y;
//        this.
        //this.position={x,y};
        this.color=color;
        //to add the pendulum body to physics engine
        console.log(this.position)
        World.add(world,this.body)
        
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        //strokeColor("black");
        fill(this.color);
        //ellipseMode(CENTER);
        ellipse(0,0,60,60);
        pop();
    }
}