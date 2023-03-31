import React, { Component } from 'react'

export default class Errorboundary extends Component {
  constructor()
  {
    super()
    this.state={
      hasError:false,
    };
  }
  static getDerivedStateFromError()
  {
    return{
      hasError:true
    }
  }
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}
