$("#addPet").on("click", function(){
    var petName = $("#petName").val(); 
    var petBreed = $("#breed").val() 
    var petType = $("#pet").val();
    var petAge = $("#age").val();
    var petDescription = $("#description").val();
    var UserId = sessionStorage.getItem("id");
    console.log(UserId);


    var petData = {
        petName: petName,
        petBreed: petBreed,
        petType: petType,
        petAge: petAge,
        petDescription: petDescription,
        UserId: UserId
    }
    console.log(petData);
    var currentURL = window.location.origin;

    $.post(currentURL + "/api/pets", petData, function(data){
              
        console.log(data);
      
  });

})

