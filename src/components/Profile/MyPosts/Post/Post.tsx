import classes from './Post.module.css';
import {message} from "antd";

type PostPropsType = {
    message: string,
    likesCount: number
    addPost?:(postMessage: string) => void
};

export const Post = (props: PostPropsType) => {
    console.log(props)
    return (
        <div className={classes.item}>
            <img src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt='avatar'/>
            <div>
                Post 1
                <div>
                    <span>{props.message}</span>
                </div>
            </div>
        </div>
    )
};