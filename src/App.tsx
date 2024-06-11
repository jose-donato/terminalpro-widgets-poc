import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	useEffect(() => {
		const loadWebComponents = async () => {
			// Fetch the list of files from a directory listing endpoint or a static manifest file
			// For demonstration, assuming a static array of filenames
			const components = ["simple-counter.js"]; // This array should ideally be fetched from a server or built dynamically
			for (const component of components) {
				const modulePath = `${import.meta.env.VITE_PUBLIC_URL}/web-components/${component}`;
				import(modulePath)
					.then(() => console.log(`${component} loaded successfully`))
					.catch((err) => console.error(`Failed to load ${component}:`, err));
			}
		};
		loadWebComponents();
	}, []);

	return (
		<>
			<simple-counter></simple-counter>
		</>
	);
}

export default App;
