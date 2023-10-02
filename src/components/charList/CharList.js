
import img from '../../resources/morty.jpeg';

import './charList.scss';

const CharList = () => {

    return (
        <div className="charList">
            <div className="charList__conteiner">
                <div className="charList__item">
                    <div>
                        <img className="charList__itemImg" src={img} alt="img" />
                    </div>

                    <div className="charList__charName">
                        <p>Name: Morty</p>
                    </div>
                </div>
                <div className="charList__item">
                    <div>
                        <img className="charList__itemImg" src={img} alt="img" />
                    </div>

                    <div className="charList__charName">
                        <p>Name: Morty</p>
                    </div>
                </div>
                <div className="charList__item">
                    <div>
                        <img className="charList__itemImg" src={img} alt="img" />
                    </div>

                    <div className="charList__charName">
                        <p>Name: Morty</p>
                    </div>
                </div>
                <div className="charList__item">
                    <div>
                        <img className="charList__itemImg" src={img} alt="img" />
                    </div>

                    <div className="charList__charName">
                        <p>Name: Morty</p>
                    </div>
                </div>
                <div className="charList__item">
                    <div>
                        <img className="charList__itemImg" src={img} alt="img" />
                    </div>

                    <div className="charList__charName">
                        <p>Name: Morty</p>
                    </div>
                </div>
                <div className="charList__item">
                    <div>
                        <img className="charList__itemImg" src={img} alt="img" />
                    </div>

                    <div className="charList__charName">
                        <p>Name: Morty</p>
                    </div>
                </div>
            </div>

            
        </div>
    )

}

export default CharList;