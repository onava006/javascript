var pac, bod;
var scala = 50;
var escenario; 
var field = [];
var elements = [];
var size = [];
var enviroment;
var worldcreated;
var pressX = 1;
var pressY = 0;
var press2X = 1;
var press2Y = 0;
var tempX = pressX;
var tempY = pressY;
var temp2X = pressX;
var temp2Y = pressY;
var score = [0,0];
var score2 = [0,0];
var vidas = 150;
var vidas2 = 150;


function setup() {
    elements = ['Brick','Coin','Void','Fruit'];
    // angleMode(DEGREES);
    pac = new pacman();
    pac2 = new pacman2();
    var enviroment = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
        [2,0,2,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
        [2,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,2],
        [2,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,2],
        [2,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,2],
        [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
        [2,0,1,0,1,0,1,0,3,0,1,0,1,0,1,0,2],
        [2,0,1,0,1,0,1,0,2,0,1,0,1,0,1,0,2],
        [2,0,1,1,1,1,1,1,2,1,1,1,1,1,1,0,2],
        [2,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,2],
        [2,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,2],
        [2,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,2],
        [2,0,1,1,1,1,1,1,1,1,1,1,1,1,2,0,2],
        [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2], 
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],   
        ];   

    size[0] = enviroment[1].length * scala-25;
    size[1] = enviroment.length*scala-25;

    escenario = new mapa(enviroment);
    createCanvas(size[0],size[1]); 
    escenario.displayworld();       
    
    fan1 = new phantom();
    fan2 = new phantom2();
    fan3 = new phantom2();
    fan4 = new phantom();
    fan5 = new phantom();
    fan6 = new phantom2();
    fan7 = new phantom2();
    fan8 = new phantom();
}

function draw() {
    background(0);

    for(var i = 0; i < worldcreated.length; i++ ){
        for(var j = 0; j < worldcreated[1].length;j++){
            worldcreated[i][j].show();
        }
    }
    pac.update();
    pac.show(); 
    pac2.update();
    pac2.show(); 
    
    fan1.update();
    fan1.show();
    fan2.update();
    fan2.show();   
    fan3.update();
    fan3.show();
    fan4.update();
    fan4.show();
    fan5.update();
    fan5.show();
    fan6.update();
    fan6.show();   
    fan7.update();
    fan7.show();
    fan8.update();
    fan8.show();

    pac.interaction();
    pac2.interaction();

    fan1.movement();    
    fan2.movement();   
    fan3.movement();   
    fan4.movement();
    fan5.movement();    
    fan6.movement();   
    fan7.movement();   
    fan8.movement();      
}

function keyPressed(){   

    if(keyCode === UP_ARROW ){
        pressX = 0;
        pressY = -1; 
    }
    if(keyCode === DOWN_ARROW){       
        pressX = 0;
        pressY = 1;  
    }
    if(keyCode === RIGHT_ARROW){        
        pressX = 1;
        pressY = 0;      
    }
    if(keyCode === LEFT_ARROW){
        pressX = -1;
        pressY = 0;     
    }
    if(keyCode === 87){
        press2X = 0;
        press2Y = -1; 
    }
    if(keyCode === 83){       
        press2X = 0;
        press2Y = 1;  
    }
    if(keyCode === 68){        
        press2X = 1;
        press2Y = 0;      
    }
    if(keyCode === 65){
        press2X = -1;
        press2Y = 0;     
    } 
}
