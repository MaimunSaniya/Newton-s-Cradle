class Bob {
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 0.055
      }

      this.body = Bodies.circle(x, y,20,options);
          
      this.width = 20;
      this.height = 20;
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      push();
      translate(pos.x,pos.y);

      fill("red");
        
      ellipseMode(RADIUS);
      ellipse(0, 0,this.width,this.height);

      pop();
    }
  };