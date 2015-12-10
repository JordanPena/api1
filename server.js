
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Mongo
mongoose.connect('mongodb://localhost/ap1_db');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));


// Start server
app.listen(3000);
console.log('api1 rodando na porta 3000');