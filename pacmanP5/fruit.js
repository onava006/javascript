class Fruit extends Elemento{
    constructor(posx,posy,instantiate){
        super(posx,posy);
        this.instantiate = instantiate;
    }

    show(){
        if(this.instantiate == true){
            fill(255);
            stroke(255);
            rectMode(RADIUS); 
            fill(0,0,Math.round(random(255)));       
            rect(this.x,this.y, 15, 15);
            rectMode(CENTER);
            fill(Math.round(random(255)),Math.round(random(255)),Math.round(random(255)));        
            ellipse(this.x,this.y, 15);
        }
}
}
