import React, { Component } from 'react';
import './CreateGame.css';
import { authenticationService } from '../../_helpers/authentication.service';

class CreateGame extends Component {
  state = {
    players: {},
    formValid: false,
    urls: [],
    hasLinks: false
  }
  validateForm = () => {
    const { players } = this.state;
    const keys = Object.keys(players);
    const values = Object.values(players).filter(x => x.length > 1);
    let isValid = true

    if (keys.length < 5 || values.length < 5) {
      isValid = !isValid
    } else {
      isValid = isValid
    }
    this.setState({ formValid: isValid })
    
  }

  handleNameUpdate = (id, value) => {
    this.setState({
      players: {...this.state.players, [id]: value}
    }, this.validateForm())
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const body = this.state.players;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fake-jwt-token'
      },
      body: JSON.stringify(body)
    };
    authenticationService.createGame(body)
    .then(response => this.setState({urls: response, hasLinks: true})) 
  }
  renderForm = () => {
    return (
      <form className="CreateGame--form" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form--group">
          <label htmlFor="p1name">P 1 Name: [ user-1 ]</label>
          <input id="p1name" type='text' onChange={(e) => this.handleNameUpdate(e.target.id, e.target.value)} />
        </div>
        <div className="form--group">
          <label htmlFor="p2name">P 2 Name: [ user-2 ]</label>
          <input id="p2name" type='text' onChange={(e) => this.handleNameUpdate(e.target.id, e.target.value)} />
        </div>
        <div className="form--group">
          <label htmlFor="p3name">P 3 Name: [ user-3 ]</label>
          <input id="p3name" type='text' onChange={(e) => this.handleNameUpdate(e.target.id, e.target.value)} />
        </div>
        <div className="form--group">
          <label htmlFor="p4name">P 4 Name: [ user-4 ]</label>
          <input id="p4name" type='text' onChange={(e) => this.handleNameUpdate(e.target.id, e.target.value)} />
        </div>
        <div className="form--group">
          <label htmlFor="p5name">P 5 Name: [ user-5 ]</label>
          <input id="p5name" type='text' onChange={(e) => this.handleNameUpdate(e.target.id, e.target.value)} />
        </div>
        <button 
          type="submit" 
          aria-label="create a game" 
          disabled={!this.state.formValid}
        >
          Create Game
        </button>
      </form>
    )
  }
  renderLinks = () => {
    const {players, urls} = this.state
      return urls.map((url, i) =>  ( 
        <div key={url}>
          <p>{players[Object.keys(players).filter(x=> x === `p${i + 1}name`)[0]]}</p>
          <p>{url}</p>
        </div>
      ))
  }
  render() {
    const { hasLinks } = this.state
    return (
      <main className="CreateGame">
        {hasLinks ? this.renderLinks() : this.renderForm()}
      </main>
    )
  }
}

export default CreateGame;