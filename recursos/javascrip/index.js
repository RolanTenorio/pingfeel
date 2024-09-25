window.onload = function () {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.transform = 'scale(0)'; // Escala a 0 para hacer el efecto de encogimiento
        preloader.style.opacity = '0'; // Cambia la opacidad a 0
        setTimeout(() => {
            preloader.style.display = 'none';
            document.querySelector('#home').style.display = 'flex'; // Muestra la sección principal
        }, 1000); // Espera a que termine la animación de escala
    }, 2000); // Mantiene visible el preloader por 2 segundos
};

const greetingElement = document.getElementById('greeting');
const verseElement = document.getElementById('verse');
const penguinImage = document.getElementById('penguinImage');
const body = document.body;

const currentHour = new Date().getHours();
if (currentHour < 5 || currentHour >= 19) { // De 7 PM a 5 AM
    greetingElement.innerText = "¡Buenas Noches, Dámaris!";
    penguinImage.src = "recursos/penguinnight.png";
    verseElement.innerText = "Versículo de la noche:\n'El Señor es mi luz y mi salvación; ¿de quién temeré?' - Salmo 27:1";
    body.setAttribute('data-time', 'night');
} else { // De 5 AM a 7 PM
    greetingElement.innerText = "¡Buenos Días, Dámaris!";
    penguinImage.src = "recursos/dia.png";
    verseElement.innerText = "Versículo del día:\n'Este es el día que hizo el Señor; nos alegraremos y nos gozaremos en él.' - Salmo 118:24";
    body.setAttribute('data-time', 'day');
}