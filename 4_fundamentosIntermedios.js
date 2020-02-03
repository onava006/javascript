/* desafio 1 */
/*Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/

function sigma(n){
    var sigmavar = 0;
    for(var i = 1; i <= n; i++){
        sigmavar += i;
    }
    return sigmavar;
}
var n = 6;

console.log(sigma(n));

/* desafio 2 */
/*Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5). */
function factorial(n){
    var factvar = 1;
    for(var i = 1; i <= n; i++){
        factvar *= i;
    }
    return factvar;
}
var n = 6;

console.log(factorial(n));

/* desafio 3 */
/*Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad.  */

function fibonacci(n){
    var initvalues = [0,1];
    for(var i = 0; i < n; i++){
        var a = initvalues[initvalues.length-1];
        var b = initvalues[initvalues.length-2];
        initvalues.push(a+b)
    }
    return initvalues[initvalues.length-1];
}
    var n = 20;
    console.log(fibonacci(n)); 

/* desafio 4 */
/* Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null. */

function lastelement(array){
    
    if(array.length <= 2){
        return null;
    } else {
        return array[array.length -2];
    }
}

var arreglazo = ['coding', 'dojo', 'perrite','texto','ejemplo','miau'];
console.log(lastelement(arreglazo));

var arreglazo = ['coding', 'dojo'];
console.log(lastelement(arreglazo));

/* desafio 5 */
/* Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. Si el array es muy pequeño, devuelve null. */

    function nultimo(array,n){
        if(array.length - n <= 2){
            return null;
        } else {
            return array[array.length - n];
        }       
    }
    var arreglen = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
    var n = 19;
    console.log(nultimo(arreglen,n));

/* desafio 6 */
/* Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.*/

function secondelement(array){
    var arrayin = [];
    var max = array[0];
    if(array.length <= 2){
        return null;
    } else {
        for(var i = 1; i < array.length; i++){
            if(array[i]> max ){
                arrayin[0] = max;
                arrayin[i] = array [i];
                max = array[i];
            }
        }
        return arrayin[0];
}
}
var arreglon = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,56,6,-7];
console.log(secondelement(arreglon));

/* desafio 7 */
/* Doble Problema: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false] a [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
 */

 function duplicate(array){
    var arraytemp = [];
    var p= 0;
    for(var i = 0; i <= array.length*2; i+=2){
        arraytemp[i] = array[p];
        arraytemp[i+1] = array[p];
        p++;
    }
    return arraytemp;
 }
var arreglon = [1,-3,5,-4];
console.log(duplicate(arreglon));


/* fibonacci recursivo  */


function fib(n){
    if(n < 2){
        return n;
    }
    console.log(fib(n-1)+fib(n-2));
    return fib(n-1)+fib(n-2);
}

fib(20);



