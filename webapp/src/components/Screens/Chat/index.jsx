import React, { useEffect } from "react";
import {useState} from "react";
import Selection from "./Selection";
import Button from "../../subcomponents/Button";
import {connect} from "react-redux";
import * as actions from "../../../redux/actions/socketAction";
import io from "socket.io-client";
import Chat from "./ChatSytem";
import useSound from 'use-sound';
import joiningSound from "../../../assets/sounds/joining.mp3"


function ChatLogic({socket,createConnection}){

    let [userType,setUserType] = useState("none");
    let [roomName,setRoomName] = useState("none");
    const [playSound] = useSound(joiningSound);

    useEffect(()=>{

        if(userType !== 'none'){
            playSound();
        }
        
    },[userType])
    

    useEffect(()=>{
        let socket = io("https://ventchatapp.herokuapp.com/");
        //let socket = io("http://localhost:8080");
        createConnection(socket)
    },[])



    if(socket)
    return (
    <>
        
        {userType === "none" ? 
            <Selection socket={socket} onDone={({room,userType})=>{
                setRoomName(room);
                setUserType(userType);
            }}/> : 
            <Chat socket={socket} userType={userType} myId={socket.id} roomName={roomName}/>
        }
    </>
    )

    return (<>loading:{process.env.BACKEND_CON}</>);
}

const mapStateToProps = (state) => {
    return {socket: state.socket};
};


export default  connect(mapStateToProps,actions)(ChatLogic);