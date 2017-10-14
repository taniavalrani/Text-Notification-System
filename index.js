
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var twilio = require('twilio');

app.use(bodyParser.urlencoded({extended: false}));

var TWILIO_PHONE_NUMBER = "+13179618398";
var numbers = ["+18577076323", "+13174109989", "+18474311996", "+14084665857", "+14158199349", "+17817525946", "+17742741928"];
var driver = ["+13174109989"];
 
app.post("/receive_message", function (request, response) {

	console.log(request.body.Body);

  	var confirmed = false;
  	for (var i = 0; i < numbers.length(); i++) {
  		if (request.body.From == numbers[i]) {
  			confirmed = true;
  		}
  	}

  	if (confirmed) {
		client.messages.create({
			from: TWILIO_PHONE_NUMBER,
			to: driver,
			body: "NEC Shuttle Stop Request!"
		}).then((messsage) => {
			// do nothing
		});
  	}

	response.sendStatus(200);
});
 
app.get("/", function (request, response) {
	response.write("You should be practicing");
	response.send();
});
 
var listener = app.listen(process.env.PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});