import React from 'react'
import PropTypes from 'prop-types';
import './WhiteCard.css';

export default function WhiteCard(props) {
  const {blank, card, handleCardSelect, partial} = props;
  if (blank) {
    return (
      <div className="WhiteCard">
      </div>
    )
  }
  if (partial) {
    return (
      <div className="WhiteCard">
        <h5 className="WhiteCard--text">{card.text}</h5>
        <button type='button' onClick={() => handleCardSelect(card)}>Submit</button>
      </div>
    )
  }
  return (
    <div className="WhiteCard">
      <h5 className="WhiteCard--text">{card.text}</h5>
      <p className="WhiteCard--text">{card.playerName}</p>
    </div>
  )
}
