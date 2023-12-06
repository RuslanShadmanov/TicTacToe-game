const cellElements = document.querySelectorAll('.cell')
// cellElements[0].innerText = "x"
// cellElements[1].innerText = "0"
const resetButton = document.querySelector('.resetBtn')
const winnerMessage = document.querySelector('.winner')
const whoIsPlayingNow = document.querySelector('.turn')
const showWhoWon = document.querySelector('.winnerMessage')
let gameOver = false;

const playerX = "X"
const PlayerO = "O"
// this variables represent the options that have been taken by the player
const payerXState = []
const playerOState = []
// true in who is playing defines that the player x is playing
// false means that O player is playing
let whoPlays = true;

const combinationsToWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playing(index){
    if(cellElements[index].innerText !== "" || gameOver){
        return
    }
    cellElements[index].innerText = whoPlays ? playerX : PlayerO;
    if(whoPlays){
        payerXState.push(index)
    }else{
        playerOState.push(index)
    }
    checkWinner()
    whoPlays = !whoPlays
    
}
function checkWinner(){
   for(let index = 0 ; index < combinationsToWin.length ; index++){
     if(whoPlays){
        let counter = 0
        // i need to check if the combination in the position index
        // exist within the state of the memory of x
        // payerXState = [0,2]
        for(let i = 0 ; i < payerXState.length ; i++){
            //[0,1,2]
            if(combinationsToWin[index].indexOf(payerXState[i]) >= 0){
                counter++
            }
            if(counter=== 3){
                winnerMessage.classList.remove('winner')
                showWhoWon.innerText = "The Winner is X"
                gameOver = true
            }
        }
     }else{
        let counter = 0
        // i need to check if the combination in the position index
        // exist within the state of the memory of x
        // payerXState = [0,2]
        for(let i = 0 ; i < playerOState.length ; i++){
            //[0,1,2]
            if(combinationsToWin[index].indexOf(playerOState[i]) >= 0){
                counter++
            }
            if(counter=== 3){
                winnerMessage.classList.remove('winner')
                showWhoWon.innerText = "The Winner is O"
                gameOver = true
            }
        }
     }
   }
}

cellElements.forEach((cell,index)=>{
    cell.addEventListener('click',function(){
        playing(index)
    })
    
})



function resetBtnFunction(){
    for(let index = 0 ; index < cellElements.length;index++){
        cellElements[index].innerText = "";
    }

    winnerMessage.classList.add('winner');
    payerXState.length = 0;
    playerOState.length = 0;
    gameOver = false;
    whoPlays = true;
    
}

resetButton.addEventListener('click',resetBtnFunction)