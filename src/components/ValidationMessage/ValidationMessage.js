import React from 'react'

export default function ValidationMessage(props) {
  return (
    <p style={!props.hasError ? {color: 'green'}: {color: 'red'} } className="ValidationMessage">
     {props.message} 
    </p>
  )
}
