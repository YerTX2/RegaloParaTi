function openLetter() {
    let envelope = document.querySelector(".envelope");

    if (!envelope.classList.contains("open")) {
        envelope.classList.add("open"); // Abre el sobre
    }
}

function playMusic() {
    let audio = document.getElementById("music");
    let playButton = document.getElementById("playButton");

    audio.play()
        .then(() => {
            playButton.style.display = "none"; // Oculta el botón después de reproducir la música
        })
        .catch(error => console.log("El navegador bloqueó el audio:", error));
}
