import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";


export type PostsPropsType = {
    posts: PostDataType[]
    addPost:(postMessage: string) => void
};


export const Profile = (props: PostsPropsType) => {

    return (
        <div className={classes.item}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
};
