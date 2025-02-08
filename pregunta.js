document.addEventListener("DOMContentLoaded", function () {
    let noButton = document.getElementById("noButton");
    let warningMessage = document.getElementById("warningMessage");
    let clickCount = 0;

    // Lista de advertencias para convencer a la persona
    const warnings = [
        "¿Estás segur@? 🥺",
        "Piénsalo bien... 💔",
        "Vamos, di que sí 😢",
        "¡No puedes decir que no! 😡",
        "Última oportunidad... 😭"
    ];

    // Función para mover el botón a una ubicación aleatoria
    function moveNoButton() {
        let maxX = window.innerWidth - noButton.offsetWidth - 20;
        let maxY = window.innerHeight - noButton.offsetHeight - 20;
        
        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Detecta si el usuario intenta hacer clic o tocar el botón "No"
    function avoidNoButton(event) {
        moveNoButton();
        
        if (clickCount < warnings.length) {
            warningMessage.innerText = warnings[clickCount];
            clickCount++;
        } else {
            warningMessage.innerText = "¡JAJA NO PUEDES DECIR QUE NO! 🤭";
        }
        
        // Evita que el usuario haga clic en el "No"
        event.preventDefault();
    }

    // Evento para PC (cuando el mouse pasa sobre el botón "No")
    noButton.addEventListener("mouseover", avoidNoButton);

    // Evento para móviles (cuando el usuario toca el botón "No")
    noButton.addEventListener("touchstart", avoidNoButton);

    // Si presiona "Sí", muestra un mensaje de confirmación
    document.getElementById("yesButton").addEventListener("click", function () {
        alert("¡Sabía que dirías que sí! 😍💖");
    });
});
