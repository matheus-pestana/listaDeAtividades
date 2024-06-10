// <!-- Matheus Arcangelo Pestana -->

function clica() {
    var btn = document.getElementById('btn');

    if (btn.classList.contains('btn')) {
        btn.classList.remove('btn');
        btn.classList.add('btnactive');
    } else {
        btn.classList.remove('btnactive');
        btn.classList.add('btn');
    }
}