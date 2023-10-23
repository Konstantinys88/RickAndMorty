import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Spinner from '../spinner/Spinner';

const RandomCharacter = lazy(() => import('../randomCharacter/RandomCharacter'));
const CharList = lazy(() => import('../charList/CharList'));
const CharInfo = lazy(() => import('../charInfo/CharInfo'));

const LocationList = lazy(() => import('../locationList/LocationList'));
const EpisodeList = lazy(() => import('../episodeList/EpisodeList'));

const SingleCharPage = lazy(() => import('../singleCharPage/SingfleCharPage'));
const SingleEpisodeList = lazy(() => import('../singleEpisodeList/SingleEpisodeList'));
const SingleLocation = lazy(() => import('../singleLocation/SingleLocation'));

const SearchCharacters = lazy(() => import('../searchCharacters/SearchCharacters'));
const FoundСharacter = lazy(() => import('../foundСharacters/FoundСharacters'));

const Page404 = lazy(() => import('../page404/Page404'));



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
						<Suspense fallback={<Spinner />}>
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

								<Route path='/char/:charId' element={
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

								<Route path='/singleLocation/:locationId' element={<SingleLocation />} />

								<Route path='*' element={<Page404 />} />

							</Routes>
						</Suspense>
					</div>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
