import React from 'react';
import './Error404.css';

export default function Error404(props) {
  return (
    <section className='Error404'>
      <button className="Error404--WhiteCard" type='button' onClick={() => props.history.goBack()}>
        Go Back From Whence You Came!
      </button>
    </section>
  )
}
