class Background{
    constructor(game){
        this.context = game.context;
        this.width = game.width;
        this.height = game.height;
        this.image = new Image();
        this.image.src = "/images/road.png";
    }

    drawBackground(){
        //this.context.fillRect(0, 0, this.width, this.height);
        this.context.drawImage(this.image, 0, 0, this.width, this.height)
    }
}