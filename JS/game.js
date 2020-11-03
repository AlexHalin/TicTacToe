let cellC = document.querySelector("#field_id")
let move = 0;
let counterX = 0
let counter0 = 0
let counterDraw = 0

cellC.addEventListener('click', moveXAnd0, false);

function moveXAnd0(event) {
    if (move === 0 && event.target.classList[1] == void 0) {
        event.target.classList.add("cross");
        move++
        counterDraw++
    } else if (move === 1 && event.target.classList[1] == void 0) {
        event.target.classList.add("circle");
        move--
        counterDraw++
    }
    checkWin()
}

let popup = document.querySelector(".popup")

function addShow() {
    popup.classList.add("popup_show")
}

let whoWin = document.querySelector("#win_name")

function checkWin () {
    let cellMove = document.querySelectorAll(".cell")
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]

    let scoreX = document.querySelector("#scoreX")
    let score0 = document.querySelector("#score0")

    for (let i = 0; i < arr.length; i++) {
        if (cellMove[arr[i][0]].classList.contains("cross") && cellMove[arr[i][1]].classList.contains("cross") && cellMove[arr[i][2]].classList.contains("cross")){
            counterX++
            addShow()
            whoWin.innerHTML = "Win X"
            cellC.removeEventListener("click", moveXAnd0, false);
        } else if (cellMove[arr[i][0]].classList.contains("circle") && cellMove[arr[i][1]].classList.contains("circle") && cellMove[arr[i][2]].classList.contains("circle")) {
            counter0++
            addShow()
            whoWin.innerHTML = "Win 0"
            cellC.removeEventListener("click", moveXAnd0, false);
        } else if (counterDraw == 9) {
            addShow()
        }
    }
    scoreX.innerHTML = ":" + counterX
    score0.innerHTML = ":" + counter0
}

let btnArrow = document.querySelector("#btn_arrow")

btnArrow.addEventListener("click", reset, false);

function reset () {
    for (let i = 0; i < cellC.children.length; i++) {
        cellC.children[i].classList.remove("cross", "circle")

    }
    cellC.addEventListener("click", moveXAnd0, false);
    move = 0
    counterDraw = 0
    popup.classList.remove("popup_show")
    whoWin.innerHTML = "Draw"
}


let newGameBtn = document.querySelector("#btn_NG")

newGameBtn.addEventListener("click", newGame, false);

function newGame() {
    move = 0
    counterX = 0
    counter0 = 0
    counterDraw = 0
    for (let i = 0; i < cellC.children.length; i++) {
        cellC.children[i].classList.remove("cross", "circle")

    }
    cellC.addEventListener("click", moveXAnd0, false);
    popup.classList.remove("popup_show")
    whoWin.innerHTML = "Draw"
}

