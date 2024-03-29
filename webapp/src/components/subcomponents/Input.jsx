import React from "react";
import Button from "./Button";

export default function Input({ChatInput,value,placeholder,onSubmit,onChange}){

    if(ChatInput){


        const handleKeypress = e => {
            
            if (e.code === "Enter")
                onSubmit();
        }

        return (
            <div className="d-flex w-100">
                <div className="custom-input" style={{width:"90%"}}>
                    <input onKeyPress={handleKeypress} onChange={(event)=>{onChange(event.target.value)}} value={value} placeholder={placeholder} style={{width:"100%",height:"100%",padding:"10px",borderRadius:"12px"}} type="text"/>
                </div>
                <div style={{paddingLeft:"10px"}}>
                    <Button onClick={()=>onSubmit()} label="send"/>
                </div>
            </div>
        );

    }


    return (
        <div style={{width:"100%",height:"100%"}} className="custom-input">
            <input placeholder={placeholder} style={{width:"100%",height:"100%",padding:"10px",border:"1px solid green",borderRadius:"12px"}} type="text"/>
        </div>
    );

}