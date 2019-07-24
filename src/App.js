import React, { Component } from 'react'
import CARDS from './CARDS.js'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import GameRoom from './views/GameRoom.js';
import LandingPage from './views/LandingPage.js';
import CahContext from './cahContext';
import Error404 from './components/Error404/Error404';
import Rules from './views/Rules/Rules.js';

class App extends Component {
  state = {
    blackCards: undefined,
    whiteCards: undefined,
    usedCards: {
      blackCards: [],
      whiteCards: []
    },
    currentHand: [],
    answerChoices: [],
    winningAnswer: [],
    currentBlackCard: {},
    whiteCardChoices: [],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        blackCards: CARDS.blackCards,
        whiteCards: CARDS.whiteCards,
      })
    }, 1000);
  }
  renderViewRoutes() {
    return (
      <>
        <Switch>
          <Route 
            exact
            path='/'
            component={LandingPage}
          />
          <Route 
            path='/rules'
            component={Rules}
          />
          <Route 
            path='/games/:roomId'
            component={GameRoom}
          />
          <Route 
            component={Error404}
          />
        </Switch>
      </>
    )}
  render() {
    const contextValue = {
      blackCards: this.state.blackCards,
      whiteCards: this.state.whiteCards,
      usedCards: this.state.usedCards,
      currentBlackCard: this.state.currentBlackCard,
      currentHand: this.state.currentHand,
      answerChoices: this.state.answerChoices,
      winningAnswer: this.state.winningAnswer,
      updateUsedCards: this.updateUsedCards,
      updateCurrentHand: this.updateCurrentHand
    }
    return (
      <CahContext.Provider value={contextValue}>
      <div className='App'>
        {this.renderViewRoutes()}
      </div>
      </CahContext.Provider>
    )
  }
}

export default App
