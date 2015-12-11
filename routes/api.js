
// Dependencies
var express = require('express');
var router = express.Router();



//Middleware
var middEntidade = require('../middlewares/middEntidades');

// deve imprimir no console todas requisiçoes no caminho '/entidades'
router.use('/entidades',
    function(req, res, next) {
            middEntidade.logReq(router);
            console.log('teste');
            next();
});

// Routes
router.get('/entidades', function (req, res, next) {
        entidade


});

preCadastro.methods(['get', 'post', 'put', 'delete']);
preCadastro.register(router, '/pre_cadastro');


// Return router
module.exports = router;