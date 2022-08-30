import React from "react";
import Button from "../subcomponents/Button";

export default function Guidelines({moveToNextScreen}){
    return (
        <div className="ventchat-guideline d-flex justify-content-center align-items-center" style={{textAlign:"initial"}}>
            
                <div style={{width:"80%"}}>
                    <div className="heading3">Guidelines:</div>
                    <hr/>
                    <div style={{marginBottom:"10px"}} className="heading5">Venter:</div>
                    <div style={{marginBottom:"20px"}}>
                        You will be connected with a listener where we you can talk about the problems you are facing. Maybe the person on the other side can help you out. However, keep in mind that they are humans and they might not offer the perfect advice. So we hope that they are able to help you out in some way but be patient..
                    </div>
                    <div style={{marginBottom:"10px"}} className="heading5">Listener:</div>
                    <div style={{marginBottom:"20px"}}>
                        Most people who come on these platforms need more of a listening year rather than wanting to solve their problem. Sometimes we face problems in life that can not be solved. Having someone else hear your heart can offer a sense of relief and give them hope. Be kind to others. You dont know what they are going through. A problem small for you might be big for them. So we advice you to be kind and listen. After all, we are here to help each other out
                   </div>  

                   <div style={{marginBottom:"20px"}}>
                        <h5>Do not share any confidential information or real names for your own safety. We are not responsible if you share confidential data..</h5>
                   </div>

                    <div style={{marginBottom:"20px"}} className="w100 d-flex justify-content-center">
                    <Button
                    label="Understood"
                    onClick={()=>moveToNextScreen()}
                    />
                    </div>

                </div>
        </div>
    )
}