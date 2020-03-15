import React from 'react';
import '../styles/bot.css';

export default class Bot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //     seconds: 0,
            //     paths: [
            //         'M1045, 520L1173, 558L1184, 393Z',
            //         'M1036, 540L883, 540L883, 693Z',
            //     ]
        };
    }

    tick() {

        // let from = this.state.paths[0]
        // let to = this.state.paths[1]

        // this.setState(state => ({
        //     seconds: state.seconds + 1,
        //     paths: [to, from]
        // }));

    }

    componentDidMount() {
        // this.interval = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    path() {


        // return <svg
        //     xmlnsXlink="http://www.w3.org/2000/svg"
        //     xmlns="http://www.w3.org/2000/svg"
        //     version="1.1"
        //     x="0"
        //     y="0"
        //     width="1920"
        //     height="1090"
        //     viewBox="0 0 1920 1080"
        //     preserveAspectRatio="none">

        //     <path
        //         d={this.state.paths[0]}
        //         fill="lightblue"
        //         stroke="#eee9ea"
        //         strokeWidth="1.51">

        //         <animate
        //             attributeName="d"
        //             from={this.state.paths[0]}
        //             to={this.state.paths[1]}
        //             dur="3s"
        //             values={this.state.paths[0] + ';' + this.state.paths[1] + ';' + this.state.paths[0]}
        //             repeatCount={this.state.seconds} />
        //     </path>
        // </svg>

    }

    render() {
        return (
            <div className="bot"></div>
        );
    }
}