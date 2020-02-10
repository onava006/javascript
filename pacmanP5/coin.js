class Coin extends Elemento{
    constructor(posx,posy,instantiate){
        super(posx,posy);
        this.instantiate = instantiate;
    }

    show(){
        if(this.instantiate == true){
            stroke(255,255,0);
            fill(Math.round(random(180,255)),Math.round(random(180,255)),0);
            ellipse(this.x,this.y,15);
        }
    }
}