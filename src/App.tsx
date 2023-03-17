import React from 'react';
import './styles/App.css'
import {Navbar} from "./features/navBar/Navbar";
import {AppRouters} from "./components/appRouters/AppRouters";

export type SortType = 'title' | 'body'

export function App() {

    return (

        <div className={'App'}>
            <Navbar/>
            <AppRouters/>
        </div>
    );
}

