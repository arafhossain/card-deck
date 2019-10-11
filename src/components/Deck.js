import React, { Component } from "react";
import "./Deck.css";
import axios from "axios";
import Card from "./Card";
import "./Card.css";
let API_URL = "https://deckofcardsapi.com/api/deck/";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck_id: "", curStack: [] };
    this.drawCard = this.drawCard.bind(this);
  }
  async componentDidMount() {
    await axios.get(`${API_URL}new/shuffle/`).then(response => {
      this.setState({ deck_id: response.data.deck_id });
    });
  }

  async drawCard() {
    await axios.get(`${API_URL}${this.state.deck_id}/draw/`).then(response => {
      if (!response.data.success) {
        throw new Error("No cards remaining!");
      }
      let cardImage = response.data.cards[0].image;
      let cardInfo = `${response.data.cards[0].value} of ${response.data.cards[0].suit}`;
      let newCard = [cardImage, cardInfo];
      this.setState(curState => {
        return { curStack: [...curState.curStack, newCard] };
      });
    });
  }

  render() {
    let displayCards = this.state.curStack.map(rawCard => {
      return (
        <Card
          image={rawCard[0]}
          text={rawCard[1]}
          key={rawCard[1]}
        />
      );
    });
    let spadeImageSrc =
      "https://www.iconsdb.com/icons/preview/white/spades-xxl.png";
    return (
      <div className="Deck">
        <div>
          <img className="spadeIcon" src={spadeImageSrc} alt="White Spade" />
          <h1 className="Header">Flip a card!</h1>
          <img className="spadeIcon" src={spadeImageSrc} alt="White Spade" />
        </div>
        <button className="drawCardButton" onClick={this.drawCard}>
          Draw a card!
        </button>
        <div className="cardArea">{displayCards}</div>
      </div>
    );
  }
}

export default Deck;
