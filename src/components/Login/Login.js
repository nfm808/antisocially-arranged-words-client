import React, { Component } from 'react';
import './Login.css';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       registered: false,
       userValid: false,
       isSubmitting: false,
       status: false,
       username: '',
       password: '',
       errorMessages: ''
    }
  }
  handleSubmit = (e) => {
    const { username, password } = this.state
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }
    fetch(`${process.env.REACT_APP_API_BASE_URL}/user`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.message)
        }
      })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
  updateName = (e) =>  {
    const value = e.target.value
    this.setState({
      username: value
    })
  }
  updatePassword = (e) =>  {
    const value = e.target.value
    this.setState({
      password: value
    })
  }
  render() {
    const { errorMessages, userValid, isSubmitting, status } = this.state
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
                
                onChange={(e) => this.updateName(e)}
              />
            </section>
            <section className="form--group WhiteCard">
              <label htmlFor="Login--password">Password</label>
              <input 
                type="password" 
                name="Login--password" 
                id="Login--password"
                
                onChange={(e) => this.updatePassword(e)}
              />
            </section>
          </form>
          <button type="submit" onClick={() => this.handleSubmit()} disabled={isSubmitting} >Log In</button>
          <p>Or Register <button type="button" onClick={() => this.props.history.push('/')} >Here</button></p>
          {status && 
            <div className="">{status}</div>
          }
      </main>
    )
  }
}

export default Login;
