import {rerenderEntireTree} from "../render";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}


export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    message: string
}


export type ProfilePageType = {
    postData: PostDataType[]
    dialogsData: DialogsDataType[]
}

export type MessageProfile = {
    messagesData: MessageDataType[]
};

export type AppStateType = {
    profilePage: ProfilePageType
    messagesProfile: MessageProfile
}


let state: AppStateType = {

    profilePage: {
        postData: [
            {id: 1, message: 'Hi, my friend!', likesCount: 11},
            {id: 2, message: 'My first post', likesCount: 12},
        ],
        dialogsData: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Vasile'},
            {id: 3, name: 'Michael'},
            {id: 4, name: 'Any'},
            {id: 5, name: 'Anna'}
        ]
    },
    messagesProfile: {
        messagesData: [
            {id: 1, message: 'Hi Alex'},
            {id: 2, message: 'Hi Vasile'},
            {id: 3, message: 'Hello dear Michael'},
            {id: 4, message: 'hi my sister Any'},
            {id: 5, message: 'Yo, how are you Anna'}
        ]
    }
};

export const addPost = (postMessage: string) => {
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 20
    }

    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}


export default state;