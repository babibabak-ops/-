const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const playButton = document.getElementById("playButton");
const heart = document.getElementById("heart");

const music = document.getElementById("music");

const letterSection = document.getElementById("letterSection");

const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");

const ending = document.getElementById("ending");



window.onload = function () {

    setTimeout(() => {

        line1.classList.remove("hidden");
        line1.classList.add("show");

    },1000);



    setTimeout(()=>{

        line2.classList.remove("hidden");
        line2.classList.add("show");

    },2500);



    setTimeout(()=>{

        line3.classList.remove("hidden");
        line3.classList.add("show");

    },4000);



    setTimeout(()=>{

        playButton.classList.remove("hidden");
        playButton.classList.add("show");

    },5500);

};



playButton.onclick = function(){

    music.play();

    heart.innerHTML="❤️";

    heart.classList.add("activeHeart");

    playButton.style.display="none";

    letterSection.classList.add("show");

    progressContainer.style.display="block";

    updateProgress();

};

function updateProgress(){

    const timer = setInterval(function(){

        if(music.duration){

            const percent = (music.currentTime / music.duration) * 100;

            progressBar.style.width = percent + "%";

        }

        if(music.ended){

            clearInterval(timer);

            document.querySelector(".card").classList.add("fadeOut");

            setTimeout(function(){

                ending.classList.add("show");

            },1000);

        }

    },200);

}



music.addEventListener("loadedmetadata",function(){

    progressBar.style.width="0%";

});



music.addEventListener("pause",function(){

    if(!music.ended){

        progressBar.style.opacity="0.5";

    }

});



music.addEventListener("play",function(){

    progressBar.style.opacity="1";

});



music.addEventListener("error",function(){

    alert("فایل song.mp3 پیدا نشد.");

});
