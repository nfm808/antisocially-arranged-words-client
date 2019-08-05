import React, { Component } from 'react';
import './Login.css';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       registered: false,
       userValid: false,
       errorMessages: ''
    }
  }
  
  render() {
    const { errorMessages, userValid} = this.state
    return (
      <main className="Login">
        <ValidationMessage 
          hasError={!userValid}
          message={errorMessages.password}
        />
        <form className="Login--form">
          <section className="form--group WhiteCard">
              <label htmlFor="Login--name">User Name</label>
              <input 
                type="text"
                name="Login--name" 
                id="Login--name"
              />
            </section>
            <section className="form--group WhiteCard">
              <label htmlFor="Login--password">Password</label>
              <input 
                type="password" 
                name="Login--password" 
                id="Login--password"
              />
            </section>
          </form>
          <button type="submit" onClick={() => this.handleSubmit()} >Log In</button>
          <p>Or Register <button type="button" onClick={() => this.props.history.push} >Here</button></p>
      </main>
    )
  }
}

export default Login;
