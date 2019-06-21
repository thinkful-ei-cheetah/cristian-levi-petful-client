import React, {Component} from 'react';
import AppContext from '../../contexts/AppContext'
import Screenshot from '../../media/screenshot.jpg'
import UsersApiService from '../../services/users-api-service'
import './LandingPage.css'

export default class LandingPage extends Component {
  static contextType = AppContext
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.clearError();
    this.context.clearUserName();
    let name = document.getElementById('name').value;
    this.context.setUserName(name)

    UsersApiService.postUser({name: name})
      .then(res => {

        const {location, history} = this.props
        const destination = (location.state || {}).from || '/adopt'
        history.push(destination)
      })
  }
  render() {
    return (
      <div className='LandingPage'>
        <h1>
          Welcome to Petful!
        </h1>
        <div className='about'>
          <p>We believe all pets should be loved and treasured equally. Cat person or dog person we don't care, our only rule is that you wait your turn and adopt the next available pet of your preference.</p>
          <img className="screenshot" src={Screenshot} alt='example'/>
        </div>

        <form className='get-started' onSubmit={this.handleSubmit}>
          <h3>Adopt a Pet Today!</h3>
          <label htmlFor='name'>Tell us your name: </label>
          <input type='text' name='name' id='name' required/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}