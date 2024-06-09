function verifica() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    if (nome && email && msg !== '') {
        alert('Campos preenchidos, verificação concluída')
    } else {
        alert('Ao menos um dos campos está vazio, tente novamente.')
    }
}