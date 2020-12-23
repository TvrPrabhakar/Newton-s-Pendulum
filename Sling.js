class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointB = pointB;
        console.log("bodyA contains "+bodyA.x+" "+bodyA.y+bodyA.position);

        console.log("pointB contains "+pointB.x+pointB.y);
        console.log("bodyA.x = "+bodyA.x);

        this.pointX = bodyA.x;
        console.log(this.pointX);
        this.pointY = bodyA.y-250;
        this.position=pointB.position;

        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        //if there is a body attached to the sling
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            //strokeColor("black");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }

    }
}