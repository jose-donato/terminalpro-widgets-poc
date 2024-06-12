import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	return (
		<div>
			<iframe
				src={`${import.meta.env.VITE_PUBLIC_URL}/widgets/counter.html?instance=1`}
			/>
			<iframe
				src={`${import.meta.env.VITE_PUBLIC_URL}/widgets/counter.html?instance=2`}
			/>
		</div>
	);
}

export default App;
