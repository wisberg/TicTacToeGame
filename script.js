function updateToMove(){
    if(turn % 2 == 0){
        toMove.innerText = "To Move: O";
        
    }
    else{
        toMove.innerText = "To Move: X";
    }
    
}

const squareButtons = document.querySelectorAll("button.square");
const clearButton = document.querySelector("button.clear");
const user1 = document.querySelector(".user-score1");
const user2 = document.querySelector(".user-score2");
const clearScores = document.querySelector("button.again");
const toMove = document.querySelector('#toMove');
var turn = Math.floor(Math.random() * Math.floor(10)) + 2;
updateToMove();

const winnerDiv = document.querySelector("#winner");

var turn = Math.floor(Math.random() * Math.floor(10)) + 2;
console.log(turn);
updateToMove();
var playerXscore = 0;
var playerOscore = 0;
updateScores();
squareButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(turn % 2 == 0){
            addO(button);
            
        }
        else{
            addX(button);
            
        }
    });
});

let buttonArray = [];
function updateButtonArray() {
    for(let i = 0; i < 9; i++){
        buttonArray[i] = squareButtons[i].innerText;
    }
}

function checkWinner(){
    if(buttonArray[0] == 'o' && buttonArray[1] == 'o' && buttonArray[2] == 'o' || buttonArray[3] == 'o' && buttonArray[4] == 'o' && buttonArray[5] == 'o' || buttonArray[6] == 'o' && buttonArray[7] == 'o' && buttonArray[8] == 'o' || buttonArray[0] == 'o' && buttonArray[3] == 'o' && buttonArray[6] == 'o' || buttonArray[1] == 'o' && buttonArray[4] == 'o' && buttonArray[7] == 'o' || buttonArray[2] == 'o' && buttonArray[5] == 'o' && buttonArray[8] == 'o' || buttonArray[0] == 'o' && buttonArray[4] == 'o' && buttonArray[8] == 'o' || buttonArray[2] == 'o' && buttonArray[4] == 'o' && buttonArray[6] == 'o'){
        oWinner(); //o is the winner
    }
    else if(buttonArray[0] == 'x' && buttonArray[1] == 'x' && buttonArray[2] == 'x' || buttonArray[3] == 'x' && buttonArray[4] == 'x' && buttonArray[5] == 'x' || buttonArray[6] == 'x' && buttonArray[7] == 'x' && buttonArray[8] == 'x' || buttonArray[0] == 'x' && buttonArray[3] == 'x' && buttonArray[6] == 'x' || buttonArray[1] == 'x' && buttonArray[4] == 'x' && buttonArray[7] == 'x' || buttonArray[2] == 'x' && buttonArray[5] == 'x' && buttonArray[8] == 'x' || buttonArray[0] == 'x' && buttonArray[4] == 'x' && buttonArray[8] == 'x' || buttonArray[2] == 'x' && buttonArray[4] == 'x' && buttonArray[6] == 'x'){
        xWinner(); //x is the winner
    }
    else if(!buttonArray.includes('')){
        noWinner(); //no winner
    }
}


clearButton.addEventListener('click', () => {
    clear();
    updateToMove();
});

clearScores.addEventListener('click', () => {
    clear();
    playerXscore = 0;
    playerOscore = 0;
    updateScores();
    updateToMove();
    winnerDiv.innerText = '';
})

function addO (button) {
    if(button.innerText != '') return;
    else{
    button.innerText = "o";
    updateButtonArray();
    checkWinner();
    ++turn;
    updateToMove();
    }
}

function addX (button) {
    if(button.innerText != '') return;
    else{
    button.innerText = "x";
    updateButtonArray();
    checkWinner();
    ++turn;
    updateToMove();
    }
}

function clear() {
    turn = Math.floor(Math.random() * Math.floor(10)) + 2;
    updateToMove();
    console.log(turn);
    squareButtons.forEach(button => {
        button.innerText = '';
    });
    
    
}

function oWinner() {
    winnerDiv.innerText = "O is the Winner!";
    playerOscore++;
    updateScores();
    clear();
}
function xWinner() {
    winnerDiv.innerText = "X is the Winner!";
    playerXscore++;
    updateScores();
    clear();
    
}

function noWinner() {
    winnerDiv.innerText = "Tie Game!";
    clear();
}

function updateScores(){
    user1.innerText = `Player X: ${playerXscore}`;
    user2.innerText = `Player O: ${playerOscore}`;
}



