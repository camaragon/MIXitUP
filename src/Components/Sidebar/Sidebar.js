import './Sidebar.css'

const Sidebar = ({drinks}) => {
    console.log(drinks);
    const madeDrinkCards = drinks.map(drink => {
        console.log(drink)
        return ( 
            <div className='made-drink-card'>
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