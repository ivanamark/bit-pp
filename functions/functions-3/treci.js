function ivana(a) {
    var rez =[];
    var comma = ',';
    for (var i = 0; i < a.length; i++) {
        var char = a[i];
       var number=parseInt(char);
        
        if( number !== undefined && number !== null && number !== false && number !== 0 && number !== "" && !isNaN(number)){   
           
           
            rez+= number+comma; 

            
        }
         

    }


    return [rez];
    
}
var result = ivana(a = [NaN, 0, 15, false, -22, '', undefined, 47, null]);

console.log(result);





