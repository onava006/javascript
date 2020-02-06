function mapa(place){
    this.place = place;

    this.displayworld = function(){
        
        {
            let posx = 0;
            var posy = 0;
            for(var i = 0; i < this.place.length; i++ ){
                for(var j = 0; j < this.place[i].length; j++){
                    var b = new component(posx,posy,elements[place[i][j]]); 
                    posx+= 21;      
                    field.push(b);            
                }
                posx = 0;                
                posy += 21;             
            }                
                
            
        }
    }
}
