import './randomCharacter.scss';
import '../../style/button.scss';

import rickAndMorty from '../../resources/pngwing.com.png';

import { useState, useEffect } from 'react';
import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';


const RandomCharacter = () => {

    const [char, setChar] = useState({});
    const { getCharacters, loading, error } = GetFromBD();

    useEffect(() => {
        updateChar();
    }, []);

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (826 - 1)) + 1;
        getCharacters(id)
            .then(onCharLoaded);
    }

    const View = ({ char }) => {
        const { name, origin, gender, species, status, image } = char;

        return (
            <div className='randomCharacter__info'>
                <div className='randomCharacter__img'>
                    <img className='randomCharacter__info-img' src={image} alt="morty" />
                </div>
                <div className="randomCharacter__descr">
                    <p className='randomCharacter__descr-text'>Name: {name === 'unknown' ? 'Unknown' : name}</p>
                    <p className='randomCharacter__descr-text'>Origin: {origin === 'unknown' ? 'Unknown' : origin}</p>
                    <p className='randomCharacter__descr-text'>Gender: {gender === 'unknown' ? 'Unknown' : gender}</p>
                    <p className='randomCharacter__descr-text'>Species: {species === 'unknown' ? 'Unknown' : species}</p>
                    <p className='randomCharacter__descr-text'>Status: {status === 'unknown' ? 'Unknown' : status}</p>
                </div>
            </div>
        )
    }

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;


    return (
        <div className='randomCharacter'>
            {spinner}
            {errorMesage}
            {content}
            <div className="randomCharacter__tryIt">
                <p className="randomCharacter__tryIt-text">Random character for today! <br /> Do you want to get to know him better?</p>
                <p className="randomCharacter__tryIt-text">Or choose another one</p>
                <button onClick={updateChar} className='button randomCharacter__button'>Try it</button>
                <div className='randomCharacter__img'>
                    <img className='randomCharacter__tryIt-img' src={rickAndMorty} alt="rickAndMorty" />
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter;