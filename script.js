document.addEventListener("DOMContentLoaded", function () {
    let giftBox = document.getElementById("giftBox");
    let playButton = document.getElementById("playButton");
    let questionButton = document.getElementById("questionButton");
    let audio = document.getElementById("music");

    // Función para abrir la caja-regalo
    function openGift() {
        if (!giftBox.classList.contains("open")) {
            giftBox.classList.add("open");
        }
    }

    // Función para reproducir la música
    function playMusic() {
        audio.muted = false; // Desmutear antes de reproducir
        if (audio.paused) {
            audio.play().then(() => {
                setTimeout(() => playButton.style.display = "none", 500);
            }).catch(error => {
                console.log("Error al reproducir:", error);
                alert("Vuelve a tocar el botón para permitir la música 🎶");
            });
        }
    }

    // Evento al hacer clic en la caja
    giftBox.addEventListener("click", function () {
        openGift();
    });

    // Evento para el botón de música
    playButton.addEventListener("click", function () {
        playMusic();
    });

    // Redireccionar a la página de la pregunta
    questionButton.addEventListener("click", function () {
        window.location.href = "pregunta.html";
    });
});
