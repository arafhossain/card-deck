import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 30;
    let xPos = Math.random() * 40 - 30;
    let yPos = Math.random() * 40 - 30;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render(){
    return (
      <img style={{transform: this._transform}} className="Card" src={this.props.image} alt={this.props.text} />
    )
  }
}

export default Card;