import React from 'react';
import './App.css';
import Button from './components/button'

const App: React.FC = () => {
	return (
		<div className="App">
			<Button buttonType="primary" text="primary" />
			<br />
			<br />
			<Button buttonType="secondary" text="secondary" />
			<br />
			<br />
			<Button text="default" />
		</div>
	);
}

export default App;
