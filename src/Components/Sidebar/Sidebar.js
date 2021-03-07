import './Sidebar.css'

const Sidebar = ({drinks}) => {
    const madeDrinkCards = drinks.map(drink => {
        return ( 
            <div className='made-drink-card' key={drink[0].idDrink}>
                <h3>{drink[0].strDrink}</h3>
                <img className='made-image' src={drink[0].strDrinkThumb}></img>
            </div>
        )})

        return (
            <section>
                <h3 className='made-title'>Made Drinks</h3>
                {madeDrinkCards}
            </section>
        )
    
}

export default Sidebar;