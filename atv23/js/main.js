document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btn').addEventListener('click', function () {
        const input = document.querySelector("input");

        if (!input.value) return;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=cc2e7cee10044350c178bb5d4e76211d`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "404") {
                    alert("Local não encontrado!");
                    return;
                }

                const place = document.querySelector("#place");
                const degrees = document.querySelector("#degrees");
                const img = document.querySelector("img");
                const wind = document.querySelector("#wind");
                const content = document.querySelector(".content");

                place.innerHTML = `${data.name}, ${data.sys.country}`;
                degrees.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}° C`;
                img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                wind.innerHTML = `Vento: ${data.wind.speed} km/h`;
                content.style.display = "flex";
            })
            .catch(error => {
                alert(error);
            });
    });
});