
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
 
app.post("/receive_message", function (request, response) {
	console.log(request.body.Body);
  	console.log(request.body.From); 
	response.sendStatus(200);
});
 
app.get("/", function (request, response) {
	response.write("You should be practicing");
	response.send();
});
 
var listener = app.listen(process.env.PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});


// var client = require('twilio')(accountSid, authToken); 

// app.use(express.static('/'));

// var port = process.env.PORT || 8080;

// app.get('/send_message', function (req, res) {

// 	client.messages.create({ 
// 			to: "+18577076323", 
// 			from: "+13179618398 ", 
// 			body: "hi", 
// 		}, 
// 		function(err, message) { 
// 			console.log(message.sid);
// 	});

// 	res.sendStatus(200);
// });

// app.post('/sms', function(req, res) {
//   var twiml = new twilio.TwimlResponse();
//   twiml.message('The Robots are coming! Head for the hills!');
//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());


// });

// /* Send a message
// 	var c = new TMClient('aribrown', 'GuMIti0sFF4lgbFuiES3OAraqKRKhK');
// 	c.Messages.send({text: 'hey tania isn\'t it weird, i know your name', phones:'18577076323'}, function(err, res){
// 	    console.log('Messages.send()', err, res);
// 	});
// */

// app.get('/', function(request, response){
// 	response.write("You should be practicing");
// 	response.send();
// });


// app.listen(port);