(function () {

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
        
        
        // let movie = new Movie("Spiderman", 'action', 126);
        // let program=new Program("23 May 2016");
        // program.addMovie(movie);
        // console.log(program.movieList);
        
        // console.log(program.getData());
        
        
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
    // let festival1 = new Festival('Weekend Festival') ;
    // console.log(festival1);
    // festival1.programFestival(program.getData())
    // console.log(festival1.getDataFestival());
    let action = new Genre("Action");
    let genre1 = new Genre("Western");
    let genre2 = new Genre("Comedy");
    let genre3 = new Genre("Drama");
    // console.log(action.getData());

    let movie1 = new Movie("The Shawshank Redemption", action.getData(), 130)

    // console.log(movie1.getData());
    let movie2 = new Movie("Deadpool", genre2.getData(), 108)
    let movie3 = new Movie("The Dark Tower", genre1.getData(), 95)
    let movie4 = new Movie("War for the Planet of the Apes", genre3.getData(), 140)
    

    
    let program1 = new Program(new Date("3918-04-08"));
    let program2 = new Program(new Date("3918-04-08"));

    
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program2.addMovie(movie1);
    program2.addMovie(movie2);
    program2.addMovie(movie4);

    // console.log(program1.getData());

    

    let festival1 = new Festival('Weekend Festival')
    let festival2 = new Festival('Weekend Festival')
    festival1.programFestival(program1.getData())
    festival1.programFestival(program2.getData())
    console.log(festival1.getDataFestival());

    
    



})();