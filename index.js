
const express = require('express')
const app = express()

app.use(express.static('/'));

var port = process.env.PORT || 8080;

var TMClient = require('textmagic-rest-client');

/* Send a message
	var c = new TMClient('aribrown', 'GuMIti0sFF4lgbFuiES3OAraqKRKhK');
	c.Messages.send({text: 'hey tania isn\'t it weird, i know your name', phones:'18577076323'}, function(err, res){
	    console.log('Messages.send()', err, res);
	});
*/

app.get('/', function(request, response){
	response.write("You should be practicing");
	response.send();
});

app.post('/receive_message', function(request, response){
  

	response.sendStatus(200);
});

app.listen(port);