
import { useState } from "react";

import RandomCharacter from "../../randomCharacter/RandomCharacter";
import CharList from "../../charList/CharList";
import CharInfo from "../../charInfo/CharInfo";


const CharPages = () => {

    const [selected, setSelected] = useState(1);

    const onCharSelected = (id) => {
        setSelected(id);
    }

    return (
        <>
            <RandomCharacter />
            <div className="app__charList">
                <CharList onCharSelected={onCharSelected} />
                <CharInfo charId={selected} />
            </div>
        </>
    )
}

export default CharPages;