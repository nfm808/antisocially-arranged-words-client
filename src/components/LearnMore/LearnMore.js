import React from 'react';
import CahContext from '../../cahContext';
import { pickRandomCards } from '../../cahHelper';
import BlackCard from '../BlackCard/BlackCard';
import './LearnMore.css';


export default function LearnMore() {
  return (
    <section className="LearnMore">
      <h2 className="LearnMore--head">Play an online adaptation of Cards Against Humanity®️</h2>
      <CahContext.Consumer>
        { ({whiteCards, blackCards}) => 
          ( !whiteCards || !blackCards) ? null
          : <BlackCard card={pickRandomCards(blackCards, 1)} />

        }
      </CahContext.Consumer>
  </section>
)
}
