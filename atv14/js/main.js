document.addEventListener('DOMContentLoaded', (event) => {
    var genshinButton = document.getElementById("genshin");
    var honkaiButton = document.getElementById("honkai");
    var genshinImages = document.querySelectorAll(".genshin");
    var honkaiImages = document.querySelectorAll(".honkai");
    var allImages = document.querySelectorAll(".genshin, .honkai");

    genshinButton.onclick = function(event) {
        event.preventDefault(); // Evita que o navegador siga o link

        if (genshinButton.classList.contains("active")) {
            // Se o botão Genshin já está ativo, mostra todas as imagens e remove a classe .active
            for (var img of allImages) {
                img.style.display = "block";
            }
            genshinButton.classList.remove("active");
        } else {
            // Caso contrário, mostra apenas as imagens de Genshin e adiciona a classe .active
            for (var img of genshinImages) {
                img.style.display = "block";
            }
            for (var img of honkaiImages) {
                img.style.display = "none";
            }
            genshinButton.classList.add("active");
            honkaiButton.classList.remove("active");
        }
    }

    honkaiButton.onclick = function(event) {
        event.preventDefault(); // Evita que o navegador siga o link

        if (honkaiButton.classList.contains("active")) {
            // Se o botão Honkai já está ativo, mostra todas as imagens e remove a classe .active
            for (var img of allImages) {
                img.style.display = "block";
            }
            honkaiButton.classList.remove("active");
        } else {
            // Caso contrário, mostra apenas as imagens de Honkai e adiciona a classe .active
            for (var img of genshinImages) {
                img.style.display = "none";
            }
            for (var img of honkaiImages) {
                img.style.display = "block";
            }
            honkaiButton.classList.add("active");
            genshinButton.classList.remove("active");
        }
    }
});