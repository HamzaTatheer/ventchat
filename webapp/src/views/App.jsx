import "../assets/styles/App.scss";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

//Components
import VentChat from "./VentChat"
import Therapy from "./Therapy";
import { useEffect } from "react";

function App() {

	useEffect(()=>{
		document.title = "purifymymind - vent out and get advice";
	},[])

	return (
		<div style={{position:"relative",width:"100%",minHeight:"100vh"}} className="App">
			<Router>
				<Header/>
				<Switch>
					<Route exact path="/" component={VentChat} />
					<Route exact path="/therapy" component={Therapy} />
				</Switch>
				<div className="footer-container">
					<span className="link" style={{paddingLeft:"10px",paddingRight:"10px"}}>Privacy</span> |
					<span className="link" style={{paddingLeft:"10px",paddingRight:"10px"}}>Contributors</span>
				</div>
			</Router>
		</div>
	);
}

export default App;
