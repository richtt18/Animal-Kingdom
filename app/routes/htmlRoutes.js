// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey2.html"));
  });

  app.get("/result", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/results.html"));
    });
  // If no matching route is found default to home
  app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "/../public/home.html"));
  });


  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/profile.html"));
  });

  app.get("/pet", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/pet.html"));
  });

  app.get("/dog", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/dog.html"));
  });

  app.get("/cat", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/cat.html"));
  });

  app.get("/loader", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/loader.html"));
  });

};
