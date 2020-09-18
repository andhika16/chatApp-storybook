const chatForm = document.getElementById('chat-form');
const chatMessage = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users')
// Get username and room from URL
const {
  username,
  room
} = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', {
  username,
  room
});

// Get room and users
socket.on('roomUsers', ({
  room,
  users
}) => {
  outputRoomName(room);
  outputUsers(users);
});

// message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message)
  // scroll down
  chatMessage.scrollTop = chatMessage.scrollHeight
})

// message submit
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  // get message text
  const msg = e.target.elements.msg.value;

  // emit message to server
  socket.emit('chatMessage', msg);

  // clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();


})


// outputmessage to dom
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<div class="meta">${message.username} <span>${message.time}</span></div>
  <p class="text">
    ${message.text}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div)

}

// add room name to DOM

function outputRoomName(room) {
  roomName.innerHTML = room
}
// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}