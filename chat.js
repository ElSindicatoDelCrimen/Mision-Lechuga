document.addEventListener('DOMContentLoaded', function() {
    const messages = document.getElementById('chatMessages');
    
    // Lista de mensajes nuevos que se agregarán dinámicamente
    const newMessages = [
        "<li><strong>Harley Quinn:</strong> ¡Puddin', deja de gastar bromas y ayúdame a encontrar más municiones para mis cañones de confeti!</li>",
        "<li><strong>Lex Luthor:</strong> ¡Silencio, todos! No olvidemos por qué estamos aquí. Y Joker, guarda ese gas para la próxima reunión de la Liga de la Justicia.</li>",
        "<li><strong>Deathstroke:</strong> Mientras vosotros os peleáis por tonterías, yo ya cumplí tres contratos. Trabajad más y hablad menos.</li>",
        "<li><strong>Brainiac:</strong> Interesante cómo desperdiciáis vuestro potencial en trivialidades. Deberíais aprender de la eficiencia robótica.</li>",
        "<li><strong>Joker:</strong> ¿Eficiencia? ¡Dónde queda la diversión en eso, lata vieja!</li>",
        "<li><strong>Harley Quinn:</strong> ¿Alguien ha visto a mis hienas? Les puse collares nuevos brillantes.</li>",
        "<li><strong>Lex Luthor:</strong> Si van a seguir con esto, al menos intenten no arruinar mis planes con vuestro circo ambulante.</li>"
    ];

    // Función para añadir cada mensaje con un delay de 1.5 segundos entre cada uno
    newMessages.forEach((msg, index) => {
        setTimeout(() => {
            messages.innerHTML += msg;
        }, (index + 1) * 1500); // Cambio de tiempo a 1.5 segundos entre mensajes
    });
});
