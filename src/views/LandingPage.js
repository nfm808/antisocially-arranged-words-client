import React from 'react'
import LearnMore from '../components/LearnMore/LearnMore';
import './LandingPage.css';
import Nav from '../components/Nav/Nav';

export default function LandingPage() {

  return (
    <main className='LandingPage'>
      <h1>Antisocially Arranged Words</h1>
      <h3>Dragging the horrible coffee table game across the web.</h3>
      <Nav 
        links={[
          {to: 'create-room', name: 'Create a Game'}, 
          {to: 'rules', name: 'Rules and Such'}
        ]}  
      />
      <LearnMore />     
    </main>
  )
}
