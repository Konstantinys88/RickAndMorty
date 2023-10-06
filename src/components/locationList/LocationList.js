import './locationList.scss';

import GetFromBD from '../../services/GetFromBD';

import { useState } from 'react';



const LocationList = () => {

    const [openResident, setOpenResident] = useState(false);




    const Viev = () => {

        let stuleResident = {'display': 'none', 'opacity': 0};
        if(openResident) {
            stuleResident = {'display': 'flex', 'opacity': 1}
        }

        return (
            <>
                <ul className="location__list">
                    <li className='location__item'>
                        <div className="location__itemWrapper">
                            <p>The name of the location: Earth</p>
                            <p>The type of the location: Planet</p>
                            <p>The dimension in which the location is located: Dimension C-137</p>
                        </div>
                        <button onClick={()=>{setOpenResident(!openResident)}} className='button location__button'>Residents</button>
                        <div className='location__residents' style={stuleResident} >
                            <p>Resident 1</p>
                            <p>Resident 2</p>
                            <p>Resident 3</p>
                        </div>
                    </li>
                    <li className='location__item'>
                        <div className="location__itemWrapper">
                            <p>The name of the location: Earth</p>
                            <p>The type of the location: Planet</p>
                            <p>The dimension in which the location is located: Dimension C-137</p>
                        </div>
                        <button onClick={()=>{setOpenResident(!openResident)}} className='button location__button'>Residents</button>
                        <div className='location__residents' style={stuleResident} >
                            <p>Resident 1</p>
                            <p>Resident 2</p>
                            <p>Resident 3</p>
                        </div>
                    </li>
                </ul>
            </>
        )
    }


    return (
        <div className='location'>
            <Viev />


        </div>
    )


}

export default LocationList;