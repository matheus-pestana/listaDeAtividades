// <!-- Matheus Arcangelo Pestana -->

document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("openModalButton");
    var span = document.getElementById("closeModalButton");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});