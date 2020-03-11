class Player{
    constructor(game){
        this.context = game.context;

        this.gameWidth = game.width;
        this.gameHeigth = game.height;
        
        this.width = 158 / 3;
        this.height = 319 / 3;
        
        this.x = game.width - (game.width + this.width) / 2;
        this.y = game.height - (game.height + this.height) / 5;

        this.image = new Image();
        this.image.src = "/images/car.png";

        this.speed = 0;
    }
    
    drawPlayer(){
        //this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(){
        this.x += this.speed;
    }
    
    setControls(){
        window.addEventListener("keydown", event => {
            switch(event.keyCode){
                case 39: //right key
                if (this.x < this.gameWidth - (this.width + 60)){  // 60 sets the road limits
                    this.speed = 2;
                    //console.log(this.x);
                } else{
                    this.speed = 0;
                }
                break;
                case 37: //left key
                if (this.x > 60){   // 60 sets the road limits
                    this.speed = -2;
                    //console.log(this.x);
                } else{
                    this.speed = 0;
                }
                break;
            }
            //console.log(this.x);
        });

        window.addEventListener("keyup", event => {
            this.speed = 0;
        });
    }


    //obstacle limits
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
    
    crashWith(obstacle) {
        return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right()
        );
    }
}