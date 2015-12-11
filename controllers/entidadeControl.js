
//Dependencies
var express = require('express');
var router = express.Router();

// Models
var Entidade = require('../models/entidade');
var preCadastro = require('../models/pre_cadastro');

var entidadeControl = {};

//Regras de Negócio

//CRUD /ENTIDADES MONGO
Entidade.methods(['get', 'post', 'put', 'delete']);
Entidade.register(router, '/entidades');


modules.exports = entidadeControl;