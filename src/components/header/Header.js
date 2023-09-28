
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__main">
                <a href="/" className="header__text">Rick and Morty Portal</a>
            </div>
            <div className="header__pages">
                <a href="/" className="header__text">Character</a>
                <span className="header__span"> / </span>
                <a href="/" className="header__text">Location</a>
                <span className="header__span"> / </span>
                <a href="/" className="header__text">Episode</a>
            </div>
        </div>
    )
}

export default Header;