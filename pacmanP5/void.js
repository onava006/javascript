class Void extends Elemento{
    constructor(posx,posy,element){
        super(posx,posy,element);
    }  

    show(){
        stroke(0);
        fill(0);    
        square(this.x,this.y,50);
    }
}