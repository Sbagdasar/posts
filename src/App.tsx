import React, {ChangeEvent, useState} from 'react';
import {Counter} from "./components/Counter";
import {ClassCounter} from "./components/ClassCounter";

function App() {
    let [value, setValue] = useState('Input text')

    const inputOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className="App">

            <h2>{value}</h2>
            <input type="text" value={value} onChange={inputOnchangeHandler}/>
            <Counter/>
            <ClassCounter/>
        </div>
    );
}

export default App;
