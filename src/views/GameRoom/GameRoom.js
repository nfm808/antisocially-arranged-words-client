import React, { Component } from 'react';
import './GameRoom.css';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

class GameRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isAuth: true,
    }
  }
  
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       auth: false,
  //     })
  //   }, 1000);
  // }

  updateAuth() {
    this.setState({
      auth: !this.state.auth,
    })
  }
  renderLoginOrRegister() {
    if (!this.state.isAuth) {
      return (
        <Register auth={this.updateAuth}/>
      )
    } 
    return <Login />
  }

  render() {
    return (
      <main className="GameRoom">
        {this.renderLoginOrRegister()}
      </main>
    )
  }
}

export default GameRoom
