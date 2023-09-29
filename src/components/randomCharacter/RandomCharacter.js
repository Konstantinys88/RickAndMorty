import './randomCharacter.scss';
import '../../style/button.scss';

import morty from '../../resources/morty.jpeg';
import rickAndMorty from '../../resources/pngwing.com.png';






const RandomCharacter = () => {
    return (
        <div className='randomCharacter'>
            <div className='randomCharacter__info'>
                <div className='randomCharacter__img'>
                    <img className='randomCharacter__info-img' src={morty} alt="morty" />
                </div>
                <div className="randomCharacter__descr">
                    <p className='randomCharacter__descr-text'>Name: Morty Smith</p>
                    <p className='randomCharacter__descr-text'>Origin: Unknown</p>
                    <p className='randomCharacter__descr-text'>Gender: Male</p>
                    <p className='randomCharacter__descr-text'>Species: Human</p>
                    <p className='randomCharacter__descr-text'>status: Alive</p>
                </div>
            </div>
            <div className="randomCharacter__tryIt">
                <p className="randomCharacter__tryIt-text">Random character for today! <br /> Do you want to get to know him better?</p>
                <p className="randomCharacter__tryIt-text">Or choose another one</p>
                <button className='button randomCharacter__button'>Try it</button>
                <div className='randomCharacter__img'>
                    <img className='randomCharacter__tryIt-img' src={rickAndMorty} alt="rickAndMorty" />
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter;