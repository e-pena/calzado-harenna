import React from 'react';
import Title from './components/Title';
import Img from './components/Img';
import ReactLink from './components/ReactLink';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Title />
				<Img />
				<ReactLink />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default App;
