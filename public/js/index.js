let socket = io();

socket.on('connect', function ()  {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'Johnny',
    text: 'Hey. This is Johnnnny',
  })
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

socket.on('newMessage', function (message) {
  console.log('New message', message);
})
