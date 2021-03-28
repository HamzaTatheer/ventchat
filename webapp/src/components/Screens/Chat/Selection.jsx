import React, { useEffect } from "react";
import {useState} from "react";
import Button from "../../subcomponents/Button";
import {connect} from "react-redux";



function Selection({onDone,socket}){

    let [selected,setSelected] = useState("none");
    let [line,setLine] = useState(0);

    useEffect(()=>{

        socket.on("QueueLength",(val)=>{
            setLine(val);
        })

        socket.on("partner",(data)=>{
            onDone({partnerId:data.id,userType:selected})
        })

        socket.on("minus",()=>{
            setLine(no=>no-1);
        })

        return ()=>{
            socket.off("QueueLength");
            socket.off("partner");
            socket.off("minus");
        }

    },[selected]);


    return (
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            {
                selected === "none" ?
                <div style={{width:"150px"}}>
                <div style={{marginBottom:"10px"}}>Join As</div>
                <Button onClick={()=>{
                    socket.emit("joinAsVenter");
                    setSelected("venter");
                }} label="venter" style={{marginBottom:"10px"}}/>
                <Button onClick={()=>{
                    socket.emit("joinAsListener");
                    setSelected("listener");
                }} label="Listener"/>
                </div>
                :
                <div>{selected} in line: {line}</div>
            }


        </div>
    );
}


export default  Selection;