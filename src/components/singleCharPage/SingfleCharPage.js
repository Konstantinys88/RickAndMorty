import './singleCharPage.scss';

// import morty from '../../resources/morty.jpeg';
import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';


const SingleCharPage = (props) => {

    const { getCharacters, getAllEpisode } = GetFromBD();
    const { charId } = props;

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [episodeId, setEpisodeId] = useState([]);
    const [episode, setEpisode] = useState({});
    
    // console.log(episodeId);
    // console.log(episode);
    // getAllEpisode(episodeId).then(res => console.log(res));

    useEffect(() => {
        onLoading(true);
        updateChar();
    }, [charId]);



    const onCharLoaded = (char) => {
        setChar(char);
        setEpisodeId(char.episode.map(Number));
        setLoading(false);
    }

    const onLoading = () => {
        setLoading(true);
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
                <div className="singleCharPage__episode">
                    <ul className='singleCharPage__episodeList'>

                        {
                            episode?.map((item, index) => {
                                return (
                                    <li key={index}> Episode: {item}. </li>
                                )
                            })
                        }
                    </ul>
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