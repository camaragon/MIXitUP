import './Cocktail.css';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Cocktail = ({name, category, image, id, makeDrink}) => {
    Cocktail.propTypes = {
        name: PropTypes.string,
        category: PropTypes.string,
        image: PropTypes.string,
        id: PropTypes.string,
        makeDrink: PropTypes.func
    }
    
    return (
        <div className='cocktail-card'>
            <img className='cocktail-image' src={image} alt={`image of a ${name} cocktail`}></img>
            <div className='horizontal'>
                <button className='make-drink-btn' onClick={makeDrink}>Make Drink</button>
                <div className='stacked'>
                    <h3>{name}</h3>
                    <p className='random-category'>{category}</p>
                </div>
                <Link to={`/${id}`} >
                    <button className='drink-recipe-btn'>Drink Recipe</button>
                </Link>
            </div>
        </div> 
    )
}

export default Cocktail;