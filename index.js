var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var router = require('./router');

router('/','index.html');

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

var portNumber = 3003;
http.listen(portNumber, function(){
  console.log('listening on localhost:' + portNumber);
});
