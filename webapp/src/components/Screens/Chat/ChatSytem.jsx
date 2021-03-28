import React from "react";
import Input from "../../subcomponents/Input";

let history = [{id:1,message:"Hey"},{id:2,message:"ello"}];


function ChatSystem({socket,userType,roomName}){

    return (
    <div className="row align-items-center justify-content-center no-gutters">
        <div className="col-sm-0 col-md-3"/>
        <div className="col-sm-12 col-md-6">
                <div style={{height:"80vh",paddingTop:"10%",width:"100%"}}>
                    <div style={{width:"100%",height:"90%",background:"#fdf9f9"}}>
                        <div style={{height:"10%",width:"100%",background:"black",textAlign:"initial",paddingLeft:"10px",paddingTop:"5px"}}>
                        <span style={{color:"white"}} className="description">Chatting With </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height:"10%",width:"100%"}}>
                        <Input ChatInput placeholder="Say something"/>
                    </div>
                </div>
        </div>
        <div className="col-sm-0 col-md-3"/>
    </div>
    )

}


export default ChatSystem;