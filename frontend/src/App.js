import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ViewArticles from './components/ViewArticles.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ViewArticles} />
        </div>
      </Router>
    );
  }
}

export default App;