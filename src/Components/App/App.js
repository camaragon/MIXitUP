import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

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
        <Main />
      </>
    )

  };
}

export default App;
