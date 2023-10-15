import './episodeList.scss';
import imageEpisode from '../../resources/imgEpisode.jpg'

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

    useEffect(() => {
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


    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const onNext = () => {
        const next = arr.map(item => item + 9);
        setArr(next);
        setCounter(contenr => contenr + 1)
    }

    const onBack = () => {
        const next = arr.map(item => item - 9);
        setArr(next);
        setCounter(contenr => contenr - 1)
    }

    const renderEpisodeList = (arr) => {
        const item = arr.map((item, index) => {
            return (
                <li key={item.id} className='episodeList__item'>
                    <div className="episodeList__imgBlock">
                        <img src={imageEpisode} alt="imageEpisode" />
                    </div>
                    <div className="episodeList__descr">
                        <p>Title: {item.name}</p>
                        <p>Release date: {item.airDate}</p>
                    </div>
                </li>
            )
        });
        return (
            <ul className='episodeList__list'>
                {item}
            </ul>
        )
    }


    const items = renderEpisodeList(episodeList)

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !episodeList) ? items : null;

    const disableBack = (counter === 0) ? "disabled" : "";
    const disableNext = (counter === 5) ? "disabled" : "";
    const colorBack = (disableBack === "disabled") ? { 'background': 'red' } : { 'background': '' };
    const colorNext = (disableNext === "disabled") ? { 'background': 'red' } : { 'background': '' };

    return (
        <div className="episodeList">
            {spinner}
            {errorMesage}
            {content}
            <div className='episodeList__button'>
                <button
                    onClick={onBack}
                    disabled={disableBack}
                    style={colorBack}
                    className='button'>назад</button>
                <h2 className='episodeList__counter'>{counter + 1}</h2>
                <button
                    onClick={onNext}
                    disabled={disableNext}
                    style={colorNext}
                    className='button'>вперед</button>
            </div>
        </div>
    )
}

export default EpisodeList;