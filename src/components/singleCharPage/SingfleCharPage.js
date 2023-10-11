import './singleCharPage.scss';

import morty from '../../resources/morty.jpeg';


const SingleCharPage = (props) => {

    const { charId } = props;

    console.log(charId);


    return (
        <div className="singleCharPage">

            <div className="singleCharPage__characterDescription">
                <div className="singleCharPage__imgChar">
                    <img src={morty} alt="imgage" />
                </div>
                <div className="singleCharPage__descr">
                    <p className='singleCharPage__descr-text'>Name: Name</p>
                    <p className='singleCharPage__descr-text'>Origin: Orogin</p>
                    <p className='singleCharPage__descr-text'>Gender: Gender</p>
                    <p className='singleCharPage__descr-text'>Species: Species</p>
                    <p className='singleCharPage__descr-text'>Status: Status</p>
                </div>
            </div>
            <div className="singleCharPage__episode">
                <ul className='singleCharPage__episodeList'>
                    <li> / Episode 1 / </li>
                    <li> / Episode 2 / </li>
                    <li> / Episode 3 / </li>
                </ul>
            </div>


        </div>
    )

}

export default SingleCharPage;