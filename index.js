
const express = require('express')
const app = express()

app.use(express.bodyParser());

var TMClient = require('textmagic-rest-client');

var c = new TMClient('aribrown', 'GuMIti0sFF4lgbFuiES3OAraqKRKhK');
c.Messages.send({text: 'hey tania isn\'t it weird, i know your name', phones:'18577076323'}, function(err, res){
    console.log('Messages.send()', err, res);
});

app.post('/receive_message', function(request, response){
  console.log(request.body);
  response.send(request.body);
});

app.listen(3000);