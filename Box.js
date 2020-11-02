class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //we write push and pop so that changes dont apply to the entire game
      push();
      //remap the box position on the canvas and hence put 0,0 for x,y in rect()
      translate(pos.x, pos.y);
      //rotate the boxes with an angle
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      //rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }