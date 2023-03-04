import React, {useState} from 'react';

export const Counter = () => {
    let [counter, setCounter] = useState(0)

    const incrementHandler = () => {
        setCounter(prevState => prevState + 1)
    }
    const decrementHandler = () => {
        setCounter(prevState => prevState - 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>decrement</button>
        </div>
    );
};

