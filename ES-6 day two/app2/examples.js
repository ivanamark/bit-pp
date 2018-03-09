(function (){

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    log(){
        console.log(`point:(  ${this.x} : ${this.y})`);
        
    }
}
class SpatialPoint extends Point{
    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }
    log(){
        super.log();
        console.log(`......and one more: z:${this.z}`);

        
    }
}
const point1=new Point(3,5);
console.log(point1);
console.log(point1.log());
const point2=new SpatialPoint(8,5,4);
console.log(point2);
console.log(point2.log());
}());