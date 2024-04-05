import React from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function ResultScreen() {
	const navigate = useNavigate()
	const { inputValue } = useParams();

	return (
		<div style={{margin: '15em 20em', display: 'flex', flexDirection: 'column'}}>
			<h1>Submitted value: {inputValue && inputValue}
				{!inputValue && "No input value provided"}</h1>

			<button onClick={() => navigate(-1)}
			        style={{ marginTop: '1rem', padding: '.5rem 0', fontSize: '12pt' }}>
				Back
			</button>
		</div>
	);
}