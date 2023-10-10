import './App.scss';

import Header from '../header/Header'
import CharPages from '../pages/charPages/CharPages';
import LocationList from '../locationList/LocationList';
import EpisodeList from '../episodeList/EpisodeList';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {



	return (
		<Router>
			<div className="app">
				<div className="app__container">
					<Header />
					<div className='app__main'>
						<Switch>
							<Route exact path='/'>
								<CharPages />
							</Route>
							<Route exact path='/location'>
								<LocationList />
							</Route>
							<Route exact path='/episode'>
								<EpisodeList />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
