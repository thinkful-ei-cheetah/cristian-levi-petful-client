import React, {Component} from 'react';
import Screenshot from '../../media/screenshot.jpg'
import './LandingPage.css'

export default class LandingPage extends Component {
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
          <label for='name'>Tell us your name: </label>
          <input type='text' name='name' id='name'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}