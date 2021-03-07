import './Header.css';
import userImage from '../../Assets/user-profile.png';

const Header = ({currentLevel, drinksMade}) => {
        return (   
            <header>
                <div className='user-profile'>
                    <img className='user-image' src={userImage}></img>
                    {drinksMade.length % 3 === 0 && drinksMade.length  ?
                     <h4 style={{color: '#0CF1FA', fontSize: '2rem'}}>You Leveled Up!</h4> :
                    <div className='user-info'>
                        <p>Bartender Name</p>
                        <p>{currentLevel.levelName}</p>
                        <progress value={drinksMade.length % 3} max={currentLevel.drinkReqs[currentLevel.drinkReqs.length - 1]}/>
                    </div>
                    }
                </div>
                <h1>MIX it UP</h1>
                <h4 className='header-quote'>
                    Level Up Your Bartending Skills! 
                <br></br>
                    For every 3 drinks made you level up!
                <br></br>
                    Only select Make Drink if you really made the drink!
                </h4>     
            </header>
        )
}

export default Header;