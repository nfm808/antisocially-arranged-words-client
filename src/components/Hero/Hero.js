import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

export default function Hero(props) {
  return (
    <section className='Hero'>
      <div className='Hero--text'>
        <h1>{props.heading}</h1>
        <h3>{props.subHeading}</h3>
      </div>
    </section>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
}
