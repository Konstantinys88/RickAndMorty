import './page404.scss';

import Error from "../error/Error";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className='page404'>
            <p className='page404__text'>Page doesn't exist</p>
            <Error />
            <Link className='page404__link' to={'/'}> ◄ Back to main page</Link>
        </div>
    )
}

export default Page404;