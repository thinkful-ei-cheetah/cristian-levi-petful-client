import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppContextProvider} from './contexts/AppContext'
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>
, document.getElementById('root'));
