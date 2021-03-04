import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render = () => {
    return (
      <Header />
      <Sidebar />
    )

  };
}

export default App;
