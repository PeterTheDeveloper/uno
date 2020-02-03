/*----- constants -----*/

const body = document.getElementById("body");
const splashMusic = document.getElementById("splashMusic");
const title = document.getElementById("title");
const playButton = document.getElementById("playButton");
const modal = document.getElementById("modal");
const joinGameButton = document.getElementById("joinGameButton");
const modalCloseButton = document.querySelector("#modal-close");
//  Remove '#;' and see wat happends.

/*----- app's state (variables) -----*/

    // Load audio on window load
window.onload = function() {
    splashMusic.play();
}

/*----- cached element references -----*/
/*----- event listeners -----*/
    
   playbutton.addEventListener("click", openModal());
   modalCloseButton.addEventListener("click", closeModal())

   docoument.getElementById("multi").addEventListener("click", modeComingSoon());
   document.getElementById("online").addEventListener("click", modeComingSoon());
// Not working^

/*----- functions -----*/

function __init__() {
    const ourGame = new Game(player)
    // makeRule() {
    //     ourGame.rules[]
    // }
}

/*----- functions -----*/

function openModal() {
   // playButton.style.display = "none";
   modal.style.display = "block";
   modalCloseButton.style.display = "block";
   splashMusic.volume = 0.5;
}

function joinGame() {
   body.innerHTML = ""
//   body.appendChild(Theboard html)
}
// clear page and add board to page 

function closeModal() {
   playButton.style.display = "block";
   modal.style.display = "none";
   modalCloseButton.style.display = "none"
   // document.body.innerHTML = '';
   
}

function ifClick() {
    // if that button is clicked and does not have style.border = "theColorIWant"
    // then make it. 
    
    // if that button DOES have it, then take it away b/c this means its a deselect
}

function modeComingSoon() {
   alert('Aint have time. Coming in Beta 0.2.5')
}
// Not working^