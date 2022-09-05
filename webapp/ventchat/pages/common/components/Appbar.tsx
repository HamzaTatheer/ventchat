import styles from "../../../styles/components/Appbar.module.scss";
import { addClasses } from "../utils/helper";
import Button from "./Button";

export default function(){
    let path = "/";
    let isVentChat = (path=="/");
    let isTherapy = (path=="/therapy");

    
    return (
        <div className={addClasses(styles["main-navbar"],'d-flex','justify-content-between','align-items-center')} style={{height:"10vh",width:"100%"}}>
            <div className={addClasses(styles["nav-logo"])}>
                <span style={{color:"white"}}>Therapy</span><span style={{color:"white"}}> Channel</span>
            </div>
            <div className={styles["menu-items"]}>
                <Button onClick={()=>window.location.href="/"} headerBtn selected={isVentChat} label="Vent Chat"/>
                <Button onClick={()=>window.location.href="/therapy"} headerBtn selected={isTherapy} label="Therapy"/>
            </div>
            <div className={addClasses(styles["mobile-menu"])}>
                
                {/* <img width="30px" src={Menu}/> */}
            </div>
        </div>
        
    );
}