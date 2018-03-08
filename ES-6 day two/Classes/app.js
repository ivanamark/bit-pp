class Person{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }
    printPersonData(){
        console.log(`name: ${this.name}, surname: ${this.surname}`);
        
    }
}
const person1= new Person("Ana","Petrovic");
person1.printPersonData();

class Programmer extends Person{
    constructor(name,surname,language){
        super(name,surname);
        this.language=language;

    }
    printProgrammerData(){
        super.printPersonData();
        console.log(`He knows ${this.language}`);
        
    }
    learnNewLanguage(newlan){
        this.language += newlan;
        console.log(`He knows this ${this.language} `);
        
    }
} 

const pro1 = new Programmer('Marko','Markovic', 'JavaScript ')
pro1.printProgrammerData();
pro1.learnNewLanguage('Python');
const pro2=new Programmer("Zika","Zikic","Java ");
pro2.printProgrammerData();
pro2.learnNewLanguage('C#');

