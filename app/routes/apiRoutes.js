// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/users/", function(req, res) {
    db.User.findAll({})
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/users/login", function(req, res) {

    console.log(req.query);
    db.User.findAll({
      where: {
        email: req.query.email
      }
    })
      .then(function(dbUser) {
        console.log( dbUser[0].dataValues.password + " " + req.query.password);
        if (req.query.password == dbUser[0].dataValues.password){
          console.log(dbUser);
          console.log(dbUser[0].dataValues.password + " " + req.query.password)
        res.json(dbUser);
      } 
      });
  });

  // Get rotue for retrieving a single post
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
       id: req.params.id
      }
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // DELETE route for deleting users
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // PUT route for updating users
  app.put("/api/users/:id", function(req, res) {
    db.User.update(req.body,
      {
        where: {

          id: req.params.id

        }
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });
//PETS API

// GET route for getting all of the users
app.get("/api/pets", function(req, res) {
  var query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Author
  db.Pet.findAll({
    where: query,
    include: [db.User]
  }).then(function(dbPet) {
    res.json(dbPet);
  });
});

app.get("/api/pets/:id", function(req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Author
  db.Pet.findOne({
    where: {
      id: req.body.id
    },
    include: [db.User]
  }).then(function(dbPet) {
    res.json(dbPet);
  });
});

app.post("/api/pets", function(req, res) {
  console.log(req.body);
  db.Pet.create(req.body)
    .then(function(dbPet) {
      console.log("Here!")
      res.json(dbPet);
    });
});



};

