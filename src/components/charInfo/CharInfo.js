import './charInfo.scss';

import morty from '../../resources/morty.jpeg'

import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';

// import Skeleton from '../skeleton/Skeleton';

const CharInfo = () => {

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { getCharacters } = GetFromBD();

    useEffect(() => {
        updateChar();
    }, []);

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }

    const updateChar = () => {
        // const id = Math.floor(Math.random() * (826 - 1)) + 1;
        getCharacters(4)
            .then(onCharLoaded)
            .catch(onError);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const { name, image, episode } = char;

    console.log(episode)

    function renderItems(arr) {
        const item = arr?.map((item, index) => {
            if (index > 5) return;
            return (
                <li>Episode: {item}</li>
            )
        });
        return (
            <ul>
                {item}
                ...
            </ul>
        )
    }

    const items = renderItems(episode);

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !char) ? items : null;

    return (
        <div className="charInfo">
            <div className='charInfo__img'>
                <img src={image} alt={name} />
            </div>
            <div className="charInfo__name">
                <p>{name}</p>
            </div>
            <div className="charInfo__episode">
                {spinner}
                {errorMesage}
                {content}
            </div>
            <div className="charInfo__button">
                <a href='/' className='button'>Character page</a>
            </div>
        </div>
    )
}

export default CharInfo