import React from "react";
import Button from "./subcomponents/Button";

export default function Guidelines(){
    return (
        <div className="ventchat-guideline d-flex justify-content-center align-items-center" style={{textAlign:"initial"}}>
            
                <div style={{width:"80%"}}>
                    <div className="heading3">Guidelines:</div>
                    <hr/>
                    <div style={{marginBottom:"10px"}} className="heading5">Venter:</div>
                    <div style={{marginBottom:"20px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum metus vitae mi convallis aliquam. Nulla consequat et magna a sodales. Integer scelerisque tellus et purus porttitor, rutrum bibendum magna tempus. Integer eget ullamcorper odio. Phasellus molestie est nec erat porta iaculis. Ut imperdiet blandit quam, sed imperdiet tellus aliquet eget. Maecenas dignissim sapien mi, at sagittis arcu rhoncus id. Quisque finibus nulla quis dapibus pretium.
                    </div>
                    <div style={{marginBottom:"10px"}} className="heading5">Listener:</div>
                    <div style={{marginBottom:"20px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum metus vitae mi convallis aliquam. Nulla consequat et magna a sodales. Integer scelerisque tellus et purus porttitor, rutrum bibendum magna tempus. Integer eget ullamcorper odio. Phasellus molestie est nec erat porta iaculis.
                    </div>  

                    <div style={{marginBottom:"20px"}} className="w100 d-flex justify-content-center">
                    <Button
                    label="Understood"
                    />
                    </div>

                </div>
        </div>
    )
}