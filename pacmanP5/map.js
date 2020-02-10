function mapa(place){
    this.place = place;

    this.displayworld = function(){
        worldcreated=place;        
        {
            let posx = 0;
            let posy = 0;

            for(var i = 0; i < this.place.length; i++ ){       

                for(var j = 0; j < this.place[0].length; j++){   
                                      
                    switch(elements[[this.place[i][j]]]){
                        case ('Brick'):                            
                            var a = new Brick(posx,posy);
                            worldcreated[i][j] = a;                           
                            break;
                        case ('Coin'):                          
                            var a = new Coin(posx,posy,true);
                            worldcreated[i][j] = a;  
                            break;                        
                        case ('Void'):                            
                            var a = new Void(posx, posy);  
                            worldcreated[i][j] = a;                            
                            break;
                        
                        case ('Fruit'):                            
                            var a = new Fruit(posx, posy,true);  
                            worldcreated[i][j] = a;                            
                            break;
                        }                       
                    posx+= 50;      
                    field.push(a);            
                }                
                posx = 0;                
                posy += 50;             
            }
        }
    }
}
