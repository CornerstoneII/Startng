var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var url = "mongodb://localhost:27017/OIyadi";


MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    console.log(`"Database created by OIyadi"`);

    db.close();

});
     


                
