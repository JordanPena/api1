var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/bd_api2';

mongoose.connect(urlString, function(err, res){
	if(err){
		console.log('Nao concectou a: ' + urlString);
	}else{
		console.log('Concectado a: ' + urlString);
	}
})