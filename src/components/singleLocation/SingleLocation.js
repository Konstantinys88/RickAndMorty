import './singleLocation.scss';

import earth from '../../resources/earth2-transformed.jpg'

const SingleLocation = () => {
    return (
        <div className="singleLocation">
            <div className="singleLocation__wrapper">
                <div className="singleLocation__imgBlock">
                    <img src={earth} alt="earth" />
                </div>
                <div className="singleLocation__description">
                    <p className='singleLocation__descriptionText'>Name: Earth</p>
                    <p className='singleLocation__descriptionText'>Type: Planet</p>
                    <p className='singleLocation__descriptionText'>Dimension: Dimension C-137</p>
                </div>
            </div>

        </div>
    )
}

export default SingleLocation;