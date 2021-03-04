import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render = () => {
    return (
      <>
        <Header />
        <Sidebar />
      </>
    )

  };
}

export default App;
