
import img from '../../resources/morty.jpeg';

import './charList.scss';

import { useState, useEffect } from 'react';
import GetFromBD from '../../services/GetFromBD';

const CharList = (props) => {

    const { getAllCharcters } = GetFromBD();
    const arrayCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [charList, setCharList] = useState([]);


    useEffect(() => {
        onRequest(arrayCharacters);
    }, []);

    console.log(charList)

    const onRequest = (arr) => {
        getAllCharcters(arr).then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
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


    return (
        <div className="charList">
            {items}
        </div>
    )

}

export default CharList;