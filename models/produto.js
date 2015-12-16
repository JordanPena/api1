// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema - Colections DB
var ProdutoSchema = new Schema({
	nome: String,
	descricao: String,
	valor: String
})

// Return model - Schema
module.exports = mongoose.model('Produto', ProdutoSchema);