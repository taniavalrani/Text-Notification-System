
const express = require('express');
const app = express();
var twilio = require('twilio');

var accountSid = 'AC5f860a6daa0ce6671bc6d6e03092d657'; 
var authToken = '4e9930cf1af407f6e44a895d220b31cb';

var client = require('twilio')(accountSid, authToken); 

app.use(express.static('/'));

var port = process.env.PORT || 8080;

app.get('/send_message', function (req, res) {

	client.messages.create({ 
			to: "+18577076323", 
			from: "+13179618398 ", 
			body: "hi", 
		}, 
		function(err, message) { 
			console.log(message.sid);
	});
});

app.post('/sms', function(req, res) {
  var twiml = new twilio.TwimlResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());


});

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


app.listen(port);