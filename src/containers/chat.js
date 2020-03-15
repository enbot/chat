import moment from 'moment';
import React from 'react';
import Message from '../models/message';
import '../styles/chat.css';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            convo: [
                { text: 'abc', date: moment() }
            ],
            message: ''
        };

        this.mesRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
    }

    handleChange = e => {
        this.setState({ message: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.state.message) {

            const text = this.state.message

            this.setState(
                { convo: [...this.state.convo, { text, date: '010101' }], message: '' },
                () => this.scrollToBottom()

            );

        }
    };

    render() {
        return (
            <div className="chat">

                <div className="messages" ref={this.mesRef}>
                    {this.state.convo.map(text => <div>
                        {text.text}
                    </div>)}
                </div>

                <div>
                    <form
                        onSubmit={e => {
                            this.onSubmit(e);
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Type a message"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <button type="submit"> Send </button>
                    </form>
                </div>

            </div>
        );
    }
}
