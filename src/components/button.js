import React, { Component } from 'react';

class Button extends Component {

    render() {
        return(
            <button onClick={this.props.addCount}>Add Count!</button>
        )
    }
}

export default Button;