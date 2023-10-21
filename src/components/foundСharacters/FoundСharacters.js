import './foundCharacter.scss';

import { Link } from 'react-router-dom/cjs/react-router-dom';
import GetFromBD from "../../services/GetFromBD";
import { useEffect, useState } from "react";

import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';


const FoundСharacter = (props) => {

    const { charName } = props;
    const { getSearcCharacters, loading, error } = GetFromBD();

    const [char, setChar] = useState([]);

    console.log(char)

    useEffect(() => {
        updateChar();
    }, [charName]);

    const updateChar = () => {
        if (!charName) {
            return;
        }
        getSearcCharacters(charName)
            .then(onCharLoaded);
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    function renderItems(arr) {
        const item = arr.map((item, index) => {

            let nameChar = ''
            if (item.name.length > 19) {
                nameChar = item.name.slice(0, 27) + '...';
            } else {
                nameChar = item.name;
            }

            return (
                <div className="foundChar__item"
                key={item.id}
                onClick={() => props.onCharSelected(item.id, item.episode.map(Number))}>
                    <div>
                        <img className="foundChar__itemImg" src={item.image} alt={item.image} />
                    </div>
                    <div className="foundChar__charName">
                        <p>{nameChar}</p>
                    </div>
                    <div className="foundChar__buttonImg">
                        <Link to='/char' className='button'>Character</Link>
                    </div>
                </div>

            )
        })
        return (
            <div className="foundChar__conteiner">
                {item}
            </div>
        )

    }


    const items = renderItems(char);
    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !char) ? items : null;

    return (
        <div className='foundChar'>
            {spinner}
            {errorMesage}
            {content}
        </div>
    )
}

export default FoundСharacter;