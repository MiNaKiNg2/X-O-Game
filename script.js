let box = Array.from(document.querySelectorAll(".box"));
let turn = "X";
let gameover = false;
let title = document.querySelector(".title");
let mute = document.getElementById("Mute");
let audio = document.getElementById("audio");
let Again = document.getElementById("Again");
let nameplayer1 = document.getElementById("nameplayer1");
let nameplayer2 = document.getElementById("nameplayer2");
let ReGame = document.getElementById("ReGame");
let ChooseMusic = document.getElementById("Choose-Music");
let ChooseMusicInput = document.getElementById("ChooseMusicInput");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let score3 = document.getElementById("score3");
let musicPlayer = document.getElementById("MusicPlayer");
let scoreBack = JSON.parse(localStorage.getItem("player"));

document.addEventListener("DOMContentLoaded", () => {
    audio.src = scoreBack[5];
    nameplayer1.innerHTML = scoreBack[0];
    nameplayer2.innerHTML = scoreBack[2];
    SG();
})

function SG() {
    score3.innerHTML = scoreBack[4];
    score1.innerHTML = scoreBack[1];
    score2.innerHTML = scoreBack[3];
    box.forEach((e) => {
        e.addEventListener("click", () => {
            if (gameover == false)
                if (e.innerHTML == "") {
                    e.innerHTML = turn;
                    check();
                    if (draw()) {
                        gameover = true
                        title.innerHTML = "Draw";
                        setInterval(() => {
                            title.innerHTML += '.';
                        }, 1000)
                        setTimeout(() => {
                            location.reload();
                        }, 4000)
                    }
                    if (i === 'X') {
                        scoreBack[1] = scoreBack[1] + 1;
                        localStorage.setItem("player", JSON.stringify(scoreBack));
                    } else if (i === 'O') {
                        scoreBack[3] = scoreBack[3] + 1;
                        localStorage.setItem("player", JSON.stringify(scoreBack));
                    }
                    if (turn == "X")
                        turn = "O";
                    else
                        turn = "X";
                }
        })
    })
}

function won(x) {
    gameover = true
    title.innerHTML = box[x].innerHTML + " Won";
    setInterval(() => {
        title.innerHTML += '.';
    }, 1000)
    setTimeout(() => {
        location.reload();
    }, 4000)
}
let i = ''

function check() {
    if (box[0].innerHTML == box[1].innerHTML && box[1].innerHTML == box[2].innerHTML && box[0].innerHTML != "") {
        i = box[0].innerHTML
        won(0);
    } else if (box[3].innerHTML == box[4].innerHTML && box[4].innerHTML == box[5].innerHTML && box[3].innerHTML != "") {
        i = box[3].innerHTML
        won(3);
    } else if (box[6].innerHTML == box[7].innerHTML && box[7].innerHTML == box[8].innerHTML && box[6].innerHTML != "") {
        i = box[6].innerHTML
        won(6)
    } else if (box[0].innerHTML == box[3].innerHTML && box[3].innerHTML == box[6].innerHTML && box[0].innerHTML != "") {
        i = box[0].innerHTML
        won(0);
    } else if (box[1].innerHTML == box[4].innerHTML && box[4].innerHTML == box[7].innerHTML && box[1].innerHTML != "") {
        i = box[1].innerHTML
        won(1);
    } else if (box[2].innerHTML == box[5].innerHTML && box[5].innerHTML == box[8].innerHTML && box[2].innerHTML != "") {
        i = box[2].innerHTML
        won(2);
    } else if (box[0].innerHTML == box[4].innerHTML && box[4].innerHTML == box[8].innerHTML && box[0].innerHTML != "") {
        i = box[0].innerHTML
        won(0);
    } else if (box[2].innerHTML == box[4].innerHTML && box[4].innerHTML == box[6].innerHTML && box[2].innerHTML != "") {
        i = box[2].innerHTML
        won(2);
    }
}

function draw() {
    for (let i = 0; i < box.length; i++) {
        if (box[i].innerHTML === "") {
            return false; // If any box is empty, it's not a draw
        }
    }
    scoreBack[4] = scoreBack[4] + 1;
    localStorage.setItem("player", JSON.stringify(scoreBack));
    return true; // All boxes filled means it's a draw
}
mute.onclick = function() {
    audio.muted = !audio.muted;
    if (audio.muted) {
        mute.innerHTML = "Unmute";
    } else
        mute.innerHTML = "Mute";
}
Again.onclick = function() {
    title.innerHTML = "Again --> Wait";
    setTimeout(() => {
        box.forEach((e) => {
            e.innerHTML = "";
            title.innerHTML = "X O Game";
        });
    }, 2000)
}
ReGame.onclick = function() {
    location.href = 'index.html';
}
ChooseMusic.onclick = function() {
    ChooseMusicInput.click();
    us();
}

function us() {
    ChooseMusicInput.onchange = function(event) {
        var file = event.target.files[0];
        if (file && file.type.startsWith("audio/")) {
            var fileURL = URL.createObjectURL(file);
            audio.src = fileURL;
            scoreBack[5] = fileURL;
            localStorage.setItem("player", JSON.stringify(scoreBack));
            audio.play();
        } else {
            alert("Please select a valid audio file.");
        }
    }
}