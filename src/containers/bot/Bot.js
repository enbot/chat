import React from 'react';
import './bot.css';

export default class Bot extends React.Component {

    constructor(props) {
        super(props);

        this.actions = []
    }

    render() {
        return (
            <div className="bot"> </div>
        );
    }
}