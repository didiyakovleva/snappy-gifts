var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3002,
  mongoose = require('mongoose'),
  UserAddresses = require('./apis/models/snappyModels'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/snappy'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./apis/routes/snappyRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Snappy server started on: ' + port);