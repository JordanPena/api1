// Configuration files
var app = require('./config/app_config');
var db = require('./config/db_config');

// Instances of routes
var produtos = require('./routes/produtoRouter');
var preCadastro = require('./routes/preCadastroRouter');

app.get('/', function(req, res){
	var ok = [{Bemvindo: 'API de Entidades Sociais'},{
		hello: 'world',
		bomdia: {
			joao: 'maria',
			pedro: 'Jose'
		},
		endereco: {
			numero: '111',
			logradouro: 'Rua Brasil',
			bairro: 'jardim camburi',
			cidade: 'Vitoria',
			pais: 'Brasil'
		},
		marca: 'SouSol'
	}];
	res.json(ok);
	//res.end('bem vindo!');
});

// Rotas
app.use('/produtos', produtos);
app.use('/precadastro', preCadastro);
