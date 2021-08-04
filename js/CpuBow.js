class CpuBow {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height);
      this.image = loadImage("./assets/computerArcher.png");
    }
    display() {
      if (keyIsDown("p") && this.angle < 0.35) {
        this.angle += 0.02;
      }
  
      if (keyIsDown("q") && this.angle > -1.45) {
        this.angle -= 0.02;
      }
      
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
 
    }
}