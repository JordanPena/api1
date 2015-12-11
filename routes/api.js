
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Entidade = require('../models/entidade');
var preCadastro = require('../models/pre_cadastro')

//Middleware
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/entidades', function(req, res, next) {
            console.log('Request URL:', req.originalUrl);
            next();
}, function (req, res, next) {
            console.log('Request Type:', req.method);
            next();
});

// Routes
Entidade.methods(['get', 'post', 'put', 'delete']);
Entidade.register(router, '/entidades');

preCadastro.methods(['get', 'post', 'put', 'delete']);
preCadastro.register(router, '/pre_cadastro');


// Return router
module.exports = router;