import React, {Component} from 'react';
import './PetCard.css';

export default class PetCard extends Component {
  render() {
    return (
      <div className='PetCard'>
        <img src='https://cdn.theatlantic.com/assets/media/img/mt/2018/11/shutterstock_552503470/lead_720_405.jpg?mod=1541605820' alt='pet' />
        <h3>Name</h3>
        <p>Physical description of pet</p>
        <ul>
          <li>Sex</li>
          <li>Age</li>
          <li>Breed</li>
        </ul>
        <button type='button' onClick={this.handleAdoptClick}>
          Adopt
        </button>
      </div>
    )
  }
}