import './charInfo.scss';

import morty from '../../resources/morty.jpeg'

// import Skeleton from '../skeleton/Skeleton';

const CharInfo = () => {
    
    return (
        <div className="charInfo">
            <div className='charInfo__img'>
                <img src={morty} alt="img" />
            </div>
            <div className="charInfo__name">
                <p>Morty</p>
            </div>
            <div className="charInfo__episode">
                <ul>
                    <li>Episode #1</li>
                    <li>Episode #1</li>
                    <li>Episode #1</li>
                    <li>Episode #1</li>
                    <li>Episode #1</li>
                    <li>Episode #1</li>
                    <li>Episode #1</li>
                </ul>
            </div>

        </div>
    )
    
}

export default CharInfo