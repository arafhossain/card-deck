import React, { Component } from 'react'
import './Deck.css'

class Deck extends Component {
  constructor(props){
    super(props)
    this.state = {};
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