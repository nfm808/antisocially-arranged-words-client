import React, { Component } from 'react'

class GameRoom extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        Gameroom {this.props.match.params.roomId}
      </div>
    )
  }
}

export default GameRoom
