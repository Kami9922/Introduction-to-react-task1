import logo from "./logo.svg";
import "./App.css";

//Императивный
const getDateFormat = () => {
	let date = new Date();
	let year = date.getFullYear();
	return year;
};
const resultYear = getDateFormat();

//Декларативный
export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{resultYear}
			</header>
		</div>
	);
};
