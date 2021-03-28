import "../assets/styles/App.scss";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

//Components
import VentChat from "./VentChat"
import Therapy from "./Therapy"

function App() {

	return (
		<div style={{position:"relative",width:"100%",minHeight:"100vh"}} className="App">
			<Router>
				<Header/>
				<div className="footer-container">
					<span className="link" style={{paddingLeft:"10px",paddingRight:"10px"}}>Privacy</span> |
					<span className="link" style={{paddingLeft:"10px",paddingRight:"10px"}}>About Us</span> |
					<span className="link" style={{paddingLeft:"10px",paddingRight:"10px"}}>Contact Us</span>
				</div>
				<Switch>
					<Route exact path="/" component={VentChat} />
					<Route exact path="/therapy" component={Therapy} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
