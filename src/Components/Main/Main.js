import './Main.css';
import Cocktail from '../Cocktail/Cocktail';
import flameImage from '../../Assets/flame-cocktail.jpg';
import PropTypes from 'prop-types';

const Main = ({generateCocktail, cocktail, makeDrink, tip, sameDrink, resetGame}) => {
    Main.propTypes = {
        generateCocktail: PropTypes.func,
        cocktail: PropTypes.array,
        makeDrink: PropTypes.func,
        tip: PropTypes.string,
        sameDrink: PropTypes.bool,
        resetGame: PropTypes.func
    }
    
    return (
        <main className='main'>
            <div className='glow-box'>
                {sameDrink ?
                <h3 className='same-drink-error' style={{ color: 'red' }}>You've already made this drink!</h3> :
                <h3 className='bartend-tips' style={{ color: '#07F01E' }}>{tip}</h3>
                }
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
                <img className='flame-image' src={flameImage} alt='woman making a cocktail with blue flames'></img>
            </div>}
            <div className='button-container'>
                <button className='start-over-btn' onClick={resetGame}>Start Over</button>
                <a href='https://mycustombottleopener.com/10-essential-bar-tools-that-every-bartender-should-have/' target="_blank" rel="noreferrer">
                    <button className='rec-tools-btn'>Recommended Tools</button>
                </a>
                <button className='generate-cocktail' onClick={generateCocktail}>Generate a Cocktail</button>
            </div>
        </main>
    )
}

export default Main;