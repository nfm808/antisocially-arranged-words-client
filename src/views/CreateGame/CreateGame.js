import React, { Component } from 'react';
import './CreateGame.css';
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage';

class CreateGame extends Component {
  state = {
    name: '',
    nameValid: false,
    password: '',
    passwordValid: false,
    repeatPassword: '',
    repeatPasswordValid: false,
    formValid: false,
    errorMessages: {
      name: '',
      password: '',
      repeatPassword: '',
    }
  }

  handleUpdateName= (fieldValue) => {
    this.setState({
      name: fieldValue
    }, this.validateName(fieldValue))
    
  }

  handleUpdatePassword = (fieldValue) => {
    this.setState({
      password: fieldValue
    }, this.validatePassword(fieldValue))
  }

  handleUpdateRepeatPassword = (fieldValue) => {
    this.setState({
      repeatPassword: fieldValue
    }, this.validateRepeatPassword(fieldValue))
  }

  validateName = (str) => {
    let string = str.toString();
    let err = 'Wow...what a name...';
    let valid = false;
    if (string.length < 3) {
      err = 'Name must be longer than 3 characters'
      valid = !valid
    } 
    if (this.state.nameValid) {
      err = ''
      valid = false
    }
    this.setState({
      nameValid: !valid,
      errorMessages: {
        name: err
      }
    })
  };
  validatePassword = (str) => {
    let string = str.toString();
    let err = 'Yea that password works';
    let valid = false;
    if (string.length < 6) {
      err = 'Name must be longer than 6 characters'
      valid = !valid
    }

    this.setState({
      passwordValid: !valid,
      errorMessages: {
        password: err
      }
    })
  }
  validateRepeatPassword = (str) => {
    let err = 'Yay! You are free of typos';
    let valid = false;
    if (str !== this.state.password) {
      err = 'You may have issues with typing...'
      valid = !valid
    }
    this.setState({
      repeatPasswordValid: !valid,
      errorMessages: {
        repeatPassword: err
      }
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const idOptions = ['123', '234', '456']
    const id = idOptions[Math.floor(Math.random() * idOptions.length)]
    const url = `${process.env.REACT_APP_API_BASE_URL}/gameroom`
    const data = {
      id: id,
      gameroom_name: this.state.name,
      password: this.state.password,
      "used_black_cards": [],
      "used_white_cards": [],
      "czar": 1,
      "current_black_card": null,
      "answer_choices": [],
      "winning_choice": null,
      "player_1_id": 1,
      "player_1_cards": [],
      "player_1_points": 0,
      "player_2_id": 2,
      "player_2_cards": [],
      "player_2_points": 0,
      "player_3_id": 3,
      "player_3_cards": [],
      "player_3_points": 0,
      "player_4_id": 4,
      "player_4_cards": [],
      "player_4_points": 0,
      "player_5_id": 5,
      "player_5_cards": [],
      "player_5_points": 0
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('server error: try again later')
        }
        return res;
      })
      .then(res => res.json())
      .then(x => {
        this.props.history.push(`/${data.id}`)
      })
  }

  render() {
    const {
      nameValid, passwordValid, 
      repeatPasswordValid, errorMessages
    } = this.state
    const errors = (nameValid && passwordValid && repeatPasswordValid) 
                  ? true :false
    return (
      <main className="CreateGame">
        <header className="CreateGame--header BlackCard">
          <h3>Create a Game</h3>
        </header>
        <form 
          className="CreateGame--form"
        >
          <section className="form--group WhiteCard">
            <label htmlFor="CreateGame--name">Game Name</label>
            <input 
              className={!nameValid ? 'red CreateGame--input' : 'green CreateGame--input'}
              type="text"
              name="CreateGame--name" 
              id="CreateGame--name"
              onChange={(e) => this.handleUpdateName(e.target.value)}
            />
            <ValidationMessage 
              hasError={!nameValid}
              message={errorMessages.name}
            />
          </section>
          <section className="form--group WhiteCard">
            <label htmlFor="CreateGame--password">Password</label>
            <input 
              className={!passwordValid ? 'red CreateGame--input' : 'green CreateGame--input'}
              type="password" 
              name="CreateGame--password" 
              id="CreateGame--password"
              onChange={(e) => this.handleUpdatePassword(e.target.value)} 
            />
            <ValidationMessage 
              hasError={!passwordValid}
              message={errorMessages.password}
            />
          </section>
          <section className="form--group WhiteCard">
            <label htmlFor="CreateGame--repeatPassword">Repeat Password</label>
            <input 
              className={!repeatPasswordValid ? 'red CreateGame--input' : 'green CreateGame--input'}
              type="password" 
              name="CreateGame--repeatPassword" 
              id="CreateGame--repeatPassword"
              onChange={(e) => this.handleUpdateRepeatPassword(e.target.value)} 
            />
            <ValidationMessage 
              hasError={!repeatPasswordValid}
              message={errorMessages.repeatPassword}
            />
          </section>
        </form>
        <button 
          type="submit"  
          onClick={(e) => this.handleSubmit(e)} 
          disabled={!errors}
        >
          Create Game
        </button>
      </main>
    )
  }
}

export default CreateGame;