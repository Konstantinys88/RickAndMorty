
import './header.scss';

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';




const Header = (props) => {


    // const [inputValue, setInputValue] = useState();
    // console.log(inputValue);

    return (
        <div className="header">
            <div className="header__menu">
                <div className="header__main">
                    <Link to='/' className="header__text">Rick and Morty Portal</Link>
                </div>
                <div className="header__pages">
                    <NavLink exact activeStyle={{ 'color': '#c8f227' }} to="/" className="header__text">Character</NavLink>
                    <span className="header__span"> / </span>
                    <NavLink exact activeStyle={{ 'color': '#c8f227' }} to="/location" className="header__text">Location</NavLink>
                    <span className="header__span"> / </span>
                    <NavLink exact activeStyle={{ 'color': '#c8f227' }} to="/episode" className="header__text">Episode</NavLink>
                </div>
            </div>
            <div className="header__search">
                <form className='header__form'>
                    <input className='header__searchInput'
                     type="text" 
                     placeholder="Search character" 
                     onChange={(e) => { props.onCharNameSelected(e.target.value); }}/>
                    <button className='header__searchBtn button' type="submit">Search</button>
                </form>
            </div>


        </div>
    )
}

export default Header;