import Button from "../common/components/Button";
import styles from "../../styles/components/Welcome.module.scss";

function Welcome(){
    return (
        <div className={styles["ventchat-welcome"]}>
            <div style={{position:"relative",width:"100%",height:"100%"}} className={styles["ventchat-leaf-responsive"]}>
        
                        <div className="d-none d-sm-block" style={{position:"absolute",bottom:"-100px",right:"-150px",zIndex:-1}}>
                            <img src="/images/leaf.jpg" width="500px" style={{transform:"rotate(-6deg)"}}/>
                        </div>
        
                        <div className="d-flex flex-column justify-content-around align-items-center">
                            
                            <div className={styles["sunrise"]}/>
        
                            <div className="w-100">
                                <div className={styles["welcome-text"]} style={{textAlign:"center"}}>
                                    <div style={{color:"#0CA524",marginBottom:"15px"}} className="heading3">Vent Out Or Listen</div>
                                    <div style={{marginBottom:"30px"}} className="heading5">to a random person anonymously</div>    
                                </div>
        
                                <div style={{marginBottom:"20px"}} className="d-flex flex-column align-items-center">
                                    <Button style={{width:"250px"}} label="Start Now"/>
                                    <div style={{marginTop:"10px"}} className="subtitle2">No sign in Required</div>
                                </div>
                            </div>
                        </div>
        
            </div>
        </div>
        );
}

export default Welcome;