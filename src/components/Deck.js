import React, { Component } from "react";
import "./Deck.css";
import axios from "axios";
import Card from './Card'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck_id: "", curStack: [] };
    this.drawCard = this.drawCard.bind(this);
  }
  async componentDidMount() {
    await axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/")
      .then(response => {
        this.setState({ deck_id: response.data.deck_id });
      });
  }
  
  drawCard() {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`)
      .then(response => {
        let cardImage = response.data.cards[0].image;
        let cardInfo = `${response.data.cards[0].value} of ${response.data.cards[0].suit}`;
        let newCard = [cardImage, cardInfo];
        this.setState(curState => {
          return { curStack: [...curState.curStack, newCard] };
        });
        console.log(this.state);
      });
  }

  render() {
    let displayCards =  this.state.curStack.map(rawCard => {
      return <Card image={rawCard[0]} text={rawCard[1]} key={rawCard[1]} />
    });
    return (
      <div className="Deck">
        <div>
          <img
            src="https://www.iconsdb.com/icons/preview/white/spades-xxl.png"
            alt="White Spade"
          />
          <h1 className="Header">Flip a card!</h1>
          <img
            src="https://www.iconsdb.com/icons/preview/white/spades-xxl.png"
            alt="White Spade"
          />
        </div>
        <button className="drawCardButton" onClick={this.drawCard}>
          Draw a card!
        </button>
        {this.state.curStack.length !== 0 ? displayCards : null}
      </div>
    );
  }
}

export default Deck;
