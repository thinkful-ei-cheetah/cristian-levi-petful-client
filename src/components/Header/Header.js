import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            Petful
          </Link>
        </h1>
        <div className='Header-adopt'>
          <Link to='/adopt'>
            Adopt
          </Link>
        </div>
      </nav>
    </>
  }
}