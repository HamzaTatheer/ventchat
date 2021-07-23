import React from "react";
import WelcomeScreen from "../components/Screens@v2/Welcome";
import GuidelineScreen from "../components/Screens/Guidelines";
import ChatScreen from "../components/Screens/Chat/";
import { useState } from "react";

export default function VentChat(){
    let screens = [WelcomeScreen,GuidelineScreen,ChatScreen]

    let [currentScreenIndex,setCurrentScreenIndex] = useState(0);
    
    let moveToNextScreen = ()=>{
        setCurrentScreenIndex((index)=>index+1);
    }



    let renderScreen = ()=>{
        let Screen = screens[currentScreenIndex];
        if(Screen){
            return <Screen moveToNextScreen={()=>moveToNextScreen()}/>
        }
        else{
            return <p>no page found</p>
        }
    }

    return (
        <div className="ventchat">
            {renderScreen()}
        </div>
    );
}