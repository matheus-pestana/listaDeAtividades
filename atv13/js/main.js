// <!-- Matheus Arcangelo Pestana -->

document.addEventListener('DOMContentLoaded', (event) => {
    var clock = document.getElementById("clock");

    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        clock.textContent = hours + ":" + minutes + ":" + seconds;
    }

    updateClock();
    setInterval(updateClock, 1000);
});