import React from 'react'
import PropTypes from 'prop-types';
import './WhiteCard.css';

export default function WhiteCard(props) {
  return (
    <div className="WhiteCard">
      <h5 className="WhiteCard--text">{props.card.text}</h5>
    </div>
  )
}
