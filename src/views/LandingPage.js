import React from 'react'
import Hero from '../components/Hero/Hero';
import { Link } from 'react-router-dom';
import LearnMore from '../components/LearnMore/LearnMore';
import './LandingPage.css';
import Nav from '../components/Nav/Nav';

export default function LandingPage() {

  return (
    <section className='LandingPage'>
      {/* <Hero 
        heading='Antisocially Arranged Words'
        subHeading='Bringing the horrible coffee table game across the web.'
      />  */}
      <h1>Antisocially Arranged Words</h1>
      <h3>Dragging the horrible coffee table game across the web.</h3>
      <Nav 
        links={[
          {to: 'create-room', name: 'Create a Game'}, 
          {to: 'rules', name: 'Rules and Such'}
        ]}  
      />
      <LearnMore />     
    </section>
  )
}
