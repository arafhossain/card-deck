import React, { Component } from 'react'
import './Deck.css'
import axios from 'axios'

class Deck extends Component {
  constructor(props){
    super(props)
    this.state = {deck_id: ''};
  }
  async componentDidMount(){
    await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/').then(response => {
      this.setState({ deck_id: response.data.deck_id })
    })
  }
  render(){
    return (
      <div className="Deck">
        <h1 className="Header">♤ Flip a card! ♤</h1>
        <h3>Deck here</h3>  

      </div>
    )
  }
}

export default Deck;