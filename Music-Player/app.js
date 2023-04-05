const song = new Audio('audio/Stay.mp3');
// song.play();

// let progress = document.getElementById('seek');
// let song = document.getElementById('song');
// let buttons = document.getElementById('masterPlay');

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.CurrentTime;
// }




// let masterPlay = document.getElementById('masterPlay');

// masterPlay.addEventListener('click', () =>{
//     if (song.pause || song.curretTime <= 0){
//         song.pause();
//         masterPlay.classList.remove("bi-pause-fill");
//         masterPlay.classList.add("bi-play-fill");
//     } else{
//         song.play();
//         masterPlay.classList.add("bi-pause-fill");
//         masterPlay.classList.remove("bi-play-fill");
//     } 
// })





const songs =[
    {
    id: 1,
    songName: `Let Me Love You
    <div class="subtitle">DJ Snake - Encore</div>`,
    poster: "./New folder/th (2).jpg",
},
{
    id: 2,
    songName: `STAY
    <div class="subtitle">E The kid LAROI - Stay</div>`,
    poster: "./New folder/th (3).jpg",
},
{
    id: 3,
    songName: `Calm Down
    <div class="subtitle">Rema - Calm Down`,
    poster: "./New folder/th.jpg",
},
{
    id: 4,
    songName: `Senorita
    <div class="subtitle">Shown Mendes - Senorita`,
    poster: "./New folder/th (1).jpg",
},
{
    id: 5,
    songName: `Shape Of You
    <div class="subtitle">Ed Sheeren - Shape Of You`,
    poster: "./New folder/th(4).jpg",
},
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})


// let masterPlay = document.getElementById('masterPlay');
let playbtn = document.getElementById('playbtn');



function playPause(){
    if(masterPlay.classList.contains("bi-pause-fill")){
        song.pause();
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");
        playbtn.classList.remove("bi-pause-fill");
        playbtn.classList.add("bi-play-fill");

    }
    else{
        song.play();
        masterPlay.classList.add("bi-pause-fill");
        masterPlay.classList.remove("bi-play-fill");
        playbtn.classList.add("bi-pause-fill");
        playbtn.classList.remove("bi-play-fill");
    }
};

let index = 0;
let masterposter = document.getElementById('masterposter');
Array.from(document.getElementsByClassName('playList')).forEach((e) =>{
    e.addEventListener('click', (el)=>{
index = el.target.id;
song.src = `audio/${index}.mp3`;
masterposter.src = `./New folder/${index}.jpg`;
song.play();
    })
})
