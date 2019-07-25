import React, { Component } from 'react';
import './GameRoom.css';
import CahContext from '../../cahContext';
import Login from '../../components/Login/Login';
import Game from '../../components/Game/Game';

class GameRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        auth: false,
      })
    }, 1000);
  }

  updateAuth() {
    this.setState({
      auth: !this.state.auth,
    })
  }
  renderLoginOrGame() {
    if (!this.state.auth) {
      return (
        <Login auth={this.updateAuth}/>
      )
    } 
    return <Game />
  }

  render() {
    return (
      <main className="GameRoom">
        {this.renderLoginOrGame()}
      </main>
    )
  }
}

export default GameRoom
