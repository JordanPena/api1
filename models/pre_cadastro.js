
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var preCadastroSchema = new mongoose.Schema({
        nome: String,
        email: String
});

// Return model
module.exports = restful.model('preCadastro', preCadastroSchema);