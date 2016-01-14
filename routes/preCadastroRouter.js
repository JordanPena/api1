var express = require('express');
var router = express.Router();
var preCadastroController = require('../controllers/preCadastroController');

router.post('/', function(req, res){
	var nome = req.body.nome;
	var email = req.body.email;

	preCadastroController.save(nome, email, function(resp){
		res.json(resp);
	});
});

router.get('/', function(req, res){
	preCadastroController.list(function(resp){
		res.json(resp);
	})
});

module.exports = router;