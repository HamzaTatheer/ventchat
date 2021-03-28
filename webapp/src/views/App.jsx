import "../assets/styles/App.scss";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

//Components
import VentChat from "./VentChat"

function App() {

	return (
		<div className="App">
			<Header/>
			<Router>
				<Switch>
					<Route exact path="/" component={VentChat} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
