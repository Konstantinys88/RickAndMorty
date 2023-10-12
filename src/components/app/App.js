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

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {

	const [selected, setSelected] = useState(1);
	const [episodeId, setEpisodeId] = useState([])

	const onCharSelected = (id, arr) => {
		setSelected(id);
		setEpisodeId(arr)
	}


	return (
		<Router>
			<div className="app">
				<div className="app__container">

					<Header />
					<div className='app__main'>

						<Switch>

							<Route exact path='/'>
								<RandomCharacter />
								<div className="app__charList">
									<CharList onCharSelected={onCharSelected} />
									<CharInfo
										charId={selected}
										// episodeId={episode}
									/>
								</div>
							</Route>

							<Route exact path='/location'>
								<LocationList />
							</Route>

							<Route exact path='/episode'>
								<EpisodeList />
							</Route>

							<Route exact path='/char'>
								<SingleCharPage charId={selected} />
								<SingleEpisodeList episodeId={episodeId}/>
							</Route>

						</Switch>
					</div>

				</div>
			</div>
		</Router>
	);
}

export default App;
