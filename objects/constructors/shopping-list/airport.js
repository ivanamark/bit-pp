"use strict";
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }

    }

    var ivana = new Person("Ivana", "Markovic");
    console.log(ivana.getData());

    function Seat(number, category) {
        this.number = number || (((100 - 10) * Math.random()) + 10).toFixed();
        this.category = "b" || "e";
        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }
    }
    var seat1 = new Seat();
    console.log(seat1.getData());

    function Passenger(person, seat) {
        this.person=person;
        this.seat=seat;
        this.getData=function(){
            return this.person + ". " + this.seat;
        }

    }

    var passenger1=new Person()
    













    console.log("Hi");

})();