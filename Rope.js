class Rope{
    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
        }

        this.body = Matter.Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        
        World.add(world,this.body);

    }

    display(){
        var pointA = this.body.bodyA.position;

        var pointB = this.pointB;

        stroke("black");
        strokeWeight(2);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}