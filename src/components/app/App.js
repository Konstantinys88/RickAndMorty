import './App.scss';

import Header from '../header/Header'
// import CharPages from '../pages/charPages/CharPages';
import LocationList from '../locationList/LocationList';
import EpisodeList from '../episodeList/EpisodeList';

import RandomCharacter from '../randomCharacter/RandomCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import SingleCharPage from '../singleCharPage/SingfleCharPage';
import SingleEpisodeList from '../singleEpisodeList/SingleEpisodeList';

import SearchCharacters from '../searchCharacters/SearchCharacters';
import FoundСharacter from '../foundСharacters/FoundСharacters';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import GetFromBD from '../../services/GetFromBD';


const App = () => {

	// const {getSearcCharacters, getCharactersAll} = GetFromBD();
	// getCharactersAll().then(res => console.log(res));


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

	// console.log(inputCharName);
	// getSearcCharacters(inputCharName).then(res => console.log(res));


	return (
		<Router>
			<div className="app">
				<div className="app__container">

					<Header onCharNameSelected={onCharNameSelected} />
					<div className='app__main'>

						<Switch>

							<Route exact path='/'>
								<SearchCharacters onCharNameSelected={onCharNameSelected} />
								<RandomCharacter />
								<div className="app__charList">
									<CharList onCharSelected={onCharSelected} />
									<CharInfo charId={selected} />
								</div>
							</Route>

							<Route exact path='/location'>
								<LocationList />
							</Route>

							<Route exact path='/episode'>
								<EpisodeList />
							</Route>

							<Route exact path='/char'>
								<div className="app__singleCgarpage">
									<SingleCharPage charId={selected} />
									<SingleEpisodeList episodeId={episodeId} />
								</div>
							</Route>

							<Route exact path='/foundСharacter'>
								<FoundСharacter 
								charName={inputCharName}
								onCharSelected={onCharSelected} />
							</Route>

						</Switch>
					</div>

				</div>
			</div>
		</Router>
	);
}

export default App;
