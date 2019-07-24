import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {

  return (
    <nav className="Nav">
      {props.links.map((item, i) => 
        <Link className="Nav--link" key={i} to={`/${item.to}`}>{item.name}</Link> 
      )}
    </nav>
  )
};
