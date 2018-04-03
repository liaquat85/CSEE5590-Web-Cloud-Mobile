// 'use strict';

/*
Client ID:
CANA1GFSD11XJ0GGQE5XJNRARYC0YSSTY0KBONAJ3OI1FWZK

Client Secret:
5RLTQFU2ELVQIN1CR4PQFSY2RP0CGJ3UGD0CHNQPP114GD1R
*/

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=TU2CZ23BW2MQMHQH3UW3BOJH2CBA14DOIFD20NFLFFVSAFRX" + // get it from foursquare webapge
                    "&client_secret=AWOUAOD2EBP2T0DJTPNFEMS0RKHVS5NTDMFCODN3AJXBF2TK" + // get it from foursquare webpage
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        //Clear the Venuelist from the last search
                        $scope.venueList = [];
                        // Tie an array named "venueList" to the scope which is an array of objects.
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI
                        for(var i = 0;i < 5;i++){
                            var v = new Venue(data["response"]["venues"][i]["id"],data["response"]["venues"][i]["name"],data["response"]["venues"][i]["location"]["address"],data["response"]["venues"][i]["url"],data["response"]["venues"][i]["contact"]["phone"]);
                            $scope.venueList.push(v);
                        }
                        
                    }
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
    });

    function Venue(id,name,location,url,phone){
        this.id = id;
        this.name = name;
        this.location = location;
        this.url = url;
        this.phone=phone;
    }


