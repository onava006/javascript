var pac;
var escenario; 
var bod;
var field = [];
var elements = [];

var size = [600,600];
function preload(){

    bod = loadImage("images/pacman.gif");
    elements[0] = loadImage("images/coin-logo.gif");
    elements[1] = loadImage("images/loader2.gif");
    elements[2] = loadImage("images/squareframe.gif");
    elements[3] = loadImage("images/pacman.gif");
    elements[4] = loadImage("images/rasp.gif");
    
}
function setup() {

    createCanvas(size[0],size[1]);    
    escenario = new mapa([
        [2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2],    
        ]);
        escenario.displayworld(); 
        
        frameRate(15);
        pac = new pacman(bod);    
}

function draw() {
    background(222,0,222);    

    for(var i = 0; i < field.length; i++ ){
        field[i].show();

    }

    pac.update();
    pac.show();    
}

function keyPressed(){
    if(keyCode === ENTER){
        console.log("pico");
        
    }
    if(keyCode === UP_ARROW){
        pac.dir(0,-1);        
    }
    if(keyCode === DOWN_ARROW){
        pac.dir(0,1);
    }
    if(keyCode === RIGHT_ARROW){
        pac.dir(1,0);
    }
    if(keyCode === LEFT_ARROW){
        pac.dir(-1,0);
    }
}