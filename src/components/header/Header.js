
import './header.scss';

import { Link } from 'react-router-dom/cjs/react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="header__main">
                <Link to='/' className="header__text">Rick and Morty Portal</Link>
            </div>
            <div className="header__pages">
                <Link to="/" className="header__text">Character</Link>
                <span className="header__span"> / </span>
                <Link to="/location" className="header__text">Location</Link>
                <span className="header__span"> / </span>
                <Link to="/" className="header__text">Episode</Link>
            </div>
        </div>
    )
}

export default Header;