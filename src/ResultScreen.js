import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function ResultScreen() {
	const navigate = useNavigate();
	const query = useQuery();
	const inputValue = query.get('inputValue');

	return (
		<div style={{margin: '15em 20em', display: 'flex', flexDirection: 'column'}}>
			<h1>Submitted value: {inputValue ? inputValue : "No input value provided"}</h1>

			<button onClick={() => navigate(-1)}
			        style={{ marginTop: '1rem', padding: '.5rem 0', fontSize: '12pt' }}>
				Back
			</button>
		</div>
	);
}