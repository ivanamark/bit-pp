function Person(name, surname, yearOfBirth) {
    this.firstName = name;
    this.lastName = surname;
    Person.prototype.calculateAge = function () {
        var currentYear = new Date();
        var year = currentYear.getFullYear();
        var result = year - yearOfBirth;
        return result;
    }
    this.info = function () {
        return "My name is " + this.firstName + this.lastName + this.calculateAge();

    }
}
var ivana = new Person("Ivana", "Markovic", 1982);

console.log(ivana.calculateAge());