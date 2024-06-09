function envia() {
    var nome = document.getElementById('nome').value;
    var msg = document.getElementById('msg').value;

    var commentDiv = document.createElement('div');
    var nomeLabel = document.createElement('label');
    var nomeP = document.createElement('p');
    var msgLabel = document.createElement('label');
    var msgP = document.createElement('p');

    commentDiv.className = 'comment';
    nomeLabel.setAttribute('for', 'nome');
    nomeLabel.textContent = 'Autor:';
    nomeP.className = 'nome';
    nomeP.textContent = nome;
    msgLabel.setAttribute('for', 'msg');
    msgLabel.textContent = 'Mensagem:';
    msgP.className = 'msg';
    msgP.textContent = msg;

    commentDiv.appendChild(nomeLabel);
    commentDiv.appendChild(nomeP);
    commentDiv.appendChild(msgLabel);
    commentDiv.appendChild(msgP);

    document.getElementById('comments').appendChild(commentDiv);

    document.getElementById('nome').value = '';
    document.getElementById('msg').value = '';

}