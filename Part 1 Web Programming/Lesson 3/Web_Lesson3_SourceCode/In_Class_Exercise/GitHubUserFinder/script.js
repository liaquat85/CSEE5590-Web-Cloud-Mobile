function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    url = "https://api.github.com/users/" + user ;
    
    xhttp.open('GET', url, false);
    xhttp.send();
    return xhttp;
}

function showUser(user) {
    // var json = xhrReq.responseText;
    // var myObject = JSON.parse(json);
    // vmanvitha3
    // 2. set the contents of the h2
    $('.name').empty();
    $('.avatar').empty();
    $('.urlText').empty();
    $('.information').empty();


    if (user.name == null){
       noSuchUser()
    } else {
    
      var txt2=$("<h1></h1>").text(" " + user.name);
    $('.name').append(txt2);
    // the two div elements in the div '#profile' with the user content
   
    var imagTag = '<img src="' + user.avatar_url + '">';
    $('.avatar').append(imagTag);
   
    var urlTextTag ='<a href="' + user.html_url + '">' + user.name + ' GitHub link </a>';
    $('.urlText').append(urlTextTag);
    
    var urlGithubAPI ='<a href="' + user.url + '">' + user.name + ' GitHubAPI link </a>';
    $('.information').append(urlGithubAPI)
}

function noSuchUser(){
    var txt2=$("<h1></h1>").text("No such user by name of " + user.name + " on GitHub");
    $('.name').append(txt2);
   
}

}

function noSuchData(username) {
    //3. set the elements such that a suitable message is displayed
    $('h2').text("Error in getting the data" )

}



$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchData(username);
            }
        }
        
    })
   
});
