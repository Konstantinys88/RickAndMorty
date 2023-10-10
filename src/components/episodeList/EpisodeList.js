import './episodeList.scss';
import GetFromBD from '../../services/GetFromBD';

import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';

import { useState, useEffect } from 'react';

const EpisodeList = () => {

    const { getAllEpisode } = GetFromBD();
    const arrayEpisode = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [arr, setArr] = useState(arrayEpisode);

    const [episodeList, setEpisodeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(false);

    console.log(episodeList)

    useEffect(() => {
        onCharLoading(false);
        onRequest(arr);
    }, [arr]);

    const onRequest = (arr) => {
        getAllEpisode(arr)
            .then(onEpisodeListLoaded)
            .catch(onError);
    }

    const onEpisodeListLoaded = (newEpisodeList) => {
        setEpisodeList(episodeList => [...newEpisodeList]);
        setLoading(false);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const renderEpisodeList = (arr) => {

    }

    return (
        <div className="episodeList">

        </div>
    )
}

export default EpisodeList;