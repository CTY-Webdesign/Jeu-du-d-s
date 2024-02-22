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
    holdpoint2=0;
    document.getElementById('holdP1').innerText =holdpoint1; 
    document.getElementById('P1').innerText =score_P1;
    document.getElementById('holdP2').innerText =holdpoint2; 
    document.getElementById('P2').innerText =score_P2;
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

    if (current_player===1){
        if (randomNumber!==1){
            holdpoint1+=randomNumber;
            document.getElementById('holdP1').innerText =holdpoint1;
            
        }
        else{
            holdpoint1=0;
            document.getElementById('holdP1').innerText =holdpoint1;
            current_player=2;
        }
    }
    else if (current_player===2){
        if (randomNumber!==1){  
            holdpoint2+=randomNumber;
            document.getElementById("holdP2").innerText = holdpoint2;
            

        }
        else{
            holdpoint2=0;
            document.getElementById('holdP2').innerText =holdpoint2;
            current_player=1;
        }
    }
}

function sendHold(){
    if (current_player===1){
    score_P1=holdpoint1+score_P1;
    holdpoint1=0
    document.getElementById('holdP1').innerText =holdpoint1; 
    document.getElementById('P1').innerText =score_P1;
    current_player=2;
    victory();
    }
    else if (current_player===2){
    score_P2=holdpoint2+score_P2;
    holdpoint2=0
    document.getElementById('holdP2').innerText =holdpoint2; 
    document.getElementById('P2').innerText =score_P2;
    current_player=1;
    victory();

    }
}

function victory(){
    if (score_P1>=30){
        alert("Le joueur 1 à gagner !");
        
    }
    else if (score_P2>=30){
        alert("Le joueur 2 à gagner !");
        
    }
}

scoreP1();
holdP1();
scoreP2();
holdP2();
rollDice();
victory();