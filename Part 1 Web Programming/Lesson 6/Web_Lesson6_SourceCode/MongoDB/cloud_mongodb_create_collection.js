/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://user6:user6@ds249418.mlab.com:49418/aplwebdemo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("aplwebdemo");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
