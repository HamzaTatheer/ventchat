import styles from "../../../styles/components/Button.module.scss";


export default function Button(obj:any){

    let {headerBtn,label,onClick,selected,style} = obj;

    style = style ? style : {};

    let classes = ""

    if(headerBtn){
        classes += styles["header-btn"]

        if(selected===true)
        classes= styles["header-btn-selected"];
        else
        classes = styles["header-btn-unselected"];
        

        return (
            <div style={style} className={classes} onClick={onClick}>
                <span>{label}</span>
            </div>
        );
    }
    else
    {
        if(selected===true)
        classes += styles["custom-btn-selected"];
        else
        classes = styles["custom-btn-unselected"];
        

        return (
            <div style={style} className={classes} onClick={onClick}>
                <span>{label}</span>
            </div>
        );
    }

}
