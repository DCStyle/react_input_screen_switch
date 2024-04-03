import React from "react";
import { createContext, useContext, useState } from "react";

const FormDataContext = createContext(null);

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
	const [formData, setFormData] = useState(null);

	return (
		<>
			<FormDataContext.Provider value={{ formData, setFormData }}>
				{children}
			</FormDataContext.Provider>
		</>
	);
}