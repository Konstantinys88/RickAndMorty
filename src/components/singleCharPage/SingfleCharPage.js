import './singleCharPage.scss';

// import morty from '../../resources/morty.jpeg';
import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';


const SingleCharPage = (props) => {

    const { getCharacters } = GetFromBD();
    const { charId } = props;

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        onLoading(true);
        updateChar();

    }, [charId]);


    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }

    const updateChar = () => {
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

    const onLoading = () => {
        setLoading(true);
    }

    const View = ({ char }) => {
        const { name, origin, gender, species, status, image, episode } = char;


        return (
            <>
                <div className="singleCharPage__characterDescription">
                    <div className="singleCharPage__imgChar">
                        <img src={image} alt={name} />
                    </div>
                    <div className="singleCharPage__descr">
                        <p className='singleCharPage__descr-text'>Name: {name}</p>
                        <p className='singleCharPage__descr-text'>Origin: {origin}</p>
                        <p className='singleCharPage__descr-text'>Gender: {gender}</p>
                        <p className='singleCharPage__descr-text'>Species: {species}</p>
                        <p className='singleCharPage__descr-text'>Status: {status}</p>
                    </div>
                </div>
            </>
        )
    }

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="singleCharPage">
            {errorMesage}
            {spinner}
            {content}
        </div>
    )

}

export default SingleCharPage;