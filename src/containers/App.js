import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './footer';
import Header from './header';
import Media from './media';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Media />
        <Footer />
      </div>
    );
  }// End render
}//End Component

export default App;
