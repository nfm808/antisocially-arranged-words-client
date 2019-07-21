import React, { Component } from 'react'
import CARDS from './CARDS.js'
import { Route } from 'react-router-dom'
import './App.css'
import GameRoom from './views/GameRoom.js';
import LandingPage from './views/LandingPage.js';
import cahContext from './cahContext';

class App extends Component {
  state = {
    blackCards: [],
    whiteCards: [],
    usedCards: [],
    currentBlackCard: null,
    whiteCardChoices: [],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        blackCards: CARDS.blackCards,
        whiteCards: CARDS.whiteCards
      })
    }, 1000);
  }
  renderViewRoutes() {
    return (
      <>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <Route 
          path='/:roomId'
          component={GameRoom}
        />
      </>
    )}
  render() {
    return (
      <div className='App'>
        {this.renderViewRoutes()}
      </div>
    )
  }
}

export default App
