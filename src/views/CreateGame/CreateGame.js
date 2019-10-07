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

    if (keys.length < 10 || values.length < 10) {
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

  handleEmailUpdate = (id, value) => {
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
    .then(response => {
      const url = response.filter(x => x !== '');
      this.setState({urls: url, hasLinks: true})
    }) 
  }

  renderForm = () => {
    const arr = [1, 2, 3, 4, 5];
    return (
      <form className="CreateGame--form" onSubmit={(e) => this.handleSubmit(e)}>
        {arr.map(user => 
          (
            <>
              <div key={user} className="form--group">
                <label htmlFor={`p${user}name`}>Player {user} Name: [ user- {user} ]</label>
                <input id={`p${user}name`} type='text' onChange={(e) => this.handleNameUpdate(e.target.id, e.target.value)} />
                <label htmlFor={`p${user}email`}>Player {user} Email: [ user- {user} ]</label>
                <input id={`p${user}email`} type='email' onChange={(e) => this.handleEmailUpdate(e.target.id, e.target.value)} />
              </div>
            </> 
          )
        )}
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
        <div key={i}>
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