import react from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='user-profile'>
                <img className='user-image' src='https://e7.pngegg.com/pngimages/448/589/png-clipart-bartender-pouring-alcoholic-beverage-in-martini-glass-cocktail-beer-bartender-illustration-cartoon-bartender-miscellaneous-cartoon-character.png'></img>
                <div className='user-info'>
                    <p>Bartender Name</p>
                    <p>Bartender Level</p>
                    <p>Experience Bar</p>
                </div>
            </div>
            <h1> MIXitUP</h1>
            <h3>Level Up Your Bartending Skills!</h3>
        </header>
    )
}

export default Header;