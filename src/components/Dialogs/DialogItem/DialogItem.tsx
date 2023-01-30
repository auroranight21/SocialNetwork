import {NavLink} from "react-router-dom";
import classes from "./DialogsItem.module.css";


type DialogItemTypeProps = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemTypeProps) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialogsItems + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
