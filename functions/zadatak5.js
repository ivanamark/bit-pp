function sqrStars(a){
    for(var i=0;i<a;i++){
        console.log("*");
        if(i===0 || i === a-1){
            for(var j=0;j<(a-2);j++){
                console.log("*");
            }
         
            
        }
    }
}

console.log(sqrStars(5));

/*    
      y0 y1 y2 y3 y4
x0    *****
x1    *   *
x2    *   *
x3    *   *
x4    *****
*/