import React from 'react';
import './App.css';
import Button from './components/button'

const App: React.FC = () => {
	return (
		<div className="App">
			<button className="primary-button">
				Primary
				<Button buttonType="primary" />
			</button>
			<br />
			<button className="secondary-button">
				secondary
				<Button buttonType="secondary" />
			</button>
		</div>
	);
}

export default App;
