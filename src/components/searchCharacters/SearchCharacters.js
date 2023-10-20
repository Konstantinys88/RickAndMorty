
import './searchCharacters.scss';

import { Link } from 'react-router-dom/cjs/react-router-dom';


const SearchCharacters = (props) => {

    return (
        <div className="search">
            <form className='search__form' onSubmit={e => { e.preventDefault(); }}>
                <input className='search__searchInput'
                    type="text"
                    placeholder="Search character"
                    onChange={(e) => { props.onCharNameSelected(e.target.value); }}
                />
                <Link to="/foundСharacter" className='search__searchBtn button'>Search</Link>
            </form>
        </div>
    )
}

export default SearchCharacters;