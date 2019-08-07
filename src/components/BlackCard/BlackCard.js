import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import './BlackCard.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function BlackCard(props) {
  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 7, tension: 200, friction: 80 } }))
  return (
        <animated.div 
          className="BlackCard"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: prop.xys.interpolate(trans) }}>
          <h5 className="BlackCard--text">{props.card.text}</h5>
          <p className="BlackCard--text">{props.card.playerName && props.card.playerName}</p>
        </animated.div>
  )
}

BlackCard.propTypes = {
  card: PropTypes.object,
}
