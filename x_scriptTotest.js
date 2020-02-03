let test = function(arr){
    for (var i = 0; i< arr.length; i++){
        arr[i] *= 2;
        }
        return arr;
    }


describe('aqui metemos los valores de prueba', () =>{
    it('si yo meto un valor deberia multiplicarlo por dos', () => {
        let arreglon = [1,2,3,4];

        expect(test(arreglon)).toEqual([2,4,6,8]);
    })
})

// describe('esto es otra repeticion', () => {
//     it('acá están los valores de lo que voy a hacer', () => {

//         expect(test(arreglon).)
//     })
// })