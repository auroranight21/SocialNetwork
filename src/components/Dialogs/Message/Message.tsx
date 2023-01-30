import classes from "../Dialogs.module.css";


type MessageTypeProps = {
    message: string
}

export const Message = (props: MessageTypeProps) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}