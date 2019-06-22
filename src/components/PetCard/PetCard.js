import React, {Component} from 'react';
import AppContext from '../../contexts/AppContext'
import './PetCard.css';

export default class PetCard extends Component {
  static contextType = AppContext
  render() {

    const {animal, handleAdoptClick} = this.props
    let isFirstInLine = false
    if(this.context.lineQueue) {
      isFirstInLine = (this.context.userName === this.context.lineQueue.first.value)
    }
    return (
      <div className='PetCard'>
        <img src={animal.imageURL} alt={animal.imageDescription} />
        <h3>Name: {animal.name}</h3>
        <p>{animal.story}</p>
        <ul>
          <li>Sex: {animal.sex}</li>
          <li>Age: {animal.age}</li>
          <li>Breed: {animal.breed}</li>
        </ul>
        <button 
          type='button' 
          onClick={handleAdoptClick}
          disabled={!isFirstInLine}
        >
          Adopt
        </button>
      </div>
    )
  }
}