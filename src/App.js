import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import GameRoom from './views/GameRoom/GameRoom';
import LandingPage from './views/LandingPage/LandingPage';
import CahContext from './cahContext';
import Error404 from './components/Error404/Error404';
import Rules from './views/Rules/Rules.js';
import CreateGame from './views/CreateGame/CreateGame';

class App extends Component {
  state = {
    isLocal: !localStorage.getItem("decks") ? false : true,
    blackCards: false,
    whiteCards: false,
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
    if (!this.state.isLocal) {
      const url = `${process.env.REACT_APP_API_BASE_URL}/cards`
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw new Error(`mistakes were made`)
          }
          return res;
        })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("decks", "true");
          localStorage.setItem("blackCards", JSON.stringify(data[0].black_cards))
          localStorage.setItem("whiteCards", JSON.stringify(data[0].white_cards))
          this.setState({
            blackCards: data[0].black_cards,
            whiteCards: data[0].white_cards
          })
        })
        .catch(err => console.log(err.message))
    } else {
      this.setState({
        blackCards: JSON.parse(localStorage.getItem("blackCards")),
        whiteCards: JSON.parse(localStorage.getItem("whiteCards"))
      })
    }
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
            exact
            path='/rules'
            component={Rules}
          />
          <Route 
            exact
            path='/create-game'
            component={CreateGame}
          />
          <Route 
            path='/game/:roomId'
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
