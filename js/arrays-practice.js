/*eslint-env browser*/

//STEP 1
    window.console.log("RESULT: Step1");
    var movie=["movie1","movie2","movie3","movie4","movie5"];
    window.console.log(movie[1]);               ///1 is the index for movie2
    window.console.log("");

//STEP 2
    window.console.log("RESULT: Step2");
    var movie = new Array(5);
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    window.console.log(movie[0]);
    window.console.log("");

//STEP 3
    window.console.log("RESULT: Step3");
    var movie = new Array(5);
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie.splice(2, 0, 'movie6')
    console.log(movie.length);
    window.console.log(movie);
    window.console.log("");

//STEP 4
    window.console.log("RESULT: Step4");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    delete movie[0];
    window.console.log(movie);
    window.console.log("");

//STEP 5
    window.console.log("RESULT: Step5");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

   var index;
    for( index in movie ){
        window.console.log(movie[index]);   
    }
    window.console.log("");

//STEP 6
    window.console.log("RESULT: Step6");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var value;
    for( value of movie ){
        window.console.log(value);   
    }
    window.console.log("");

//STEP 7
    window.console.log("RESULT: Step7");
    var movie = [];
    movie[0]= "bMovie1";
    movie[1]= "aMovie2";
    movie[2]= "eMovie3";
    movie[3]= "fMovie4";
    movie[4]= "dMovie5";
    movie[5]= "cMovie6";
    movie[6]= "kMovie7";

    var value;
    for( value of movie.sort()){
        window.console.log(value);
    }
    window.console.log("");

//STEP 8
    window.console.log("RESULT: Step8");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var leastFavMovie = ["movie2", "movie4", "movie1"];
    var i;
    window.console.log("");
    window.console.log("Movies I like:");
    window.console.log("");

    for( i = 0 ; i < movie.length ; i += 1){   
        window.console.log(movie[i]);
    }
    window.console.log("");
    window.console.log("");
    window.console.log("Movies I regret watching:");
    window.console.log("");

    for( i = 0 ; i < leastFavMovie.length ; i += 1){
        window.console.log(leastFavMovie[i]);   
    }
    window.console.log("");

//STEP 9
    window.console.log("RESULT: Step9");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var leastFavMovie = ["movie2", "movie4", "movie1"];
    var i;
    window.console.log("");
    window.console.log("Movies I like:");
    window.console.log("");

    for( i = 0 ; i < movie.length ; i += 1){   
        window.console.log(movie[i]);
    }
    window.console.log("");
    window.console.log("");
    window.console.log("Movies I regret watching:");
    window.console.log("");

    for( i = 0 ; i < leastFavMovie.length ; i += 1){
        window.console.log(leastFavMovie[i]);   
    }

    var movies = ((movie.concat(leastFavMovie)).sort()).reverse();
    window.console.log(movies);
    window.console.log("");

//STEP 10
    window.console.log("RESULT: Step10");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var leastFavMovie = ["movie2", "movie4", "movie1"];
    var i;
    window.console.log("");
    window.console.log("Movies I like:");
    window.console.log("");

    for( i = 0 ; i < movie.length ; i += 1){   
        window.console.log(movie[i]);
    }
    window.console.log("");
    window.console.log("");
    window.console.log("Movies I regret watching:");
    window.console.log("");

    for( i = 0 ; i < leastFavMovie.length ; i += 1){
        window.console.log(leastFavMovie[i]);   
    }
    window.console.log("");

    var movies = ((movie.concat(leastFavMovie)).sort()).reverse();
    window.console.log(movies);

    window.console.log(movies.slice(-1));
    window.console.log("");

    //STEP 11
    window.console.log("RESULT: Step11");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var leastFavMovie = ["movie2", "movie4", "movie1"];
    var i;
    window.console.log("");
    window.console.log("Movies I like:");
    window.console.log("");

    for( i = 0 ; i < movie.length ; i += 1){   
        window.console.log(movie[i]);
    }
    window.console.log("");
    window.console.log("");
    window.console.log("Movies I regret watching:");
    window.console.log("");

    for( i = 0 ; i < leastFavMovie.length ; i += 1){
        window.console.log(leastFavMovie[i]);   
    }
    window.console.log("");

    var movies = ((movie.concat(leastFavMovie)).sort()).reverse();
    window.console.log(movies);

    window.console.log(movies.slice(0,1));
    window.console.log("");

    //STEP 12
    window.console.log("RESULT: Step12");
    var movie = [];
    movie[0]= "movie4";
    movie[1]= "movie5";
    movie[2]= "movie9";
    movie[3]= "movie6";
    movie[4]= "movie8";
    movie[5]= "movie2";
   
    var leastFavMovie = ["movie3", "movie7", "movie1"];
    var movies = ((movie.concat(leastFavMovie)).sort()).reverse();
    window.console.log(movies);
    var leastFavMovieIndices =[];

    var goodMovies = ["movie10", "movie11", "movie12"];
    movies.forEach(function(value, index){
        "use strict";
        if(leastFavMovie.includes(value)){     
            leastFavMovieIndices.push(index);
        }
    });

    leastFavMovieIndices.forEach(function(index){
        "use strict";
        movies[index]=goodMovies.shift();
    })
    
    window.console.log(movies); 
    window.console.log("");

    //STEP 13
    window.console.log("RESULT: Step13");
    movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
    var movieNames = movies.filter(function(movie){
        return typeof movie[0] === "string";
    });
    window.console.log(movieNames.map(movie => movie[0]));
    window.console.log("");

    //STEP 14
    window.console.log("RESULT: Step14");
    var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
    var showEmployee = function(employees){
        "use strict";
        window.console.log("Employees:");
        window.console.log("");
        employees.forEach(function(employees){
            "use strict";
            window.console.log(employees);
        });
    }
    showEmployee(employees);
    window.console.log("");

    //STEP 15
    window.console.log("RESULT: Step15");
    var arrayValues = [58, '', 'abcd', true, null, false, 0];
    var filterValues = arrayValues.filter(function(value){
        "use strict";
        if(value !== false && value !== null && value !== 0 && value !== ''){
        return true;
        }
        return false;
    });
    window.console.log(filterValues);
    window.console.log("");

    //STEP 16
    window.console.log("RESULT: Step16");
    var arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var randomArrayValue = function(value){
        return value[Math.floor(Math.random() * value.length)];
    }
    window.console.log(randomArrayValue(arrayValues));
    window.console.log("");

    //STEP 17
    window.console.log("RESULT: Step17");
    var arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var maxValue = function(value){
        return Math.max(...value);
    }
    window.console.log(maxValue(arrayValues));
    window.console.log("");