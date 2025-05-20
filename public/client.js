/**const socket = io();
let Name;
let textarea=document.querySelector('textarea')
let messageArea=document.querySelector(".message_area")

do{
      Name=prompt("please enter ur name:")
}while(!Name)

    textarea.addEventListener('keyup',(e)=>{
        if(e.key==='enter'){
            sendMessage(e.target.value)
        }
    })

    function sendMessage(message){
        let msg={
            user:Name,
            message:message.trim
        }

        //append msg
        appendMessage(msg,'outgoing')
        textarea.value=''

        //send to server
        socket.emit('message',msg)

        
    }



    function appendMessage(msg,type)
{
 let mainDiv=document.createElement('div')
 let className=type
 mainDiv.classList.add(className,'message')



 let markup=`<h4>${msg.user}</h4>
 <p>${msg.message}</p>`


mainDiv.innerHTML=markup
messageArea.appendChild(mainDiv)


}
// receive msg
socket.on('message',(msg)=>{
    appendMessage(msg,'incoming')
})


function scrollToBottom(){
    messageArea.scrollTop=messageArea.scrollHeight
}   **/
/**const socket = io();
let Name;
let textarea = document.querySelector('textarea');
let messageArea = document.querySelector('.message_area');

// Ask user name
do {
    Name = prompt("Please enter your name:");
} while (!Name);

// Keyup listener for Enter key
textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Prevents new line
        const message = e.target.value.trim();
        if (message !== '') {
            sendMessage(message);
        }
    }
});

// Send message
function sendMessage(message) {
    let msg = {
        user: Name,
        message: message
    };

    appendMessage(msg, 'outgoing');
    textarea.value = '';
    socket.emit('message', msg);
}

// Display message
function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(type, 'message');

    let markup = `<h4>${msg.user}</h4><p>${msg.message}</p>`;
    mainDiv.innerHTML = markup;

    messageArea.appendChild(mainDiv);
    scrollToBottom();
}

// Receive message
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
});

// Scroll to bottom
function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}**/

const socket = io();
let Name;
const textarea = document.getElementById('textarea');
const messageArea = document.querySelector('.message_area');

// Prompt user for name AFTER DOM loads
window.addEventListener('DOMContentLoaded', () => {
    do {
        Name = prompt("🚨 Please enter your name to join the chat:");
        if (!Name) {
            alert("❌ Name is required to join the chat!");
        }
    } while (!Name);
});

// Listen for Enter key
textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const message = textarea.value.trim();
        if (message !== '') {
            sendMessage(message);
        }
    }
});

// Send message
function sendMessage(message) {
    const msg = {
        user: Name,
        message: message
    };

    appendMessage(msg, 'outgoing');
    textarea.value = '';
    socket.emit('message', msg);
}

// Display message
function appendMessage(msg, type) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add(type, 'message');

    const markup = `<h4>${msg.user}</h4><p>${msg.message}</p>`;
    mainDiv.innerHTML = markup;

    messageArea.appendChild(mainDiv);
    scrollToBottom();
}

// Receive message
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
});

// Scroll to latest
function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
