import React, { useEffect } from "react";
import {useState} from "react";
import Selection from "./Selection";
import Button from "../../subcomponents/Button";
import {connect} from "react-redux";
import * as actions from "../../../redux/actions/socketAction";
import io from "socket.io-client";
import Chat from "./ChatSytem";


function getChatID(sender, reciever) {
    const channel = [sender, reciever].sort();
    return channel[0] + "-" + channel[1];
}
  




function ChatLogic({socket,createConnection}){

    let [userType,setUserType] = useState("none");
    let [partnerId,setPartnerId] = useState("none");

    useEffect(()=>{
        let socket = io("https://5000-111550ae-6c63-40f1-a9cb-8e736c8d4cd8.cs-asia-southeast1-vjqr.cloudshell.dev/?authuser=3");
        createConnection(socket)
    },[])



    if(socket && socket.connected)
    return (
    <>
        
        {userType === "none" ? 
            <Selection socket={socket} onDone={({partnerId,userType})=>{
                
                setPartnerId(partnerId);
                setUserType(userType);
            }}/> : 
            <Chat socket={socket} userType={userType} myId={socket.id} partnerId={partnerId}/>
        }
    </>
    )


    return (<>loading:{process.env.BACKEND_CON}</>);
}

const mapStateToProps = (state) => {
    return {socket: state.socket};
};


export default  connect(mapStateToProps,actions)(ChatLogic);