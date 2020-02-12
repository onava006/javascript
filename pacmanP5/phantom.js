class phantom extends Personaje
{
    constructor(x,y,bod){
        super(x,y,);
        this.xspeed = 2;
        this.yspeed = 0;
        this.delta = 1;
        this.x = 400;
        this.y = 350; 
        this.bod = bod; 
    }   

    show(){
        fill(Math.round(random(255)),0,0);
        ellipse(this.x ,this.y ,30);
    }

    update(){
        this.x = (this.x + this.xspeed);
        this.y = (this.y + this.yspeed);     
    }

    movement(){                  
        for(var i = 0; i < worldcreated.length; i++ ){    
            for(var j = 0; j < worldcreated[0].length; j++){  
                if(dist(this.x,this.y,worldcreated[i][j].x,worldcreated[i][j].y) < 42 && worldcreated[i][j] instanceof Brick ){                     
                    let phanX = -this.xspeed;
                    let phanY = -this.yspeed;
                    this.dir(phanX,phanY);
                    this.xspeed = phanX;
                    this.yspeed = phanY;
                } 
            }   
        }

        if (Math.round(this.x/scala) == this.x/scala && Math.round(this.y/scala) == this.y/scala){
            let min = 0;
            let max = 3;
            let random1 = Math.round(Math.random() * (+max - +min) + +min);
            let random2 = Math.round(Math.random() * (+max - +min) + +min);

            this.dir(this.xspeed,this.yspeed); 
            
            if(random1 == random2){
                let temp = this.xspeed;
                this.xspeed = this.yspeed;
                this.yspeed = temp;
            }                       
        }         
                         
    } 
}




