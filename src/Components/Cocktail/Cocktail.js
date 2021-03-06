import './Cocktail.css';

const Cocktail = ({cocktail}) => {
    console.log(cocktail);
    return (
       (cocktail) ?
        <div className='cocktail-card'>
            <img className='cocktail-image' src={cocktail[0].strDrinkThumb}></img>
            <div className='horizontal'>
                <button>Make Drink</button>
                <div className='stacked'>
                    <h3>{cocktail[0].strDrink}</h3>
                    <p>{cocktail[0].strCategory}</p>
                </div>
                <button>Drink Recipe</button>
            </div>
        </div> : 
        <div className='no-card'>
            <p>Empty</p>
        </div> 
    )
}

export default Cocktail;