import React from "react";

type CounterPropsType = {};
type CounterStateType = {
    count: number;
};

export class ClassCounter extends React.Component<CounterPropsType, CounterStateType> {
    constructor(props: CounterPropsType) {
        super(props);
        this.state = {
            count: 0,
        }
        this.incrementHandler = this.incrementHandler.bind(this)
        this.decrementHandler = this.decrementHandler.bind(this)
    }

    incrementHandler() {
        this.setState({count: this.state.count + 1})
    }

    decrementHandler() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementHandler}>increment</button>
                <button onClick={this.decrementHandler}>decrement</button>
            </div>
        );
    }
}