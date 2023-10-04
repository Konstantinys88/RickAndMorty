import './App.scss';

import Header from '../header/Header'
import RandomCharacter from '../randomCharacter/RandomCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';






const App = () => {
	return (
		<div className="app">
			<Header />
			<RandomCharacter />
			<div className='app__main'>
				<CharList />
				<CharInfo />

				


			</div>
		</div>
	);
}

export default App;
