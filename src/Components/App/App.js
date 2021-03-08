import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Recipe from '../Recipe/Recipe';
import {getRandomCocktail} from '../../fetchRequests';
import {Route} from 'react-router-dom';
import {levelData, tipsData} from '../../data';
import ls from 'local-storage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: null,
      madeDrinks: [],
      tip: 'Click Generate a Cocktail to get started!',
      levelNum: 1,
      currentLevel: levelData[0],
      levelUp: false,
      sameDrink: false
    }
  }

  componentDidMount = () => {
    this.setState({
      madeDrinks: ls.get('madeDrinks') || [],
      levelNum: ls.get('levelNum') || 1,
      currentLevel: ls.get('currentLevel') || levelData[0],
      levelUp: ls.get('levelUp') || false
    })
  }

  componentDidUpdate = () => {
    if (this.state.madeDrinks.length === 15) {
      window.location.reload(false);
    }
    if (this.state.levelUp) {
      this.setState({
        currentLevel: levelData.find(level => level.id === this.state.levelNum),
        levelUp: false
      });
    }
    console.log(this.state.tip)
  }

  generateCocktail = () => {
    getRandomCocktail()
    .then(random => {
      this.setState({sameDrink: false, cocktail: random.drinks, tip: tipsData[Math.floor(Math.random() * tipsData.length)]})
    })
  }

  makeDrink = () => {
    if (this.state.madeDrinks.flat().length % 3 === 0 && this.state.madeDrinks.length) {
      this.setState({ levelUp: true, levelNum: this.state.levelNum + 1});
    }
    const madeIds = this.state.madeDrinks.map(each => each.map(drink => drink.idDrink));
    if (!madeIds.flat().includes(this.state.cocktail[0].idDrink)) {
      this.setState({ madeDrinks: [this.state.cocktail, ...this.state.madeDrinks]});
    } else {
      this.setState({ sameDrink: true });
    }
  }

  render = () => {
    return (
      <>
        <Header currentLevel={this.state.currentLevel} drinksMade={this.state.madeDrinks.flat()} levelNum={this.state.levelNum}/>
        <Route exact path='/' render={() => {
          return (
          <>
            <Sidebar drinks={this.state.madeDrinks} />
            <Main generateCocktail={this.generateCocktail} cocktail={this.state.cocktail} makeDrink={this.makeDrink} tip={this.state.tip} sameDrink={this.state.sameDrink}/>
          </>
          )
        }}/>
        <Route path='/:id' render={ ( {match} ) => {
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
            />)}}/>
      </> 
    )

  };
}

export default App;
