import './promoHeader.scss';

const PromoHeader = () => {
    return (
        <div className="promo">
            <div className="promo__main">
                <a href="#" className="promo__text">Rick and Morty Portal</a>
            </div>
            <div className="promo__pages">
                <a href="#" className="promo__text">Character</a>
                <span className="promo__span"> / </span>
                <a href="#" className="promo__text">Location</a>
                <span className="promo__span"> / </span>
                <a href="#" className="promo__text">Episode</a>
            </div>
        </div>
    )
}

export default PromoHeader;