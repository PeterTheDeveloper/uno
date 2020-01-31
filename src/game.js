class Game {
    constructor() { // You dont pass in rules, they change after
        this.pile = []
        this.players = [];
        this.deck = new Deck() // Just to reference it easier
        this.rules = {
            stackColorsOnly: false,
            stackNumbersOnly: false,
            putTwoOnFour: false,
            //rules change when game is initi
        };
    }
    addPlayer(name) {
        players.append(new Player(name))
    }
    play() {
            
        }

    nextPlayer() {
        currentPlayer = players.reduce((player) => {player.turn = true}) //find who turn it is
        nextPlayer = game[players.indexOf(currentPlayer) + 1] // nextPlayer is the next index of the current player
        nextPlayer.turn = true; // make it the next player turn 
    } //untested
    skipPlayer() {
        
    }
    reversePlayer() {
        
    }
    check(choosenCard){
        if (this.Pile.lastCard.number === choosenCard.number){
            addToPile(choosenCard)            
        }
         if (this.Pile.lastCard.color === choosenCard.color){
            addToPile(choosenCard)            
        }
        if( this.rules.putTwoOnFour === true){
            
        }
      
    }
     chooseCard(e){
      let choosenCardId = e.target.id
      let choosenCard = this.cardsDeckTemplate[Number(choosenCardId) - 1]
      if (this.turn === true){ 
          check(choosenCard)
        }
    }
    drawCards(player) {
        
    }
    battleForUno() {
        
    }
}

console.log('hey')