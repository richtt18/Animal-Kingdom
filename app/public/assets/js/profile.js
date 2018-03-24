$(document).ready(function(){
   
    var currentURL = window.location.origin;
    var id = sessionStorage.getItem("id");
    // id =1;
    console.log(id);
    
        
            $.get(currentURL + "/api/users/" + id, function(data){
            console.log(data);
        if (data){
            $("#userInfo").hide();
            $("#userInfo1").append(`
            
            <div class="container has-text">
            <section class="hero is-info">
                <div class="hero-body">
                  <div class="container">
                      <div class="columns">
                        <div class="column is-four-fifths">
                            <h1 class="title">
                              Hello, ${data.name}!
                            </h1>
                           </div> 
                          <div class="column"> 
                        <p class="has-text-centered">
                          <a class="button is-normal is-outlined" href="/survey2.html">
                            Survey 
                          </a>
                        </p>
                      </div>  
                      <div class="column">
                        <p class="has-text-centered">
                          <a class="signIn button is-normal is-outlined"  href="pet.html">
                            Add my pet
                          </a>
                        </p>
                     </div>
                      </div>
                  </div>
                </div>
              </section><br>
            <div class="container" >
                <div class="columns" id="addPet">
                 
                  </div>
            </div>
         </div>
            
            `);
        
        
            $("#addPet").append(`
           
            <div class="column is-6">
            <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <h4 class="title">Personal info:</h4>
              <h6>Adress: ${data.addressLine + ", " + data.location}</h6>
              <h6>Email: ${data.email}</h6>
              <h6>Phone number: ${data.phone}</h6>
              </article>
            </div>
            </div>
          
          `)
          if (!data.animal){
            $("#addPet").append(`
            
            <div class="column is-6">
            <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <h5 class='title'>  What Person are you?       Cat Person or Dog Person</h5>
              <p class="has-text-centered">
              <a class="button is-normal is-outlined" href="/survey2.html">
                Survey 
              </a>
            </p>              
            </article>
          </div>
          </div>
          
          `) } else { 
              var img = '<img  src="assets/images/doge.jpg" id="userPet">'
              
              if(data.animal === "cat"){
                  img = '<img  src="assets/images/cat.jpeg" id="userPet">';
              }
            $("#addPet").append(`
            <div class="column is-6">
            <div class="tile is-parent">
            <article class="tile is-child notification is-warning">
              <h5 class="title"> You are - <strong>${data.animal}</strong> person </h5>
              <div class="columns">
              <div class="column is-6">
              <figure class="image is-64x64">
                ${img}
              </figure>
              </div>
              <div class="column is-6">
              <p class="has-text-centered">
                          <a class="signIn button is-normal is-outlined"  href="${data.animal}.html">
                    Find ${data.animal}
                    </a>
                </p>
              </div>
            </article>
          </div>
          </div>
          `) 
          }
    }    
    
     for (i = 0; i < data.Pets.length; i ++){
          console.log(data.Pets[i].petName);  
          $("#addMyPet").append(`
                     <div class="animal-display column is-3">
                      <div class=" card-img-top animalCard" style="width: 16rem; heigth: 22rem">
                          <img class="animal-img card-img-top" src="${data.Pets[i].petImage}" alt="Card image cap">
                          <div class="card-body">
                          <h5 class="card-title"><strong> Name: ${data.Pets[i].petName}</strong></h5>
                          <h6 class="card-title"> Breed: ${data.Pets[i].petBreed}</h6>
                          <p class="card-text">Description: ${data.Pets[i].petDescription}</p>
                          </div>
                  </div>
             
          </div>
                
          `)
      
  }
        });
   
})