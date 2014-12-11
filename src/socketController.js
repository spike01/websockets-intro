var socket = function(io) {

  io.on('connection', function(socket){
    console.log('Client connected!');

    socket.on('connection name', function (user){
      console.log(user);
      socket.broadcast.emit('new user', user.name + " has joined.");
    });

  });
}

module.exports = socket;
