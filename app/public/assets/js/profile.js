$(document).ready(function(){
   
    var currentURL = window.location.origin;
    var id = sessionStorage.getItem("id");
    // AJAX POST to the data to the friends.js API.
    $.get(currentURL + "/api/users/" + id, function(data){
       console.log(id);
        console.log(data);
         console.log(currentURL);
    });
})