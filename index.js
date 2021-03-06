var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/signup', function(req, res){
  res.sendFile(__dirname + '/signup.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

var portNumber = 3003;
http.listen(portNumber, function(){
  console.log('listening on localhost:'+portNumber);
});
