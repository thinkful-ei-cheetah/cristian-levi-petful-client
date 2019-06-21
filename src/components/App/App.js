import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import AdoptionPage from '../../routes/AdoptionPage/AdoptionPage'
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <header role='banner' className='App-header'>
          <Header />
        </header>
        <main role='main' className='App-main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />

            <Route 
              path={'/adopt'}
              component={AdoptionPage}
            />

          </Switch>
        </main>
      </div>
    );
  }
}
