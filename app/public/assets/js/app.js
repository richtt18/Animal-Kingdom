$("#submit").on("click", function(){
  
    var score = 0;
    var count = 0;
  
    function validateForm(){
        
      var isValid = true;
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      var email = $('.form-email').val();
      var animal = "";
  
      $('.form-control').each(function() {
          if ( $(this).val() === '' )
              isValid = false;
          });
      
      if (!testEmail.test(email)){
          
          return isValid = false;
      }
      
      for(i=0; i <13; i++){
           $.each($("input[name='question-" + i + "']:checked"), function() {
                count ++
          });
      };
      
          if (count < 12){
              return isValid = false;
          };
  
  
       return isValid
    }
    
    console.log(validateForm());
  
    if (validateForm() == true) {
  
    for (i=0; i < 13; i++){
        $.each($("input[name='question-" + i + "']:checked"), function() {
        score += parseInt($(this).val());
       });
       
    }
    
        if (score <= 20){
            animal = "dog";
        } else if (21 <= score <= 48){
            animal = "cat";
        }
   
    
    var userData = {
        name: $("#name").val(),
        email: $("#email").val(),
        location: $("#inputCity").val(),
        score: score,
        animal: animal
    };
  
    
        var currentURL = window.location.origin;
      // AJAX POST to the data to the friends.js API.
      $.post(currentURL + "/api/users", userData, function(data){
          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          // $("#matchName").text(data.name);
          // $('#matchImg').attr("src", data.photo);
          // Show the modal window with the best match
          // $("#resultsModal").modal('toggle');
          // location.reload();
          console.log(data);
      });
      alert(animal);
      // location.reload();
  } else {
      alert("Please fill out all fields before submitting the survey!");
      }
  
      return false;
  
    });