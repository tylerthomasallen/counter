import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return(
            <div>
                <h1>Count =</h1>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}

export default Counter;