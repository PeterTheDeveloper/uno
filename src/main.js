/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

function __init__() {
    
}

/*----- Classes -----*/

class Game {
    constructor(players, rules) {
        gameDeck = new Deck()
        this.players = [];
        this.deck = gameDeck // Just to reference it easier
        this.rules = {};
    }
    
    play() {
            
        }
    nextPlayer() {
        
    }
    skipPlayer() {
        
    }
    reversePlayer() {
        
    }
    drawCards() {
        
    }
    battleForUno() {
        
    }
}

class Rules {
    
}

class Player {
    constructor(name) {
    this.name = name;
    this.hand = [];
    this.turn = false;
  }
}

class Deck {
    shuffle() {
        
    }    
}

class Card {
    
}

class Pile {
    
}

class Rules {
    
}