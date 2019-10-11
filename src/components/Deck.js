import React, { Component } from 'react'

class Deck extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return (
      <div>
        <h1>Card Deck!</h1>
        <h3>Deck here</h3>  
      </div>
    )
  }
}

export default Deck;