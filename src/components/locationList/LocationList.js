import './locationList.scss';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

const LocationList = () => {

    const { getAllLocation, loading, error } = GetFromBD();
    const arrayCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [arr, setArr] = useState(arrayCharacters);

    const [locationList, setLocationList] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        onRequestLocation(arr);
    }, [arr]);

    const onRequestLocation = (arr) => {
        getAllLocation(arr)
            .then(onCharListLoaded);
    }

    const onCharListLoaded = (newLocationList) => {
        setLocationList(locationList => [...newLocationList]);
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


    const renderLocationLost = (arr) => {
        const item = arr.map((item, index) => {
            return (
                <li key={item.id} className='location__item'>
                    <div className="location__itemWrapper">
                        <p>The name of the location: {item.name}</p>
                        <p>The type of the location: {item.type}</p>
                        <p>The dimension in which the location is located: {item.dimension === "unknown" ? 'Unknown dimension' : item.dimension}</p>
                    </div>
                    <div className="location__linKWrapper">
                        <Link to={'/singleLocation'} href='#' className='button location__link'>Page location</Link>
                    </div>
                </li>
            )
        })

        return (
            <ul className="location__list">
                {item}
            </ul>
        )
    }


    const items = renderLocationLost(locationList);

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !locationList) ? items : null;

    const disableBack = (counter === 0) ? "disabled" : "";
    const disableNext = (counter === 13) ? "disabled" : "";
    const colorBack = (disableBack === "disabled") ? { 'background': 'red' } : { 'background': '' };
    const colorNext = (disableNext === "disabled") ? { 'background': 'red' } : { 'background': '' };

    return (
        <div className='location'>
            {spinner}
            {errorMesage}
            {content}
            <div className='location__button'>
                <button
                    onClick={onBack}
                    disabled={disableBack}
                    style={colorBack}
                    className='button'>назад</button>
                <h2 className='location__counter'>{counter + 1}</h2>
                <button
                    onClick={onNext}
                    disabled={disableNext}
                    style={colorNext}
                    className='button'>вперед</button>
            </div>
        </div>
    )
}

export default LocationList;