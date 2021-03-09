import './Header.css';
import userImage from '../../Assets/user-profile.png';
import PropTypes from 'prop-types';

const Header = ({currentLevel, drinksMade, levelNum}) => {
    Header.propTypes = {
        currentLevel: PropTypes.object,
        drinksMade: PropTypes.array,
        levelNum: PropTypes.number
    }

    return (   
        <header>
            <div className='user-profile'>
                <img className='user-image' src={userImage} alt='user profile logo'></img>
                {drinksMade.length % 3 === 0 && drinksMade.length  ?
                    <h4 style={{color: '#0CF1FA', fontSize: '2rem'}}>You Leveled Up!</h4> :
                <div className='user-info'>
                    <p>Leta Keane</p>
                    <p>Level {levelNum} - {currentLevel.levelName}</p>
                    <progress value={drinksMade.length % 3} max={currentLevel.drinkReqs[currentLevel.drinkReqs.length - 1]}/> 
                </div> 
                }
            </div>
            <h1>MIX it UP</h1>
            <h2 className='header-quote'>
                Level Up Your Bartending Skills! 
            <br></br>
                For every 3 drinks made you level up!
            <br></br>
                Only select Make Drink if you really made the drink!
            </h2>     
        </header>
    )
}

export default Header;