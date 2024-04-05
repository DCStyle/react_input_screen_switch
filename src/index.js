import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InputScreen from './InputScreen';
import ResultScreen from './ResultScreen';

const FormData = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<InputScreen />} />
				<Route path="/result/:inputValue??" element={<ResultScreen />} />
			</Routes>
		</Router>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormData />);