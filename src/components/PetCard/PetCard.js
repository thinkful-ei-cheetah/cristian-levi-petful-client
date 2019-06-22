import React, {Component} from 'react';
import AppContext from '../../contexts/AppContext'
import CatsApiService from '../../services/cats-api-service'
import DogsApiService from '../../services/dogs-api-service'
import './PetCard.css';

export default class PetCard extends Component {
  static contextType = AppContext
  handleAdoptClick(){
    if(this.props.animalType === 'cat'){
      CatsApiService.deleteCat()
        .then(res => {
          console.log(res)
          this.context.lineQueue.requeue()
        })
        .then(() => {
          this.context.setCurrentCat()
        })
        .then(res => {
          CatsApiService.getCat(res)
        })
    }
    else{
      DogsApiService.deleteDog()
    }
  }
  render() {
    console.log(this.props.animalType)
    let animal = this.props.animal
    let isFirstInLine = false
    if(this.context.lineQueue){
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
          onClick={() => this.handleAdoptClick()}
          disabled={!isFirstInLine}
        >
          Adopt
        </button>
      </div>
    )
  }
}