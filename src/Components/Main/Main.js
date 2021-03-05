import './Main.css';
import Cocktail from '../Cocktail/Cocktail';

const Main = () => {
    return (
        <main className='main'>
            <h3 className='bartend-tips'>Bartender Tip</h3>
            <Cocktail />
            <div className='button-container'>
                <button>Reccomended Tools</button>
                <button>Generate a Cocktail</button>
            </div>
        </main>
    )
}

export default Main;