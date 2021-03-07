import './Sidebar.css'

const Sidebar = ({drinks}) => {
    if (drinks.length) {
        const madeDrinkCards = drinks.map(drink => {
            return ( 
                <div className='made-drink-card' key={drink[0].idDrink}>
                    <h3>{drink[0].strDrink}</h3>
                    <img className='made-image' src={drink[0].strDrinkThumb}></img>
                </div>
            )})
    
            return (
                <section>
                    <div className='glow-box'>
                        <h3 className='made-title'>Made Drinks</h3>
                    </div>
                    {madeDrinkCards}
                </section>
            )
    } else {
        return (
            <section>
                <div className='glow-box'>
                    <h3 className='made-title'>Made Drinks</h3>
                </div>
                <div className='no-drinks-card'>
                    {/* <h4>No drinks made yet!</h4> */}
                    <img className='no-made-image' src='https://wallpaperaccess.com/full/1503601.jpg'></img>
                </div>
            </section>
        )
    }
    
}

export default Sidebar;