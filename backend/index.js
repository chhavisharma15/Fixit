let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;

let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/fixit');
var db = mongoose.connection;

let apiRoutes = require("./api-routes")
// Use Api routes in the App
app.use('/api', apiRoutes)

app.get('/', (req, res) => res.send('Hello World with Express'));
// Import Body parser
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
