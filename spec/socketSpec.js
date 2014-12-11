var io = require('socket.io-client');

var chatUser1 = {'name': 'Spike'}
var chatUser2 = {'name': 'Mihai'}

describe("Chat Server", function(){

  it('broadcasts new user to all users', function(done) {

    var client1 = io.connect('http://localhost:3000');

    client1.on('connect', function(data){
      client1.emit('connection name', chatUser1);

      var client2 = io.connect('http://localhost:3000');

      client2.on('connect', function(data){
        client2.emit('connection name', chatUser2);
      });

      client2.on('new user', function(usersName){
        expect(usersName).to.equal(chatUser1.name + " has joined.");
        client2.disconnect();
        done(); 
      });
    });

  });
});
