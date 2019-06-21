import React, {Component} from 'react';
import AppContext from '../../contexts/AppContext'
import PetCard from '../../components/PetCard/PetCard'
import Adopted from '../../components/Adopted/Adopted'
import Line from '../../components/Line/Line'

export default class AdoptionPage extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div>
        <h1>
          Choose your furry friend!
        </h1>
        <Line />
        <div className='Pets-available'>
          <h2>Available Pets</h2>
          <div className='cat'>
            <h3>Kitty</h3>
            <PetCard />
          </div>
          <div className='dog'>
            <h3>Dogue</h3>
            <PetCard />
          </div>
        </div>
        <div className='Pets-adopted'>
          <Adopted />
          <Adopted />
          <Adopted />
        </div>
      </div>
    )
  }
}