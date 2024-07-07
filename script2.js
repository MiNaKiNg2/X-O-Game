let play1 = document.getElementById("play1");
let play2 = document.getElementById("play2");
let btnStartGame = document.getElementById("btnStartGame");
let score1 = 0;
let score2 = 0;
let draw1 = 0;
let dMusic = "audio.mp3";
let score;
play1.focus();
btnStartGame.onclick = function() {
    if (play1.value == "" || play2.value == "") {
        alert("Please Enter Your Name");
    } else {
        score = [play1.value, score1, play2.value, score2, draw1, dMusic];
        localStorage.setItem("player", JSON.stringify(score));
        location.href = 'Game.html';
    }
}