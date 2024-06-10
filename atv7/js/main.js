// <!-- Matheus Arcangelo Pestana -->

document.addEventListener('DOMContentLoaded', (event) => {
    var dropdown = document.getElementById("dropdownMenu");
    var btn = document.getElementById("dropdownButton");

    btn.onclick = function() {
        if (dropdown.style.opacity == "0") {
            dropdown.style.opacity = "1";
            dropdown.style.pointerEvents = "auto";
        } else {
            dropdown.style.opacity = "0";
            dropdown.style.pointerEvents = "none";
        }
    }
});