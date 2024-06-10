function verifica() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nome && emailRegex.test(email) && msg !== '') {
        alert('Campos preenchidos, verificação concluída')
        window.location.reload();
    } else {
        alert('Ao menos um dos campos está vazio ou o e-mail não está no formato correto, tente novamente.')
    }
}