class Game{
    constructor(canvas){
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
  
      //---------referencing the game inside the other classes
      //background
      this.background = new Background(this);
      
      //player
      this.player = new Player(this);
      this.player.setControls();
    }

    start(){
        this.animation();
    }
    
    draw(){
        this.background.drawBackground();
        this.player.drawPlayer();
    }

    update(){
        this.player.update();
    }

    animation(){
        this.draw();
        this.update();
    }
  }
  