import React, {Component } from 'react';
import Button from './button';
import Counter from './counter';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.addCount = this.addCount.bind(this);
    }
    

    addCount = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return(
            <div>
                <Button addCount={this.addCount} />
                <Counter count={this.state.count} />
            </div>
        )
    }
}

export default Index;