import React from "react";
import Menu from "../assets/images/menu.svg";
import Button from "./subcomponents/Button";


export default function VentChat(){
    return (
        <div className="main-navbar d-flex justify-content-between align-items-center" style={{height:"10vh",width:"100%"}}>
            <div className="nav-logo">
                <span style={{color:"white"}}>Therapy</span><span style={{color:"white"}}> Channel</span>
            </div>
            <div className="menu-items">
                <Button headerBtn selected={true} label="Vent Chat"/>
                <Button headerBtn selected={false} label="Therapy Channel"/>
            </div>
            <div className="mobile-menu">
                <img width="30px" src={Menu}/>
            </div>
        </div>
    );
}