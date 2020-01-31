 class Player {
    constructor(name) {
    this.name = name;
    this.hand = [];
    this.turn = false;
    // this.playersChoosenCard =Player.chooseCard()
    this.playersChoosenCard = this.card.addEventListener('click',Player.chooseCard)
  }
  chooseCard(e){
      let choosenCardId = e.target.id
      let choosenCard = this.cardsDeckTemplate[Number(choosenCardId) - 1]
       if (this.turn === true){ 
           check(choosenCard)
         }
     }
}

class Hand{
    ha
}