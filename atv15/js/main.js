document.addEventListener('DOMContentLoaded', (event) => {
    var texto = document.getElementById("texto");
    var contadorPalavras = document.getElementById("palavras");

    texto.oninput = function() {
        var palavras = texto.value.split(/\s+/).filter(function(palavra) {
            return palavra.length > 0; // Ignora strings vazias
        });
        contadorPalavras.textContent = palavras.length + " palavras";
    }
});