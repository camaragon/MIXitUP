import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Recipe from '../Recipe/Recipe';
import {getRandomCocktail} from '../../fetchRequests';
import {Route} from 'react-router-dom';;

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
        <Route exact path='/' render={() => {
          return (
          <>
            <Sidebar />
            <Main generateCocktail={this.generateCocktail} cocktail={this.state.cocktail}/>
          </>
          )
        }}/>
        <Route path='/:id' render= { ( {match} ) => <Recipe />} />
      </> 
    )

  };
}

export default App;
