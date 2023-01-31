import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";
import React from "react";
import { KeyboardEvent} from 'react'


type MyPostsProps = {
    posts: PostDataType[]
    addPost: (postMessage: string) => void
};


export const MyPosts = (props: MyPostsProps) => {

    let newPost = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (newPost.current) {
            props.addPost(newPost.current.value)
            newPost.current.value =''
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter'){
            addPostHandler()
        }
    }


    let postsElement =
        props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} key={el.id}/>)


    return (
        <div className={classes.postsBlock}>
            <h2>MyPosts</h2>
            <div>
                <div>
                    <textarea ref={newPost} onKeyDown={onKeyDownHandler}/>
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