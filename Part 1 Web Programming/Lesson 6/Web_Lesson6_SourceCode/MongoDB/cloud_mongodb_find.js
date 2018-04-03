/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://user6:user6@ds249418.mlab.com:49418/aplwebdemo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("aplwebdemo");
    dbase.collection("newCollection").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
