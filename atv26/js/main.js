// <!-- Matheus Arcangelo Pestana -->

document.addEventListener('DOMContentLoaded', function() {
    const messages = document.getElementById('messages');
    const input = document.getElementById('input');
    const send = document.getElementById('send');
    
    const ws = new WebSocket('ws://localhost:8080');
    
    ws.onmessage = function(event) {
        const message = document.createElement('p');
        message.textContent = event.data;
        messages.appendChild(message);
    };
    
    send.addEventListener('click', function() {
        ws.send(input.value);
        input.value = '';
    });
})

