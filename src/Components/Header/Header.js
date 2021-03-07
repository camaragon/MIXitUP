import react, {useState} from 'react';
import './Header.css';
import levelData from '../../data';
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
                <h3 className='header-quote'>Level Up Your Bartending Skills!</h3>     
            </header>
        )
}

export default Header;