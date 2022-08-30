import React from "react";
import Button from "../subcomponents/Button";
import Leaf from "../../assets/images/leaf.jpg"
import Sunrise from "../../assets/images/sunrise.gif";


export default function VentChat({moveToNextScreen}){
    return (
        
    <div style={{position:"relative",width:"100%",height:"100%"}} className="ventchat-leaf-responsive">

                <div className="d-none d-sm-block" style={{position:"absolute",bottom:"-100px",right:"-150px",zIndex:-1}}>
                    <img src={Leaf} width="500px" style={{transform:"rotate(-6deg)"}}/>
                </div>

                <div className="d-flex flex-column justify-content-around align-items-center">
                    
                    <div className="sunrise"/>

                    <div className="w-100">
                        <div className="welcome-text" style={{textAlign:"center"}}>
                            <div style={{color:"#0CA524",marginBottom:"15px"}} className="heading3">Vent Out Or Listen</div>
                            <div style={{marginBottom:"30px"}} className="heading5">to a random person anonymously</div>    
                        </div>

                        <div style={{marginBottom:"20px"}} className="d-flex flex-column align-items-center">
                            <Button style={{width:"250px"}} onClick={moveToNextScreen} label="Start Now"/>
                            <div style={{marginTop:"10px"}} className="subtitle2">No sign in Required</div>
                        </div>
                    </div>
                </div>

    </div>);
}