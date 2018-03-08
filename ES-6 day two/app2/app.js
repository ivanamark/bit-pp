(function () {


        // Kreiramo konstruktor za Zanr.

        // function Genre(name) {
        //     this.name = name;
        //     //UZIMAMO PRVO I ZADNJE SLOVA ZANRA I RADIMO UPPER U METODI
        //     this.getData = function () {
        //         var firstLetter = this.name.charAt(0);
        //         var lastLetter = this.name.charAt(name.length - 1);
        //         var result = firstLetter + lastLetter;
        //         return result.toUpperCase();
        //     }
        // }
        class Genre {
            constructor(name) {
                this.name = name;
            }
            getData() {
                let firstLetter = this.name.charAt(0);
                let lastLetter = this.name.charAt(this.name.length - 1);
                let result = firstLetter + lastLetter;
                return result.toUpperCase();
            }
        }




        // Kreiramo konstruktor Movie

        // function Movie(title, genre, length) {
        //     this.title = title;
        //     this.genre = genre;
        //     this.length = length;
        //     // PRAVIMO NAZIV FILMA SA ZANROM I DUZINOM
        //     this.getDataMovie = function () {

        //         return this.title + ' ' + this.genre + ' ' + this.length + "min, ";
        //     }
        // }
        // Kreiramo konstrutor za Program
        class Movie extends Genre {
            constructor(title, genre, length) {
                super(genre);
                this.title = title;
                this.length = length;
            }
            getDataMovie() {

                return ` This is movie ${this.title} ,  ${this.length} min ${super.getData()}`;
            }
        }
        // console.log(movie1.getDataMovie());
        
        class Program {
            constructor(date) {
                this.date = new Date(date);
                this.movieList = [];
                
            }
            addMovie(movie) {
                this.movieList.push(movie);
            }
            getNumOfMovies() {
                return this.movieList.length;
            }
            
            programLength() {
                let length = 0;
                for (let i = 0; i < this.movieList.length; i++) {
                    let movie = this.movieList[i];
                    length += movie.length;
                }
                return length;
            }
            getData() {
                let myDate = new Date(this.date);
                let dayProgram = `  `;
                dayProgram += `${this.date.getDate()} . ${this.date.getMonth()} . ${this.date.getYear()}   , program length from  ${this.programLength()}  min  from all movies \n`;
                for (let i = 0; i < this.movieList.length; i++) {
                    let movie = this.movieList[i]
                    dayProgram += `        ${movie.getDataMovie()}   \n`;
                }
                return dayProgram;
            }
        }
        
        
        let movie = new Movie("Spiderman", 'action', 126);
        let program=new Program("23 May 2016");
        program.addMovie(movie);
        console.log(program.movieList);
        
        console.log(program.getData());
        
        // function Program(date) {
            //     this.date = date;
            //     this.moviesList = [];
            
            //     this.addMovie = function (movie) {
    //         this.moviesList.push(movie);
    //     }
    //     this.getNumOfMovies = function () {
    //         return this.moviesList.length;

    //     }
    //     this.programLength = function () {
    //         var length = 0;
    //         for (var i = 0; i < this.moviesList.length; i++) {
    //             var movie = this.moviesList[i];
    //             length += movie.length;

    //         }
    //         return length;
    //     }
    //     this.getData = function () {
    //         var myDate = this.date;
    //         var dayProgram = '\t';
    //         // DNEVNI PROGRAM DAN,MESEC,GODINA SA UKUPNOM DUZINOM POZIVAMO METODU DUZINA FILMA
    //         dayProgram += this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getYear() + ',' + ' program length from ' + this.programLength() + ' min  from all movies \n';
    //         for (var i = 0; i < this.moviesList.length; i++) {
    //             var movie = this.moviesList[i]
    //             dayProgram += '\t\t\t' + movie.getDataMovie() + '\n';
    //         }
    //         return dayProgram;
    //     }

    // }

    // // Kreiramo konstruktor za festival

    class Festival {
        constructor(nameFestival){
        this.nameFestival = nameFestival;
        this.programs = [];
        }
        programFestival(program1)  {

            return this.programs.push(program1)
        }
      getDataFestival(){
          let final=` `;
          let firstFinal=`${this.nameFestival}  has movie titles  ${this.programFestival()}  movies \n`;
          let result = ` `;
          for (let i=0;i<this.programs.length - 1;i++){
              result += ` `+this.programs[i];

          }
          final = firstFinal + result;
          return final;
      }
    
    }
    let festival1 = new Festival('Weekend Festival') ;
    console.log(festival1);
    festival1.programFestival(program.getData())
    console.log(festival1.getDataFestival());
    
    
    // function Festival(nameFestival) {
    //     this.nameFestival = nameFestival;
    //     this.programs = [];
    //     // this.totalNumOfMovies = totalNumOfMovies;
    //     this.programFestival = function (program1) {
    //         return this.programs.push(program1)


    //     }
    //     // IME FESTIVALA I UKUPAN BROJ FILMOVA
    //     this.getDataFestival = function () {
    //         var final = '';

    //         var firstFinal = nameFestival + ' has  movie titles ' + this.programFestival() + ' movies \n';

    //         var result = '';
    //         for (var i = 0; i < this.programs.length - 1; i++) {
    //             result += '\t' + this.programs[i];
    //         }
    //         final = firstFinal + result;
    //         return final;
    //     }



    // }


    // /***KREIRAMO INSTANCU ZANRA UBACUJEMO ARGUMENT IMENA ***/
    // var genre1 = new Genre("Action");
    // var genre2 = new Genre("Comedy");
    // // console.log(g1.getData());
    // // console.log(g2.getData());


    // /*** KREIRAMO INSTANCU FILMA UBACUJEMO  NAZIV FILMA, VREDNOST ZANRA. DUZINU U MIN ***/
    // var movie1 = new Movie("Berba cvaraka u Makedoniji", genre1.getData(), 150)
    // var movie2 = new Movie("Indijanci kolju kupus", genre2.getData(), 130)
    // var movie3 = new Movie("Suva krpa na dnu mora", genre2.getData(), 67)
    // var movie4 = new Movie("Australijski lubencicar", genre2.getData(), 96)
    // // console.log(m1.getDataMovie());
    // // console.log(m2.getDataMovie());

    // /*** KREIRAMO INSTANCU PROGRAMA UBACUJEM DATUM U FORMI YYYY, M, DD ***/
    // var program1 = new Program(new Date(2018, 2, 21));
    // var program2 = new Program(new Date(2018, 2, 22));

    // /** U PROGRAMU POZIVAMO METODU addMovie SA ARGUMENTOM KOJI PROSLEDUJE FILM ***/
    // program1.addMovie(movie1);
    // program1.addMovie(movie2);
    // program1.addMovie(movie3);
    // program2.addMovie(movie1);
    // program2.addMovie(movie2);
    // program2.addMovie(movie4);

    // // console.log(program1.getData());



    // var festival1 = new Festival('Weekend Festival')
    // var festival2 = new Festival('Weekend Festival')
    // festival1.programFestival(program1.getData())
    // festival1.programFestival(program2.getData())
    // console.log(festival1.getDataFestival());




})();