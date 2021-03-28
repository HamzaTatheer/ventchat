import React from "react";
import Menu from "../assets/images/menu.svg";
import Button from "./subcomponents/Button";
import {useRouteMatch,useLocation} from "react-router-dom";


export default function VentChat(){

    let path = useLocation().pathname;
    let isVentChat = (path=="/");
    let isTherapy = (path=="/therapy");


    return (
        <div className="main-navbar d-flex justify-content-between align-items-center" style={{height:"10vh",width:"100%"}}>
            <div className="nav-logo">
                <span style={{color:"white"}}>Therapy</span><span style={{color:"white"}}> Channel</span>
            </div>
            <div className="menu-items">
                <Button onClick={()=>window.location.href="/"} headerBtn selected={isVentChat} label="Vent Chat"/>
                <Button onClick={()=>window.location.href="/therapy"} headerBtn selected={isTherapy} label="Therapy Channel"/>
            </div>
            <div className="mobile-menu">
                
                <img width="30px" src={Menu}/>
            </div>
        </div>
    );
}