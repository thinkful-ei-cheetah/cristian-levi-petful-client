import React, {Component} from 'react';
import AppContext from '../../contexts/AppContext'
import PetCard from '../../components/PetCard/PetCard'
import Adopted from '../../components/Adopted/Adopted'
import Line from '../../components/Line/Line'
import CatsApiService from '../../services/cats-api-service'
import DogsApiService from '../../services/dogs-api-service'
import UsersApiService from '../../services/users-api-service'
const Queue = require('../../services/queue')
// import Queue from '../../services/queue'

export default class AdoptionPage extends Component {
  static contextType = AppContext
  componentDidMount(){
    this.context.clearError();
    this.context.clearLineQueue();
    this.context.clearCurrentCat();
    this.context.clearCurrentDog();
    Promise.all([CatsApiService.getCat(), DogsApiService.getDog(), UsersApiService.getUsers()])
      .then((res) => {
        this.context.setCurrentCat(res[0])
        this.context.setCurrentDog(res[1])
        let userQueue = new Queue()
        res[2].forEach(user => userQueue.enqueue(user))
        this.context.setLineQueue(userQueue)
      })
      .catch(e => console.error(e))
  }
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