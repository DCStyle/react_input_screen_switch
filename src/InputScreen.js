import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function InputScreen() {
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData(e.target),
			inputValue = formData.get('inputValue');

		navigate(`/result/${inputValue}`);
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			style={{margin: '15em 20em', display: 'flex', flexDirection: 'column'}}>
			<input name="inputValue"
			       type='text'
			       placeholder='Enter something...'
			       style={{padding: '.5rem 1rem', fontSize: '12pt'}}
			/>

			<button type='submit' value='submit'
			        style={{ marginTop: '1rem', padding: '.5rem 0', fontSize: '12pt' }}>
				Submit
			</button>
		</form>
	);
}