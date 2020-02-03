/* desafío 1 */

function grande(array){
    for(var i = 0; i < array.length; i++){
        if(array[i]>0){
            array[i]= 'grande';
        }
    }
    return array;

}
var arreglon = [1,-2,3,-4,56,6,-7];
console.log(grande(arreglon));

/* desafío 2 */

function printreturn (array){
    var max = array[0];
    var min = array[0];
    for(var i = 0 ; i < array.length; i++){
        if (array[i]> max){
            max = array[i];
        }
        if(array[i]<min){
            min = array[i];
        }
    }
    console.log(min);
    return(max);
}

var arreglon = [1,-2,3,-4,56,6,-7];
console.log('el mas mayor de los mayores es '+printreturn(arreglon));

/* desafío 3 */


function printreturn (array){
   var impar;
   console.log(array[array.length-2]);
   for(var i = 0; i < array.length; i++){
       if(array[i]%2 ==1 ){
        return array[i];
       }
   }    
}
var arreglon = [4,-2,3,-4,56,6,-7];
console.log('el primer valor impar es', printreturn(arreglon));

/* desafío 4 */

function newdoueblearray(array){
    var newarray = array.map(function(x){
        return x * 2;
    });
    console.log('el array antiguo es '+ array);
    return newarray;
}
var arreglon = [4,-2,3,-4,56,6,-7];
console.log(newdoueblearray(arreglon));

/* desafío 5 */

function countpositives(array){
    var counter = 0; 
    for (var i = 0; i < array.length; i++){
        if(array[i]>0){
            counter++;
            console.log(counter);
        }
        
    }
    array[array.length-1] = counter;
    return array;
}
var arreglon = [4,-2,3,-4,56,6,-7];
console.log(countpositives(arreglon));

/* desafío 6 */

function parimpar(array){
    var imparcounter = 0;
    var parcounter = 0;
    var frases = ['¡Qué imparcial!','¡Es para bien!'];
      
    for(var i = 0; i < array.length; i++){   
        if(array[i]%2 === 0){        
            parcounter++;
            imparcounter = 0;
        }
        else{
            imparcounter++;
            parcounter = 0;
        }
        if (imparcounter == 3){
            console.log(frases[0]);
            imparcounter = 0;
        }
        else if(parcounter == 3){
            console.log(frases[1]);
            parcounter = 0;
        }
    }
    }
    var arreglen = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
    parimpar(arreglen);

/* desafío 7 */


function incrementsegundos(array){  
    
    var newarray = array;
    for(var i = 0; i < newarray.length; i+=2){
        newarray[i] = array[i] + 1;     
         
    }
    return newarray;
}
var arreglen = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
console.log(incrementsegundos(arreglen));

/* desafío 8 */

function lengthprevious(array){
    var newarray = array;
    for(var i = array.length-1; i >=1 ; i--){
      
      newarray[i] = array[i-1].length;  
      console.log(newarray[i]);
    }
    return newarray;
}
var arreglazo = ['coding', 'dojo', 'perrite','texto','ejemplo','miau'];
console.log(lengthprevious(arreglazo));

/* desafío 9 */

function acgregasiete(array){
    var newarray = [];
    for ( var i = 0; i < array.length; i++){
        newarray[i] = array[i] + 7;
    }
    console.log('el arreglo anterior era '+array);
    return newarray;

}
var arreglon = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
console.log(acgregasiete(arreglon));

/* desafío 10 */

/* Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores). */


function intercambiarvalores(array){
    var arraytemp;
        for(var i = 1; i < array.length/2; i ++){
            
            arraytemp = array[array.length - i];
            array[array.length - i] = array[i -1];
            array[i -1] = arraytemp;
          
            console.log(arraytemp);
        }
        return array;
        }
        var arreglon = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
        console.log(intercambiarvalores(arreglon));

/* desafío 11 */
function negatron(array){
    for(var i =0; i < array.length; i++){
        if(array[i] > 0){
        array[i] -= array[i]*2;
        }
    }
    return array;

    }

    var arreglon = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
    console.log(negatron(arreglon));

/* desafío 12 */

    function hungryguy(array){
        var claim = true;
        for(var i = 0; i < array.length; i ++){
            if(array[i] == "comida"){
                console.log('yummy');
                claim = false;
            }
            if(claim){
                console.log('tengo hambre');
            }
        }
    }
    var arreglazo = ['coding', 'dojo', 'perrite','texto','ejemplo','miau'];
    hungryguy(arreglazo);
    var arreglazo2 = ['coding', 'dojo', 'comida','texto','ejemplo','miau'];
    hungryguy(arreglazo2);
/* desafío 13 */

    function haciaelcentro(array){
        var arraytemp;
            for(var i = 1; i < array.length/2; i ++){
                
                arraytemp = array[array.length - i];
                array[array.length - i] = array[i -1];
                array[i -1] = arraytemp;
            }         
                console.log(array);
            }
            var arreglon = [true, 42, 'Ada', 2, 'pizza'];
            haciaelcentro(arreglon);

/* desafío 14 */

    function multiply(array,m){
        for(var i = 0; i < array.length; i++){
            array[i] *= m; 
        }
        return array;
    }
    var arreglon = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
    var value = 3
        console.log(multiply(arreglon, value));

/*  desafios listos */
