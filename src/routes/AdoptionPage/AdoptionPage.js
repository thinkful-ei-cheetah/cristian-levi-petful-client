import React, {Component} from 'react';
import AppContext from '../../contexts/AppContext'
import PetCard from '../../components/PetCard/PetCard'
import Adopted from '../../components/Adopted/Adopted'
import Line from '../../components/Line/Line'
import CatsApiService from '../../services/cats-api-service'
import DogsApiService from '../../services/dogs-api-service'
import UsersApiService from '../../services/users-api-service'
import './AdoptionPage.css'

import Queue from '../../services/queue'

export default class AdoptionPage extends Component {
  static contextType = AppContext

  componentDidMount(){
    this.context.clearError();
    this.context.clearLineQueue();
    this.context.clearCurrentCat();
    this.context.clearCurrentDog();
    this.interval = setInterval( this.cycleList.bind(this), 15000)
    Promise.all([CatsApiService.getCat(), DogsApiService.getDog(), UsersApiService.getUsers()])
      .then((res) => {
        this.context.setCurrentCat(res[0])
        this.context.setCurrentDog(res[1])
        let userQueue = new Queue()
        res[2].forEach(user => userQueue.enqueue(user))
        this.context.setLineQueue(userQueue)
      })
      .catch(e => console.error(e));
  }

  cycleList = () => {
    if(this.context.userName !== this.context.lineQueue.first.value){
      let coin = Math.floor(Math.random() * 100)
      if(coin < 50){
        this.handleAdoptCat()
      }
      else {
        this.handleAdoptDog()
      }
    }
  }

  // componentDidUpdate(){
  //   setInterval(function(){
  //     if(this.state.nowAdopting !== this.context.userName){
  //       this.context.cycleList()
  //     };}, 5000);
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderLine = () => {
    return (
      <Line 
        first={this.context.lineQueue.first.value}
        second={this.context.lineQueue.first.next.value}
        third={this.context.lineQueue.first.next.next.value}
      />
    )
  }

  renderCat = () => {
    return (
      <PetCard 
        animal={this.context.currentCat}
        animalType={'cat'}
        handleAdoptClick={this.handleAdoptCat}
        />
    )
  }

  renderDog = () => {
    return (
      <PetCard
        animal={this.context.currentDog}
        animalType={'dog'}
        handleAdoptClick={this.handleAdoptDog}
      />
    )
  }

  handleAdoptCat = () => {
    return CatsApiService.deleteCat()
        .then(res => {
          let owner = this.context.lineQueue.requeue()
          res.owner = owner
          this.context.setAdopted(res)
        })
        .then(res => {
          CatsApiService.getCat().then(res => this.context.setCurrentCat(res))
          this.setState({nowAdopting: this.context.lineQueue.first.value})
        })
  }

  handleAdoptDog = () => {
    return DogsApiService.deleteDog()
        .then(res => {
          let owner = this.context.lineQueue.requeue()
          res.owner = owner
          this.context.setAdopted(res)
        })
        .then(res => {
          DogsApiService.getDog().then(res => this.context.setCurrentDog(res))
          this.setState({nowAdopting: this.context.lineQueue.first.value})
        })
  }

  render() {
    const adoptedPet = this.context.adopted.map((animal, index) => 
        <div className='Adopted' key={index}>
          <Adopted
            imgSrc={animal.imageURL}
            imgDes={animal.imageDescription}
            name={animal.name}
            owner={animal.owner}
          />
        </div>
      )

    return (
      <div>
        <h1>
          Choose your furry friend!
        </h1>
        {this.context.lineQueue ? this.renderLine() : 'Loading...'}
        <div className='Pets-available'>
          <h2>Available Pets</h2>
          <div className='cat'>
            <h3>Kitty</h3>
            {this.renderCat()}
          </div>
          <div className='dog'>
            <h3>Dogue</h3>
            {this.renderDog()}
          </div>
        </div>
        <div className='Pets-adopted'>
          <h3>Adopted</h3>
          {adoptedPet}
        </div>
      </div>
    )
  }
}