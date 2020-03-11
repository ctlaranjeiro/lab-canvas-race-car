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

      //obstacles
      this.obstacles = [];

      //animation
      this.animationId;
      this.frame = 0;

      //game running
      this.gameOn = true;

      //score
      this.score = 0;
    }

    start(){
        this.reset();
        this.animation();
        setInterval (() => {
            this.score += 1;
        }, 1000);
    }
    
    draw(){
        this.background.drawBackground();
        this.player.drawPlayer();
        //obstacles 
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].drawObstacle();
        }
    }

    update(){
        this.frame++;

        this.context.save();
        this.context.fillStyle = "white";
        this.context.font = "20px Arial";
        this.context.fillText(`Score: ${this.score}`, 80, 30);
        this.context.restore();

        this.player.update();
        if(this.frame % 100 === 0){
            this.obstacles.push(new Obstacle(this));
        }
        
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].update();
            
            if(this.obstacles[i].y + this.obstacles[i].height < 0){
                this.obstacles.shift();
            }

            if(this.player.crashWith(this.obstacles[i])){
                this.gameOver();
            };
        }
    }

    animation(){
        this.animationId = window.requestAnimationFrame(() => {
            this.animation();
        });

        this.draw();
        this.update();
    }

    gameOver(){
        window.cancelAnimationFrame(this.animationId);
        //console.log("GAME OVER!");

        //GAME OVER window
        this.context.fillRect(0, 0, this.width, this.height);

        this.context.save();
        this.context.fillStyle = "red";
        this.context.font = "30px Arial";
        this.context.fillText("GAME OVER!", (this.width/3), this.height / 2.5);
        this.context.restore();

        this.context.save();
        this.context.fillStyle = "white";
        this.context.font = "20px Arial";
        this.context.fillText("Your final score", this.width/2.55, this.height/2);
        this.context.restore();

        this.context.save();
        this.context.fillStyle = "white";
        this.context.font = "20px Arial";
        this.context.fillText(`${this.score}`, this.width/2, this.height/1.85);
        this.context.restore();
    }

    reset(){
        this.player = new Player(this);
        this.player.setControls();
        this.obstacles = [];
        this.frame = 0;
        this.gameOn = true;
    }
  }
  