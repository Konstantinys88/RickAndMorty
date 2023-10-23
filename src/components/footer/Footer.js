import './footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <ul className='footer__list'>
                <li className='footer__item'><a href="https://rickandmortyapi.com/" target="_blank">API</a></li>
                <li className='footer__item'><a href="https://github.com/Konstantinys88/RickAndMorty/tree/dev" target="_blank">GIT</a></li>
                {/* <li className='footer__item'>MAIL</li> */}
            </ul>
        </div>
    )
}

export default Footer;