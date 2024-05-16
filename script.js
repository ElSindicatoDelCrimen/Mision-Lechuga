const eventTime = new Date("2024-05-04T20:00:00").getTime(); // Asegúrate de ajustar esta fecha y hora al evento

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventTime - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "BIEN JUEGADO, HASTA LA PRÓXIMA"; // Asegúrate de ajustar este mensaje y la clave como consideres apropiado
    }
}, 1000);

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const secretPassword = "bySAL215li112112AR"; // Asegúrate de que esto coincida con el mensaje revelado

    if (passwordInput === secretPassword) {
        window.location.href = 'pista.html';
    } else {
        alert("Contraseña incorrecta paqueteheroe, pringado, fuera de aquí.");
    }
}

window.onload = function() {
    const termsModal = document.getElementById('termsModal');
    const contentContainer = document.querySelector('.container');

    function acceptTerms() {
        termsModal.style.display = 'none';
        contentContainer.style.display = 'block';
    }

    window.acceptTerms = acceptTerms; // Hacer la función accesible globalmente para ser llamada desde el HTML
}

// Funcion para que se vea la foto del cole, minutos antes de que acabe el juego.
document.addEventListener('DOMContentLoaded', function() {
    var eventDate = new Date('2024-05-04T19:00:00'); // Establece la fecha y hora del evento
    var currentDate = new Date(); // Obtiene la fecha y hora actual

    if (currentDate >= eventDate) {
        document.getElementById('eventSection').style.display = 'block'; // Muestra la sección si ha llegado la hora
    }
});
