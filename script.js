document.addEventListener("DOMContentLoaded", function () {
    let letterContainer = document.getElementById("letterContainer");
    let envelope = document.getElementById("envelope");
    let letterContent = document.getElementById("letterContent");
    let giftBox = document.getElementById("giftBox");
    let playButton = document.getElementById("playButton");
    let questionButton = document.getElementById("questionButton");
    let audio = document.getElementById("music");
    let letterOpened = false;  

    function openLetter() {
        envelope.classList.add("open");
        setTimeout(() => {
            letterContainer.style.display = "none"; 
            letterContent.style.display = "block";  
            letterOpened = true; 
            unlockButtons();
        }, 1000);
    }

    function unlockButtons() {
        playButton.removeAttribute("disabled");
        questionButton.removeAttribute("disabled");
        playButton.classList.remove("disabled");
        questionButton.classList.remove("disabled");
        playButton.innerHTML = "🎵 Reproducir música";
        questionButton.innerHTML = "❓ Hazme una pregunta";
    }

    function openGift() {
        if (!letterOpened) {
            alert("¡Primero abre la carta antes de ver tu regalo! 💌");
        } else {
            giftBox.classList.add("open");
        }
    }

    function playMusic() {
        if (!letterOpened) {
            alert("¡Primero abre la carta antes de escuchar la música! 💌");
        } else if (audio.paused) {
            audio.play().then(() => {
                playButton.style.display = "none";
            }).catch(() => {
                alert("Toca el botón de nuevo para permitir la música 🎶");
            });
        }
    }

    function goToQuestionPage() {
        if (!letterOpened) {
            alert("¡Primero abre la carta antes de responder la pregunta! 💌");
        } else {
            window.location.href = "pregunta.html";
        }
    }

    letterContainer.addEventListener("click", openLetter);
    giftBox.addEventListener("click", openGift);
    playButton.addEventListener("click", playMusic);
    questionButton.addEventListener("click", goToQuestionPage);
});
