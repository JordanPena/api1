blx
// Dependencies
var express = require('express');
var router = express.Router();



// Middlewares

// Return middleware
module.exports = function(){

    var middEntidade = {};

    middEntidade.logReq = function(req, res, next) {
            console.log('Request URL:', req.originalUrl);
            console.log('Request Type:', req.method);
            console.log('Time: ', Date.now());
            next();
    }
    return middEntidade;
};
