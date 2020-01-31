/*----- constants -----*/

const options = document.querySelector("body > section > .option");

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/

    options.addEventListener('click', function() {
        options.style.display = "none"
    })
    
/*----- functions -----*/

function __init__() {
    const ourGame = new Game(player)
    // makeRule() {
    //     ourGame.rules[]
    // }
}
