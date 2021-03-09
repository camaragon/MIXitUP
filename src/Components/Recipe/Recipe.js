import {Link} from 'react-router-dom';
import './Recipe.css';
import PropTypes from 'prop-types';
import react, {useState} from 'react';

const Recipe = ({name, image, category, glass, instructions, ingredients}) => {
    Recipe.propTypes = {
        name: PropTypes.string,
        image: PropTypes.string,
        category: PropTypes.string,
        glass: PropTypes.string,
        instructions: PropTypes.string,
        ingredients: PropTypes.array
    }

    return (
        <div className='recipe'>
            <img className='recipe-image' src={image} alt={`${name} cocktail`}></img>
            <div className='recipe-info'>
                <h2 className='recipe-name'>{name}</h2>
                <p className='recipe-category'>{category}</p>
                <p className='recipe-glass'> Glass Type: {glass}</p>
                {Array.isArray(ingredients) ? 
                    <ul className='recipe-ingredients'>Ingredients: {ingredients.map((ingredient, index) => {
                        if (!ingredient.includes('null')) {
                            return <li key={index}>{ingredient}</li>
                        }
                    })}
                    </ul> : 
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