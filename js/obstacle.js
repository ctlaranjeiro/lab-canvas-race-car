class Obstacle{
    constructor (game){
        this.context = game.context;
        this.width = Math.floor(Math.random() * 90) + 90;
        this.height = 30;
        this.x = Math.floor(Math.random() * game.width);
        this.y = 0;
        this.speed = 2;
    }

    drawObstacle(){
        this.context.save();
        this.context.fillStyle = "red";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }

    update(){
        this.y += this.speed;
    }

    // obstacle limits
    left() {
        return this.x;
    }
    
    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }
}