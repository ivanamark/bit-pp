"use strict";
/*Create constructor functions with properties representing the following:
●	Genre - name
●	Movie - title, genre (instance of Genre), length
●	Program - date, list of movies (initially empty) and total number of movies 
●	Festival - name, list of programs (initially empty), and number of movies in all programs*/

(function () {

        function Genre(name) {
            this.name = name;

            /*Add method getData to Genre which returns formatted string as first and last letter of genre name
            "Action" -> AN
            "Drama" -> DA
            "Comedy" -> CY
            */
        }
        Genre.prototype.getData = function () {
            let firstLetter = this.name.charAt(0);
            let lastLetter = this.name.charAt(this.name.length - 1);
            let result = firstLetter + lastLetter;
            return result.toUpperCase();
        }


        function Movie(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;
            /*Add getData method to Movie. It should return a formatted string consisting of the movie title, length and genre acronym.
        The Shawshank Redemption, 130min, AN
 */
        }
        Movie.prototype.getData = function () {
            return (`${this.title}, ${this.length} min, ${ this.genre.getData() }`)
        }

        function Program(date) {
            this.date = new Date(date);
            this.listOfMovies = [];
            /*Add addMovie method to Program. It should receive a Movie and add the movie to the movie list of a given program.  */
        }
            Program.prototype.getNumOfMovies = function () {
                return this.listOfMovies.length;
            }
            Program.prototype.getData = function () {
                let programLength = 0;
                let movieList = "";

                for (let i = 0; i < this.listOfMovies.length; i++) {
                    programLength += this.listOfMovies[i].length;
                    movieList += "\n\t\t" + this.listOfMovies[i].getData();

                    return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + "., program duration " + programLength + "min" + movieList;
                }
            }


            Program.prototype.addMovie = function (movie) {
                this.listOfMovies.push(movie);
            }

            function Festival(name) {
                this.name = name;
                this.listOfPrograms = [];
                this.numOfMoviesAllProgram = 0;
                /*Add getData method to Program. It should return a formatted string of all data related to the program. The string should contain date, program length (calculated from length of all movies in a list) and data about movies in a list (see the example below). To display movie data, use Movie’s getData method.

        Date, program length from all movies
            First movie title, length and genre
            Second movie title, length and genre
            Third movie title, length and genre
            Fourth movie name and length and genre
 */
                /*Add method getData to Festival which return formatted string like festival name, number of movies in all programs and all programs listed. Use Programs getData method to list all programs. (example output is shown below)

                Weekend festival has 4 movie titles
                    28.10.2017, program duration 368min
                        Spider-Man: Homecoming, 133min, AN
                        War for the Planet of the Apes, 140min, DA
                        The Dark Tower, 95min, WN
                    29.10.2017, program duration 108min
                        Deadpool, 108min, CY */

                /*Add addProgram method to Festival. It should receive a Program and add the program to the list of the given festival’s programs.  */
            }
            Festival.prototype.getData = function () {
                let festivalProgram = "";

                for (let i = 0; i < this.listOfPrograms.length; i++) {

                    festivalProgram += "\n\t" + this.listOfPrograms[i].getData();
                    this.numOfMoviesAllProgram += this.listOfPrograms[i].getNumOfMovies();
                }

                return this.name + " festival has " + this.numOfMoviesAllProgram + " movie titles" + festivalProgram;
            }

            Festival.prototype.addProgram = function (program) {
                this.listOfPrograms.push(program);
            }


            const action = new Genre("action");
            const drama = new Genre("drama");
            const comedy = new Genre("comedy");


            /*Inside your immediately-invoking function, add createMovie function that receives a movie title, movie length and genre (as a string) as parameters and returns a created Movie. */
            function createMovie(movieTitle, movieLength, genre) {
                return new Movie(movieTitle, genre, movieLength);

            }
            /*Inside your immediately-invoking function, add createProgram function that receives a date and returns a created Program. */
            function createProgram(date) {
                return new Program(date);
            }

            /*Start creating your movie festival.

            In your main program function, create an instance of the Festival object. 

            Create two instances of Program using createProgram function.

            Create four instances of Movie object using createMovie function. Add all created movies to both programs using the addMovie method.

            Add the created program instances to the created festival instance using festival’s addProgram method.

            Display festival’s data using getData method.
            */

            const program1 = createProgram("28 Oct 2017");
            const program2 = createProgram("29 Oct 2017");
            const movie1 = createMovie("Spider-Man: Homecoming", 133, action);
            const movie2 = createMovie("War for the Planet of the Apes", 140, drama);
            const movie3 = createMovie("The Dark Tower", 95, comedy);
            const movie4 = createMovie("Deadpool", 108, comedy);

            const festival = new Festival("Weekend");

            console.log(movie1.getData());

            program1.addMovie(movie1);
            program1.addMovie(movie2);
            program1.addMovie(movie3);
            program2.addMovie(movie4);

            festival.addProgram(program1);
            festival.addProgram(program2);

            console.log(festival.getData());
        })();