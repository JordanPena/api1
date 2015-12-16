var express = require('express');
var router = express.Router();
var produtoController = require('../controllers/produtoController');

router.get('/', function(req, res){
	produtoController.list(function(resp){
		res.json(resp);
	})
});



module.exports = router;