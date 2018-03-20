$("#submit").on("click", function(){
  
    var score = 0;
    var count = 0;
    var id = sessionStorage.getItem("id");

    function validateForm(){
        
      var isValid = true;
      var animal = "";
  
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
    
        if (score <= 24){
            animal = "dog";
        } else if (25 <= score <= 48){
            animal = "cat";
        }
   
    
    var userData = {
        score: score,
        animal: animal
    };
  
    
        var currentURL = window.location.origin;
      // AJAX POST to the data to the friends.js API.

      $.ajax({
        method: "PUT",
        url: "/api/users/" + id,
        data: userData
      })
        .then(function() {
          window.location.href = "/profile";
        });

      // location.reload();
  } else {
      alert("Please fill out all fields before submitting the survey!");
      }
  
      return false;
  
    });

