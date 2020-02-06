function pacman(bod){
    this.x = 20;
    this.y = 20; 
    this.xspeed = 1;
    this.yspeed = 0;
    this.delta = 4; 
    this.bod = bod;

    this.update = function(){
        this.x = (this.x + this.xspeed);
        this.y = (this.y + this.yspeed);   
        this.x = constrain(this.x, 0, size[1]);  
        this.y = constrain(this.y, 0, size[1]);    
    }
    this.dir = function(xspeed , yspeed){
        this.xspeed = xspeed * this.delta;
        this.yspeed = yspeed * this.delta;
    }

    this.show = function(){ 
        imageMode(CENTER);       
        image(this.bod,this.x,this.y,50,50);
    }
    
    this.rotation = function(angleupdown,angleside){
        this.angleupdown = angleupdown;
        this.angleside = angleside;
        
    }
}