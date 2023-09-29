import './App.scss';

import Header from '../header/Header'
import RandomCharacter from '../randomCharacter/RandomCharacter';



const App = () => {
	return (
		<div className="app">
			<Header/>
			<RandomCharacter/>
			<div className='app__main'>


			</div>
		</div>
	);
}

export default App;
