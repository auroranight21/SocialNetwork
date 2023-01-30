import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessageDataType, PostDataType} from "../../redux/state";

type DialogsPropsType = {
    messages: PostDataType[]
    dialogs: DialogsDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElement = props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messagesElement = props.messages.map(el => <Message message={el.message} key={el.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}

            </div>
        </div>
    )
}