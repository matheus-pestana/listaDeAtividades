// <!-- Matheus Arcangelo Pestana -->

document.getElementById('arquivo').addEventListener('change', function(e) {
    var visualizacao = document.getElementById('visualizacao');
    visualizacao.innerHTML = '';

    // Para cada arquivo selecionado, cria uma nova tag img e define o src como o URL do arquivo
    for(var i = 0; i < e.target.files.length; i++) {
        var img = document.createElement('img');
        img.src = URL.createObjectURL(e.target.files[i]);
        img.height = 60;
        img.onload = function() {
            URL.revokeObjectURL(this.src);
        }
        visualizacao.appendChild(img);
    }
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Move as imagens da visualização para a div de imagens enviadas
    var visualizacao = document.getElementById('visualizacao');
    var imagensEnviadas = document.getElementById('imagensEnviadas');
    while (visualizacao.firstChild) {
        imagensEnviadas.appendChild(visualizacao.firstChild);
    }
});