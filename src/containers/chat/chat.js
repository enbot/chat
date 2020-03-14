import React from 'react';
import './chat.css';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            list: [1]
        };
    }

    tick() {

        this.setState(state => ({
            seconds: state.seconds + 1,
            list: state.list
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="chat">
                <div>
                    {this.state.list}
                </div>
                <div>
                    Seconds: {this.state.seconds}
                </div>
            </div>
        );
    }
}