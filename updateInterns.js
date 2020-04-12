// Finally, in your updateInterns.js file, 
// update the movie with title "The Banker", 
// to any movie of your choice, 
// ensure all other properties (year and rating) are updated accordingly. 
// Log the updated collection to the console and take a screenshot. 
// Include your screenshot in your image.md file.

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var url = "mongodb://127.0.0.1:27017/";


MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;

    var dbo = db.db("intern-app");
    var myquery = { movie: "First Cow", year: "2020", rating: 6.5 };
    var newvalues = { $set: {movie: "The Fault In Our Stars", year: "2014", rating: 8 } };

    dbo.collection('myMovies').findOneAndUpdate(myquery, newvalues, function(err, res) {
    //   if (err) throw err;

    console.log(res);
    db.close();

    });
  });