class Card {
  constructor(id, number, color) {
    this.id = id;
    this.number = number;
    this.color = color;
    this.playersChoosenCard = this.card.addEventListener('click',chooseCard)
 }
}