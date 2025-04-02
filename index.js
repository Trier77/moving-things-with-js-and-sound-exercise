// Your code here
"use strict";

const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "180px";
// dodger.style.left = "200-40px";

// document.addEventListener("keydown", function (event) {
//     console.log(event);
// });

document.addEventListener("keydown", function (event){
    if (event.key==="ArrowLeft") {
        moveDodgerLeft();
    }
    else if (event.key==="ArrowRight") {
        moveDodgerRight();
    }
    else if (event.key==="ArrowUp") {
        moveDodgerUp();
    }
    else if (event.key==="ArrowDown") {
        moveDodgerDown();
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
      dodger.style.transform ="rotate(0deg)";
      dodger.style.transform = "scaleX(-1)";
    }
    else {
        playGameOverSound();
    }
    playSoundOnMovement();
    
  }


function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left =parseInt(rightNumbers, 10);

    if (left < 400-40) {
        dodger.style.left = `${left+1}px`;
        dodger.style.transform = "scaleX(1)";
        
    }
    else {
        playGameOverSound();
    }
    playSoundOnMovement();
  }

  function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.replace("px", "");
    const bottom =parseInt(upNumbers, 10);

    if (bottom <400-40){
        dodger.style.bottom = `${bottom+1}px`;
        dodger.style.transform ="rotate(-90deg)";
    }
    else {
        playGameOverSound();
    }
    playSoundOnMovement();
  }

  function moveDodgerDown() {
    const upNumbers = dodger.style.bottom.replace("px", "");
    const bottom =parseInt(upNumbers, 10);

    if (bottom > 0){
        dodger.style.bottom = `${bottom-1}px`;
        dodger.style.transform ="rotate(90deg)";
        // checkCollision();
    }
    else {
        playGameOverSound();
    }
    playSoundOnMovement();
    
  }

  const moveSound = document.getElementById("movementSound")

  function playSoundOnMovement(){
    moveSound.currentTime = 0;
    moveSound.play();
  }

  const wallSound = document.getElementById("gameOverSound")

  function playGameOverSound(){
    wallSound.currentTime = 0;          
    wallSound.play();  
  }
//     const bub = document.getElementById("bub")
//   function checkCollision(){
//     const dodgerRect = dodger.getBoundingClientRect();
//     const bubRect = bub.getBoundingClientRect();
//     if(dodgerRect.left<bubRect.right &&
//         dodgerRect.right<bubRect.left &&
//         dodgerRect.top<bubRect.bottom &&
//         dodgerRect.bottom<bubRect.top
//     )
//     {
//         bub.style.display ="none";
//     }
//   }

