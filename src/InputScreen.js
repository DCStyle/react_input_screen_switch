import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function InputScreen() {
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate(`/result/${inputValue}`);
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			style={{margin: '15em 20em', display: 'flex', flexDirection: 'column'}}>
			<input type='text'
			       placeholder='Enter something...'
			       style={{padding: '.5rem 1rem', fontSize: '12pt'}}
			       value={inputValue}
			       onChange={(e) => setInputValue(e.target.value)}
			/>

			<button type='submit' value='submit'
			        style={{ marginTop: '1rem', padding: '.5rem 0', fontSize: '12pt' }}>
				Submit
			</button>
		</form>
	);
}