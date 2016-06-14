import React, { Component } from 'react'

const buttonStyle = {
  fontFamily: 'Geneva, sans-serif',
  padding: '10px 8px',
  background: 'green',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '13px'
};

class Counter extends Component {
  constructor(){
    super()
    this.state = {count: 0}
    //bind handler
  }
  //set handler
  render(){
    //set button event
    return (
      <div>
        <h1>Contador</h1>
        <button style={ buttonStyle }>Haz click aquí</button>
        <p>Has hecho click {this.state.count} veces</p>
      </div>
    )
  }
}

export default Counter
