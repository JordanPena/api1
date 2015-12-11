
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var entidadeSchema = new mongoose.Schema({
        nomeFantasia: String,
        cidade: String,
        cnpj: Number
});

// Return model
module.exports = restful.model('Entidade', entidadeSchema);