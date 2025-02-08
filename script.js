document.addEventListener("DOMContentLoaded", function () {
    let envelope = document.getElementById("envelope");
    let playButton = document.getElementById("playButton");
    let audio = document.getElementById("music");
    let giftBox = document.getElementById("giftBox");

    // Función para abrir la carta del 14 de febrero
    function openLetter() {
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
        }
    }

    // Función para abrir la carta-regalo del 24 de febrero
    function openGift() {
        if (!giftBox.classList.contains("open")) {
            giftBox.classList.add("open");
        }
    }

    // Función para reproducir la música
    function playMusic() {
        if (audio.paused) { // Verifica si la música ya está reproduciéndose
            audio.play()
                .then(() => {
                    playButton.style.display = "none"; // Oculta el botón si se reproduce correctamente
                })
                .catch(error => {
                    console.log("El navegador bloqueó el audio:", error);
                    alert("Toca el botón de nuevo para permitir la música 🎶");
                });
        }
    }

    // Evento al hacer clic en el sobre (14 de febrero)
    envelope.addEventListener("click", function () {
        openLetter();
        playMusic();
    });

    // Evento para el botón de música
    playButton.addEventListener("click", function () {
        playMusic();
    });

    // Evento al hacer clic en la carta-regalo (24 de febrero)
    giftBox.addEventListener("click", function () {
        openGift();
    });
});
