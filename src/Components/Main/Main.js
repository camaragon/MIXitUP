import './Main.css';
import Cocktail from '../Cocktail/Cocktail';

const Main = ({generateCocktail, cocktail}) => {
    return (
        <main className='main'>
            <div className='tip-container'>
                <h3 className='bartend-tips'>* Bartender Tip *</h3>
            </div>
            {cocktail ?
            <Cocktail 
                name={cocktail[0].strDrink}
                category={cocktail[0].strCategory}
                image={cocktail[0].strDrinkThumb}
                id={cocktail[0].idDrink}
                cocktail={cocktail}
            /> :
            <div className='no-card'>
                <p>Empty</p>
            </div> }
            <div className='button-container'>
                <button>Reccomended Tools</button>
                <button onClick={generateCocktail}>Generate a Cocktail</button>
            </div>
        </main>
    )
}

export default Main;