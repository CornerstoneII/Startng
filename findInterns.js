// In the findInterns.js file, write a function making use of appropriate 
// methods and queries to return 
// (a) the first document in the collection 
// (b) all movies with a rating of 7 and 
// (c) use a projection object to return only movie titles and nothing else. 
// Take a screenshot of your query results and include it in your image.md file.

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var url = "mongodb://127.0.0.1:27017/";


MongoClient.connect(url, function(err, db) {
      if (err) throw err;

    var dbo = db.db("intern-app");
    
    
    dbo.collection("myMovies").findOne({}, function(err, result) {
      if (err) throw err;

    console.log(result);
    db.close();

    });
  });