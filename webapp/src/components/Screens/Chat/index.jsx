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
    let [roomName,setRoomName] = useState("none");

    let makeRoom = (pid)=>{
        const channel = [socket.id, pid].sort();
        let room = channel[0] + "-" + channel[1];
        setRoomName(room);
    }


    useEffect(()=>{
        let socket = io("http://localhost:5000/");
        createConnection(socket)
    },[])

    if(socket)
    return (
    <>
        {userType === "none" ? 
            <Selection socket={socket} onDone={({partnerId,userType})=>{
                makeRoom(partnerId);
                setUserType(userType);
            }}/> : 
            <Chat userType={userType} roomName={roomName}/>
        }
    </>
    )


    return (<>Retry Again later..</>);
}

const mapStateToProps = (state) => {
    return {socket: state.socket};
};


export default  connect(mapStateToProps,actions)(ChatLogic);