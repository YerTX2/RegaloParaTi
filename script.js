document.addEventListener("DOMContentLoaded", function () {
    let giftBox = document.getElementById("giftBox");
    let playButton = document.getElementById("playButton");
    let audio = document.getElementById("music");

    // Función para abrir la carta-regalo
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

    // Evento al hacer clic en la carta-regalo (24 de febrero)
    giftBox.addEventListener("click", function () {
        openGift();
    });

    // Evento para el botón de música
    playButton.addEventListener("click", function () {
        playMusic();
    });
});
