/*----- constants -----*/

const body = document.getElementById("body");
const splashMusic = document.getElementById("splashMusic");
const title = document.getElementById("title");
const playButton = document.getElementById("playButton");
const modal = document.getElementById("modal");
const joinGameButton = document.getElementById("joinGameButton");
const modalCloseButton = document.getElementById("modal-close");
//  Remove '#;' and see wat happends.
const playerSection = document.createElement('div');
    playerSection.id = "playerSection";
const board = document.createElement("div");
    board.id = "board";
const boardBody = document.createElement("div");
    boardBody.id = "boardBody";
    board.appendChild(boardBody);
    body.appendChild(board);
    
const unoOnBoardSection = document.createElement("div");
    unoOnBoardSection.id = "unoOnBoardSection"
const deckAndPileSection = document.createElement("div");
    deckAndPile.id = "deckAndPileSection";
const deckSection = document.createElement("div");
    deckSection.id = "deckSection"
const pileSection = document.createElement("div");
    pileSection.id = "pileSection";
const buttonsOnBoardSection = document.createElement("div");
    buttonsOnBoardSection.i = "buttonsOnBoardSection";
const drawCardButton = document.createElement("div");
    drawCardButton.id = "drawCardButton";
const restartButton = document.createElement("div");
    restartButton.id = "restartButton";
const sayUnoButton = document.createElement("div");
    sayUnoButton.id = "sayUnoButton";
    
/*----- app's state -----*/

    // Load audio on window load
window.onload = function() {
    splashMusic.play();
}



/*----- cached element references -----*/

/*----- functions -----*/

function openModal() {
  playButton.style.display = "none";
  modal.style.display = "block";
//   modalCloseButton.style.display = "block";
  splashMusic.volume = 0.5;
}

function joinGame() {
   body.innerHTML = "" // change
   board.style.display = "none"
}

function closeModal() {
//   playButton.style.display = "block";
   modal.style.display = "none";
   modal.innerHTML = "";
//   modalCloseButton.style.display = "none"
   
}

function modeComingSoon() {
   alert('Aint have time. Coming in Beta 0.2.5')
}

function gameStarted() {
  alert("Welcome to Project:UNO, No need to explain the rules. You chose them. Have Fuun & Remember to Yell UNO!")
}

function getCardUI(card) {
    let newElement = document.createElement("div");
    newElement.style.height = "50px";
    newElement.style.width = "40px";
    newElement.style.backgroundColor = `${card.color}px`;
    newElement.style.borderRadius = "16px"
    newElement.style.display = "flex";
    newElement.style.justifyContent = "center";
    newElement.style.alignItems = "center";
    newElement.innerHTML = card.number;
    newElement.style.fontSize = "20px";
    return newElement
}

function drawCard(deck) {
    this.players[currentPlayer].hand.append(game.Deck.pop())
    this.Game.rotatePlayer()
}

function renderCard(card, player) {
    let hand = document.getElementById('hand');
    hand.appendChild(getCardUI(card));
}

// This has to be inside rotate player, the human player might lose. 
function sayUno(game) {
    if (this.player.hand.length = 1) {
        alert("UNO!");
    }
}


function updateDeck() {
    document.getElementById('deckcount').innerHTML = deck.length;
} //update

function initializeGame(name = modal.value) {
    const game1 = new Game(name);
    console.log(game);
}

function createPlayersUI() {
    
    const game1 = new Game("Peter");
    
    body.innerHTML = ""; // Clear Page
    
    // Uno On Board Section
    unoOnBoardSection.innerHTML = "Project: UNO!";
    boardBody.appendChild(unoOnBoardSection);
    
    // Deck & Pile Section 
    deckSection.innerHTML = game1.Deck.length;
    deckAndPileSection.appendChild(pileSection);
    deckAndPileSection.appendChild(deckSection);
    boardBody.appendChild(deckAndPileSection);

    // Buttons Sections
    restartButton.innerHTML = "Restart";
    drawCardButton.innerHTML = "Draw Card";
    sayUnoButton.innerHTML = "Say UNO !";
    buttonsOnBoardSection.appendChild(sayUnoButton);
    buttonsOnBoardSection.appendChild(drawCardButton);
    buttonsOnBoardSection.appendChild(restartButton);
    boardBody.appendChild(buttonsOnBoardSection);
    

    // Player Section
    const playerName = document.createElement("div");
    for(let i = 0; i < players.length; i++) {
        
        let player = document.createElement('div');
        let playerName = document.createElement('div');
        let playerHand = document.createElement('div');

        player.id = 'player_' + i;
        player.className = 'player';
        playerHand.id = 'hand_' + i; // important, each player/ai has its own div
        playerHand.className = 'hand';
        playerName.id = "playerName";
        if (player.id = 'player_1') {
            playerName.innerHTML = modal.value;
        } else {
            playerName.innerHTML = 'Player ' + game1.players[i].cardID;
        }
            
        player.appendChild(playerName);
        player.appendChild(playerHand);
        board.appendChild(player);

    boardBody.appendChild(playerSection);
    
    // // Append to body
    document.body.appendChild(boardBody);
    // }
}


/*----- event listeners -----*/
    
   playbutton.addEventListener("click", createPlayersUI);
   
   modalCloseButton.addEventListener("click", closeModal)
   
   joinGameButton.addEventListener("click", createPlayersUI);
  

/*------ Classes ------*/

class Game{
    constructor(name, colors = false, numbers = false,example = false) { // You dont pass in rules, they change after
        this.player = new Player(name)
        this.ai1 = new AIPlayer()
        this.ai2 = new AIPlayer()
        this.ai3 = new AIPlayer()
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
        this.currentPlayerInGame = this.currentPlayer()
        // this.whosTurn = gameRotation()
    }
    
    

    lastOnPile(){
      return this.pile[this.pile.length - 1]
    }
    
    rotatePlayer() {
      let numOfPlayers = this.players.length
      let currentPlayerIndex = this.player.findIndex((player) => player.turn === true)
      let nextPlayerIndex = (currentPlayerIndex + 1) % numOfPlayers
      this.players[currentPlayerIndex].turn = false
      this.players[nextPlayerIndex].turn = true
      return this.players[nextPlayerIndex]
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
    // addToPile(x){
    //     this.pile.push(x)
    // }
    // lastOnPile(){
    //   return this.pile[this.pile.length - 1]
    // }
//     playerRotation(x){
//         for(let i = 0; i< this.playersInGame.length; i++){
//           // console.log(this.playersInGame)
//             if (this.playersInGame[i].turn = true){
//                 if(i === this.playersInGame.length - 1){
//                     this.playersInGame[this.playersInGame.length - 1].turn = false
//                     this.playersInGame[0].turn = true
//                     this.playersInGame[0].chooseCard(x)
//                 }else{
//                     this.playersInGame[i+1].turn = true
//                     console.log('test1')
//                     Player.chooseCard(this.playersInGame[i])
//                 }
//             }
//         }
//     }
    
    // stack()
}
//         giveInitialCards(){
//             let x = [this.deck[4]]
//             this.playersInGame[3].hand = x
//             return(this.playersInGame[3])
//         }
// }




class Card {
    constructor(id, value, color,isWild = false) {
      this.id = id;
      this.value = value;
      this.color = color;
      this.isWild = isWild
     
   }
//    addListner(){
       
//    }
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
    //   shuffle() {
    //   // an instance method because it can only be called on instances
    //   for (let i = this.cards.length - 1; i > 0; i -= 1) {
    //     let randomLocation = Math.floor(Math.random() * (i + 1));
    //     let card = this.cards[i];
    //     this.cards[i] = this.cards[randomLocation];
    //     this.cards[randomLocation] = card;
    //   }
  
    //   return this.cards;
    // }
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
    // this.playersChoosenCard =Player.chooseCard()
    // this.playersChoosenCard = this.card.addEventListener('click',Player.chooseCard)
  }
  chooseCard(x){//x is the index of the card ex: game1.player.hand[]
    //    let choosenCardId = e.target.id
    //    let choosenCard = this.cardsDeckTemplate[Number(cx.cardID) - 1]
    this.templateDeck = Deck.makeDeck()
    let choosenCard = this.templateDeck[Number(x.id) - 1]//-1 because the id is the index but the id starts at 1 instead of 0
        if (this.turn = true){ 
          console.log('test2')
            return choosenCard
          }
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
            let y = this.player.hand.indexOf(card)
            this.player.hand.splice(y,1)    
        } else {
          console.log('This is an invalid card');
          return false;
        }
        
    }
}

// class Pile{
//     constructor (){
//         this.pile = []
//     } 

// }

class AIPlayer{
    constructor(){
        this.hand = null
        this.turn = false;
    }
}






















