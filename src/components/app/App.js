import './App.scss';

import Header from '../header/Header'
import RandomCharacter from '../randomCharacter/RandomCharacter';
import CharList from '../charList/CharList';



const App = () => {
	return (
		<div className="app">
			<Header />
			<RandomCharacter />
			<div className='app__main'>
				<CharList />


			</div>
		</div>
	);
}

export default App;
