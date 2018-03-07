/* In your IDE of choice, create a new JavaScript file named airport.js 
and make it so that all code written in the file follows JS strict mode.
 */
/*Create an anonymous immediately-invoking function that will hold the main execution of all program calls.
Writing a simple command console.log(“Hi”) inside this function and running the code 
should output “Hi“ in the console.*/

"use strict";
(function () {

    //Create constructor functions with properties representing the following:
    //Person - name, surname
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        //Add getData method to Person. It should return a formatted string containing the name and surname of the person.
        //"John", "Snow" -> "John Snow
    }
        Person.prototype.getData = function () {
            return this.name + " " + this.surname;
        };


    // Seat - number, category (can be "b" for business or "e" for economy)
    function Seat(number, category) {
        //If seat number is not provided, assign a random number between 10 and 100. 
        this.number = number || (function () {
            return Math.round(((100 - 10) * Math.random()) + 10);
        })();
        //If category is not provided for Seat, assume it’s economy (“e”). 
        this.category = category || "e";

        //Add getData method to Seat. It should return a formatted string containing a seat number and category.
        // 12, "B" -> "12, B”
    }
        Seat.prototype.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        };


    //Passenger - person (instance of Person), seat (instance of Seat)
    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;


    }
        //Add getData method to Passenger. It should return a formatted string containing a seat number, category letter (always in uppercase), a name and surname. To display seat data, use getData method of the Seat object. The same goes for the person data.
        // personObj, seatObj -> 12, B, John Snow
        Passenger.prototype.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        };

    //Flight - relation, date and list of passengers (initially empty)
    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];

        //Add getData method to Flight. It should return a formatted string containing a date and relation.
        // "Belgrade - Paris", "25.09.2017" -> 25.09.2017 Belgrade - Paris
        //Add getData method to Flight. It should return a formatted string of all data related to the flight and list of passengers with their data.
        //25.10.2017, Belgrade - Paris
        //1, B, John Snow
        //2, E, Cersei Lannister

    }
        Flight.prototype.getData = function () {
            return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + "., " + this.relation;
        };
        //Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list of a given flight
        Flight.prototype.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        };

    //Airport - name (should be a hard-coded value "Nikola Tesla"), list of flights
    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

    }
        Airport.prototype.getData = function () {
            var airportOutput = "";
            var numOfPassengers = 0;

            this.listOfFlights.forEach(function (flight) {
                airportOutput += "\n\t" + flight.getData();
                flight.listOfPassengers.forEach(function (passenger) {
                    airportOutput += "\n\t\t" + passenger.getData();
                    numOfPassengers++;
                });
            });

            return "Airport: " + this.name + ", total passengers: " + numOfPassengers + airportOutput;
        };
        //Add addFlight method to Airport. It should add the flight to the list of flights of the airport
        Airport.prototype.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };


    // Inside your immediately-invoking function, add createFlight function that receives a relation (ex. Belgrade - New York) and date as parameters and returns a created Flight.
    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    //Inside your immediately-invoking function, add createPassenger function that receives a first name, last name, seat number and category and returns a created Passenger.
    function createPassenger(firstName, lastName, seatNumber, category) {
        return new Passenger(new Person(firstName, lastName), new Seat(seatNumber, category));
    }

    //In you main program function, create an instance of the Airport object. 
    var airport = new Airport();

    //Create two instances of the Flight object using the createFlight function and the following data:
    //relation: "Belgrade - New York" 		date: "Oct 25 2017"
    //relation: "Barcelona - Belgrade" 		date: "Nov 11 2017"

    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    /*Create four instances of the Passenger object using the createPassenger function with the following data: 
    Name: "John" 	surname: "Snow" 		seat number: 1		category: "b"
    Name: "Cersei" 	surname: "Lannister" 	seat number: 2		category: "b"
    Name: "Daenerys" 	surname: "Targaryen" 	seat number: 14	
    Name: "Tyrion" 	surname: "Lannister" 	*/

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyrion", "Lannister");

    //Add the first two passengers to the first flight and the second two to the second flight using the 
    // Flight’s addPassenger method.

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    //Add the created flight instances to the airport using Airport’s addFlight method.
    airport.addFlight(flight1);
    airport.addFlight(flight2);

    /*Call Airport’s getData method to display the airport data output in the following manner:

    Airport: Nikola Tesla, total passengers: 4
	25.10.2017, Belgrade - Paris
		1, B, John Snow
		2, E, Cersei Lannister
	11.11.2017, Barcelona - Belgrade
		3, E, Daenerys Targaryen
        4, E, Tyrion Lannister*/
        

    console.log(airport.getData());

})(); 