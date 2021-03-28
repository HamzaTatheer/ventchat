import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";



export default function Button({headerBtn,label,onClick,selected}){

    let classes = "header-btn"

    if(headerBtn){
        if(selected===true)
        classes= "header-btn-selected";
        else
        classes = "header-btn-unselected";
        

        return (
            <div className={classes} onClick={onClick}>
                {label}
            </div>
        );
    }
    else
    {
        if(selected===true)
        classes= "custom-btn-selected";
        else
        classes = "custom-btn-unselected";
        

        return (
            <div className={classes} onClick={onClick}>
                {label}
            </div>
        );
    }

}