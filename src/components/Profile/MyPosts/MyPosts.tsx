import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";
import React from "react";


type MyPostsProps = {
    posts: PostDataType[]
    addPost: (postMessage: string) => void
};


export const MyPosts = (props: MyPostsProps) => {

    let newPost = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (newPost.current) {
            // let newText = newPost.current.value
            props.addPost(newPost.current.value)
        }
    }

    let postsElement =
        props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} key={el.id}/>)


    return (
        <div className={classes.postsBlock}>
            <h2>MyPosts</h2>
            <div>
                <div>
                    <textarea ref={newPost} />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={classes.post}>
                {postsElement}
            </div>

        </div>
    )
};