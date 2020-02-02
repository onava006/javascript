// vamos a hacer la tarea de objetos 


let professor = function(name,age){
    this.name = name; 
    this.age = age; 
}


let prof1 = new professor('Michael', 37);
let prof2 = new professor('John', 30);
let prof3 = new professor('David', 27); 

var profesores = [prof1,prof2,prof3];

for(profes in profesores){
    console.log(profesores[profes]);
}
