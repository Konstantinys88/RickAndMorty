import './App.scss';

import Header from '../header/Header'
import LocationList from '../locationList/LocationList';
import EpisodeList from '../episodeList/EpisodeList';

import RandomCharacter from '../randomCharacter/RandomCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import SingleCharPage from '../singleCharPage/SingfleCharPage';
import SingleEpisodeList from '../singleEpisodeList/SingleEpisodeList';

import SearchCharacters from '../searchCharacters/SearchCharacters';
import FoundСharacter from '../foundСharacters/FoundСharacters';

import Page404 from '../page404/Page404';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import GetFromBD from '../../services/GetFromBD';


const App = () => {


	const [selected, setSelected] = useState(33);
	const [episodeId, setEpisodeId] = useState([29])
	const [inputCharName, setInputCharName] = useState('Maximums Rickimus'); //значение из инпута

	const onCharSelected = (id, arr) => {
		setSelected(id);
		setEpisodeId(arr);
	}

	const onCharNameSelected = (str) => {
		setInputCharName(str);
	}


	return (
		<Router>
			<div className="app">
				<div className="app__container">

					<Header onCharNameSelected={onCharNameSelected} />
					<div className='app__main'>

						<Routes>

							<Route path='/' element={
								<>
									<SearchCharacters onCharNameSelected={onCharNameSelected} />
									<RandomCharacter />
									<div className="app__charList">
										<CharList onCharSelected={onCharSelected} />
										<CharInfo charId={selected} />
									</div>
								</>
							}>
							</Route>

							<Route path='/location'
								element={<LocationList />}>
							</Route>

							<Route path='/episode'
								element={<EpisodeList />}>
							</Route>

							<Route path='/char' element={
								<div className="app__singleCgarpage">
									<SingleCharPage charId={selected} />
									<SingleEpisodeList episodeId={episodeId} />
								</div>
							}>
							</Route>

							<Route path='/foundСharacter' element={
								<FoundСharacter
									charName={inputCharName}
									onCharSelected={onCharSelected} />}>
							</Route>

							<Route path='*' element={<Page404 />} />

						</Routes>
					</div>

				</div>
			</div>
		</Router>
	);
}

export default App;
