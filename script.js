let roundscore=0;
let score_P1=0;
let score_P2=0;
let holdpoint1=0;
let holdpoint2=0;
let current_player=1;


function newgame(){
    score_P1=0;
    score_P2=0;
    holdpoint1=0;
    document.getElementById('holdP1').innerText =holdpoint1; 
    document.getElementById('P1').innerText =score_P1;
}

function scoreP1() {
        
    document.getElementById('P1').innerText =score_P1;

}


function holdP1() {
        
    document.getElementById('holdP1').innerText =holdpoint1;

}

function scoreP2() {
        
    document.getElementById('P2').innerText =score_P2;

}


function holdP2() {
        
    document.getElementById('holdP2').innerText =holdpoint2;

}
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1; 
    let diceImage = document.getElementById('dice');
    diceImage.src = "images/"+randomNumber+".png";
    
    holdpoint1 +=randomNumber;
    document.getElementById('holdP1').innerText =holdpoint1;

    if (randomNumber===1){
        holdpoint1=0
        document.getElementById('holdP1').innerText =holdpoint1;  
    }
}

function sendHold(){
    score_P1=holdpoint1+score_P1;
    holdpoint1=0
    document.getElementById('holdP1').innerText =holdpoint1; 
    document.getElementById('P1').innerText =score_P1;
}


scoreP1();
holdP1();
scoreP2();
holdP2();
rollDice();