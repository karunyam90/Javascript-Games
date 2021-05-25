// declaring variables

let power = false;
let strict = false;
let startPlay = false;
let order=[];
let playerOrder=[];
let good;
let turn;
let win;
let compTurn;
let flash=0;
let intervalId;

// get all the elements using HTML elements

const turnCounter = document.querySelector("#turn");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const strictButton = document.querySelector("#strict");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");

// Functions for Simon Game

strictButton.addEventListener('change',(event)=>{
   if(strictButton.checked==true){
       strict=true;
       
   }else{
       strict=false;
   }

});

onButton.addEventListener('click',(event)=>{
    if(onButton.checked==true){
        startPlay =true;
        turnCounter.innerHTML ="-";
    }else{
        startPlay=false;
        turnCounter.innerHTML="";
 }
});

startButton.addEventListener('click',(event)=>{
  if(win || startPlay ){
    play();
  }
});

// function to power on the Button

function play(){
    win=true;
    good=false;
    noise=true;
    turn=false;
    compTurn=true;
    order =[];
    for(i=0;i<20;i++){
        order.push(Math.floor(Math.random()*4)+1);
    }
    intervalId=setInterval(gameTurn,800);
    turnCounter.innerHTML ="1";
}

function gameTurn(){
    on=false;
    if (flash==turn){
        clearInterval(intervalId);
        compTurn=false;
        clearColor();
        on=true;
    }
    if (compTurn){
        clearColor();
        setTimeout(()=>{
            if(order[flash]==1) one();
            if(order[flash]==2) two();
            if(order[flash]==3) three();
            if(order[flash]==4) four();
            flash++;
        },200);
    }
}

function one(){
    if (noise){
        let audio = document.getElementById("clip1");
        audio.play();
    }
    topLeft.style.backgroundColor="Chartreuse";
}

function two(){
    if (noise){
        let audio = document.getElementById("clip2");
        audio.play();
    }
    topRight.style.backgroundColor="Coral";
}
function three(){
    if (noise){
        let audio = document.getElementById("clip3");
        audio.play();
    }
    bottomLeft.style.backgroundColor="BlanchedAlmond";
}
function four(){
    if (noise){
        let audio = document.getElementById("clip4");
        audio.play();
    }
    bottomRightLeft.style.backgroundColor="CornflowerBlue";
}
function clearColor(){
    topLeft.style.backgroundColor="darkgreen";
    topRight.style.backgroundColor="darkred";
    bottomLeft.style.backgroundColor="goldenrod";
    bottomRight.style.backgroundColor="darkblue";
}