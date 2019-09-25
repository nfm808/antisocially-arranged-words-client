import React, { Component } from 'react'
import BlackCard from '../BlackCard/BlackCard';
import cahContext from '../../cahContext';
import WhiteCard from '../WhiteCard/WhiteCard';

class Game extends Component {
  static contextType = cahContext;
  constructor(props) {
    super(props)
  
    this.state = {
       isCzar: null,
       user: {},
       hand: [],
       usedWhiteCards: [],
       usedBlackCards: [],
       answerChoices: [],
       winningAnswerChoice: null,
       currentBlackCard: {},
       answerChoiceSubmitted: false,
       answerCardSubmitted: {},
       revealCardInfo: false,
       turnEnd: false,
       players: [
         {
          id: null,
          name: '',
          isCzar: false,
          score: 0
         }
       ],
    }
    this.handleWinningCardSelect = this.handleWinningCardSelect.bind(this)
    this.handleAnswerCardSelect = this.handleAnswerCardSelect.bind(this)
  }
  createPlayer(id, playerName, isCzar, score, cards) {
    const player = {
      playerId: id,
      playerName: playerName,
      isCzar: isCzar,
      score: score,
      cards: cards
    }
    return player;
  }

  createPlayersArray(data) {
    const players = []
    players.push(this.createPlayer(data.player_1_id, data.player_1_name, data.player_1_isCzar, data.player_1_points, data.player_1_cards))
    players.push(this.createPlayer(data.player_2_id, data.player_2_name, data.player_2_isCzar, data.player_2_points, data.player_2_cards))
    players.push(this.createPlayer(data.player_3_id, data.player_3_name, data.player_3_isCzar, data.player_3_points, data.player_3_cards))
    players.push(this.createPlayer(data.player_4_id, data.player_4_name, data.player_4_isCzar, data.player_4_points, data.player_4_cards))
    players.push(this.createPlayer(data.player_5_id, data.player_5_name, data.player_5_isCzar, data.player_5_points, data.player_5_cards))
    return players;
  }
  addPlayerInfoToCard(card, userId, players) {
    let playerToAdd = players.filter(x => x.playerId === userId)[0]
    delete playerToAdd.cards
    delete playerToAdd.isCzar
    delete playerToAdd.score
    let returnCard = {...card, ...playerToAdd}
    return returnCard;
  }
  setInitialState(data) {
    const players = this.createPlayersArray(data);
    let isCzar = false;
    const currentPlayer = this.props.match.params.user.split('_').join(' ')
    const currentCzar = players.filter(user => user.playerId === data.czar)[0]
    let user = players.filter(user => user.playerName === currentPlayer)[0]
    const userHand = this.context.whiteCards.filter(card => user.cards.includes(card.id));
    if (user.playerId === data.czar) {
      isCzar = true;
    }
    const usedWhite = players.map(player => player.cards).flat()
    const usedBlack = data.used_black_cards.push(data.currentBlackCard)
    const currentBlack = this.context.blackCards.filter(x => x.id === data.current_black_card)[0]
    const adjusted = this.addPlayerInfoToCard(currentBlack, currentCzar.playerId, players)
    const answers = data.answer_choices.length === 0 ? [] : this.context.whiteCards.filter(x => data.answer_choices.includes(x.id))
    this.setState({
      isCzar: isCzar,
      user: user,
      hand: userHand,
      usedBlackCards: usedBlack,
      usedWhiteCards: usedWhite,
      answerChoices: answers,
      currentBlackCard: adjusted,
      players: players
    })
  }
  componentDidMount() {
    const url = `${process.env.REACT_APP_API_BASE_URL}/gameroom/${this.props.match.params.roomId}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network error: Please try again later.')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setInitialState(data)
      })
      .catch(err => console.error(err))
  }
  
  handleWinningCardSelect(card) {
    const newCzar = this.state.players.indexOf(player => 
      player.playerId === card.playerId
    )
    console.log(newCzar)
    this.setState({
      winningAnswerChoice: card,
      revealCardInfo: !this.state.revealCardInfo,
    })
  }
  endTurn() {
    this.setState({
      turnEnd: !this.state.turnEnd,

    })
  }
  handleAnswerCardSelect(card) {
    console.log('card', card)
    const { user, players } = this.state
    console.log('user', 'players', user, players)
    const submittedAnswer = this.addPlayerInfoToCard(card, user.playerId, players )
    console.log('submittedAns', submittedAnswer)
    this.setState({
      answerChoiceSubmitted:  submittedAnswer,
      answerCardSubmitted: true
    })
  }
  renderCzarWhiteCards() {
    const { answerChoices, winningAnswerChoice, revealCardInfo} = this.state;
    console.log('renderczarwhitecards()', this.state)
    if (answerChoices.length < 4) {
      return answerChoices.map((card, i) => (
        <WhiteCard key={i} blank />
      ))
    }
    if (answerChoices.length === 4 && !revealCardInfo) {
      return answerChoices.map(card => (
        <WhiteCard 
          key={card.id}
          partial
          card={card} 
          handleCardSelect={this.handleWinningCardSelect}  
        />
      ))
    }
    if (revealCardInfo) {
      return (
        <>
          <WhiteCard 
            card={winningAnswerChoice}
          />
          {answerChoices.filter(card => card.id !== winningAnswerChoice.id)
                  .map(card => (
                    <WhiteCard 
                      key={card.id}
                      card={card}
                    />
                  ))
          }
          <button onClick={() => this.endTurn}>End Turn</button>
        </>
      )
    }
  }
  renderPlayerWhiteCards() {
    const { answerChoices, answerChoiceSubmitted, winningAnswerChoice, players, hand, revealCardInfo} = this.state;
    console.log('renderplayerwhitecards state', this.state)
    const currentPlayer = this.props.match.params.user.split('_').join(' ')
    let user = players.filter(user => user.playerName === currentPlayer)[0]
    if (!answerChoiceSubmitted) {
      return hand.map(card => (
        <WhiteCard 
          key={card.id}
          card={card}
          partial
          handleCardSelect={this.handleAnswerCardSelect}
        />
      ))
    }
    if (answerChoiceSubmitted) {
      return (
      <>
        <WhiteCard 
          selected
          card={this.state.answerCardSubmitted}
        />
        {hand.map(card => (
          <WhiteCard 
            key={card.id}
            card={card} 
          />
      ))}
      </>
    )}
  }
  render() {
    const {isCzar, revealCardInfo, currentBlackCard, turnEnd} = this.state;
    console.log('render() state', this.state)
    return (
      <main className='Game'>
        <header>
          <h1>{this.props.match.params.roomId}</h1>
        </header>
        <BlackCard 
          card={currentBlackCard}
        />
        {!isCzar ? this.renderPlayerWhiteCards()
                  : this.renderCzarWhiteCards()  
        }
        {turnEnd && <button></button>}
      </main>
    )
  }
}

export default Game;