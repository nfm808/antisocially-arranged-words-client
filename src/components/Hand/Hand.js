import React from 'react'
import WhiteCard from '../WhiteCard/WhiteCard';
import './Hand.css';

export default function Hand(props) {
  return (
    <div className='Hand'>
      {props.hand.map(card => 
        <WhiteCard key={card.id} card={card} />  
      )}
    </div>
  )
}
