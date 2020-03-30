var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("intern-app");
    dbo.createCollection("intern", function(err, res) {
      if (err) throw err;
      console.log(`“Interns collection created”`);
      db.close();
    });
  });