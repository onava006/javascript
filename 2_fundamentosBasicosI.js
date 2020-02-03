/* desafío 1*/

    function oneto255(){
        var array = [];
        for(var i = 0; i < 256; i++){
            array.push(i);

        }
        return array;
    }

    console.log(oneto255());

/* desafío 2 */

function pairto1000(){
    var sum = 0;
    for(var i = 0; i < 1001; i++){
        if(i % 2 == 0){
            sum += i;
        }
    return sum;
    }
}
/* desafío 3 */

    function oddto5000(){
        var limit = 5000;
        var sum = 1;
        var i = 0;
        while(i != limit){
            if ( i % 2 == 1){
                sum += i;
            }
            i++;
        }
        return sum;
    }
    console.log(oddto5000());

/* desafío 4 */

    function iteratearray(array){
        var sum = 0; 
        for(var i = 0; i < array.length; i++){
            sum += array[i];
        }
        return sum;

    }
    var arreglon = [1,2,3,4,56,6,7];
    console.log(iteratearray(arreglon));

/* desafío 5 */

    function max(array){
        var max = array[0];

        for (var i = 0 ; i < array.length; i++){
            if(array[i]>max){
                max = array[i];
            }
            return max;
        }
        var arreglon = [1,2,3,4,56,6,7];
        console.log(max(arreglon));
}

/* desafío 6 */

    function maximum(array){
        var max = array[0];

    for (var i = 0 ; i < array.length; i++){
            if(array[i]>max){
            max = array[i];
        }                
    }
    return max;
    }
        var arreglon = [1,2,3,4,56,6,7];
        console.log(maximum(arreglon));
/* desafío 7 */

    function avg(array){
        var average = array[0];
        for(var i = 1; i < array.length; i ++){
            average += array[i];
        }
        average /= array.length;
    return average;
    }
    var arreglon = [1,2,3,4,56,6,7];
        console.log(avg(arreglon));

/* desafío 8 */

function mayorquey(array,Y){
    var count = 0; 

    for(var i = 0 ; i < array.length;i++){
        if(array[i]> Y){
            count++;
        }
    }
    return count;
}
    var arreglon = [1,2,3,4,56,6,7];
    var igriega = 3;
    console.log(mayorquey(arreglon, igriega));

/* desafío 9 */

    function cuadrados(array){
        for(var i = 0; i < array.length; i++ ){
            array[i] *= array[i]; 
        }
        return array;
    }
    var arreglon = [1,2,3,4,56,6,7];
    console.log(cuadrados(arreglon));

/* desafío 10 */

    function negatozero(array){
        for(var i= 0; i < array.length; i++){
            if(array[i]<0){
                array[i]=0;
            }
        }
        return array;
    }
    var arreglon = [1,-2,3,-4,56,6,-7];
    console.log(negatozero(arreglon));
    
/* desafío 11 */

    function minmaxavg(array){
        var min = array[0];
        var max = array[0];
        var avg = 0; 
        for(var i = 0; i < array.length; i++){
            if(array[i]< min){
                min = array[i];
            }
            if(array[i]>max ){
                max = array[i];
            }
            avg += array[i];
        }
        avg /= array.length;
        var arrayon = [min, max, avg];
        return arrayon;
    }
    var arreglon = [1,-2,3,-4,56,6,-7];
    console.log(minmaxavg(arreglon));

/* desafío 12 */

    function changevalues(array){
        var swap = array[0];
        array[0] = array[array.length-1];
        array[array.length-1] = swap;
        return array;
    }
    var arreglon = [1,-2,3,-4,56,6,-7];
    console.log(changevalues(arreglon));

/* desafío 13 */

    function dojotonega(array){
        for(var i= 0; i < array.length; i++){
            if ( array[i] < 0){
                array[i]  = 'Dojo';
            }
        }
        return array;
    }
    var arreglon = [1,-2,3,-4,56,6,-7];
    console.log(dojotonega(arreglon));