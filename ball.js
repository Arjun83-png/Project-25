class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.4,
            friction: 0.5, 
            density: 0.8
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
    
        ellipseMode(RADIUS);
        image(this.image, 0, 0, 50, 60);
       
    }

    }
