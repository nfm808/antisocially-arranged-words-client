import React from 'react';
import CardDemo from '../../components/CardDemo/CardDemo';
import './LandingPage.css';
import Nav from '../../components/Nav/Nav';
import Login from '../../components/Login/Login';

export default function LandingPage(props) {
  return (
    <main className='LandingPage'>
      <h1>Antisocially Arranged Words</h1>
      <h3>Dragging the horrible coffee table game across the web.</h3>
      <Nav 
        links={[ 
          {to: 'rules', name: 'Rules and Such'}
        ]}  
      />
      <Login 
        history={props.history}
        location={props.location}
      />
      <CardDemo />     
    </main>
  )
}
