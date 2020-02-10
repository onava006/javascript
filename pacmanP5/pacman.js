function pacman(bod){
    this.x = 100;
    this.y = 100; 
    this.xspeed = 0;
    this.yspeed = 0;
    this.delta = 2; 
    this.bod = bod;
    this.i = 1.85;
    this.xx = 0.2;
    this.speed = 0.04; 

    this.update = function(){
        this.x = (this.x + this.xspeed);
        this.y = (this.y + this.yspeed);     
    }
    this.dir = function(xspeed , yspeed){
        this.xspeed = xspeed * this.delta;
        this.yspeed = yspeed * this.delta;
    }

    this.show = function(){ 

        var posVidas = 0;
        for (var i = 0; i <= vidas; i++){
            fill(255, 0, 0);
            ellipse(50 ,100 + posVidas, 10);  
            posVidas += 50;
        }

        if(vidas < 0){
            score = 0;
        }

        if(this.xspeed > 0){
            fill(255, 255, 0);
            ellipse(this.x ,this.y, 30);        
            fill(0, 0, 0, 255); 
            if (this.i >= 2 || this.i <= 1.8) {
                this.speed = this.speed*(-1); 
            }
            arc(this.x +2 ,this.y, 25, 25, (this.i+=this.speed)*PI, (this.xx-=this.speed)*PI, PIE);        
            ellipse(this.x +2 ,this.y - 6 , 5, 5);
        }

        if(this.xspeed < 0){
            fill(255, 255, 0);
            ellipse(this.x ,this.y, 30);        
            fill(0, 0, 0, 255); 
            if (this.i >= 2 || this.i <= 1.8) {
                this.speed = this.speed*(-1); 
            }
            arc(this.x - 2,this.y, 25, 25, (this.i+=this.speed)*PI+PI,(this.xx-=this.speed)*PI+PI,  PIE);        
            ellipse(this.x -2 ,this.y - 6 , 5, 5);
        } 
        
        if(this.yspeed > 0){
            fill(255, 255, 0);
            ellipse(this.x ,this.y, 30);        
            fill(0, 0, 0, 255); 
            if (this.i >= 2 || this.i <= 1.8) {
                this.speed = this.speed*(-1); 
            }
            arc(this.x  ,this.y +2 , 25, 25, (this.i+=this.speed)*PI+PI/2,(this.xx-=this.speed)*PI+PI/2, PIE);        
            ellipse(this.x +5 ,this.y + 5 - 6 , 5, 5);
        }

        if(this.yspeed < 0){
            fill(255, 255, 0);
            ellipse(this.x ,this.y, 30);        
            fill(0, 0, 0, 255); 
            if (this.i >= 2 || this.i <= 1.8) {
                this.speed = this.speed*(-1); 
            }
            arc(this.x  ,this.y -2 , 25, 25, (this.i+=this.speed)*PI-PI/2,(this.xx-=this.speed)*PI-PI/2, PIE);        
            ellipse(this.x -6 ,this.y - 3  , 5, 5);
        }
        else if (this.xspeed === 0 && this.yspeed < 1){
            fill(255, 255, 0);
            ellipse(this.x ,this.y, 30);        
            fill(0, 0, 0, 255); 
            arc(this.x +2 ,this.y, 25, 25, 2*PI-QUARTER_PI, 2*PI+QUARTER_PI, PIE);        
            ellipse(this.x +2 ,this.y - 6 , 5, 5);
        }

        textSize(20);
        fill(255);
        textFont('Courier New');
        text('P1 Score:   '+score, 100, 60);

        
    }
    
    this.interaction = function(){
        for(var i = 0; i < worldcreated.length; i++ ){      

            for(var j = 0; j < worldcreated[0].length; j++){  
                if(dist(this.x,this.y,worldcreated[i][j].x,worldcreated[i][j].y) < 42 && worldcreated[i][j] instanceof Brick ){                
                    tempX = -pressX;
                    tempY = -pressY;
                    this.dir(tempX,tempY);
                    pressX = tempX;
                    pressY = tempY;    
                }   
                if(dist(this.x,this.y,worldcreated[i][j].x,worldcreated[i][j].y) < 20 && worldcreated[i][j] instanceof Coin ){
                     
                      if(worldcreated[i][j].instantiate == true){
                        score += 10; 
                      }           
                    worldcreated[i][j].instantiate = false;
                }
               
                if(dist(this.x,this.y,worldcreated[i][j].x,worldcreated[i][j].y) < 20 && worldcreated[i][j] instanceof Fruit ){
                    if(worldcreated[i][j].instantiate == true){
                        score += 50; 
                      }           
                    worldcreated[i][j].instantiate = false;
                }
                
            }     
        }
            var vidon = 4;
            if(dist(this.x,this.y,fan1.x,fan1.y) < 5){
              
                setTimeout(quitarvida, 1000);
            }
            function quitarvida(){w
                vidas --;
            } 
        }



    }
