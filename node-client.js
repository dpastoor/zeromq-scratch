 /**
client
 **/
  var zmq = require('zmq')
  , port = 'tcp://127.0.0.1:5000';

 var socket = zmq.socket('req');

  socket.identity = 'client' + process.pid;
  
  socket.connect(port);
  console.log('connected!');

  setInterval(function() {
    var arr = [];
    for (var i=0, t=10; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
    }
    var jsonObject={"numbers" : arr} ;
    var stringObject=JSON.stringify(jsonObject); 
    socket.send(stringObject);
    console.log(socket.identity + ': asking for sum of: ', arr);
  }, 1000);

  socket.on('message', function(data) {
    console.log(socket.identity + ': answer data ' + data);
  });