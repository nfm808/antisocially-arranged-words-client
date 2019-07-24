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
        <form 
          onSubmit={this.handleSubmit} 
          className="CreateGame--form"
        >
          <section className="form--section">
            <ValidationMessage 
              hasError={!nameValid}
              message={errorMessages.name}
            />
            <label htmlFor="CreateGame-name">Game Name: </label>
            <input 
              className={!nameValid ? 'red' : 'green'}
              type="text"
              name="CreateGame--name" 
              id="CreateGame--name"
              onChange={(e) => this.handleUpdateName(e.target.value)}
            />
          </section>
          <section className="form--group">
            <ValidationMessage 
                hasError={!passwordValid}
                message={errorMessages.password}
            />
            <label htmlFor="CreateGame--password">Password: </label>
            <input 
              className={!passwordValid ? 'red' : 'green'}
              type="password" 
              name="CreateGame--password" 
              id="CreateGame--password"
              onChange={(e) => this.handleUpdatePassword(e.target.value)} 
            />
          </section>
          <section className="form--group">
            <ValidationMessage 
                  hasError={!repeatPasswordValid}
                  message={errorMessages.repeatPassword}
            />
            <label htmlFor="CreateGame--repeatPassword">Repeat Password: </label>
            <input 
              className={!repeatPasswordValid ? 'red' : 'green'}
              type="password" 
              name="CreateGame--repeatPassword" 
              id="CreateGame--repeatPassword"
              onChange={(e) => this.handleUpdateRepeatPassword(e.target.value)} 
            />
          </section>
          <button type="submit" disabled={!errors}>Create Game</button>
        </form>
      </main>
    )
  }
}

export default CreateGame;