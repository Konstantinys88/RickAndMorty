import './App.scss';

import Header from '../header/Header'
import RandomCharacter from '../randomCharacter/RandomCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import LocationList from '../locationList/LocationList';

import { useState } from 'react';

const App = () => {

	const [selected, setSelected] = useState(1);

	const onCharSelected = (id) => {
		setSelected(id);
	}

	return (
		<div className="app">
			<Header />
			{/* <RandomCharacter  /> */}
			<div className='app__main'>
				{/* <CharList onCharSelected={onCharSelected}/>
				<CharInfo charId={selected}/> */}
				
				<LocationList/>
				


			</div>
		</div>
	);
}

export default App;
