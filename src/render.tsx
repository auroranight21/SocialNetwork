import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import {addPost} from "./redux/state";





export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App appState={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}