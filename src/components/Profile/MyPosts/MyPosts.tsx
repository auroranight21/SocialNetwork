import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";
import React from "react";


type MyPostsProps = {
    posts: PostDataType[]
    addPost:(postMessage: string) => void
};


export const MyPosts = (props: MyPostsProps) => {

    let newPost = React.createRef();

    const addPostHandler = () => {

        // @ts-ignore
        let newText = newPost.current.value
        props.addPost(newText)
    }




    let postsElement =
        props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} key={el.id}/>)




    return (
        <div className={classes.postsBlock}>
            <h2>MyPosts</h2>
            <div>
                <div>
                    <textarea ref={newPost}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>{newPost}</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={classes.post}>
                {postsElement}
            </div>

        </div>
    )
};