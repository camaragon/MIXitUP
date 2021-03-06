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
      cocktail: null
    }
    
  }


  generateCocktail = () => {
    getRandomCocktail()
    .then(random => {
      this.setState({cocktail: random.drinks})
    })
    console.log(this.state.cocktail)
  }

  render = () => {
    return (
      <>
        <Header />
        <Sidebar />
        <Main generateCocktail={this.generateCocktail} cocktail={this.state.cocktail}/>
      </>
    )

  };
}

export default App;
