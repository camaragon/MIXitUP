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
      cocktail: null,
      madeDrinks: []
    }
  }

  generateCocktail = () => {
    getRandomCocktail()
    .then(random => {
      this.setState({cocktail: random.drinks})
    })
    console.log(this.state.cocktail)
  }

  makeDrink = () => {
    const madeIds = this.state.madeDrinks.map(each => each.map(drink => drink.idDrink));
    console.log(madeIds)
    if (!madeIds.flat().includes(this.state.cocktail[0].idDrink)) {
      this.setState({ madeDrinks: [this.state.cocktail, ...this.state.madeDrinks] });
    } else {
      alert('Already made that drink!')
    }
    console.log(this.state.madeDrinks)
  }

  render = () => {
    return (
      <>
        <Header />
        <Route exact path='/' render={() => {
          return (
          <>
            <Sidebar drinks={this.state.madeDrinks} />
            <Main generateCocktail={this.generateCocktail} cocktail={this.state.cocktail} makeDrink={this.makeDrink}/>
          </>
          )
        }}/>
        <Route path='/:id' render= { ( {match} ) => {
          return (
          this.state.cocktail &&
            <Recipe
              name={this.state.cocktail[0].strDrink}
              category={this.state.cocktail[0].strCategory}
              glass={this.state.cocktail[0].strGlass}
              image={this.state.cocktail[0].strDrinkThumb}
              instructions={this.state.cocktail[0].strInstructions}
              ingredients={this.state.cocktail[0].strIngredient1 ? 
                [`${this.state.cocktail[0].strIngredient1} - ${this.state.cocktail[0].strMeasure1}`, `${this.state.cocktail[0].strIngredient2} - ${this.state.cocktail[0].strMeasure2}`, `${this.state.cocktail[0].strIngredient3} - ${this.state.cocktail[0].strMeasure3}`, `${this.state.cocktail[0].strIngredient4} - ${this.state.cocktail[0].strMeasure4}`, `${this.state.cocktail[0].strIngredient5} - ${this.state.cocktail[0].strMeasure5}`, `${this.state.cocktail[0].strIngredient6} - ${this.state.cocktail[0].strMeasure6}`, `${this.state.cocktail[0].strIngredient7} - ${this.state.cocktail[0].strMeasure7}`] 
                : this.state.cocktail[0].strIngredients}
            />)}}
        />
      </> 
    )

  };
}

export default App;
