import './Cocktail.css';
import {Link} from 'react-router-dom'

const Cocktail = ({cocktail, name, category, image, id, makeDrink}) => {
    return (
        <div className='cocktail-card'>
            <img className='cocktail-image' src={image}></img>
            <div className='horizontal'>
                <button onClick={makeDrink}>Make Drink</button>
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