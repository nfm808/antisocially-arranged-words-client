import React from 'react'
import Hero from '../components/Hero/Hero';
import LearnMore from '../components/LearnMore/LearnMore';
import './LandingPage.css';

export default function LandingPage() {

  return (
    <section className='LandingPage'>
      {/* <Hero 
        heading='Antisocially Arranged Words'
        subHeading='Bringing the horrible coffee table game across the web.'
      />  */}
      <h1>Antisocially Arranged Words</h1>
      <h3>Dragging the horrible coffee table game across the web.</h3>
      <LearnMore />     
    </section>
  )
}
