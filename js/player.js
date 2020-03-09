class Player{
    constructor(game){
        this.context = game.context;
        
        this.width = 158 / 3;
        this.height = 319 / 3;
        
        this.x = game.width - (game.width + this.width) / 2;
        this.y = game.height - (game.height + this.height) / 5;

        this.image = new Image();
        this.image.src = "/images/car.png";

        this.speedX = 0;
        this.speedY = 0;
    }
    
    drawPlayer(){
        //this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    setControls(){
        window.addEventListener("keydown", event => {
            switch(event.keyCode){
                case 39: //right key
                    this.speedX = 2;
                    break;
                case 37: //left key
                    this.speedX = -2;
                    break;
            }
            console.log(this.speedX, this.speedY);
        });

        window.addEventListener("keyup", event => {
            this.speedX = 0;
            this.speedY = 0;
        });
    }
}