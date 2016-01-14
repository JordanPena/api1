var PreCadastro = require('../models/preCadastro');

exports.save = function(nome, email, callback){
	new PreCadastro({
		'nome': nome,
		'email': email
	}).save(function(error){
		if(error){
			callback({error: 'Não foi possível salvar'});
		}else{
			callback({resposta: 'Salvo com sucesso'});
		}
	});
}


exports.list = function(callback){
	PreCadastro.find({}, function(error, cadastros){
		if(error){
			callback({error: 'Não possível encontrar cadastros'});
		}else{
			callback(cadastros);
		}
	});
}


exports.delete = function(id, callback){
	PreCadastro.findById(id, function(error){
		if (error){
			callback({error: 'Não foi possível excluir'});
		}else{
			produto.remove(function(error){
				if(!error){
					callback({resposta:"Produto excluido"})
				}
			});
		}
	})
}