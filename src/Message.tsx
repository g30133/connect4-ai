import * as React from 'react';
import './Message.css';

interface MessageProps {
    xTurn: boolean
    winner: string
}

class Message extends React.Component<MessageProps> {
    public render() {
        let message = ''
        if(this.props.xTurn === true) {
            message = 'Your Turn'
        } else {
            message = 'AI Turn'
        }

        if(this.props.winner === 'tie') {
            message = 'Tie Game'
        } else if(this.props.winner !== '') {
            message = this.props.winner + ' is the winner'
        }

        return (
            <div className='message'>{message}</div>
        )
    }
}

export default Message