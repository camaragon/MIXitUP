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
        <Route path='/:id' render= { ( {match} ) => {
        <Recipe 
        name={this.state.cocktail[0].strDrink}
        category={this.state.cocktail[0].strCategory}
        glass={this.state.cocktail[0].strGlass}
        image={this.state.cocktail[0].strDrinkThumb}
        instructions={this.state.cocktail[0].strInstructions}
        ingredients={this.state.cocktail[0].strIngredient1 ? [`${this.state.cocktail[0].strIngredient1} - ${this.state.cocktail[0].strMeasure1}`, `${this.state.cocktail[0].strIngredient2} - ${this.state.cocktail[0].strMeasure2}`, `${this.state.cocktail[0].strIngredient3} - ${this.state.cocktail[0].strMeasure3}`, `${this.state.cocktail[0].strIngredient4} - ${this.state.cocktail[0].strMeasure4}`, `${this.state.cocktail[0].strIngredient5} - ${this.state.cocktail[0].strMeasure5}`, `${this.state.cocktail[0].strIngredient6} - ${this.state.cocktail[0].strMeasure6}`] : this.state.cocktail[0].strIngredients}
        />}} 
        />
      </> 
    )

  };
}

export default App;
