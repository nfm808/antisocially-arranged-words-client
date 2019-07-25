import React from 'react';
import CahContext from '../../cahContext';
import { pickRandomCards } from '../../cahHelper';
import BlackCard from '../BlackCard/BlackCard';
import Hand from '../Hand/Hand';
import './CardDemo.css';


export default function CardDemo() {
  return (
    <section className="CardDemo">
      <CahContext.Consumer>
        { ({whiteCards, blackCards}) => 
            ( !whiteCards || !blackCards) ? null
            : <>
                  <BlackCard card={pickRandomCards(blackCards, 1)} />
                  <Hand hand={pickRandomCards(whiteCards, 5)}/>
              </>
          }
      </CahContext.Consumer>
  </section>
)
}
