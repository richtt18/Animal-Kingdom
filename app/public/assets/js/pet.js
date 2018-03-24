$("#addPet").on("click", function(){
    event.preventDefault();
    var petName = $("#petName").val(); 
    var petBreed = $("#breed").val() 
    var petType = $("#pet").val();
    var petAge = $("#age").val();
    var petImage = $("#image").val();
    var petDescription = $("#description").val();
    var petLocation = sessionStorage.getItem("location");
    var UserId = sessionStorage.getItem("id");
    console.log(UserId);


    var petData = {
        petName: petName,
        petBreed: petBreed,
        petType: petType,
        petAge: petAge,
        petImage: petImage,
        petDescription: petDescription,
        petLocation: petLocation,
        UserId: UserId
    }
    console.log(petData);
    
    var currentURL = window.location.origin;

    $.post(currentURL + "/api/pets", petData, function(data){
              
        console.log(data);
      
  });
  window.location.href = "profile.html";
})

