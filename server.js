// Configuration files
var app = require('./config/app_config');
var db = require('./config/db_config');

// Controllers
var produtoController = require('./controllers/produtoController');

// Instances of routes
var produtos = require('./routes/produtoRouter');

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

// Rotas de produtos
app.use('/produtos', produtos);