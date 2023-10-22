
import './searchCharacters.scss';

import { useNavigate } from 'react-router';
import { useState } from 'react';


const SearchCharacters = (props) => {

    const [bord, setBord] = useState(false);

    const cyrillicPattern = /^[\u0400-\u04FF]+$/;
    // const whitespacePAttern = /\s/g;

    let border = { 'border': '4px solid black' }
    if (bord) {
        border = { 'border': '4px solid red' }
    }


    const navigate = useNavigate();

    return (
        <div className="search">
            <form className='search__form' onSubmit={e => { e.preventDefault(); }}>
                <input className='search__searchInput'
                    type="text"
                    placeholder="Search character"
                    style={border}
                    onChange={(e) => {
                        if (cyrillicPattern.test(e.target.value)) {
                            setBord(true)
                            props.onCharNameSelected(e.target.value);
                        } else {
                            setBord(false)
                            props.onCharNameSelected(e.target.value);
                        }
                    }}
                />
                <button onClick={async event => { navigate(`/foundСharacter`); }} className='search__searchBtn button'>Search</button>
            </form>
        </div>
    )
}

export default SearchCharacters;