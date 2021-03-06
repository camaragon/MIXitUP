import './Recipe.css';

const Recipe = ({name, image, category, glass, instructions, ingredients}) => {
    return (
        <div className='recipe'>
            <img className='recipe-image' src={image}></img>
            <div className='recipe-info'>
                <h2>{name}</h2>
                <p>{category}</p>
                <p> Glass Type: {glass}</p>
                {Array.isArray(ingredients) ? 
                    <ul>Ingredients: {ingredients.map((ingredient, index) => {
                        if (!ingredient.includes('null')) {
                            return <li key={index}>{ingredient}</li>
                        }
                    })}
                    </ul> : 
                    <p>Ingredients: {ingredients}</p>}
                    <p>{instructions}</p>
                    <button>Go Back</button>
            </div>
        </div>
    )
}

export default Recipe;