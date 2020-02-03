
class Game{
    constructor(name, colors = false, numbers = false,example = false) { // You dont pass in rules, they change after
        this.player = new Player(name)
        this.ai1 = new AIPlayer(null,false)
        this.ai2 = new AIPlayer(null,false)
        this.ai3 = new AIPlayer(null,false)
        this.deck = Deck.shuffle(Deck.makeDeck())//.shuffle()
        this.templateDeck = Deck.makeDeck()
        this.pile = []
        this.players = [this.player,this.ai1,this.ai2,this.ai3]
        this.rules = {
            colorsOnly: colors,
            numbersOnly: numbers,
            examples:example
            //rules change when game is initi
        };
        // this.currentPlayerInGame = this.rotatePlayer()
        // this.whosTurn = gameRotation()
    }
    
    

    lastOnPile(){
      return this.pile[this.pile.length - 1]
    }
    
    rotatePlayer(game){
      let numOfPlayers = game.players.length
      let x = (player) => player.turn === true
      let currentPlayerIndex = game.players.findIndex(x)
      let nextPlayerIndex = (currentPlayerIndex + 1) % numOfPlayers
      game.players[currentPlayerIndex].turn = false
      game.players[nextPlayerIndex].turn = true
      game.players[nextPlayerIndex].pickACard(game,nextPlayerIndex)
      // return this.players[nextPlayerIndex]
    }
    
    
    dealCards(){ // press start and that makes game.giveInitialCards
        for(let i=0;i < this.players.length; i++){
            let sixCards = this.deck.slice(0,6)
            this.players[i].hand = sixCards 
            this.deck.splice(0,6)
        }
        this.pile.push(this.deck.pop())
        return this.players
    } 
    
}




class Card {
    constructor(id, value, color,isWild = false) {
      this.id = id;
      this.value = value;
      this.color = color;
      this.isWild = isWild
     
   }

}
   
  class Deck {
    //   constructor() {
    //       this.cards = this.makeDeck()
    //       this.deckTemplate = this.makeTemplate()
    //     // this.deckTemplate = Deck.makeDeck()
    //   }
      static makeDeck(){
      // static makeDeck(){
      //static benefits 1) encapsulates it even more 2) it makes it applicable without a need to make an instance
          const colors = ['blue','green','red','yellow']
          const numbers = ['1','2','3','4','5','6','7','8','9']
          let cardID = 0
          const cards = [ ]
          // let is_Wild = false
          for(let i = 0; i < colors.length; i++){
              for(let t = 0; t < numbers.length; t++){
                  cardID += 1;
                  cards.push(new Card(cardID,numbers[t],colors[i])); 
              }
          }
          const wild =['drawTwo','reverse','skip']
            for(let i = 0; i < colors.length; i++){
              for(let t = 0; t < wild.length; t++){
                  cardID += 1;
                  cards.push(new Card(cardID,wild[t],colors[i],true)); 
                  cardID += 1;
                  cards.push(new Card(cardID,wild[t],colors[i],true));
              }
          }
       const wilder = ['drawFourAndChooseColor','ChooseColor']
               for(let t = 0; t < wilder.length; t++){
                    for(let i = 0; i < 4; i++){   
                       cardID += 1
                       cards.push(new Card(cardID,wilder[t],null,true)); 
                   }
               }
             
          return cards
      }
      makeTemplate(){
        const deckTemplate = this.cards.slice();
        return deckTemplate
      }
   
    static shuffle(x) {
        // an instance method because it can only be called on instances
        for (let i = x.length - 1; i > 0; i -= 1) {
          let randomLocation = Math.floor(Math.random() * (i + 1));
          let card = x[i];
          x[i] = x[randomLocation];
          x[randomLocation] = card;
        }
    
        return x;
      }
}



class Player {
    constructor(name) {
    this.name = name;
    this.hand = null;
    this.turn = true;
    
  }


  addToPile(game, card){
      game.pile.push(card)
  }

  playCard(game, card){
        console.log('3')
        let lastCard = game.lastOnPile()
        console.log('4')
        if (lastCard.value === card.value || lastCard.color === card.color){
            this.addToPile(game, card) 
            let y = game.player.hand.indexOf(card)
            game.player.hand.splice(y,1)    
        } else {
          console.log('This is an invalid card');
          return false;
        }
        
    }
}



class AIPlayer extends Player{
    constructor(hand,turn){
        super(hand,turn)
        this.turn = false 
    }
    pickACard(game,nextPlayerIndex){
      let lastCard = game.lastOnPile()
      if (this.turn = true){
        for(let i = 0; i < this.hand.length; i++){
          if (this.hand[i].color === lastCard.color || this.hand[i].value === lastCard.value){
            this.addToPile(game, this.hand[i]) 
            let y = game.players[nextPlayerIndex].hand.indexOf(this.hand[i])
            this.hand.splice(y,1)  
            console.log(`working its ${game.players[i]} turn`)  
            game.rotatePlayer(game)
        } 
        }
        game.rotatePlayer(game)
      }
    }
}
