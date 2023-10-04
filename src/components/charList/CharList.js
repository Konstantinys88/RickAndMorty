
// import arrow from '../../resources/arrow.png';

import './charList.scss';

import { useState, useEffect } from 'react';
import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';

const CharList = () => {

    const { getAllCharcters } = GetFromBD();
    const arrayCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [arr, setArr] = useState(arrayCharacters);


    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(false);

    // console.log(charList)


    useEffect(() => {
        onRequest(arr);
    }, [arr]);

    const onRequest = (arr) => {
        getAllCharcters(arr)
            .then(onCharListLoaded)
            .catch(onError);
    }

    const onCharListLoaded = (newCharList) => {
        setCharList(charList => [...newCharList]);
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

    function renderItems(arr) {
        const item = arr.map((item, index) => {
            return (
                <div key={item.id} className="charList__item">
                    <div>
                        <img className="charList__itemImg" src={item.image} alt={item.image} />
                    </div>

                    <div className="charList__charName">
                        <p>{item.name}</p>
                    </div>
                </div>
            )
        });
        return (
            <div className="charList__conteiner">
                {item}
            </div>
        )
    }

    const items = renderItems(charList);

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !charList) ? items : null;


    const disableBack = (counter === 0) ? "disabled" : "";
    const disableNext = (counter === 91) ? "disabled" : "";
    const colorBack = (disableBack === "disabled") ? {'background' : 'red'} : {'background' : ''};
    const colorNext = (disableNext === "disabled") ? {'background' : 'red'} : {'background' : ''};


    return (
        <div className="charList">
            {spinner}
            {errorMesage}
            {content}
            <div className='charList__button'>
                <button
                    onClick={onBack}
                    disabled={disableBack}
                    style={colorBack}
                    className='button'>назад</button>
                <h2 className='charList__counter'>{counter + 1}</h2>
                <button
                    onClick={onNext}
                    disabled={disableNext}
                    style={colorNext}
                    className='button'>вперед</button>
            </div>
        </div >

    )
}

export default CharList;