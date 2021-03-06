class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20); //using the first 3 parameters- (img, xpos, ypos)
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(84,39,15) //rgb(84,39,15)
            strokeWeight (8);
            if(pointA.x<220){

            
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20,pointA.y, pointB.x-10, pointB.y );
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3, pointA.x-30, pointA.y-10, 15, 30)//using 5 parameters-(img, xpos, ypos, width, height)
        }
        else{ //line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x+25,pointA.y, pointB.x-10, pointB.y );
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3, pointA.x+25, pointA.y-10, 15, 30)//using 5 parameters-(img, xpos, ypos, width, height)}
    }
    
}}}