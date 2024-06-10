// <!-- Matheus Arcangelo Pestana -->

function logar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email === 'usuario@gmail.com' && senha === 'senha123') {
        localStorage.setItem('logado', 'true');
        alert('Logado com sucesso!');
        window.location.href = 'home.html';
    } else {
        alert('Email ou senha incorretos, tente novamente.');
    }
}

function logout() {
    if(confirm('Você deseja sair?') == true) {
        localStorage.removeItem('logado');
        window.location.href = 'index.html';
    }

}

window.onload = function() {
    if(window.location.pathname.endsWith('home.html')) {
        var logado = localStorage.getItem('logado');
        if(logado !== 'true') {
            alert('Você precisa estar logado para acessar essa página.');
            window.location.href = 'index.html';
        }
    }
}