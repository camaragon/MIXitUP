import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import {getRandomCocktail} from '../../fetchRequests';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
    console.log(getCrops())
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
