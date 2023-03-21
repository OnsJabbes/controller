const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const http = require('http');
const fs = require('fs');


// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(
    db, { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Initialize Express app
const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//routes
app.use('/', function(req, res, next) {
    res.sendFile(__dirname + '/template/public/themes/listdo-html/' + req.path);
});



const localisationController = require('./controllers/localisationController');
app.get('/' , localisationController) ; 

app.use('/', require('./controllers/localisationController.js'));


// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

