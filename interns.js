var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var url = "mongodb://127.0.0.1:27017/";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("intern-app");
    var internMovies = [ 

      {movie: "The Banker", year: "2020", rating: 8},  
      {movie: "Bad Boys", year: "2020", rating: 7}, 
      {movie: "The Hunt", year: "2020", rating: 7}, 
      {movie: "Bloodshot", year: "2020", rating: 7.5}, 
      {movie: "First Cow", year: "2020", rating: 6.5} 
    
    ];

    dbo.collection("myMovies").insertMany(internMovies, function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });