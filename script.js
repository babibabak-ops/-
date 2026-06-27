const music = document.getElementById("music");
const playButton = document.getElementById("playButton");
const openLetter = document.getElementById("openLetter");
const footer = document.getElementById("footer");

playButton.addEventListener("click", () => {

    music.play();

    playButton.style.display = "none";

    setTimeout(() => {

        openLetter.style.display = "block";
        footer.style.display = "block";

    }, 2000);

});
