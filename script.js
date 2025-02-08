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
        if (audio.paused) {
            audio.play().then(() => {
                playButton.style.display = "none";
            }).catch(() => {
                alert("Toca el botón de nuevo para permitir la música 🎶");
            });
        }
    }

    // Redirigir a la pregunta
    function goToQuestionPage() {
        window.location.href = "pregunta.html";
    }

    // Eventos
    giftBox.addEventListener("click", openGift);
    playButton.addEventListener("click", playMusic);
    questionButton.addEventListener("click", goToQuestionPage);
});
