
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Entidade = require('../models/entidade');


// Routes
Entidade.methods(['get', 'post', 'put', 'delete']);
Entidade.register(router, '/entidades');


// Return router
module.exports = router;