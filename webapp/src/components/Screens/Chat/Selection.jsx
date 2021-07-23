import React, { useEffect } from "react";
import {useState} from "react";
import Button from "../../subcomponents/Button";
import {connect} from "react-redux";
import cloudy from "../../../assets/images/cloudy.gif";



function Selection({onDone,socket}){

    let [selected,setSelected] = useState("none");
    let [line,setLine] = useState(0);

    useEffect(()=>{

        socket.on("inLine",(val)=>{
            setLine(val);
        })

        socket.on("moveAheadInLine",()=>{
            setLine(no=>no-1);
        })

        socket.on("pairFound",(data)=>{
            onDone({room:data.room,userType:selected})
        })

        return ()=>{
            socket.off("inLine");
            socket.off("moveAheadInLine");
            socket.off("pairFound");
        }

    },[selected]);


    return (
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            {
                selected === "none" ?
                <div style={{width:"150px"}}>
                <div style={{marginBottom:"10px"}}>Join As</div>
                <Button onClick={()=>{
                    socket.emit("join",{intent:'0'});
                    setSelected("venter");
                }} label="venter" style={{marginBottom:"10px"}}/>
                <Button onClick={()=>{
                    socket.emit("join",{intent:'1'});
                    setSelected("listener");
                }} label="Listener"/>
                </div>
                :
                <div style={{marginBottom:"100px"}} className="d-flex flex-column align-items-center">
                    <img width="178px" src={cloudy}/>

                    <div className="QueueContainer">
                        <span className='heading5' >{selected} in line: {line}</span>
                    </div>

                    <span style={{marginTop:"20px"}}>Connecting you with someone..</span>

                </div>
            }


        </div>
    );
}


export default  Selection;