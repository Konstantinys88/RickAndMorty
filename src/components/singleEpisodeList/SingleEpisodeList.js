import './singleEpisodeList.scss';

import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';

const SingleEpisodeList = (props) => {

    const { episodeId, loading, error } = props;
    const { getAllEpisode } = GetFromBD();

    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        updateEpisode();
    }, []);

    const updateEpisode = () => {
        if (!episodeId) {
            return;
        }
        getAllEpisode(episodeId)
            .then(onEpisodeLoaded);
    }

    const onEpisodeLoaded = (episode) => {
        setEpisode(episode);
    }

    function renderItems(arr) {
        const item = arr.map((item, index) => {
            return (
                <li key={item.id} className='singleEpisodeList__item'>  Episode {item.id} :  {item.name}. Release date - {item.airDate}. </li>
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