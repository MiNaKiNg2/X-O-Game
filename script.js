let box = Array.from(document.querySelectorAll(".box"));
let turn = "X";
let gameover = false;
let title = document.querySelector(".title");

function SG() {
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

function check() {
    if (box[0].innerHTML == box[1].innerHTML && box[1].innerHTML == box[2].innerHTML && box[0].innerHTML != "") {
        won(0);
    } else if (box[3].innerHTML == box[4].innerHTML && box[4].innerHTML == box[5].innerHTML && box[3].innerHTML != "") {
        won(3);
    } else if (box[6].innerHTML == box[7].innerHTML && box[7].innerHTML == box[8].innerHTML && box[6].innerHTML != "") {
        won(6)
    } else if (box[0].innerHTML == box[3].innerHTML && box[3].innerHTML == box[6].innerHTML && box[0].innerHTML != "") {
        won(0);
    } else if (box[1].innerHTML == box[4].innerHTML && box[4].innerHTML == box[7].innerHTML && box[1].innerHTML != "") {
        won(1);
    } else if (box[2].innerHTML == box[5].innerHTML && box[5].innerHTML == box[8].innerHTML && box[2].innerHTML != "") {
        won(2);
    } else if (box[0].innerHTML == box[4].innerHTML && box[4].innerHTML == box[8].innerHTML && box[0].innerHTML != "") {
        won(0);
    } else if (box[2].innerHTML == box[4].innerHTML && box[4].innerHTML == box[6].innerHTML && box[2].innerHTML != "") {
        won(2);
    }
}

function draw() {
    for (let i = 0; i < box.length; i++) {
        if (box[i].innerHTML === "") {
            return false; // If any box is empty, it's not a draw
        }
    }
    return true; // All boxes filled means it's a draw
}