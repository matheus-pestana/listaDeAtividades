document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formReserva').addEventListener('submit', function(e) {
        e.preventDefault();

        var data = document.getElementById('data').value;
        var hora = document.getElementById('hora').value;

        var partesData = data.split('-');
        var dataFormatada = partesData[2] + '/' + partesData[1] + '/' + partesData[0];

        var reserva = document.createElement('p');
        reserva.textContent = 'Reserva feita para ' + dataFormatada + ' às ' + hora;

        document.getElementById('reservas').appendChild(reserva);
    });
});