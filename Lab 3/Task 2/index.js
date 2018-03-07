module.exports = require('./node_modules/twitter-node-client/lib/Twitter');

var Twit = require('twit');
var fs = require('fs');

var T = new Twit({

    consumer_key: 'RFgBoK4ZioKHlDVesZ2EbBjJp',
    consumer_secret: '7wnwY51LrRS6AtyJMGrDi7yXpSNEHMcNLcjHspieFlwQztMBjz',
    access_token: '477630074-nOdC9Nb7GAh8VgdOEbkT44Z9geWQyqxZncI0DcaF',
    access_token_secret: 'Pb7PLjd7jyyW2P0e8IMO4xHe0QwBDRTUvhqSZugR1Rl3Q'

});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var config = {
    "consumerKey": "RFgBoK4ZioKHlDVesZ2EbBjJp",
    "consumerSecret": "7wnwY51LrRS6AtyJMGrDi7yXpSNEHMcNLcjHspieFlwQztMBjz",
    "accessToken": "477630074-nOdC9Nb7GAh8VgdOEbkT44Z9geWQyqxZncI0DcaF",
    "accessTokenSecret": "Pb7PLjd7jyyW2P0e8IMO4xHe0QwBDRTUvhqSZugR1Rl3Q"
};

var twitter = new module.exports.Twitter(config);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

/*
 * To connect to a front end app (i.e. AngularJS) store all your files you will *
 * statically store in declared below (i.e. ./public) *
*/

app.use(express.static('public'));

//post to retrieve user data
app.post('/twitter/user', function (req, res) {
    var username = req.body.username;
    var twitJSON = {name: username, children: []};
T.get('friends/list', {screen_name: username}, function (err, data, response) {
    if (err) throw err;
    for (var i = 0; i < data['users'].length; i++) {
        var obj = {name: "@" + data['users'][i]['screen_name'], children: []};
        console.log(obj);
        twitJSON.children.push(obj);
    }
    fs.writeFile("C:\\Users\\la5w7\\Desktop\\Spring 2018\\CSEE5590-Web-Cloud-Mobile\\Lab 3\\Task 2\\public\\input.json", JSON.stringify(twitJSON), function (err) {
        if (err) throw err;
        console.log('Twitter users written to file.');
    });
});

console.log(twitJSON);

    var data = twitter.getUser({screen_name: username}, function (error, response, body) {
        res.status(404).send({
            "error": "User Not Found"
        });
    }, function (data) {
        res.send({
            result: {
                "userData": data
            }
        });
    });
});

var Twit = require('twit');
var fs = require('fs');

var T = new Twit({

    consumer_key: 'RFgBoK4ZioKHlDVesZ2EbBjJp',
    consumer_secret: '7wnwY51LrRS6AtyJMGrDi7yXpSNEHMcNLcjHspieFlwQztMBjz',
    access_token: '477630074-nOdC9Nb7GAh8VgdOEbkT44Z9geWQyqxZncI0DcaF',
    access_token_secret: 'Pb7PLjd7jyyW2P0e8IMO4xHe0QwBDRTUvhqSZugR1Rl3Q'

});

//
//  get the list of user id's that follow @3guysinagarage
//
var twitJSON = {name: "@username", children: []};
//
// T.get('friends/list', {screen_name: 'liaquat85'}, function (err, data, response) {
//     if (err) throw err;
//     for (var i = 0; i < data['users'].length; i++) {
//         var obj = {name: "@" + data['users'][i]['screen_name'], children: []};
//         console.log(obj);
//         twitJSON.children.push(obj);
//     }
//     fs.writeFile("input.json", JSON.stringify(twitJSON), function (err) {
//         if (err) throw err;
//         console.log('Twitter users written to file.');
//     });
// });
//
// console.log(twitJSON);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});
