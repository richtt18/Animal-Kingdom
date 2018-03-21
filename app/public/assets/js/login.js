
$("#signIn").on("click", function() {
    $(".modal").addClass("is-active");  
  });
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");
  });

$("#signUp").on("click", function(){
    $(".form-control").removeClass("is-danger");
    $(".form-password").removeClass("is-danger");
    
    function validateForm(){
        
        var isValid = true;
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var email = $('#email').val();
        var score = 0;
        var animal = "";
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        var posdCode = 
    
        $('.form-control').each(function() {
            if ( $(this).val() === '' )
                return isValid = false;
            });
        
        if (!testEmail.test(email)){
            $("#email").addClass("is-danger");
            return isValid = false;
        }
        
        if (password !== confirmPassword){
            $("#confirmPassword, #password").addClass("is-danger");
            return isValid = false;
             
        }

        return isValid
      }

      if (validateForm() == true) {
  
        var userData = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            addressLine: $("#addressLine").val(),
            location: $("#inputCity").val(),
            posdCode: $("#postCode").val(),
            score: -1,
            animal: ""
        };
      
        
            var currentURL = window.location.origin;
          // AJAX POST to the data to the friends.js API.
          $.post(currentURL + "/api/users", userData, function(data){
              
                sessionStorage.clear();
                // Store all content into sessionStorage
                sessionStorage.setItem("id", data.id);

                window.location.href = "profile.html"
              
          });
          // location.reload();
      } else {
          alert("Please fill out all fields before submitting the survey!");
          }
      
          return false;
})

$("#loginButton").on("click", function(){
    var loginEmail = $("#loginEmail").val();
    var loginPassword = $("#loginPassword").val();
    var currentURL = window.location.origin;
    console.log(loginEmail, loginPassword);

    var userLoginData = {
        email: loginEmail,
        password: loginPassword
    }
  
  if( loginEmail != "" && loginPassword != "" ){
    $.get(currentURL + "/api/users/login", userLoginData, function(data){
        console.log("here");
         alert(data);
         sessionStorage.clear();
         sessionStorage.setItem("id", data.id);
        


     });
        }
})