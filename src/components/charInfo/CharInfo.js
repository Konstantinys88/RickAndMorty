import './charInfo.scss';

import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';


const CharInfo = (props) => {

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { getCharacters } = GetFromBD();

    useEffect(() => {
        onCharLoading();
        updateChar();
    }, [props.charId]);

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const updateChar = () => {
        const { charId } = props;
        if (!charId) {
            return;
        }
        getCharacters(charId)
            .then(onCharLoaded)
            .catch(onError);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
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
                                if (index > 5) return;
                                return (
                                    <li key={index}>Episode: {item}</li>
                                )
                            })
                        }
                    </ul>
                    Total episodes with this character {episode?.length}.
                </div>
                <div className="charInfo__button">
                    <a href='/' className='button'>Character page</a>
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