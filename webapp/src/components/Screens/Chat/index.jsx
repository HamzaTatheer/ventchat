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
        let socket = io(process.env.BACKEND_CON || "http://localhost:5000/");
        createConnection(socket)
    },[])

    if(socket)
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


    return (<>Retry Again later..</>);
}

const mapStateToProps = (state) => {
    return {socket: state.socket};
};


export default  connect(mapStateToProps,actions)(ChatLogic);