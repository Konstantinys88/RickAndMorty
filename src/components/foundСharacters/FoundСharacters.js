import './foundCharacter.scss';

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

    }


    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    // const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div>
            {errorMesage}
            {spinner}
            {/* {content} */}
        </div>
    )
}

export default FoundСharacter;