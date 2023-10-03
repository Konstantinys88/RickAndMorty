
// import arrow from '../../resources/arrow.png';

import './charList.scss';

import { useState, useEffect } from 'react';
import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';

const CharList = () => {

    const { getAllCharcters } = GetFromBD();
    const arrayCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [arr, setArr] = useState(arrayCharacters);


    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0)



    useEffect(() => {
        onRequest(arr);
        console.log('useEffectList')
    }, [arr]);


    const onRequest = (arr) => {
        getAllCharcters(arr)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        setLoading(false);
        setCharList(charList => [...newCharList]);
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
                        <img className="charList__itemImg" src={item.image} alt="img" />
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
    const content = !(loading || !charList) ? items : null;


    const disableBack = (counter === 0) ? "disabled" : "";
    const disableNext = (counter === 91) ? "disabled" : "";


    return (
        <div className="charList">
            {spinner}
            {content}
            <div className='charList__button'>
                <button
                    onClick={onBack}
                    disabled={disableBack}
                    className='button'>назад</button>
                <h2 className='charList__counter'>{counter + 1}</h2>
                <button
                    onClick={onNext}
                    disabled={disableNext}
                    className='button'>вперед</button>
            </div>
        </div >

    )

}

export default CharList;