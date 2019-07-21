import React from 'react'

const cahContext = React.createContext({
  blackCards: [],
  whiteCards: [],
  usedCards: [],
  currentHand: [],
  answerChoices: [],
  winningAnswer: [],
  updateUsedCards: () => {},
  updateCurrentHand: () => {},
})

export default cahContext;