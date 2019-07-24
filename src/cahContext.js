import React from 'react'

const CahContext = React.createContext({
  blackCards: [],
  whiteCards: [],
  usedCards: {
    blackCards: [],
    whiteCards: []
  },
  currentBlackCard: {},
  currentHand: [],
  answerChoices: [],
  winningAnswer: [],
  updateUsedCards: () => {},
  updateCurrentHand: () => {},
})

export default CahContext;