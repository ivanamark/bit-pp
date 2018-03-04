// Write a constructor function that creates points in space. Each point
//  in space has its own x, y, and z coordinate. For example, (3, 5, 1) 
//  can be a point in space.
// Write a function that calculates the distance between two points
//in the space.
function Constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.method = function (obj1,obj2) {
        return (Math.sqrt((x * x) + (y * y) + (z * z)));
    }
}
var place1 = new Constructor(2, 5, 8);
var place2 = new Constructor(8, 5, 3);
console.log(place1);
console.log(place2);
console.log(place1,place2.method());