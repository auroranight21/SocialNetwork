import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, AppStateType} from "./redux/state";





export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <App appState={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}