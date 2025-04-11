class Player{
    constructor(){
        this.width=10;
        this.height=5;
        this.positionX= 20;
        this.positionY= 0;
        this.updateUI();

    }
    updateUI(){
        const playerElm=document.getElementById("player");
        playerElm.style.width= `${this.width}vw`;
        playerElm.style.height= `${this.height}vw`;
        playerElm.style.left = `${this.positionX}vw`;
        playerElm.style.bottom= `${this.positionY}vh`
    
    }

    moveLeft(){
        this.positionX--;
        this.updateUI();
    
    }


    moveRight(){
        this.positionX++;
        this.updateUI();

    }
}

class Obstacle{
    constructor(){
        this.width=15;
        this.height=5;
        this.positionX= Math.floor(Math.random()*(100-this.width+1));
        this.positionY= 100;
        this.obstacleElm= null;
        this.creatDomElement();
        this.updateUI();

    }
    creatDomElement(){
        this.obstacleElm= document.createElement("div")
        this.obstacleElm.className= "obstacle"
        const parentElm= document.getElementById("board")
        parentElm.appendChild(this.obstacleElm)
    }
    updateUI(){
        //const ObstacleElm=document.getElementsByClassName("obstacle");
        this.obstacleElm.style.width= `${this.width}vw`;
        this.obstacleElm.style.height= `${this.height}vw`;
        this.obstacleElm.style.left = `${this.positionX}vw`;
        this.obstacleElm.style.bottom= `${this.positionY}vh`
        
    }

    moveDown(){
        this.positionY --;
        this.updateUI();
    }
    
}

const player = new Player()
const obstacleArr= [];

setInterval(() => {
   const newObstacle = new Obstacle();
   obstacleArr.push(newObstacle);
}, 3000);


setInterval(()=>{
    obstacleArr.forEach((obstacleInstance)=> {
        obstacleInstance.moveDown();

    })
}, 50)



document.addEventListener("keydown", (e)=>{
    if (e.code=== 'ArrowLeft'){
        player.moveLeft();
    }
    else if (e.code==='ArrowRight'){
        player.moveRight();
    }

})