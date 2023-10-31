import './singleLocation.scss';
import earth from '../../resources/earth2-transformed.jpg'

import { useParams, Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import GetFromBD from '../../services/GetFromBD';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../error/Error';


const SingleLocation = () => {

    const { locationId } = useParams();
    // console.log(locationId)
    const [location, setLocation] = useState(null);
    // console.log(location)
    const { getSingleLocation, loading, error } = GetFromBD();

    useEffect(() => {
        updateLocation();
    }, [locationId]);

    const updateLocation = () => {
        getSingleLocation(locationId)
            .then(onLocationLoaded);
    }

    const onLocationLoaded = (location) => {
        setLocation(location);
    }

    const View = ({ location }) => {
        const { name, type, dimension } = location;

        return (
            <>
                <div className="singleLocation__wrapper">
                    <div className="singleLocation__imgBlock">
                        <img src={earth} alt="earth" />
                    </div>
                    <div className="singleLocation__description">
                        <p className='singleLocation__descriptionText'>Name: {name}  </p>
                        <p className='singleLocation__descriptionText'>Type: {type} </p>
                        <p className='singleLocation__descriptionText'>Dimension: {dimension}</p>
                    </div>
                </div>
            </>
        )
    }

    const spinner = loading ? <Spinner /> : null;
    const errorMesage = error ? <ErrorMesage /> : null;
    const content = !(loading || error || !location) ? <View location={location} /> : null;

    return (
        <div className="singleLocation">
            {errorMesage}
            {spinner}
            {content}
        </div>
    )
}

export default SingleLocation;