import React from 'react';
import './App.css';
import Button from './components/button'

const App: React.FC = () => {
	return (
		<div className="App">
			<Button buttonType="primary" text="primary" />
			<br />
			<Button buttonType="secondary" text="secondary" />
		</div>
	);
}

export default App;
