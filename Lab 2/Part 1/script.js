function getNewsByTopic(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    //url = "https://api.github.com/users/" + user ;
    url = "https://newsapi.org/v2/everything?q=" + user + "&sortBy=publishedAt&apiKey=d37a10c039ad4b9d98454bb573c8a301";

    //$('.urlText').text(url);
    xhttp.open('GET', url, false);
    xhttp.send();
    return xhttp;
}

function getNewsByBBC(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp1 = new XMLHttpRequest();
    //url = "https://api.github.com/users/" + user ;
    url = "https://newsapi.org/v2/everything?q=" + user + "&sources=bbc-news&apiKey=d37a10c039ad4b9d98454bb573c8a301";

    //$('.urlText').text(url);
    xhttp1.open('GET', url, false);
    xhttp1.send();
    return xhttp1;
}

function getNewsByCNN(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp2 = new XMLHttpRequest();
    //url = "https://api.github.com/users/" + user ;
    url = "https://newsapi.org/v2/everything?q=" + user + "&sources=cnn&apiKey=d37a10c039ad4b9d98454bb573c8a301";

    //$('.urlText').text(url);
    xhttp2.open('GET', url, false);
    xhttp2.send();
    return xhttp2;
}

function getNewsByCNBC(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp3 = new XMLHttpRequest();
    //url = "https://api.github.com/users/" + user ;
    url = "https://newsapi.org/v2/everything?q=" + user + "&sources=cnbc&apiKey=d37a10c039ad4b9d98454bb573c8a301";

    //$('.urlText').text(url);
    xhttp3.open('GET', url, false);
    xhttp3.send();
    return xhttp3;
}



function getNewsByTechCrunch(user) {
}

function showNewsByBBC(news) {
    $('.headerseperator2').text("By Source");
    $('.title5').text("From BBC: "+ news.articles[0].title);
    $('.author5').text("By " + news.articles[0].author);
    $('.publishedAt5').text("Published at " + news.articles[0].publishedAt);
    $('.description5').text(news.articles[0].description);
    var urlsrc = '<a href="' + news.articles[0].url + '">Click here for more</a>';
    $('.url5').append(urlsrc)
}

function showNewsByCNN(news) {

    $('.title6').text("From CNN: "+ news.articles[0].title);
    $('.author6').text("By " + news.articles[0].author);
    $('.publishedAt6').text("Published at " + news.articles[0].publishedAt);
    $('.description6').text(news.articles[0].description);
    var urlsrc = '<a href="' + news.articles[0].url + '">Click here for more</a>';
    $('.url6').append(urlsrc)
}

function showNewsByCNBC(news) {

    $('.title7').text("From CNN: "+ news.articles[0].title);
    $('.author7').text("By " + news.articles[0].author);
    $('.publishedAt7').text("Published at " + news.articles[0].publishedAt);
    $('.description7').text(news.articles[0].description);
    var urlsrc = '<a href="' + news.articles[0].url + '">Click here for more</a>';
    $('.url7').append(urlsrc)
}

function showNewsbyTechCrunch(news) {

}


function showNewsbyTopic(news) {

    //$('.headlines').text("Total Headlines are " + news.totalResults);
    // $('li').each(function(index){
    //     //$(this).text("Title is " + news.articles[index].title);
    //     $(this).text("Title is " + news.articles[index].title);
    //
    // });
    $('.headerseperator1').text("By Topic");
    $('.title1').text(news.articles[0].title);
    $('.author1').text("By " + news.articles[0].author);
    $('.publishedAt1').text("Published at " + news.articles[0].publishedAt);
    $('.description1').text(news.articles[0].description);
    var urlsrc = '<a href="' + news.articles[0].url + '">Click here for more</a>';
    $('.url1').append(urlsrc)

    $('.title2').text(news.articles[1].title);
    $('.author2').text("By " + news.articles[1].author);
    $('.publishedAt2').text("Published at " + news.articles[1].publishedAt);
    $('.description2').text(news.articles[1].description);
    var urlsrc = '<a href="' + news.articles[1].url + '">Click here for more</a>';
    $('.url2').append(urlsrc)

    $('.title3').text(news.articles[2].title);
    $('.author3').text("By " + news.articles[2].author);
    $('.publishedAt3').text("Published at " + news.articles[2].publishedAt);
    $('.description3').text(news.articles[2].description);
    var urlsrc = '<a href="' + news.articles[2].url + '">Click here for more</a>';
    $('.url3').append(urlsrc)

    $('.title4').text(news.articles[3].title);
    $('.author4').text("By " + news.articles[3].author);
    $('.publishedAt4').text("Published at " + news.articles[3].publishedAt);
    $('.description4').text(news.articles[3].description);
    var urlsrc = '<a href="' + news.articles[3].url + '">Click here for more</a>';
    $('.url4').append(urlsrc)
}



function noSuchNews(news) {
    //3. set the elements such that a suitable message is displayed
    $('h3').text("No such news with this topic")

}


$(document).ready(function () {
    $(document).on('keypress', '#topicname', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            topicname = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response0 = getNewsByTopic(topicname);
            response1 = getNewsByBBC(topicname);
            response2 = getNewsByCNN(topicname);
            //response3 = getNewsByCNBC(topicname);
            //if the response is successful show the user's details
            if (response0.status == 200) {
                showNewsbyTopic(JSON.parse(response0.responseText));
                showNewsByBBC(JSON.parse(response1.responseText));
                showNewsByCNN(JSON.parse(response2.responseText));
                //showNewsByCNBC(JSON.parse(response3.responseText()));
            } else {
                noSuchNews(topicname);
            }
        }
    })
});



// showNewsByCNN(JSON.parse(response2.responseText));
// showNewsByCNBC(JSON.parse(response3.responseText));
// showNewsByTechCrunch(JSON.parse(response4.responseText));

//else display suitable message