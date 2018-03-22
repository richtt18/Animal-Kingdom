$(document).ready(function(){
   
    var currentURL = window.location.origin;
    var petType = "dog";
    var petLocation = sessionStorage.getItem("location");
    var pets = [];
    // AJAX POST to the data to the friends.js API.
    
    var dogData = {
        petType: petType,
        petLocation: petLocation
    }

    $.post(currentURL + "/api/pets/" + petType, dogData, function(data){
         console.log(data);
        for(i = 0; i < data.length; i++){
            var pet = {
                name: data[i].petName,
                type: data[i].petType,
                breed: data[i].petBreed,
                age: data[i].petAge,
                image: data[i].petImage,
                description: data[i].petDescription,
                user: data[i].User
            };
            pets.push(pet);
        }
        console.log(pet);
        console.log(pets);
        findInPetfinder();
    });

    function findInPetfinder(){
        var locationArray = petLocation.split(", ");
        var location = locationArray[0] + "," + locationArray[1];
        
        var url = 'http://api.petfinder.com/pet.find?key=f6480370e828119484f2e9fb63e62b27&shelter&count=20&animal='
        + petType +'&location=' + location + '&output=full&format=json';
        $.ajax({
            type : 'GET',
            data : {},
            url : url+'&callback=?' ,
            dataType: 'json',
            success : function(data) {              
                // stores result
                var result = data.petfinder.pets.pet
                for(i = 0; i < result.length; i++){
                    if(result[i].media.photos){
                        // if (result[i].media.photos.length > 3){
                            var pet = {
                                name: result[i].name.$t,
                                type: result[i].animal.$t,
                                breed: result[i].breeds.breed.$t,
                                age: result[i].age.$t,
                                image: result[i].media.photos.photo[2].$t,
                                description: result[i].description.$t,
                                user: {
                                    address: result[i].contact.address1.$t,
                                    email: result[i].contact.email.$t,
                                    phone: result[i].contact.phone.$t,
                                    location: result[i].contact.city.$t + ", " + result[i].contact.state.$t + ", USA"
                                }
                            };
                        pets.push(pet);
                    //     }
                    }
                }
                console.log(data);
                console.log(pets);
            },
            error : function(request,error)
            {
                console.log("Request: "+JSON.stringify(request));
            }
        });
    }
})