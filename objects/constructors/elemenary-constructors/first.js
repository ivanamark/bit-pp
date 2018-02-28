function Person(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.fullName = name + " " + surname;
this.getAge=function(){
    return age;
};
}
var ivana=new Person("Ivana","Markovi",36);//instanca od Person
var aleksa=new Person("Aleksa","Markovic",7);
var mihajlo=new Person("Mihajlo","Markovic",9);
console.log(ivana.getAge(),aleksa.firstName,mihajlo);

