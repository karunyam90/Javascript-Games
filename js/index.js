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
const bottomRight = document.querySelector("#bottomRight");
const topLeft = document.querySelector("#topLeft");
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
    console.log(order);
}

function gameTurn(){
    
}