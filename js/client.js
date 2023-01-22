
const socket = io('http://localhost:3000')
const form = document.getElementById('send-container')
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
const append = (message, position)=>{
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add('message')
    messageElement.classList.add(position) 
    messageContainer.append(messageElement)
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const message =messageInput.ariaValueMax;
    append(`You: ${message}`, right)
    socket.emit('send',message)
    messageInput.value =""
})

const name =  prompt("Enter you name to join");
socket.emit('new-user-joined',name)

socket.on('user-joind',name=>{
append(`${name} joined the chat`, 'right')
})

socket.on('receive',data=>{
    append(`${data.user}: ${data.message}`, 'left')

})
socket.on('left',name =>{
    append(`${data.name} left the chat`, 'left')

})
socket.on('leave' , name => {
    append(`${name}  left the chat`, 'left')
            
        })