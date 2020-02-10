class Personaje{
    constructor(x,y,bod){
        this.x = x;
        this.y = y;
        this.bod = bod;
        this.delta;
    }

    dir(xspeed , yspeed){
        this.xspeed = xspeed * this.delta;
        this.yspeed = yspeed * this.delta;
    }
}