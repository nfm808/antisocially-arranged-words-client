import React from 'react';
import './Error404.css';

export default function Error404(props) {
  return (
    <section className='Error404'>
      <button className="Error404--WhiteCard" type='button' onClick={() => props.history.goBack()}>
        Wait a Sec, you don't belong here! Go Back From Whence You Came! Click Me
      </button>
    </section>
  )
}
