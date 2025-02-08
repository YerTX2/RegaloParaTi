document.addEventListener("DOMContentLoaded", function () {
    let envelope = document.getElementById("envelope");
    let playButton = document.getElementById("playButton");
    let audio = document.getElementById("music");

    // Función para abrir la carta
    function openLetter() {
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
        }
    }

    // Función para reproducir la música
    function playMusic() {
        audio.play()
            .then(() => {
                playButton.style.display = "none"; // Oculta el botón al reproducirse
            })
            .catch(error => {
                console.log("El navegador bloqueó el audio:", error);
                alert("Toca el botón de nuevo para permitir la música 🎶");
            });
    }

    // Evento al hacer clic en el sobre
    envelope.addEventListener("click", function () {
        openLetter();
        playMusic(); // Ahora la música se activa con el sobre también
    });

    // Evento para el botón de música
    playButton.addEventListener("click", function () {
        playMusic();
    });
});
