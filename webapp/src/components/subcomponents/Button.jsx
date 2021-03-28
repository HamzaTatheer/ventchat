import React from "react";



export default function Button({headerBtn,label,onClick,selected,style}){

    style = style ? style : {};

    let classes = ""

    if(headerBtn){
        classes += "header-btn"

        if(selected===true)
        classes= "header-btn-selected";
        else
        classes = "header-btn-unselected";
        

        return (
            <div style={style} className={classes} onClick={onClick}>
                <span>{label}</span>
            </div>
        );
    }
    else
    {
        if(selected===true)
        classes += "custom-btn-selected";
        else
        classes = "custom-btn-unselected";
        

        return (
            <div style={style} className={classes} onClick={onClick}>
                <span>{label}</span>
            </div>
        );
    }

}