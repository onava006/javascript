class Brick extends Elemento{
    constructor(posx,posy,element){
        super(posx,posy,element);
    }

    show(){
        rectMode(CENTER); 
        stroke(0,0,255);
        fill(0,0,255);    
        square(this.x,this.y,50);
    }

}