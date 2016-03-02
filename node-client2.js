 /**
client
 **/
  var zmq = require('zmq')
  , port = 'tcp://127.0.0.1:5555';

 var socket = zmq.socket('req');

  socket.identity = 'client' + process.pid;

  socket.connect(port);
  console.log('connected!');

  socket.send(JSON.stringify({
    "amt": 1000,
    "ii": 6,
    "addl": 2,
    "CL": 1.0,
    "VC": 10,
    "KA": 0.5
  }));

  socket.on('message', function(data) {
    console.log(socket.identity + ': answer data ' + data);
  });
