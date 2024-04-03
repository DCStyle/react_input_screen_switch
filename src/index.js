import React from 'react';
import ReactDOM from 'react-dom/client';

import { FormDataProvider } from "./FormDataContext";
import InputScreen from "./InputScreen";
import ResultScreen from "./ResultScreen";

const FormData = () => {
	return (
		<div>
			<FormDataProvider>
				<div>
					<InputScreen/>
					<ResultScreen/>
				</div>
			</FormDataProvider>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormData />);