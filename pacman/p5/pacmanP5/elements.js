var component = function(posx,posy,element){
    this.x = posx;
    this.y = posy;    
    this.element = element;
}
var show = function(){
    imageMode(CENTER);
    image(this.element,this.x,this.y,20,20);
}

