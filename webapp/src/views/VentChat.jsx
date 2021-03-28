import React from "react";
import Header from "../components/Header";
import Button from "../components/subcomponents/Button";
import Leaf from "../assets/images/leaf.jpg"
import MessageDemo from "../components/MessageDemo";

export default function VentChat(){
    return (<>

    <div className="ventchat-welcome row justify-content-center no-gutters">
        <div style={{textAlign:"initial",height:"50vh"}} className="col-md-4 vent-chat-message-demo-container">
            <MessageDemo/>
        </div>
        <div style={{height:"55vh"}} className="col-md-4 d-flex justify-content-center">
            <div style={{width:"300px",position:"relative"}} className="d-flex flex-column justify-content-around">
                
                <div style={{position:"absolute",bottom:"-150px",left:"-400px",zIndex:-1}}>
                    <img src={Leaf} width="400px" style={{transform:"rotate(-6deg)"}}/>
                </div>
                
                <div style={{textAlign:"initial",paddingLeft:"20px"}}>
                <div style={{color:"#0CA524",marginBottom:"15px"}} className="heading3">Vent Out</div>
                <div style={{marginBottom:"15px"}} className="heading3"><span>Or </span><span style={{color:"#0CA524"}}>Listen</span></div>
                <div style={{marginBottom:"15px"}} className="heading5">to a random person</div>
                <div className="heading5">anonymously</div>
                </div>

                <div>
                <Button label="Start Now"/>
                <div style={{marginTop:"10px"}} className="subtitle2">No sign in Required</div>

                </div>
            </div>
            
        </div>

    </div>
    </>);
}