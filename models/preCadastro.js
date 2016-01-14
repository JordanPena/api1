// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema - Colections DB
var PreCadastroSchema = new Schema({
	nome:String,
	email:String
});

// Return model - Schema
module.exports = mongoose.model('PreCadastro', PreCadastroSchema);