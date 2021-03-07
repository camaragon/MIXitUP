import react, {useState} from 'react';
import './Header.css';
import levelData from '../../data';

const Header = ({currentLevel, drinksMade}) => {
        return (   
            <header>
                <div className='user-profile'>
                    <img className='user-image' src='https://e7.pngegg.com/pngimages/448/589/png-clipart-bartender-pouring-alcoholic-beverage-in-martini-glass-cocktail-beer-bartender-illustration-cartoon-bartender-miscellaneous-cartoon-character.png'></img>
                    {drinksMade.length % 3 === 0 && drinksMade.length  ?
                     <h4>You Leveled Up!</h4> :
                    <div className='user-info'>
                        <p>Bartender Name</p>
                        <p>{currentLevel.levelName}</p>
                        <progress value={drinksMade.length % 3} max={currentLevel.drinkReqs[currentLevel.drinkReqs.length - 1]}/>
                    </div>
                    }
                </div>
                <h1>MIXitUP</h1>
                <h3 className='header-quote'>Level Up Your Bartending Skills!</h3>     
            </header>
        )
}

export default Header;