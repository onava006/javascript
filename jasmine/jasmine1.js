function secondelement(array){
   
    var max = [56,5];
    if(array.length <= 2){
        return null;
    } else {
        for(var i = 1; i < array.length; i++){
            if(array[i]> max[0] )
            {
                max[0] = array[i];

                if(max[0]>=max[1])
                {
                    var temp = max [0];
                    max[0] = max[1];
                    max[1] = temp;  
                    console.log('previo ', max[0]);
                    console.log('maximo maximo',max[1]);              }
                }
            }
        }
        return max[0];
}


describe('Este es el grupo de prueba', () => {
    it('deberia imprimir 57', () => {
        var arreglon = [1,-3,5,-4,56,6,9,-1,3,-7,66,1,2,72,4,-2,57,6,-7];

        expect(secondelement(arreglon)).toBe(66);
    });
    
});