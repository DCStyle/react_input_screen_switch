import React from "react";
import { useFormData } from "./FormDataContext";

export default function ResultScreen() {
	const { formData, setFormData } = useFormData();

	if (!formData)
	{
		return null;
	}

	return (
		<div style={{margin: '15em 20em', display: 'flex', flexDirection: 'column'}}>
			<h1>Submitted value: {formData}</h1>

			<button onClick={() => setFormData(null)}
			        style={{ marginTop: '1rem', padding: '.5rem 0', fontSize: '12pt' }}>
				Back
			</button>
		</div>
	);
}