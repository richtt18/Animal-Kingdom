
$("#submit").on("click", function(){
  
  var score = 0;
  
  for(i=0; i <13; i++){
      $.each($("input[name='question-" + i + "']:checked"), function() {
     
      score += parseInt($(this).val());
      
      });
  }
  
      displayScore(score);
      location.reload();
  });
  
  function displayScore(score){
      console.log(score);
  }