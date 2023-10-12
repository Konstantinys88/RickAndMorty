import './singleEpisodeList.scss';

import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';

const SingleEpisodeList = (props) => {

    const { episodeId } = props;
    const { getAllEpisode } = GetFromBD();


    const [episode, setEpisode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(episode)

    useEffect(() => {
        onLoading(true);
        updateEpisode();
    }, []);

    const updateEpisode = () => {
        if (!episodeId) {
            return;
        }
        getAllEpisode(episodeId)
            .then(onEpisodeLoaded)
            .catch(onError);
    }

    const onEpisodeLoaded = (episode) => {
        setEpisode(episode);
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const onLoading = () => {
        setLoading(true);
    }


    function renderItems(arr) {
        const item = arr.map((item, index) => {
            return (
                <li className='singleEpisodeList__item'>  Episode {item.id} :  {item.name}. Release date - {item.airDate}. </li>
            )
        });
        return (
            <ul className='singleEpisodeList__list'>
                {item}
            </ul>
        )
    }

    const items = renderItems(episode);

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !episode) ? items : null;


    return (
        <>
            <div className="singleEpisodeList">
                {spinner}
                {errorMesage}
                {content}
            </div>
        </>
    )

}

export default SingleEpisodeList;