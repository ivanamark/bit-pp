class Animal {
    //constructor will be run every single time when we create an animal
    constructor(name, height, weight) {
        console.log("Created animal named", name, "weight:", weight, "and height: ", height);
        this.name = name; //so that any method can use this variable we use "this.name",that is why nameLength method can use it
        this.height = height;
        this.weight = weight;

    }
    //now we can create class method or instance method
    nameLength() {
        return this.name.length;
    }
}
Animal.planet = "Earth"; //variable created outside of the constructor,class level variable which is not unique as instance of the class
//now we can create an object that uses this class as blueprint

var dog1 = new Animal("Astor", 20, 50);
var fish1 = new Animal("Goldie", 2, .3);
console.log(fish1.nameLength());
console.log(fish1.constructor.planet);
class Dog extends Animal {
    constructor(name, height, weight, barkVolume, leashColor,speed) {
        //in order to have access to Animal class we need to call super constructor
        super(name, height, weight) //dog object have name weight and height from Animal iherited but we need to give him barkVolume and leashColor
        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
        this.speed=speed;
        
        }

        bark () {
            if (this.barkVolume > 50) {
                console.log(this.name ,"BARK BARK!");
                

            }else{
                console.log(this.name ,"barks timidly");
                
            }


    }
}
class Fish extends Animal {
    constructor(name,height,weight,swimspeed){
        super(name,height,weight);
        this.swimspeed=swimspeed;
    }
    swim (chasespeed){
        if(this.swimspeed > 80){
            console.log(this.name ," is fast fish");
            
        }else{
            console.log(this.name, "is slow fish");
            
        }
        if(chasespeed < this.swimspeed){
            console.log(this.name ,"got away");
            
        }else{
            console.log(this.name ,"oh no");
            
        }
    }
}
var king=new Dog("King",55,98,80,"red",200);
console.log(king.bark());
var goldie=new Fish("Goldie",21,12,105);
console.log(goldie.swim(king.speed));

