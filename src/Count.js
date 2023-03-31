import React, { Component } from 'react'


var err=()=>{
    throw new Error("Error Triggered Manually")
}
export default class Count extends Component {
  render() {
    return (
      <div>
        <h1>PRESS TO TRIGGER ERROR:</h1>
        <button onClick={err}>Error</button>
      </div>
    )
  }
}