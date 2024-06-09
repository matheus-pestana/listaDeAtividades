function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.opacity === "0") {
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
    } else {
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
    }
}