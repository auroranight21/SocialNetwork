import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppStateType} from "./redux/state";


type AppType = {
    appState:AppStateType
    addPost:(postMessage: string) => void// state ===
}

const App = (props: AppType) => {


    let DialogsComponent = () => <Dialogs dialogs={props.appState.profilePage.dialogsData} messages={props.appState.profilePage.postData} />
    let ProfileComponent = () => <Profile posts={props.appState.profilePage.postData} addPost={props.addPost}/>

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={DialogsComponent}/>
                    <Route path="/dialogs" render={DialogsComponent}/>
                    <Route path="/profile" render={ProfileComponent}/>
                    {/*<Route path="/news" component={News}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
