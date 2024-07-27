import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

//Императивный
const getDateFormat = () => {
	let date = new Date();
	let year = date.getFullYear();
	return year;
};
const resultYear = getDateFormat();

//Декларативный
export const App = () => {
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "Logo",
			}),
			createElement(
				"p",
				null,
				"Edit ",
				createElement("code", null, "src/App.js"),
				" and save to reload",
			),
			createElement(
				"a",
				{
					href: "https://reactjs.org",
					className: "App-link",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React",
			),
			resultYear,
		),
	);
};
