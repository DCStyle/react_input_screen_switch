import React from 'react';
import { useFormData } from "./FormDataContext";

export default function InputScreen() {
	const { formData, setFormData } = useFormData();

	if (formData)
	{
		return null;
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target),
			value = formData.get('inputValue');

		setFormData(value);
	}

	return (
		<form
			onSubmit={handleFormSubmit}
			style={{margin: '15em 20em', display: 'flex', flexDirection: 'column'}}>
			<input type='text'
			       name='inputValue'
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