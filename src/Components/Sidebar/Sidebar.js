import './Sidebar.css';
import emptyImage from '../../Assets/empty.jpg';

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
                    <div className='glow-box' style={{ marginTop: '3%'}}>
                        <h3 className='made-title'>Made Drinks</h3>
                    </div>
                    {madeDrinkCards}
                </section>
            )
    } else {
        return (
            <section>
                <div className='glow-box' style={{ marginTop: '3%'}}>
                    <h3 className='made-title'>Made Drinks</h3>
                </div>
                    
                <div className='no-drinks-card'>
                    <p className='no-made-text'>You haven't made any drinks yet... mix it up!</p>
                    {/* <img className='no-made-image' src={emptyImage}></img> */}
                </div>
            </section>
        )
    }
    
}

export default Sidebar;