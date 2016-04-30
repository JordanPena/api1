var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI, function(err, res){
	if(err) console.error(err);
	else
		console.log('MongoDB concectado em: https://mlab.com');
});