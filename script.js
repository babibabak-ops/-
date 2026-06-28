const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const playButton = document.getElementById("playButton");

const music = document.getElementById("music");

const heart = document.getElementById("heart");

const letterSection = document.getElementById("letterSection");

const progressContainer = document.getElementById("progressContainer");

const progressBar = document.getElementById("progressBar");

const ending = document.getElementById("ending");



window.addEventListener("load", () => {

    setTimeout(() => {

        line1.classList.remove("hidden");
        line1.classList.add("show");

    }, 1000);



    setTimeout(() => {

        line2.classList.remove("hidden");
        line2.classList.add("show");

    }, 2500);



    setTimeout(() => {

        line3.classList.remove("hidden");
        line3.classList.add("show");

    }, 4200);



    setTimeout(() => {

        playButton.classList.remove("hidden");
        playButton.classList.add("show");

    }, 6000);

});



playButton.addEventListener("click", () => {

    music.play();

    heart.innerHTML = "❤️";

    heart.classList.add("activeHeart");



    playButton.classList.add("hide");



    letterSection.classList.add("show");



    progressContainer.style.display = "block";



    startProgress();

});
function startProgress() {

    const duration = music.duration || 180;

    const interval = setInterval(() => {

        if (music.ended) {

            clearInterval(interval);

            return;

        }

        const percent = (music.currentTime / duration) * 100;

        progressBar.style.width = percent + "%";

    }, 200);

}



music.addEventListener("ended", () => {

    progressBar.style.width = "100%";



    document.querySelector(".card").classList.add("fadeOut");



    setTimeout(() => {

        ending.classList.add("show");

    }, 1200);

});



music.addEventListener("pause", () => {

    if (!music.ended) {

        progressBar.style.opacity = ".5";

    }

});



music.addEventListener("play", () => {

    progressBar.style.opacity = "1";

});
/* ---------- جلوگيری از خطای Promise در بعضی مرورگرها ---------- */

music.addEventListener("error", () => {

    alert("فایل song.mp3 پیدا نشد.");

});


/* ---------- اگر آهنگ دیر لود شد ---------- */

music.addEventListener("loadedmetadata", () => {

    progressBar.style.width = "0%";

});


/* ---------- ریست در صورت Refresh ---------- */

window.addEventListener("beforeunload", () => {

    music.pause();

    music.currentTime = 0;

});


/* ---------- امکان کلیک دوباره وجود نداشته باشد ---------- */

playButton.disabled = true;

playButton.addEventListener("click", () => {

    playButton.disabled = true;

});


/* ---------- پایان ---------- */
