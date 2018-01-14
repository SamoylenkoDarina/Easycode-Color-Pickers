import React from 'react';
import TextContent from './textContent';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    increase() {
        let newNumber = this.state.number + 1;
        this.setState({
            number: newNumber
        })
    } 

    decrease() {
        let newNumber = this.state.number - 1;
        this.setState({
            number: newNumber
        })
    }
     
    render() {
        return (
            <div className="counter">
                <TextContent text={this.state.number} />
                <button onClick={this.increase.bind(this)}>Increase</button>
                <button onClick={this.decrease.bind(this)}>Decrease</button>
            </div>
        )
    }
}

export default Counter;