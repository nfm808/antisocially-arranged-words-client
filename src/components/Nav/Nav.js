import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {

  return (
    <nav>
      {props.links.map((item, i) => 
        <Link key={i} to={`/${item.to}`}>{item.name}</Link> 
      )}
    </nav>
  )
};
