import {Link} from 'react-router-dom';
import './Recipe.css';
import PropTypes from 'prop-types';

const Recipe = ({name, image, category, glass, instructions, ingredients}) => {
    Recipe.propTypes = {
        name: PropTypes.string,
        image: PropTypes.string,
        category: PropTypes.string,
        glass: PropTypes.string,
        instructions: PropTypes.string,
        ingredients: PropTypes.array
    }

    const findIngredients = () => {
        const allIngredients = [];
        for (let i = 0; i < ingredients.length; i++) {
            if (!ingredients[i].includes('null')) {
                allIngredients.push(<li key={i}>{ingredients[i]}</li>);
            }
        }
        return allIngredients;
    }

    return (
        <div className='recipe'>
            <img className='recipe-image' src={image} alt={`${name} cocktail`}></img>
            <div className='recipe-info'>
                <h2 className='recipe-name'>{name}</h2>
                <p className='recipe-category'>{category}</p>
                <p className='recipe-glass'> Glass Type: {glass}</p>
                {Array.isArray(ingredients) ? 
                    <ul>{findIngredients()}</ul> :
                    <p className='recipe-ingredients'>Ingredients: {ingredients}</p>}
                    <p className='recipe-instructions'>{instructions}</p>
                    <Link to={'/'}>
                        <button>Go Back</button>
                    </Link>
            </div>
        </div>
    )
}

export default Recipe;