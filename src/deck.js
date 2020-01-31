class Card {
  constructor(id, value, color,isWild = false) {
    this.id = id;
    this.value = value;
    this.color = color;
    this.isWild = isWild
    

 }
 addListner(){
     
 }
}
 
class Deck {
    constructor() {
        this.cards = Deck.makeDeck()
        this.cardsDeckTemplate = Deck.makeTemplate()
    }
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
                cards.push(new Card(cardID,numbers[t],colors[i]).addlistner()); 
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
        const cardsDeckTemplate = this.cards.slice();
        return cardsDeckTemplate
    }
    shuffle() {
    // an instance method because it can only be called on instances
    for (let i = this.cards.length - 1; i > 0; i -= 1) {
      let randomLocation = Math.floor(Math.random() * (i + 1));
      let card = this.cards[i];
      this.cards[i] = this.cards[randomLocation];
      this.cards[randomLocation] = card;
    }

    return this.cards;
  }
}


