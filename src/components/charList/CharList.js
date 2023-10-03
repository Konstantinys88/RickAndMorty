
// import arrow from '../../resources/arrow.png';

import './charList.scss';

import { useState, useEffect } from 'react';
import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';

const CharList = () => {

    const { getAllCharcters } = GetFromBD();
    const arrayCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        onRequest(arrayCharacters);
    }, []);


    const onRequest = (arr) => {
        getAllCharcters(arr).then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        setLoading(false);
        setCharList(charList => [...charList, ...newCharList]);
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

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || !charList) ? items : null;

    return (
        <div className="charList">
            {spinner}
            {content}
            <div className='charList__button'>
                <button className='button'>назад</button>
                <button className='button'>вперед</button>
            </div>
        </div>

    )

}

export default CharList;