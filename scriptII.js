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
    for(var i = 0, j = 1; i < array.length; i++, j+=2){
        array[j] += 1;
        console.log(array[i]);
    }
    return array;
}
var arreglen = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
    incrementsegundos(arreglen);

/* desafío 8 */

function incrementsegundos(array){  
    var j = 1;
    for(var i = 0; i < array.length; i++){
        array[j] = array[j] + 1;     
        console.log(array[i]);
        j = j + 2;
    }
    return array;
}
var arreglen = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
console.log(incrementsegundos(arreglen));

/* desafío 9 */


/* desafío 10 */


/* desafío 11 */


/* desafío 12 */


/* desafío 13 */