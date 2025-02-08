document.addEventListener("DOMContentLoaded", function () {
    let noButton = document.getElementById("noButton");
    let warningMessage = document.getElementById("warningMessage");
    let clickCount = 0;

    // Lista de advertencias
    const warnings = [
        "¿Estás seguro? 🥺",
        "Piénsalo bien... 💔",
        "Vamos, di que sí 😢",
        "¡No puedes decir que no! 😡",
        "Última oportunidad... 😭"
    ];

    noButton.addEventListener("mouseover", function () {
        // Mueve el botón "No" a una posición aleatoria
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        // Cambia el mensaje de advertencia
        if (clickCount < warnings.length) {
            warningMessage.innerText = warnings[clickCount];
            clickCount++;
        } else {
            warningMessage.innerText = "¡JAJA NO PUEDES DECIR QUE NO! 🤭";
        }
    });

    // Si presiona "Sí", muestra un mensaje de éxito
    document.getElementById("yesButton").addEventListener("click", function () {
        alert("¡Sabía que dirías que sí! 😍💖");
    });
});
