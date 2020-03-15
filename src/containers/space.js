import React from 'react';
import '../styles/space.css';

export default class Space extends React.Component {

    constructor(props) {
        super(props);
        this.actions = []
    }

    render() {
        return (
            <div className="space"> </div>
        );
    }
}