//dependencies
var express = require("express");
var path = require("path");

//creates app
var app = express();
var PORT = process.env.port || 3000;

//makes express app handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//data
var customers= [
{
    routeName: "mary",
    name: "Mary",
    email:"mary@gmail.com",
    phoneNumber: "555-555-5555",
    uniqueID: "1"
},
{
    routeName: "david",
    name: "David",
    email: "david@gmail.com",
    phoneNumber: "555-555-5554",
    uniqueID:"2"
},
{
    routeName:"ebony",
    name: "Ebony",
    email:"ebony@gmail.com",
    phoneNumber: "555-555-5553",
    uniqueID:"3"
}
];

//routes
// home page route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//route for tables page
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//get route for reserve page
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays a table data for single reservation, or returns false
app.get("/api/tabledata/:id", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < newcustomer.length; i++) {
    if (chosen === newcustomer[i].routeName) {
      return res.json(newcustomer[i]);
    }
  }

  return res.json(false);
});

//route for reserve page
app.post("/api/reserved", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcustomer = req.body;
ap
  // We then add the json the user sent to the character array
  customer.push(newcustomer);

  // We then display the JSON to the users
  res.json(newcustomer);
});

// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});