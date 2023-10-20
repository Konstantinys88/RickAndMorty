import './charInfo.scss';

import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';


const CharInfo = (props) => {

    const [char, setChar] = useState({});


    const { getCharacters, loading, error } = GetFromBD();
    const { charId } = props;

    useEffect(() => {
        updateChar();
    }, [charId]);

    const onCharLoaded = (char) => {
        setChar(char);
    }


    const updateChar = () => {
        if (!charId) {
            return;
        }
        getCharacters(charId)
            .then(onCharLoaded);
    }


    const View = ({ char }) => {
        const { image, name, episode } = char;
        return (
            <>
                <div className='charInfo__img'>
                    <img src={image} alt={name} />
                </div>
                <div className="charInfo__name">
                    <p>{name}</p>
                </div>
                <div className="charInfo__episode">
                    <ul>
                        {
                            episode?.map((item, index) => {
                                if (index > 8) return;
                                return (
                                    <li key={index}>Episode: {item}</li>
                                )
                            })
                        }
                    </ul>
                    Total episodes with this character {episode?.length}.
                </div>
            </>
        )
    }

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="charInfo">
            {errorMesage}
            {spinner}
            {content}
        </div>
    )
}


export default CharInfo