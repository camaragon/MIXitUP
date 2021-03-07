import './Main.css';
import Cocktail from '../Cocktail/Cocktail';
import flameImage from '../../Assets/flame-cocktail.jpg';
import {Link} from 'react-router-dom';

const Main = ({generateCocktail, cocktail, makeDrink, tip}) => {
    return (
        <main className='main'>
            <div className='tip-container'>
                <h3 className='bartend-tips'>{tip}</h3>
            </div>
            {cocktail ?
            <Cocktail 
                name={cocktail[0].strDrink}
                category={cocktail[0].strCategory}
                image={cocktail[0].strDrinkThumb}
                id={cocktail[0].idDrink}
                cocktail={cocktail}
                makeDrink={makeDrink}
            /> :
            <div className='no-card'>
                <img className='flame-image' src={flameImage}></img>
            </div> }
            <div className='button-container'>
                <Link to={'/recommended-tools'}>
                    <button>Recomended Tools</button>
                </Link>
                    <button onClick={generateCocktail}>Generate a Cocktail</button>
            </div>
        </main>
    )
}

export default Main;