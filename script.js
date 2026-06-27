const playButton = document.getElementById("playButton");
const music = document.getElementById("music");

const intro = document.querySelector(".intro");
const intro2 = document.querySelector(".intro2");
const heart = document.querySelector(".heart");
const title = document.querySelector("h1");

const letterMessage = document.getElementById("letterMessage");

let started = false;

playButton.addEventListener("click", () => {

    if(started) return;

    started = true;

    music.play();

    playButton.disabled = true;

    playButton.style.opacity = "0";

    setTimeout(()=>{

        playButton.style.display="none";

    },600);

    setTimeout(()=>{

        title.style.opacity=".25";
        intro.style.opacity=".25";
        intro2.style.opacity=".25";
        heart.style.opacity=".25";

    },1200);

    setTimeout(()=>{

        letterMessage.style.display="block";

        letterMessage.animate([
            {
                opacity:0,
                transform:"translateY(30px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],{
            duration:1200,
            fill:"forwards"
        });

    },2200);

});

music.addEventListener("ended",()=>{

    document.body.animate([
        {opacity:1},
        {opacity:.92},
        {opacity:1}
    ],{
        duration:2000
    });

});
